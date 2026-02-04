export interface GalaxyParameters {
  count: number;
  size: number;
  radius: number;
  branches: number;
  spin: number;
  randomness: number;
  randomnessPower: number;
  insideColor: string;
  outsideColor: string;
}

export const DEFAULT_PARAMETERS: GalaxyParameters = {
  count: 50000,
  size: 0.015,
  radius: 6,
  branches: 5,
  spin: 1,
  randomness: 0.2,
  randomnessPower: 3,
  insideColor: '#ff6030',
  outsideColor: '#1b3984',
};

export type Language = 'en' | 'tr';

export const TRANSLATIONS = {
  en: {
    tagline: "Discoverable across AI & search.",
    subTagline: "Anywhere in the galaxy.",
    controls: {
      title: "Galaxy Controls",
      reset: "Reset Parameters",
      starsCount: "Stars Count",
      starSize: "Star Size",
      galaxyRadius: "Galaxy Radius",
      spiralArms: "Spiral Arms",
      spiralIntensity: "Spiral Intensity",
      randomness: "Randomness",
      randomnessPower: "Randomness Power",
      coreColor: "CORE COLOR",
      edgeColor: "EDGE COLOR",
    },
    toolbar: {
      resetView: "Reset View",
      screenshot: "Take Screenshot",
      fullscreen: "Toggle Fullscreen",
      openControls: "Open Controls"
    }
  },
  tr: {
    tagline: "AI ve Google sizi bulabilir",
    subTagline: "Galaxy'nin neresinde olursanız olun",
    controls: {
      title: "Galaksi Kontrolleri",
      reset: "Ayarları Sıfırla",
      starsCount: "Yıldız Sayısı",
      starSize: "Yıldız Boyutu",
      galaxyRadius: "Galaksi Yarıçapı",
      spiralArms: "Spiral Kolları",
      spiralIntensity: "Dönüş Şiddeti",
      randomness: "Dağılım",
      randomnessPower: "Dağılım Gücü",
      coreColor: "ÇEKİRDEK RENGİ",
      edgeColor: "DIŞ RENK",
    },
    toolbar: {
      resetView: "Görünümü Sıfırla",
      screenshot: "Ekran Görüntüsü Al",
      fullscreen: "Tam Ekran Yap",
      openControls: "Ayarları Aç"
    }
  }
};
