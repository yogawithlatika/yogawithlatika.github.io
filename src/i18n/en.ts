// src/i18n/en.ts
import { getYearsOfExperience, SITE_CONFIG } from "../config/site";

export type SupportedLocale = "en" | "hi";

export function getEnglishContent(
    years = getYearsOfExperience(),
    ytSubs: string = SITE_CONFIG.defaultYoutubeSubscribers,
) {
    return {
        lang: "en" as SupportedLocale,
        locale: "en_IN" as "en_IN" | "hi_IN",
        skipToContent: "Skip to main content",
        meta: {
            title: `YogaWithLatika | 1-on-1 Online Yoga Classes for Back Pain, PCOS & Pregnancy`,
            description: `Live pain-free and calm with Latika Bissa (M.Sc Yoga Therapy, Gold Medalist, ${years}+ yrs experience since 2014). 5★ Google-rated 1-on-1 online yoga classes for Back & Neck Pain, PCOS, Thyroid, Pregnancy & Stress, plus the free Tulaa Wellness App.`,
            keywords:
                "Online Yoga Classes, 1-on-1 Yoga Therapy, Latika Bissa, YogaWithLatika, Prenatal Yoga Online, PCOS Yoga Therapy, Back Pain Relief Yoga, Neck Pain Yoga, Thyroid Yoga, Personal Yoga Trainer India, Tulaa Yoga App",
            imageAlt:
                "Latika Bissa - Certified Yoga Therapist (M.Sc Gold Medalist) at YogaWithLatika",
        },
        nav: {
            brandSub: "Yoga Therapy & Wellness",
            classes: "1-on-1 Classes",
            reviews: "Reviews (5★)",
            tulaa: "Tulaa App",
            youtube: `YouTube (${ytSubs})`,
            bookCta: "Book 1-on-1 Class",
            langSwitchLabel: "हिन्दी में देखें",
            langCurrent: "EN",
            langAlt: "हिन्दी",
        },
        hero: {
            eyebrow: `Personal Yoga Therapy • Helping Since 2014`,
            greeting: "Live pain-free, calm & healthy with",
            name: "YogaWithLatika",
            credentials: [
                {
                    value: `${years}+ Yrs`,
                    label: "Experience (Since 2014)",
                    isExperience: true,
                },
                {
                    value: "Gold Medalist",
                    label: "M.Sc Yoga Therapy",
                    isExperience: false,
                },
                {
                    value: "5.0 ★",
                    label: "Rated on Google",
                    isExperience: false,
                },
                {
                    value: ytSubs,
                    label: "YouTube Subscribers",
                    isExperience: false,
                },
            ],
            subtitle:
                "Personal 1-on-1 online yoga classes tailored to your body to relieve back pain, manage PCOS & thyroid, support safe pregnancy, and calm daily stress.",
            primaryCta: "Book Your 1-on-1 Class",
            secondaryCta: "Get Free Yoga App",
            youtubeCta: "Watch Free Videos",
            portraitCaption: "M.Sc & B.Sc Yoga Therapy • Gold Medalist",
            portraitStatus: "Open for new 1-on-1 online students",
            pillarsTitle: "3 Simple Ways to Start Your Wellness Journey",
            pillars: [
                {
                    step: "01 • Best for Fast Results",
                    title: "1-on-1 Online Yoga Classes",
                    desc: "Live, personal sessions designed around your exact health needs, pain points, and daily routine.",
                    href: "#online-classes",
                    cta: "See 1-on-1 Classes →",
                },
                {
                    step: "02 • Free Daily Routine",
                    title: "Tulaa Free Yoga App",
                    desc: "100% private, free yoga & wellness app with period, mood, water & fasting trackers. No login needed.",
                    href: "#tulaa",
                    cta: "Explore Tulaa App →",
                },
                {
                    step: `03 • ${ytSubs} Community`,
                    title: "Free YouTube Channel",
                    desc: "Practice anytime at home with easy, guided videos for pain relief, sleep, and relaxation.",
                    href: "#youtube",
                    cta: "Watch Free Videos →",
                },
            ],
        },
        onlineClasses: {
            badge: "01 • Most Impactful",
            title: "1-on-1 Personal Online Yoga Classes",
            subtitle: `With ${years}+ years of experience since 2014, every class is 100% customized to your body, health goals, and comfort level.`,
            languagesBadge: "Classes in English, Hindi & Marathi",
            specialtiesTitle: "What We Help You Heal",
            specialties: [
                {
                    icon: "spine",
                    title: "Back, Neck & Knee Pain",
                    desc: "Relieve daily stiffness, slip disc, sciatica, and desk-job pain with gentle, safe movements.",
                },
                {
                    icon: "lotus",
                    title: "PCOS, Thyroid & Weight Loss",
                    desc: "Regularize periods, balance hormones, and lose weight naturally without harsh workouts.",
                },
                {
                    icon: "heart",
                    title: "Pregnancy (Prenatal & Postnatal)",
                    desc: "Safe yoga for every trimester to stay active, ease body aches, and prepare for a smooth delivery.",
                },
                {
                    icon: "breath",
                    title: "Stress, Anxiety & Better Sleep",
                    desc: "Calm an overthinking mind, lower stress, and sleep deeply with easy breathing practices.",
                },
            ],
            processTitle: "How 1-on-1 Classes Work",
            processSteps: [
                {
                    num: "1",
                    title: "Share Your Health Goals",
                    desc: "Tell us about your pain, health conditions, and preferred class timings on WhatsApp.",
                },
                {
                    num: "2",
                    title: "Get Your Custom Plan",
                    desc: "Latika designs a safe, step-by-step yoga and breathing routine made just for your body.",
                },
                {
                    num: "3",
                    title: "Practice Live 1-on-1",
                    desc: "Get full personal attention, posture guidance, and flexible timings that fit your busy day.",
                },
            ],
            ctaPrimary: "Book 1-on-1 Class on WhatsApp",
            ctaNote: "Flexible timings • 100% personal attention",
            reviewsHeader: {
                badge: "5.0 ★ Rating on Google",
                title: "Real Results from 1-on-1 Students",
                subtitle:
                    "Read how personal yoga therapy helped students overcome pain, stress, and health challenges.",
                verifiedLabel: "Google Review",
                readAllCta: "Read All 5★ Reviews on Google",
            },
        },
        tulaa: {
            badge: "02 • Free Daily Wellness App",
            title: "Find Daily Balance with Tulaa",
            lead: "An all-in-one wellness companion combining guided yoga, mindfulness, and private wellness trackers.",
            sublead: "No login, No ads, 100% private.",
            langAvailability: "Available in English & हिन्दी (Hindi)",
            highlights: [
                "No Login Needed",
                "100% Private on Phone",
                "Works Offline",
                "30+ Calm Themes",
                "100% Free (No Subscriptions)",
            ],
            categories: [
                {
                    id: "yoga",
                    tag: "Daily Movement",
                    title: "Guided Yoga & Movement",
                    items: [
                        {
                            title: "Expert-Led Routines",
                            desc: `Curated by Latika (${years}+ years yoga therapy experience) for all skill levels.`,
                            hasExp: true,
                        },
                        {
                            title: "Morning & Evening Sequences",
                            desc: "Energizing morning flows and calming evening stretches for restful sleep.",
                        },
                        {
                            title: "Download Once, Practice Offline",
                            desc: "Save your favorite routines to your phone and practice anytime without network access.",
                        },
                        {
                            title: "Desk Worker Relief",
                            desc: "Quick stretches to soothe neck, shoulder, and lower back stiffness.",
                        },
                    ],
                },
                {
                    id: "trackers",
                    tag: "Health Trackers",
                    title: "Private Health & Habit Trackers",
                    items: [
                        {
                            title: "Period & Cycle Diary",
                            desc: "Keep track of your monthly cycle, flow, and symptoms stored strictly on your device.",
                        },
                        {
                            title: "Fasting Interval Timer",
                            desc: "Clean, simple windows to support intermittent fasting routines.",
                        },
                        {
                            title: "Daily Hydration Tracker",
                            desc: "Log water intake with gentle, non-spammy reminders.",
                        },
                        {
                            title: "Mood & Gratitude Journal",
                            desc: "Private reflections to notice emotional and energy patterns over time.",
                        },
                        {
                            title: "Habit Builder",
                            desc: "Maintain healthy lifestyle streaks without notification overload.",
                        },
                    ],
                },
                {
                    id: "pranayama",
                    tag: "Calm & Breath",
                    title: "Mindful Pranayama & Relaxation",
                    items: [
                        {
                            title: "Breathwork",
                            desc: "Simple pranayama techniques to reset your nervous system and steady stress levels.",
                        },
                        {
                            title: "Guided Stillness",
                            desc: "Calming meditations and traditional chants for quiet focus.",
                        },
                    ],
                },
                {
                    id: "privacy",
                    tag: "100% Private",
                    title: "Built for Privacy & Focus",
                    items: [
                        {
                            title: "No Account Needed",
                            desc: "Start immediately without sharing your email or phone number.",
                        },
                        {
                            title: "100% On-Device Data",
                            desc: "Your logs, health notes, and habits stay strictly on your phone.",
                        },
                        {
                            title: "30+ Calming Visual Themes",
                            desc: "Personalize your space with serene backgrounds and clean typography.",
                        },
                    ],
                },
            ],
            ctaHeadline:
                "Download Tulaa today to build a peaceful, organized daily routine.",
            playStoreSmall: "GET IT ON",
            playStoreLarge: "Google Play",
            appStoreSmall: "DOWNLOAD ON THE",
            appStoreLarge: "App Store",
            visitWebsite: "Visit tulaa.app",
            disclaimer:
                "Disclaimer: Tulaa offers general health, movement, and wellness guidance. It is not intended to diagnose, treat, or replace professional medical care.",
        },
        youtube: {
            badge: "03 • Free Guided Videos",
            subscribersBadge: `${ytSubs} Subscribers on YouTube`,
            title: "Practice Free with Us on YouTube",
            subtitle: `Join ${ytSubs} subscribers practicing simple, effective yoga at home for back pain, pregnancy, knee stiffness, and deep sleep.`,
            watchLabel: "Watch Video",
            channelCta: "Subscribe on YouTube (@yogawithlatika)",
            moreCardTitle: "Explore 100+ Free Yoga Videos",
            moreCardDesc:
                "Browse full playlists for back pain, PCOS, pregnancy, pranayama, and daily stretching on our official YouTube channel.",
            moreCardCta: "Open @yogawithlatika Channel →",
        },
        footer: {
            eyebrow: "Start Today",
            title: "Ready to Feel Lighter, Stronger & Pain-Free?",
            subtitle:
                "Message Latika on WhatsApp to book your personal 1-on-1 yoga class, or start today with the free Tulaa app.",
            whatsappCta: "Chat on WhatsApp for 1-on-1 Class",
            secondaryCta: "Download Free Tulaa App",
            copyright: `© ${new Date().getFullYear()} YogaWithLatika • Latika Bissa (M.Sc Yoga Therapy). All rights reserved.`,
            languagePrompt: "Language / भाषा:",
        },
    };
}

export type SiteTranslations = ReturnType<typeof getEnglishContent>;
