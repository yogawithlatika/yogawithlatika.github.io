// src/i18n/en.ts
import { getYearsOfExperience } from "../config/site";

export function getEnglishContent(years = getYearsOfExperience()) {
    return {
        lang: "en" as const,
        locale: "en_IN",
        meta: {
            title: `YogaWithLatika | 1-on-1 Online Yoga Therapy & Tulaa Wellness App`,
            description: `Heal naturally with Latika Bissa (M.Sc Yoga Therapy, Gold Medalist, ${years}+ yrs experience since 2014). Personalized 1-on-1 online yoga therapy for PCOS, Prenatal, Back Pain & Stress, plus the private Tulaa Yoga App and 21K+ YouTube community.`,
            keywords:
                "Online Yoga Classes, 1-on-1 Yoga Therapy, Latika Bissa, Tulaa Yoga App, Prenatal Yoga, PCOS Yoga, Back Pain Relief, Yoga for Stress, Personal Yoga Therapist",
        },
        nav: {
            brandSub: "Yoga Therapy & Wellness",
            classes: "1-on-1 Therapy",
            reviews: "Stories",
            tulaa: "Tulaa App",
            youtube: "YouTube (21K+)",
            bookCta: "Book 1-on-1 Session",
            langSwitchLabel: "हिन्दी में देखें",
            langCurrent: "EN",
            langAlt: "हिन्दी",
        },
        hero: {
            eyebrow: `Science-Backed Yoga Therapy • Since 2014`,
            greeting: "Heal gently, live in balance with",
            name: "Latika Bissa",
            credentials: [
                {
                    value: `${years}+ Yrs`,
                    label: "Clinical Experience (Since 2014)",
                    isExperience: true,
                },
                {
                    value: "M.Sc Gold Medalist",
                    label: "Certified Yoga Therapist",
                    isExperience: false,
                },
                {
                    value: "5.0 ★",
                    label: "Verified on Google Maps",
                    isExperience: false,
                },
                {
                    value: "21K+",
                    label: "YouTube Community",
                    isExperience: false,
                },
            ],
            subtitle:
                "Dedicated 1-on-1 therapeutic yoga sessions tailored to your body, complemented by the private Tulaa wellness companion app and free guided practices.",
            primaryCta: "Book 1-on-1 Therapy Consultation",
            secondaryCta: "Explore Tulaa App",
            youtubeCta: "Watch Free on YouTube",
            portraitCaption: "M.Sc & B.Sc Yoga Therapy • Gold Medalist",
            portraitStatus: "Accepting new 1-on-1 clients globally",
            pillarsTitle: "Three Mindful Ways to Practice Together",
            pillars: [
                {
                    step: "01 • Most Impactful",
                    title: "1-on-1 Online Yoga Therapy",
                    desc: "Dedicated, customized live therapy for chronic pain, PCOS, prenatal care, and nervous system recovery.",
                    href: "#online-classes",
                    cta: "Explore 1-on-1 Sessions →",
                },
                {
                    step: "02 • Daily Companion",
                    title: "Tulaa Yoga & Habit App",
                    desc: "100% private, subscription-free wellness app with offline yoga flows, cycle & habit trackers.",
                    href: "#tulaa",
                    cta: "Discover Tulaa App →",
                },
                {
                    step: "03 • Free Community",
                    title: "21K+ YouTube Channel",
                    desc: "Practice anytime with free guided therapeutic routines, pranayama, and meditations.",
                    href: "#youtube",
                    cta: "Watch Guided Videos →",
                },
            ],
        },
        onlineClasses: {
            badge: "Pillar 01 • Highest Personal Impact",
            title: "Dedicated 1-on-1 Online Yoga Therapy",
            subtitle: `With ${years}+ years of clinical yoga therapy experience since 2014, every session is crafted exclusively around your medical history, lifestyle, and recovery pace.`,
            languagesBadge: "Sessions Conducted in English, Hindi & Marathi",
            specialtiesTitle: "Conditions & Goals We Nurture",
            specialties: [
                {
                    icon: "spine",
                    title: "Chronic Back, Neck & Joint Pain",
                    desc: "Gentle biomechanically sound sequences for cervical spondylosis, sciatica, knee stiffness, and desk posture recovery.",
                },
                {
                    icon: "lotus",
                    title: "PCOS, Thyroid & Hormonal Balance",
                    desc: "Targeted therapeutic asanas and metabolic breathwork to regulate cycles, support endocrine health, and manage weight naturally.",
                },
                {
                    icon: "heart",
                    title: "Prenatal & Postnatal Care",
                    desc: "Safe, trimester-specific prenatal movement, pelvic floor preparation, and calming guided relaxation for expecting mothers.",
                },
                {
                    icon: "breath",
                    title: "Stress, Anxiety & Sleep Recovery",
                    desc: "Nervous-system resetting pranayama, vagus nerve toning, and restorative stillness for deep sleep and emotional steadiness.",
                },
            ],
            processTitle: "How 1-on-1 Therapy Works",
            processSteps: [
                {
                    num: "1",
                    title: "Personal Health Assessment",
                    desc: "We begin by understanding your health concerns, lifestyle, pain triggers, and daily schedule.",
                },
                {
                    num: "2",
                    title: "Bespoke Therapeutic Plan",
                    desc: "A custom sequence of asanas, pranayama, and relaxation created strictly for your body.",
                },
                {
                    num: "3",
                    title: "Live 1-on-1 Guided Sessions",
                    desc: "Real-time posture correction, gentle pacing, and flexible scheduling that adapts to your life.",
                },
            ],
            ctaPrimary: "Book Your 1-on-1 Consultation on WhatsApp",
            ctaNote: "Flexible global timings • Personalized attention",
            reviewsHeader: {
                badge: "5.0 ★ Rated on Google Maps",
                title: "Heartfelt Stories from 1-on-1 Students",
                subtitle:
                    "Real feedback from practitioners who transformed their health through dedicated 1-on-1 sessions.",
                readAllCta: "Read All Verified Reviews on Google Maps",
            },
        },
        tulaa: {
            badge: "Pillar 02 • All-in-One Wellness App",
            title: "Find Daily Balance with Tulaa",
            lead: "An all-in-one wellness companion combining guided yoga, mindfulness, and private health habit trackers.",
            sublead:
                "Designed for consistent daily routines without subscriptions, mandatory accounts, or data tracking.",
            langAvailability: "Available in English & हिन्दी (Hindi)",
            highlights: [
                "No Account Needed",
                "100% On-Device Privacy",
                "Offline Practice",
                "30+ Calming Themes",
                "Zero Subscriptions",
            ],
            categories: [
                {
                    id: "yoga",
                    tag: "Movement",
                    title: "Guided Yoga & Movement",
                    items: [
                        {
                            title: "Expert-Led Routines",
                            desc: `Curated by Latika Bissa (${years}+ years yoga therapy experience) for all skill levels.`,
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
                    tag: "Mindfulness",
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
                    tag: "Privacy & Focus",
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
            badge: "Pillar 03 • Free Guided Library",
            subscribersBadge: "21,000+ Subscribers Strong",
            title: "Practice Together on YouTube",
            subtitle:
                "Join a warm community of nearly 21,000 practitioners. Explore free, science-backed sessions for pain relief, prenatal care, pranayama, and restful sleep.",
            watchLabel: "Watch Session",
            channelCta: "Subscribe on YouTube (@yogawithlatika)",
            exploreMore: "Explore 100+ Free Therapeutic Videos",
        },
        footer: {
            eyebrow: "Begin Your Healing Journey",
            title: "Ready for a Calm, Pain-Free Body?",
            subtitle:
                "Whether you want dedicated 1-on-1 therapeutic care, a private daily wellness app, or gentle free practices—I would love to guide you.",
            whatsappCta: "Chat with Latika on WhatsApp",
            secondaryCta: "Download Tulaa App",
            copyright: `© ${new Date().getFullYear()} YogaWithLatika • Latika Bissa (M.Sc Yoga Therapy). All rights reserved.`,
            languagePrompt: "Language / भाषा:",
        },
    };
}

export type SiteTranslations = ReturnType<typeof getEnglishContent>;
