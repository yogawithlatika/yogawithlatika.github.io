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
            tulaa: "Free Yoga App",
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
                    desc: "Free yoga, meditation & private health trackers (period, fasting, water & mood). No login needed.",
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
            title: "Find Your Balance with Tulaa",
            lead: "Your free, private sanctuary for holistic wellness—combining expert-led yoga, guided meditation, and private wellness trackers.",
            sublead: "No login, no ads, 100% private.",
            langAvailability: "Available in English & हिन्दी (Hindi)",
            highlights: [
                "No Login Needed",
                "100% Private & Safe",
                "Zero Ads or Tracking",
                "30+ Calm Themes",
                "100% Free (No Subscriptions)",
            ],
            categories: [
                {
                    id: "yoga",
                    tag: "Daily Movement",
                    title: "Expert-Led Yoga for Every Need",
                    items: [
                        {
                            title: "40+ Therapeutic Yoga Plans",
                            desc: "Battle-tested routines for Back Pain, Sciatica, PCOS, Thyroid, Diabetes, and Prenatal care.",
                        },
                        {
                            title: "Yoga for Every Body & Stage",
                            desc: "Gentle, safe sessions tailored for beginners, seniors, and busy daily schedules.",
                        },
                        {
                            title: "Simple Sessions, Visible Results",
                            desc: "Step-by-step guided routines with built-in timers to help you heal naturally.",
                        },
                    ],
                },
                {
                    id: "trackers",
                    tag: "All-in-One Trackers",
                    title: "Private Health & Habit Trackers",
                    items: [
                        {
                            title: "Smart Cycle & Period Tracker",
                            desc: "Private period predictions, flow logs, and symptom insights. Data stays on your device.",
                        },
                        {
                            title: "Fasting, Water & Habit Streaks",
                            desc: "Track intermittent fasting windows, daily hydration, and healthy habits with Rhythm.",
                        },
                        {
                            title: "Mood & Mindful Journal",
                            desc: "Log daily emotions and reflections to spot mental well-being patterns over time.",
                        },
                    ],
                },
                {
                    id: "pranayama",
                    tag: "Calm Your Mind",
                    title: "Meditation, Breathwork & Chanting",
                    items: [
                        {
                            title: "Guided Meditations",
                            desc: "Calming sessions designed to ease anxiety, sharpen focus, and improve deep sleep.",
                        },
                        {
                            title: "Traditional Chanting",
                            desc: "Find inner stillness and nervous-system reset through soothing sound healing.",
                        },
                        {
                            title: "Daily Wellness Wisdom",
                            desc: "Research-backed health tips and therapy articles to support your daily practice.",
                        },
                    ],
                },
                {
                    id: "privacy",
                    tag: "100% Private & Secure",
                    title: "Your Health Data Belongs to You",
                    items: [
                        {
                            title: "No Sign-Up Required",
                            desc: "Start immediately—we never ask for your email, phone number, or personal details.",
                        },
                        {
                            title: "Offline-First & Export Anytime",
                            desc: "All data stays locally on your phone with instant export or deletion whenever you want.",
                        },
                        {
                            title: "30+ Calming Visual Themes",
                            desc: "Personalize your space with serene themes—with zero ad tracking.",
                        },
                    ],
                },
            ],
            ctaHeadline:
                "Download Tulaa today—breathe easy and build a peaceful daily routine.",
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
            secondaryCta: "Download Free Yoga App",
            copyright: `© ${new Date().getFullYear()} YogaWithLatika • Latika Bissa (M.Sc Yoga Therapy). All rights reserved.`,
            languagePrompt: "Language / भाषा:",
        },
    };
}

export type SiteTranslations = ReturnType<typeof getEnglishContent>;