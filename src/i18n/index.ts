// src/i18n/index.ts
import { getEnglishContent, type SiteTranslations } from "./en";
import { getHindiContent } from "./hi";

export type SupportedLocale = "en" | "hi";

export function getTranslations(lang: SupportedLocale): SiteTranslations {
    return lang === "hi" ? getHindiContent() : getEnglishContent();
}

export type { SiteTranslations };
