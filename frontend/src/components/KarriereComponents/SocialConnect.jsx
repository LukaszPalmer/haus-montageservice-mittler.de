import React, { useState, useEffect } from "react";
import {
    FiInstagram,
    FiLinkedin,
    FiFacebook,
    FiArrowRight,
    FiUsers,
} from "react-icons/fi";

// Eine wiederverwendbare Komponente für die Counter-Animation
const AnimateCounter = ({ targetValue, label }) => {
    const [count, setCount] = useState(targetValue * 5);

    useEffect(() => {
        if (targetValue === 0) {
            const timer = setInterval(() => {
                setCount((prev) => {
                    if (prev <= 0) {
                        clearInterval(timer);
                        return 0;
                    }
                    const step = Math.max(1, Math.floor(prev / 10));
                    return prev - step;
                });
            }, 30);
            return () => clearInterval(timer);
        } else {
            let start = 0;
            const end = parseInt(targetValue);
            if (start === end) return;
            let totalDuraction = 2000;
            let increment = end / (totalDuraction / 30);
            const timer = setInterval(() => {
                start += increment;
                setCount(Math.floor(start));
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                }
            }, 30);
            return () => clearInterval(timer);
        }
    }, [targetValue]);

    return (
        <div>
            <span className="block text-4xl font-extrabold tabular-nums text-[#083224]">
                {count}
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400">
                {label}
            </span>
        </div>
    );
};

const SocialCard = ({ platform, handle, icon, color, delay, link, desc, extraClasses = "" }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${extraClasses}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div
            className={`absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.03] transition-all duration-700 group-hover:scale-150 group-hover:opacity-[0.08] ${color}`}
        />

        <div className="relative z-10">
            <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${color} transition-transform duration-500 group-hover:rotate-[10deg]`}
            >
                {icon}
            </div>

            <div className="mt-8">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400">
                    {platform}
                </span>
                <h4 className="mt-2 font-heading text-2xl font-bold text-[#083224] break-words leading-tight">
                    {handle}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-[#42514A] lg:text-base">
                    {desc}
                </p>
            </div>

            <div className="mt-8 flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest text-[#2AA34D]">
                Jetzt folgen{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </div>
        </div>
    </a>
);

function SocialConnect() {
    const apiData = {
        dailyInsights: 0,
        liveUpdates: 0,
    };

    return (
        <section className="w-full bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="inline-flex items-center gap-3 rounded-full bg-[#2AA34D]/[0.08] px-5 py-2 text-[#2AA34D]">
                            <FiUsers size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">
                                Community
                            </span>
                        </div>
                        <h2 className="mt-8 font-heading text-4xl font-extrabold leading-[1.2] text-[#083224] md:text-5xl">
                            Nichts mehr <br />
                            <span className="text-[#2AA34D]">verpassen.</span>
                        </h2>
                        <p className="mt-8 text-lg leading-relaxed text-[#42514A]">
                            Folge uns hinter die Kulissen. Wir teilen tägliche
                            Einblicke in unsere Projekte, stellen das Team vor
                            und posten exklusive Job-Angebote direkt auf unseren
                            Kanälen.
                        </p>
                        <div className="mt-10 flex gap-8 border-t border-slate-100 pt-10">
                            <AnimateCounter
                                targetValue={apiData.dailyInsights}
                                label="Daily Insights"
                            />
                            <div className="h-12 w-[1px] bg-slate-200" />
                            <AnimateCounter
                                targetValue={apiData.liveUpdates}
                                label="Live Updates"
                            />
                        </div>
                    </div>

                    {/* Anpassung des Grids: lg:grid-cols-2 sorgt für das 2er-Layout bei 1024px. xl:grid-cols-3 schaltet ab 1280px/1440px zurück auf 3er Layout */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2 xl:grid-cols-3">
                        <SocialCard
                            platform="Instagram"
                            handle={"Haus_\u200BMontageservice_\u200BMittler"}
                            icon={<FiInstagram size={28} />}
                            color="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
                            delay={0}
                            link="https://www.instagram.com/haus_montageservice_mittler/"
                            desc="Exklusive Vorher-Nachher Storys und Einblicke in unseren Arbeitsalltag in Düsseldorf."
                        />
                        <SocialCard
                            platform="LinkedIn"
                            handle="Haus-Montageservice-Mittler"
                            icon={<FiLinkedin size={28} />}
                            color="bg-[#0077b5]"
                            delay={150}
                            link="https://linkedin.com"
                            desc="Professionelle Netzwerke, Unternehmens-News und spannende Karriere-Möglichkeiten."
                        />
                        <SocialCard
                            platform="Facebook"
                            handle="Haus-Montageservice-Mittler"
                            icon={<FiFacebook size={28} />}
                            color="bg-gradient-to-b from-[#1877F2] to-[#115dc7]"
                            delay={300}
                            link="https://facebook.com/Haus-Montageservice-Mittler"
                            desc="Lokale News, Projekt-Updates und direkter Austausch mit unserer Community in der Region."
                            // Bei Laptop Query (lg) nimmt Facebook 2 Spalten ein (rutscht darunter), ab XL (Desktop L) wieder nur eine
                            extraClasses="lg:col-span-2 xl:col-span-1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialConnect;