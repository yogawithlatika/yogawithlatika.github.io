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
    youtubeSubscribers: "21K+",
    googleRating: "5.0",
    links: {
        whatsapp:
            "https://api.whatsapp.com/send?phone=919663201627&text=Hi%20Latika%2C%20I%20am%20interested%20in%20starting%20my%201-on-1%20Yoga%20Therapy%20journey%20with%20you%20%F0%9F%99%8F",
        whatsappHindi:
            "https://api.whatsapp.com/send?phone=919663201627&text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B2%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%86%E0%A4%AA%E0%A4%95%E0%A5%87%201-on-1%20%E0%A4%AF%E0%A5%8B%E0%A4%97%20%E0%A4%A5%E0%A5%87%E0%A4%B0%E0%A5%87%E0%A4%AA%E0%A5%80%20%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%B8%E0%A5%87%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%87%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%2F%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A5%82%E0%A4%81%20%F0%9F%99%8F",
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
        tagEn: "Prenatal Yoga Therapy",
        tagHi: "प्रीनेटल योग थेरेपी",
        textEn: "I have been doing Prenatal yoga classes with Latika for weeks now and would highly recommend her classes. She’s extremely skilled, patient, easy to follow and curates the whole session around individual needs.",
        textHi: "मैं कई हफ्तों से लतिका के साथ प्रीनेटल योग क्लासेस कर रही हूँ और उनकी क्लासेस की पुरज़ोर सिफ़ारिश करती हूँ। वे बेहद कुशल, धैर्यवान और समझाने में सरल हैं, तथा पूरे सत्र को व्यक्तिगत ज़रूरतों के अनुसार तैयार करती हैं।",
    },
    {
        name: "Shamily Naidu",
        tagEn: "Back Pain & Weight Management",
        tagHi: "पीठ दर्द और वज़न नियंत्रण",
        textEn: "Excellent guide. Helped me overcome back pain and weight reduction. Very much dedicated and focused on the client's goals. Thank you Latika :)",
        textHi: "बेहतरीन मार्गदर्शक। मुझे पीठ दर्द से उबरने और वज़न कम करने में बहुत मदद मिली। वे अपने क्लाइंट के लक्ष्यों के प्रति बेहद समर्पित और केंद्रित हैं। धन्यवाद लतिका :)",
    },
    {
        name: "Shashank Awasthi",
        tagEn: "Personalized Therapy & Stress Relief",
        tagHi: "व्यक्तिगत थेरेपी और तनाव मुक्ति",
        textEn: "She has highly personalized the practice based on the health conditions that I have. The practice has helped me manage stress as well. She has been very accommodative with the session scheduling, which works well for my busy schedule.",
        textHi: "उन्होंने मेरी स्वास्थ्य स्थितियों के आधार पर अभ्यास को पूरी तरह से व्यक्तिगत बनाया है। इस अभ्यास से मुझे तनाव को नियंत्रित करने में भी बहुत मदद मिली है। वे समय-सारणी को लेकर बहुत सहयोगी रही हैं, जो मेरी व्यस्त दिनचर्या के लिए एकदम उपयुक्त है।",
    },
    {
        name: "Poonguzhali Deep",
        tagEn: "Neck Pain & Stress Recovery",
        tagHi: "गर्दन दर्द और तनाव से राहत",
        textEn: "Latika has immense knowledge. She spends a lot of time understanding individual needs. I was facing neck pain and stress, and within 2 months I am already seeing drastic improvements along with weight reduction.",
        textHi: "लतिका को योग का गहरा ज्ञान है। वे हर व्यक्ति की ज़रूरतों को समझने में पर्याप्त समय देती हैं। मुझे गर्दन में दर्द और तनाव की समस्या थी, और मात्र 2 महीनों में मुझे वज़न घटने के साथ-साथ स्वास्थ्य में जबरदस्त सुधार दिख रहा है।",
    },
    {
        name: "Swapna P",
        tagEn: "Holistic Daily Practice",
        tagHi: "समग्र दैनिक अभ्यास",
        textEn: "Latika's yoga classes are exceptional. She brings both expertise and passion to create a welcoming environment with clear instructions and a calming presence. She motivates me to practice regularly.",
        textHi: "लतिका की योग क्लासेस अद्भुत हैं। वे अपने गहरे अनुभव और समर्पण के साथ एक शांत व सकारात्मक वातावरण बनाती हैं। उनके स्पष्ट निर्देश और शांत स्वभाव मुझे नियमित रूप से अभ्यास करने के लिए प्रेरित करते हैं।",
    },
    {
        name: "Akansha Roy",
        tagEn: "Targeted Therapeutic Progress",
        tagHi: "लक्षित उपचारात्मक प्रगति",
        textEn: "Very experienced and knowledgeable. Understands your concerns and targets it with gentle steps. I can see so much progress in just 3-4 weeks of classes. Totally recommend for anyone and everyone.",
        textHi: "बेहद अनुभवी और जानकार। वे आपकी समस्याओं को गहराई से समझती हैं और सहज चरणों के साथ उन पर काम करती हैं। सिर्फ़ 3-4 हफ़्तों की क्लासेस में ही मुझे बहुत सुधार महसूस हो रहा है। सभी के लिए पूर्णतः अनुशंसित।",
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
        categoryEn: "Sleep & Calm",
        categoryHi: "नींद और शांति",
        titleEn: "Gentle Yoga to Reduce Stress & Improve Sleep",
        titleHi: "तनाव कम करने और गहरी नींद के लिए शांत योग अभ्यास",
    },
    {
        id: "nwK-a0FJbEU",
        duration: "12 min",
        categoryEn: "Prenatal Care",
        categoryHi: "गर्भावस्था देखभाल",
        titleEn: "Prenatal Guided Meditation for Expecting Mothers",
        titleHi: "गर्भवती महिलाओं के लिए निर्देशित ध्यान (Prenatal Meditation)",
    },
    {
        id: "ZuuvIa85QGI",
        duration: "14 min",
        categoryEn: "Joint Mobility",
        categoryHi: "जोड़ों का स्वास्थ्य",
        titleEn: "Therapeutic Yoga for Knee Stiffness & Pain",
        titleHi: "घुटनों की जकड़न और दर्द के लिए उपचारात्मक योग",
    },
    {
        id: "dB66ygiGTbA",
        duration: "10 min",
        categoryEn: "Mindfulness",
        categoryHi: "ध्यान और मंत्र",
        titleEn: "10-Minute Guided Chanting Meditation for Inner Peace",
        titleHi: "आंतरिक शांति के लिए 10 मिनट का निर्देशित मंत्र ध्यान",
    },
];
