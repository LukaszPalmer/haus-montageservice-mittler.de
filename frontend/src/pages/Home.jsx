import React from "react";
import { Link } from "react-router-dom";
import MobileQueryHero from "../media/MobileQueryStartseite.png";
import MalerArbeiten from "../media/Malen_Banner_XL_Querys_Ausbesserung.png";
import gartenRasenlegen from "../media/GartenHeroBanner_XL_QUERY.png";
import MontageArbeiten from "../media/Montage_New_Banner.png";
import HausmeisterArbeiten from "../media/HausmeisterCheckArbeiten.png";
import PutzArbeiten from "../media/Putzen_Banner.png";
import TabletQueryBanner from "../media/TabletQueryBanner.png";

import SocialConnect from "../components/KarriereComponents/SocialConnect.jsx";

import MobileLuxuryShapeSection from "../components/MobileLuxuryShapeSection";
import MobileTrustSection from "../components/MobileTrustSection";
import MobileJobsApplicationSection from "../components/MobileJobsApplicationSection";
import MobileFooter from "../components/MobileFooter";
import EinsatzgebietSection from "../components/EinsatzgebietSection.jsx";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

function Home() {
    // Funktion, um beim Navigieren nach oben zu scrollen
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    // Funktion für weiches Scrollen zur ersten Dienstleistung
    const scrollToLeistungen = (e) => {
        e.preventDefault();
        const element = document.getElementById("erste-dienstleistung");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const leistungen = [
        {
            title: "Malerarbeiten",
            text: "Saubere und präzise Arbeiten für Innenräume, Wände und kleine Ausbesserungen.",
            image: MalerArbeiten,
            link: "/malerarbeiten",
            span: "col-span-2",
        },
        {
            title: "Hausmeister",
            text: "Zuverlässige Unterstützung bei Pflege, Kontrolle und Werterhalt Ihres Objekts.",
            image: HausmeisterArbeiten,
            link: "/montage-hausmeisterarbeiten",
            span: "col-span-1",
        },
        {
            title: "Montage",
            text: "Fachgerechte Montage von Möbeln und praktischen Lösungen im Haus.",
            image: MontageArbeiten,
            link: "/montage-hausmeisterarbeiten",
            span: "col-span-1",
        },
        {
            title: "Gartenarbeiten",
            text: "Gepflegte Außenbereiche, Rückschnitt und praktische Hilfe rund um Ihr Grün.",
            image: gartenRasenlegen,
            link: "/gartenarbeiten",
            span: "col-span-2",
        },
        {
            title: "Reinigung",
            text: "Gründliche Sauberkeit für Gastronomie, Privathaushalte und Geschäftsräume.",
            image: PutzArbeiten,
            link: "/putzarbeiten",
            span: "col-span-2",
        },
    ];

    return (
        <section className="w-full overflow-x-hidden bg-white">
            {/* --- MOBILE HERO --- */}
            <div className="relative h-[85vh] overflow-hidden md:hidden">
                <img
                    src={MobileQueryHero}
                    alt="Haus & Montageservice Mittler"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="mt-10">
                        <span className="mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#D7F2DD]">
                            Düsseldorf & Umgebung
                        </span>
                        <h1 className="font-heading mb-8 text-4xl font-extrabold leading-[1.1] text-white">
                            Haus, Garten <br />
                            & Montage aus <br />
                            <span className="text-[#2AA34D]">einer Hand</span>
                        </h1>
                        <p className="mx-auto max-w-sm font-sans text-[1rem] leading-relaxed text-slate-200">
                            Ihr Partner für{" "}
                            <span className="text-white font-medium">Reinigung</span>, 
                            Montage und professionelle Objektservice-Leistungen.
                        </p>
                        <div className="mt-12">
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
            </div>

            {/* --- TABLET HERO --- */}
            <div className="hidden md:block lg:hidden">
                <div className="relative h-[70vh] overflow-hidden">
                    <img
                        src={TabletQueryBanner}
                        alt="Haus & Montageservice Mittler"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center px-10">
                        <div className="max-w-[600px]">
                            <span className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.25em] text-[#D7F2DD]">
                                Haus, Garten & Montage
                            </span>
                            <h1 className="font-heading mt-4 text-[4rem] font-extrabold leading-[1] text-white">
                                Alles rund ums <br />
                                <span className="text-[#2AA34D]">Haus.</span>
                            </h1>
                            <p className="mt-6 font-sans text-[1.2rem] leading-relaxed text-slate-200">
                                Ihr Partner für Reinigung, Montage, Gartenpflege und Hausservice in Düsseldorf.
                            </p>
                            <div className="mt-10 flex gap-5">
                                <a
                                    href="#erste-dienstleistung"
                                    onClick={scrollToLeistungen}
                                    className="bg-[#2AA34D] px-8 py-4 text-[1rem] font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#238A40]"
                                >
                                    Leistungen
                                </a>
                                <Link
                                    to="/kontakt"
                                    onClick={scrollToTop}
                                    className="border border-white/30 bg-white/10 px-8 py-4 text-[1rem] font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20"
                                >
                                    Anfragen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- DESKTOP HERO --- */}
            <div className="hidden lg:block">
                <div className="relative h-[85vh] overflow-hidden">
                    <img
                        src={TabletQueryBanner}
                        alt="Exklusive Hausdienstleistungen Mittler"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center px-16 xl:px-20">
                        <div className="mx-auto w-full max-w-[1700px] 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px]">
                            <div className="max-w-[950px]">
                                <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#D7F2DD] xl:text-[1.1rem]">
                                    Ihr Partner in Düsseldorf
                                </span>
                                <h1 className="font-heading mt-6 text-[5.5rem] font-extrabold leading-[0.9] tracking-[-0.04em] text-white xl:text-[6.5rem] 2xl:text-[7.2rem] min-[2200px]:text-[8rem]">
                                    Haus, Garten & <br />
                                    <span className="text-[#2AA34D]">Montage.</span>
                                </h1>
                                <p className="mt-8 max-w-[750px] font-sans text-[1.4rem] leading-relaxed text-slate-200 xl:text-[1.6rem] 2xl:text-[1.8rem]">
                                    Alles aus einer Hand. Wir sorgen für{" "}
                                    <span className="font-semibold text-white">Werterhalt</span> und{" "}
                                    <span className="font-semibold text-white">Ästhetik</span> Ihrer Immobilie – professionell, sauber und zuverlässig.
                                </p>
                                <div className="mt-12 flex items-center gap-6">
                                    <a
                                        href="#erste-dienstleistung"
                                        onClick={scrollToLeistungen}
                                        className="group flex items-center gap-3 bg-[#2AA34D] px-10 py-5 text-[1.1rem] font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-[#238A40]"
                                    >
                                        Leistungen entdecken <FiArrowDown />
                                    </a>
                                    <Link
                                        to="/kontakt"
                                        onClick={scrollToTop}
                                        className="group flex items-center gap-3 border border-white/40 bg-white/5 px-10 py-5 text-[1.1rem] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
                                    >
                                        Kontakt <FiArrowUpRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP INTRO --- */}
                <div
                    id="leistungen-start"
                    className="mx-auto w-full max-w-[1700px] px-16 py-24 xl:px-20 2xl:max-w-[1900px] 2xl:py-32 min-[2200px]:max-w-[2200px]"
                >
                    <div className="max-w-[1100px] xl:max-w-[1300px]">
                        <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#2AA34D]">
                            Unsere Expertise
                        </span>
                        <h2 className="font-heading mt-6 text-[3.5rem] font-extrabold leading-[1] tracking-[-0.03em] text-[#083224] xl:text-[4.5rem] 2xl:text-[5.5rem]">
                            Exklusive <span className="text-[#2AA34D]">Hausdienstleistungen</span> <br />
                            nach Maß.
                        </h2>
                        <p className="mt-10 font-sans text-[1.3rem] leading-relaxed text-[#42514A] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                            Entdecken Sie unsere maßgeschneiderten Lösungen für Ihr Objekt. Wir vereinen verschiedene Gewerke unter einem Dach, um Ihnen den höchsten Komfort und eine reibungslose Abwicklung zu garantieren.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- MOBILE & TABLET INTRO (Sichtbar auf md und kleiner als lg) --- */}
            <div id="leistungen-start" className="lg:hidden px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
                <div className="md:max-w-[700px]">
                    <span className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#2AA34D] md:text-[0.9rem]">
                        Unsere Expertise
                    </span>
                    <h2 className="font-heading mt-4 text-3xl font-extrabold leading-[1.1] text-[#083224] md:text-5xl">
                        Exklusive <span className="text-[#2AA34D]">Hausdienstleistungen</span> <br />
                        nach Maß.
                    </h2>
                    <p className="mt-6 font-sans text-[1.05rem] leading-relaxed text-[#42514A] md:text-[1.2rem]">
                        Entdecken Sie unsere maßgeschneiderten Lösungen für Ihr Objekt. Wir vereinen verschiedene Gewerke unter einem Dach für Ihren höchsten Komfort.
                    </p>
                </div>
            </div>

            {/* Sprungmarke / Wrapper für die ersten Dienstleistungen */}
            <div id="erste-dienstleistung">
                {/* --- LEISTUNGEN GRID (TABLET/DESKTOP) --- */}
                <div className="hidden md:block mx-auto w-full max-w-[1700px] px-10 pb-24 lg:px-16 xl:px-20 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px]">
                    <div className="grid grid-cols-2 gap-10 xl:gap-14">
                        {leistungen.map((item) => (
                            <article
                                key={item.title}
                                className={`group relative overflow-hidden bg-white shadow-sm border border-slate-100 ${item.span}`}
                            >
                                <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:h-[450px] xl:h-[500px]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                                </div>

                                <div className="p-8 lg:p-10 xl:p-12">
                                    <h3 className="font-heading text-3xl font-extrabold text-[#083224] lg:text-4xl xl:text-5xl">
                                        {item.title}
                                    </h3>
                                    <p className="mt-6 font-sans text-lg leading-relaxed text-[#42514A] xl:text-xl lg:max-w-2xl">
                                        {item.text}
                                    </p>
                                    <Link
                                        to={item.link}
                                        onClick={scrollToTop}
                                        className="mt-8 inline-flex items-center gap-2 font-sans text-[1rem] font-bold uppercase tracking-widest text-[#2AA34D] hover:text-[#083224] transition-colors"
                                    >
                                        Details ansehen <FiArrowUpRight />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* --- MOBILE LEISTUNGEN --- */}
                <div className="md:hidden px-6 pb-20 space-y-12">
                    {leistungen.map((item) => (
                        <article key={item.title} className="overflow-hidden">
                            <img src={item.image} alt={item.title} className="h-64 w-full object-cover rounded-sm shadow-md" />
                            <div className="pt-6">
                                <h3 className="font-heading text-2xl font-bold text-[#083224]">{item.title}</h3>
                                <p className="mt-3 font-sans text-[#42514A] leading-7">{item.text}</p>
                                <Link 
                                    to={item.link} 
                                    onClick={scrollToTop}
                                    className="mt-5 inline-block text-[#2AA34D] font-bold uppercase text-sm tracking-widest"
                                >
                                    Mehr erfahren
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <MobileLuxuryShapeSection />
            <MobileJobsApplicationSection />
            <EinsatzgebietSection />
            <MobileTrustSection />
            <SocialConnect/>
            <MobileFooter />
        </section>
    );
}

export default Home;