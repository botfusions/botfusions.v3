// Botfusions ChatBot - Netlify Serverless Function
// Replaces n8n webhook with direct Supabase RAG + OpenRouter LLM

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

// ─── System Prompt (adapted from n8n workflow) ───
const SYSTEM_PROMPT = `# SYSTEM ROLE DEFINITION
You are "Bot", the official AI assistant of Botfusions company.

## STRICT ANSWERING RULES
- You can ONLY answer questions using the KNOWLEDGE BASE CONTEXT provided below and the BOTFUSIONS CORPORATE INFORMATION listed here.
- If the answer is NOT found in the knowledge base context or the corporate information below, you MUST respond with "Bilmiyorum" (Turkish) or "I don't know" (English). Nothing else.
- Do NOT use your general knowledge. Do NOT answer math questions, geography questions, trivia, or anything outside Botfusions scope.
- Examples of questions you must answer "Bilmiyorum": "2+2 kac?", "Turkiye'nin baskenti neresi?", "Hava nasil?", "En iyi programlama dili hangisi?"
- You are NOT a general assistant. You are ONLY a Botfusions information bot.

## RESPONSE FORMAT
- Keep answers SHORT and CONCISE (max 2-3 sentences)
- Respond in the SAME LANGUAGE as the user's message
- Be friendly and professional

## GREETING
If the user says hello/merhaba/selam, respond with a short greeting and ask how you can help about Botfusions.

## PRICING RULE
If the user asks about pricing, cost, fees, fiyat, ucret, maliyet, or any price-related question, do NOT give a number. Instead respond ONLY with contact info:
- TR: "Fiyat bilgisi icin bize ulasin: +90 850 302 74 60 veya info@botfusions.com"
- EN: "For pricing info, contact us: +90 850 302 74 60 or info@botfusions.com"

## BOTFUSIONS CORPORATE INFORMATION

**Company:** Botfusions
**Mission:** Automate business processes with no-code technologies
**Core Technology:** n8n workflow automation platform

**Services:**
- GEO (Generative Engine Optimization)
- n8n workflow development
- SEO
- API integrations (REST/GraphQL/Webhook)
- Custom automation solutions
- Integration consulting for existing systems

**Industries:** E-commerce, Finance, Healthcare, Education

**Contact:**
- Email: info@botfusions.com
- Website: https://botfusions.com
- Phone: +90 850 302 74 60

## KNOWLEDGE BASE CONTEXT
{context}`;

// ─── Generate embedding via OpenAI ───
async function getEmbedding(text) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;

  try {
    const res = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'text-embedding-ada-002',
        input: text.substring(0, 8000)
      })
    });

    if (!res.ok) {
      console.error('OpenAI embedding error:', res.status);
      return null;
    }

    const data = await res.json();
    return data.data?.[0]?.embedding || null;
  } catch (err) {
    console.error('Embedding error:', err.message);
    return null;
  }
}

// ─── Search Supabase Vector Store ───
async function searchKnowledge(embedding) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key || !embedding) return '';

  try {
    const res = await fetch(`${url}/rest/v1/rpc/match_documents`, {
      method: 'POST',
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        query_embedding: embedding,
        match_threshold: 0.7,
        match_count: 5
      })
    });

    if (!res.ok) {
      console.error('Supabase search error:', res.status, await res.text());
      return '';
    }

    const results = await res.json();
    if (!results || results.length === 0) return '';

    return results
      .map(r => r.content || r.text || '')
      .filter(Boolean)
      .join('\n\n');
  } catch (err) {
    console.error('Knowledge search error:', err.message);
    return '';
  }
}

// ─── Call OpenRouter LLM (Claude Haiku 4.5) ───
async function generateResponse(message, context, language) {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) {
    return language === 'tr'
      ? 'Sistem yapilandirmasi eksik. Lutfen info@botfusions.com adresinden bize ulasin.'
      : 'System configuration missing. Please contact info@botfusions.com.';
  }

  const systemPrompt = SYSTEM_PROMPT.replace(
    '{context}',
    context || 'No additional context available from knowledge base.'
  );

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://botfusionsl.com',
        'X-Title': 'Botfusions ChatBot'
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || 'anthropic/claude-haiku-4.5',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.7
      })
    });

    if (!res.ok) {
      console.error('OpenRouter error:', res.status, await res.text());
      throw new Error('LLM request failed');
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content ||
      (language === 'tr' ? 'Yanit olusturulamadi.' : 'Could not generate a response.');
  } catch (err) {
    console.error('LLM error:', err.message);
    return language === 'tr'
      ? 'Bir hata olustu. Lutfen tekrar deneyin.'
      : 'An error occurred. Please try again.';
  }
}

// ─── Save Chat History to Supabase (n8n_chat_histories_botfusion) ───
async function saveChatHistory(sessionId, userMessage, botResponse) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return;

  try {
    const rows = [
      {
        session_id: sessionId,
        message: { type: 'human', data: { content: userMessage } }
      },
      {
        session_id: sessionId,
        message: { type: 'ai', data: { content: botResponse } }
      }
    ];

    const res = await fetch(`${url}/rest/v1/n8n_chat_histories_botfusion`, {
      method: 'POST',
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(rows)
    });

    if (!res.ok) {
      console.error('Chat history save error:', res.status, await res.text());
    }
  } catch (err) {
    console.error('Chat history error:', err.message);
  }
}

// ─── Main Handler (Netlify Functions v2) ───
export default async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('', { status: 200, headers: CORS_HEADERS });
  }

  // Only POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: CORS_HEADERS }
    );
  }

  try {
    const body = await req.json();
    const message = (body.message || '').trim();
    const language = body.language || 'en';
    const sessionId = body.sessionId || `web-${Date.now()}`;

    // Validation
    if (!message) {
      return new Response(
        JSON.stringify({ response: language === 'tr' ? 'Bos mesaj.' : 'Empty message.' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    if (message.length > 1000) {
      return new Response(
        JSON.stringify({ response: language === 'tr' ? 'Mesaj cok uzun (max 1000 karakter).' : 'Message too long (max 1000 chars).' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    // 1. Generate embedding for semantic search
    const embedding = await getEmbedding(message);

    // 2. Search knowledge base (Supabase vector store)
    const context = await searchKnowledge(embedding);

    // 3. Generate AI response
    const response = await generateResponse(message, context, language);

    // 4. Save chat history (non-blocking)
    saveChatHistory(sessionId, message, response).catch(() => {});

    return new Response(
      JSON.stringify({ response }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    console.error('Chat function error:', err);
    return new Response(
      JSON.stringify({
        response: 'Bir hata olustu. Lutfen daha sonra tekrar deneyin veya info@botfusions.com adresinden bize ulasin.'
      }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
};

// Custom path: /api/chat instead of /.netlify/functions/chat
export const config = {
  path: "/api/chat"
};
