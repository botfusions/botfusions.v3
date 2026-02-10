-- Supabase Vector Search Function for Botfusions ChatBot
-- Run this SQL in Supabase Dashboard > SQL Editor (if not already created)
--
-- Prerequisites:
--   1. pgvector extension enabled: CREATE EXTENSION IF NOT EXISTS vector;
--   2. botfusions_sss table exists with 'embedding' column (vector(1536))

CREATE OR REPLACE FUNCTION match_documents(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    botfusions_sss.id,
    botfusions_sss.content,
    botfusions_sss.metadata,
    1 - (botfusions_sss.embedding <=> query_embedding) AS similarity
  FROM botfusions_sss
  WHERE 1 - (botfusions_sss.embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;
