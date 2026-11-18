// src/config/site.ts

export const EXPERIENCE_START_YEAR = 2014;

/**
 * Dynamically calculates Latika's years of experience from 2014 onwards.
 * Also hydrated on the client so static builds stay accurate across calendar years.
 */
export function getYearsOfExperience(currentYear = new Date().getFullYear()): number {
    return Math.max(12, currentYear - EXPERIENCE_START_YEAR);
}

export const SITE_CONFIG = {
    name: "YogaWithLatika",
    therapistName: "Latika Bissa",
    siteUrl: "https://yogawithlatika.com",
    experienceStartYear: EXPERIENCE_START_YEAR,
    defaultYoutubeSubscribers: "21K+",
    googleRating: "5.0",
    links: {
        whatsapp:
            "https://api.whatsapp.com/send?phone=919663201627&text=Hi%20Latika%2C%20I%20want%20to%20enquire%20about%201-on-1%20Online%20Yoga%20Classes%20%F0%9F%99%8F",
        whatsappHindi:
            "https://api.whatsapp.com/send?phone=919663201627&text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B2%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%201-on-1%20%E0%A4%91%E0%A4%A8%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%A8%20%E0%A4%AF%E0%A5%8B%E0%A4%97%20%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%B8%E0%A5%87%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%2F%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%82%E0%A4%81%20%F0%9F%99%8F",
        googleReviews:
            "https://search.google.com/local/reviews?placeid=ChIJSzE0eJ8TrjsR5ztFN99WUic",
        tulaaWeb: "https://tulaa.app",
        tulaaPlayStore:
            "https://play.google.com/store/apps/details?id=life.tulaa",
        tulaaAppStore:
            "https://apps.apple.com/in/app/tulaa/id6748626498",
        youtube: "https://www.youtube.com/@yogawithlatika",
        instagram: "https://www.instagram.com/yogawithlatika",
        linkedin: "https://www.linkedin.com/in/latika-bissa-0a3084210/",
    },
} as const;

let cachedSubscriberCount: string | null = null;

/**
 * Fetches the current YouTube subscriber count from @yogawithlatika at build time.
 * Parses YouTube's initial metadata and falls back to "21K+" if offline or blocked.
 */
export async function getYoutubeSubscriberCount(): Promise<string> {
    if (cachedSubscriberCount) {
        return cachedSubscriberCount;
    }

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4500);

        const response = await fetch(SITE_CONFIG.links.youtube, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                "Accept-Language": "en-US,en;q=0.9",
            },
            signal: controller.signal,
        });

        clearTimeout(timeout);

        if (response.ok) {
            const html = await response.text();
            // Look for patterns like "21.1K subscribers" or "21K subscribers" in ytInitialData
            const match =
                html.match(/"subscriberCountText":\s*\{\s*"simpleText":\s*"([^"]+)"/) ||
                html.match(/"subscriberCountText":\s*"([^"]+)"/) ||
                html.match(/([0-9]+(?:\.[0-9]+)?[KM]?)\s+subscribers/i);

            if (match && match[1]) {
                const rawCount = match[1]
                    .replace(/subscribers/i, "")
                    .trim();
                if (rawCount) {
                    cachedSubscriberCount = rawCount.endsWith("+")
                        ? rawCount
                        : `${rawCount}+`;
                    return cachedSubscriberCount;
                }
            }
        }
    } catch {
        // Offline or sandboxed build environment: use fallback silently
    }

    cachedSubscriberCount = SITE_CONFIG.defaultYoutubeSubscribers;
    return cachedSubscriberCount;
}

export interface ReviewItem {
    name: string;
    tagEn: string;
    tagHi: string;
    textEn: string;
    textHi: string;
}

