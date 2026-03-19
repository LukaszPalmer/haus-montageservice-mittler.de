import React from "react";
import Footer from "../components/MobileFooter.jsx";
import MalerLeistungenGrid from "../components/MalerLeistungenGrid.jsx";

import New_MalenarbeitenBanner_4kQuery from '../media/MalerBanner/New_Malerarbeiten_Banner.avif';
import New_Malenbanner_LaptopQuery from '../media/MalerBanner/Laptop_Query_Malenbanner (1).avif';
import New_Malenbanner_TabletQuery from '../media/MalerBanner/Tablet_Query_Malenbanner.avif';
import New_Malerbanner_Mobile_L_Query from '../media/MalerBanner/MobileL_Query_Malerbanner.avif';

import SocialConnect from "../components/KarriereComponents/SocialConnect.jsx";


import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

function Malerarbeiten() {
    // Funktion für weiches Scrollen zur ersten Dienstleistung
    const scrollToLeistungen = (e) => {
        e.preventDefault();
        const element = document.getElementById("erste-dienstleistung");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="w-full overflow-x-hidden bg-white">
            {/* --- HERO SECTION WITH PICTURE TAG --- */}
            <div className="relative h-[100vh] overflow-hidden">
                <picture className="block w-full h-full">
                    {/* 4K / Großer Desktop */}
                    <source 
                        media="(min-width: 1440px)" 
                        srcSet={New_MalenarbeitenBanner_4kQuery} 
                    />
                    {/* Laptop */}
                    <source 
                        media="(min-width: 1024px)" 
                        srcSet={New_Malenbanner_LaptopQuery} 
                    />
                    {/* Tablet */}
                    <source 
                        media="(min-width: 768px)" 
                        srcSet={New_Malenbanner_TabletQuery} 
                    />
                    {/* Mobile L & Default */}
                    <img
                        src={New_Malerbanner_Mobile_L_Query}
                        alt="Professionelle Malerarbeiten und Renovierung"
                        className="h-[100vh] w-full object-cover object-center transition-transform duration-[2000ms] lg:hover:scale-105"
                    />
                </picture>

                {/* --- MOBILE CONTENT (bis 767px) --- */}
                <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex items-center justify-center px-6 text-center">
                    <div className="mt-10">
                        <span className="mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#D7F2DD]">
                            Präzision & Farbe
                        </span>
                        <h1 className="font-heading mb-8 text-4xl font-extrabold leading-[1.1] text-white">
                            Moderne <br />
                            <span className="text-[#2AA34D]">
                                Malerarbeiten
                            </span>
                        </h1>
                        <p className="mx-auto max-sm font-sans text-[1rem] leading-relaxed text-slate-200">
                            Wir verleihen Ihren Räumen neuen Glanz durch{" "}
                            <span className="text-white font-medium">
                                hochwertige Anstriche
                            </span>
                            , saubere Renovierung und fachgerechte Gestaltung.
                        </p>
                        <div className="mt-12 flex flex-col gap-4">
                            <a
                                href="#erste-dienstleistung"
                                onClick={scrollToLeistungen}
                                className="inline-flex items-center justify-center bg-[#2AA34D] px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-lg"
                            >
                                Leistungen <FiArrowDown className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- TABLET CONTENT (768px - 1023px) --- */}
                <div className="absolute inset-0 hidden md:flex lg:hidden bg-gradient-to-r from-black/70 via-black/40 to-transparent items-center">
                    <div className="w-full px-10">
                        <div className="max-w-[600px]">
                            <span className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.25em] text-[#D7F2DD]">
                                Farbe, Renovierung & Pflege
                            </span>
                            <h1 className="font-heading mt-4 text-[4rem] font-extrabold leading-[1] tracking-[-0.03em] text-white">
                                Maler-
                                <br />
                                <span className="text-[#2AA34D]">
                                    arbeiten
                                </span>
                            </h1>
                            <p className="mt-6 font-sans text-[1.2rem] leading-relaxed text-slate-200">
                                Wir unterstützen Sie zuverlässig bei{" "}
                                <span className="text-white">
                                    Anstrichen und Renovierungen
                                </span>{" "}
                                für ein gepflegtes Erscheinungsbild Ihrer
                                Immobilie.
                            </p>
                            <div className="mt-10 flex gap-5">
                                <a
                                    href="#erste-dienstleistung"
                                    onClick={scrollToLeistungen}
                                    className="bg-[#2AA34D] px-8 py-4 text-[1rem] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#238A40]"
                                >
                                    Mehr erfahren
                                </a>
                                <a
                                    href="/kontakt"
                                    className="border border-white/30 bg-white/10 px-8 py-4 text-[1rem] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20"
                                >
                                    Anfragen
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP CONTENT (ab 1024px) --- */}
                <div className="absolute inset-0 hidden lg:flex bg-gradient-to-r from-black/80 via-black/40 to-transparent items-center">
                    <div className="mx-auto w-full max-w-[1700px] px-16 xl:px-20 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px]">
                        <div className="max-w-[950px]">
                            <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#D7F2DD] xl:text-[1.1rem]">
                                Premium Malerservice
                            </span>
                            <h1 className="font-heading mt-6 text-[5.5rem] font-extrabold leading-[0.9] tracking-[-0.04em] text-white xl:text-[6.5rem] 2xl:text-[7.2rem] min-[2200px]:text-[8rem]">
                                Maler-
                                <br />
                                <span className="text-[#2AA34D]">
                                    arbeiten
                                </span>
                            </h1>
                            <p className="mt-8 max-w-[750px] font-sans text-[1.4rem] leading-relaxed text-slate-200 xl:text-[1.6rem] 2xl:text-[1.8rem]">
                                Ihr Partner für{" "}
                                <span className="font-semibold text-white">
                                    hochwertige Oberflächen
                                </span>{" "}
                                und präzise{" "}
                                <span className="font-semibold text-white">
                                    Ausbesserungsarbeiten
                                </span>
                                . Wir bringen frische Farben in Ihr Zuhause.
                            </p>
                            <div className="mt-12 flex items-center gap-6">
                                <a
                                    href="#erste-dienstleistung"
                                    onClick={scrollToLeistungen}
                                    className="group flex items-center gap-3 bg-[#2AA34D] px-10 py-5 text-[1.1rem] font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-[#238A40] hover:shadow-[#2AA34D]/30"
                                >
                                    Leistungen entdecken <FiArrowDown />
                                </a>
                                <a
                                    href="/kontakt"
                                    className="group flex items-center gap-3 border border-white/40 bg-white/5 px-10 py-5 text-[1.1rem] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
                                >
                                    Kontakt aufnehmen{" "}
                                    <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- INTRO TEXTS --- */}
            <div className="hidden lg:block">
                <div className="mx-auto w-full max-w-[1700px] px-16 py-24 xl:px-20 2xl:max-w-[1900px] 2xl:py-32 min-[2200px]:max-w-[2200px]">
                    <div className="relative z-10 max-w-[1100px] xl:max-w-[1300px]">
                        <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#2AA34D]">
                            Sauberkeit & Ästhetik
                        </span>
                        <h2 className="font-heading mt-6 text-[3.5rem] font-extrabold leading-[1] tracking-[-0.03em] text-[#083224] xl:text-[4.5rem] 2xl:text-[5.5rem]">
                            Professionelle{" "}
                            <span className="text-[#2AA34D]">
                                Malerarbeiten
                            </span>{" "}
                            für ein schönes Zuhause.
                        </h2>
                        <p className="mt-10 font-sans text-[1.3rem] leading-relaxed text-[#42514A] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                            Wir übernehmen sämtliche{" "}
                            <span className="font-semibold text-[#2AA34D]">
                                Anstriche
                            </span>{" "}
                            und{" "}
                            <span className="font-semibold text-[#2AA34D]">
                                Renovierungstätigkeiten
                            </span>{" "}
                            mit einem klaren Fokus auf Präzision und Sauberkeit.
                            Ob Neuanstrich oder kleine Ausbesserung – unser Team
                            garantiert eine{" "}
                            <span className="font-semibold text-[#2AA34D]">
                                makellose Durchführung
                            </span>{" "}
                            und ein hochwertiges Endergebnis direkt vor Ort in
                            Düsseldorf und Umgebung.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden md:block lg:hidden px-10 py-20">
                <span className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.25em] text-[#2AA34D]">
                    Qualität im Fokus
                </span>
                <h2 className="font-heading mt-4 text-[3rem] font-extrabold leading-[1.1] text-[#083224]">
                    Maler- und Renovierungsservice <br />
                    für höchste Ansprüche.
                </h2>
                <p className="mt-6 text-[1.2rem] leading-relaxed text-[#42514A]">
                    Von der kleinsten{" "}
                    <span className="text-[#2AA34D] font-medium">
                        Ausbesserung
                    </span>{" "}
                    bis zur kompletten{" "}
                    <span className="text-[#2AA34D] font-medium">
                        Raumgestaltung
                    </span>
                    : Wir sorgen für frische Farben und saubere Ergebnisse in
                    Ihren Innen- und Außenbereichen.
                </p>
            </div>

            <div id="erste-dienstleistung"></div>
            <MalerLeistungenGrid />
            <SocialConnect/>
            <Footer />
        </section>
    );
}

export default Malerarbeiten;