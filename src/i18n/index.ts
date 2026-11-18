// src/i18n/index.ts
import { getYearsOfExperience, SITE_CONFIG } from "../config/site";
import { getEnglishContent, type SiteTranslations, type SupportedLocale } from "./en";
import { getHindiContent } from "./hi";

export function getTranslations(
    lang: SupportedLocale,
    ytSubs: string = SITE_CONFIG.defaultYoutubeSubscribers,
): SiteTranslations {
    const years = getYearsOfExperience();
    return lang === "hi"
        ? getHindiContent(years, ytSubs)
        : getEnglishContent(years, ytSubs);
}

export type { SiteTranslations, SupportedLocale };