export const GOOGLE_REVIEWS: ReviewItem[] = [
    {
        name: "Vrinda Agrawal",
        tagEn: "Pregnancy Yoga",
        tagHi: "प्रेग्नेंसी योग",
        textEn: "I have been doing Prenatal yoga classes with Latika for weeks now and would highly recommend her classes. She’s extremely skilled, patient, easy to follow and curates the whole session around individual needs.",
        textHi: "मैं कई हफ्तों से लतिका के साथ प्रीनेटल योग क्लासेस कर रही हूँ। वे बेहद कुशल और धैर्यवान हैं, तथा पूरे सत्र को आपकी व्यक्तिगत ज़रूरतों के अनुसार बहुत सरलता से कराती हैं।",
    },
    {
        name: "Shamily Naidu",
        tagEn: "Back Pain & Weight Loss",
        tagHi: "पीठ दर्द और वज़न कम करना",
        textEn: "Excellent guide. Helped me overcome back pain and weight reduction. Very much dedicated and focused on the client's goals. Thank you Latika :)",
        textHi: "बेहतरीन गाइड। मुझे पीठ दर्द से उबरने और वज़न कम करने में बहुत मदद मिली। वे हर स्टूडेंट के स्वास्थ्य लक्ष्यों पर पूरा ध्यान देती हैं। धन्यवाद लतिका :)",
    },
    {
        name: "Shashank Awasthi",
        tagEn: "Custom Plan & Stress Relief",
        tagHi: "व्यक्तिगत योग व तनाव मुक्ति",
        textEn: "She has highly personalized the practice based on the health conditions that I have. The practice has helped me manage stress as well. She has been very accommodative with the session scheduling, which works well for my busy schedule.",
        textHi: "उन्होंने मेरी स्वास्थ्य स्थिति के अनुसार अभ्यास को पूरी तरह पर्सनलाइज़ किया है। इससे मुझे तनाव कम करने में भी बहुत मदद मिली और क्लास का समय भी मेरी व्यस्त दिनचर्या के अनुकूल रहा।",
    },
    {
        name: "Poonguzhali Deep",
        tagEn: "Neck Pain & Stress Relief",
        tagHi: "गर्दन दर्द और तनाव से राहत",
        textEn: "Latika has immense knowledge. She spends a lot of time understanding individual needs. I was facing neck pain and stress, and within 2 months I am already seeing drastic improvements along with weight reduction.",
        textHi: "लतिका को योग का गहरा ज्ञान है। मुझे गर्दन में दर्द और तनाव की समस्या थी, और मात्र 2 महीनों में मुझे वज़न घटने के साथ-साथ स्वास्थ्य में बहुत बड़ा सुधार दिख रहा है।",
    },
    {
        name: "Swapna P",
        tagEn: "Daily Fitness & Calm",
        tagHi: "नियमित स्वास्थ्य व शांति",
        textEn: "Latika's yoga classes are exceptional. She brings both expertise and passion to create a welcoming environment with clear instructions and a calming presence. She motivates me to practice regularly.",
        textHi: "लतिका की योग क्लासेस बहुत ही शानदार हैं। उनके स्पष्ट निर्देश और शांत स्वभाव मुझे रोज़ाना अभ्यास करने के लिए प्रेरित करते हैं।",
    },
    {
        name: "Akansha Roy",
        tagEn: "Visible Results in 3 Weeks",
        tagHi: "3 हफ्तों में स्पष्ट सुधार",
        textEn: "Very experienced and knowledgeable. Understands your concerns and targets it with gentle steps. I can see so much progress in just 3-4 weeks of classes. Totally recommend for anyone and everyone.",
        textHi: "बेहद अनुभवी और समझदार। वे आपकी समस्या को समझकर सहज अभ्यास कराती हैं। सिर्फ़ 3-4 हफ़्तों की क्लासेस में ही मुझे बहुत सुधार महसूस हो रहा है।",
    },
];

export interface VideoItem {
    id: string;
    duration: string;
    categoryEn: string;
    categoryHi: string;
    titleEn: string;
    titleHi: string;
}

export const YOUTUBE_VIDEOS: VideoItem[] = [
    {
        id: "LAYgeIKm8m0",
        duration: "18 min",
        categoryEn: "Pain Relief",
        categoryHi: "दर्द से राहत",
        titleEn: "Yoga for Back, Neck & Shoulder Pain Relief",
        titleHi: "पीठ, गर्दन और कंधे के दर्द से राहत के लिए योग",
    },
    {
        id: "ZcwZFpBXma0",
        duration: "15 min",
        categoryEn: "Better Sleep",
        categoryHi: "गहरी नींद",
        titleEn: "Gentle Yoga to Reduce Stress & Sleep Better",
        titleHi: "तनाव कम करने और अच्छी नींद के लिए शांत योग",
    },
    {
        id: "nwK-a0FJbEU",
        duration: "12 min",
        categoryEn: "Pregnancy Care",
        categoryHi: "गर्भावस्था योग",
        titleEn: "Prenatal Guided Meditation for Expecting Moms",
        titleHi: "गर्भवती महिलाओं के लिए शांत ध्यान (Prenatal Meditation)",
    },
    {
        id: "ZuuvIa85QGI",
        duration: "14 min",
        categoryEn: "Knee Pain",
        categoryHi: "घुटनों का दर्द",
        titleEn: "Easy Yoga for Knee Stiffness & Joint Pain",
        titleHi: "घुटनों की जकड़न और दर्द के लिए सरल योग",
    },
    {
        id: "dB66ygiGTbA",
        duration: "10 min",
        categoryEn: "Daily Calm",
        categoryHi: "मानसिक शांति",
        titleEn: "10-Minute Chanting Meditation for Instant Calm",
        titleHi: "तुरंत मानसिक शांति के लिए 10 मिनट का मंत्र ध्यान",
    },
];
