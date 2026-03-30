import React from "react";
import HausmeisterBanner from "../media/Reperatur_Hausmeiser.png"; // Pfad zu deinem Hausmeister-Bild
import Footer from "../components/MobileFooter.jsx";
import HausmeisterLeistungenGrid from "../components/HausmeisterLeistungsGrid.jsx";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";


import SocialConnect from "../components/KarriereComponents/SocialConnect.jsx";


function Hausmeisterarbeiten() {
    const scrollToLeistungen = (e) => {
        e.preventDefault();
        const element = document.getElementById("erste-dienstleistung");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="w-full overflow-x-hidden bg-white">
            {/* --- MOBILE HERO --- */}
            <div className="relative h-[85vh] overflow-hidden md:hidden">
                <img src={HausmeisterBanner} alt="Professioneller Hausmeisterservice" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="mt-10">
                        <span className="mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#D7F2DD]">Werterhalt & Pflege</span>
                        <h1 className="font-heading mb-8 text-4xl font-extrabold leading-[1.1] text-white">Objekt- & <br /><span className="text-[#2AA34D]">Hausmeisterarbeiten</span></h1>
                        <p className="mx-auto max-w-sm font-sans text-[1rem] leading-relaxed text-slate-200">Zuverlässige <span className="text-white font-medium">Immobilienbetreuung</span> und schnelle Reparaturen für Ihr Objekt in Düsseldorf.</p>
                        <div className="mt-12">
                            <a href="#erste-dienstleistung" onClick={scrollToLeistungen} className="inline-flex items-center justify-center bg-[#2AA34D] px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-lg">Leistungen <FiArrowDown className="ml-2" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TABLET HERO --- */}
            <div className="hidden md:block lg:hidden">
                <div className="relative h-[70vh] overflow-hidden">
                    <img src={HausmeisterBanner} alt="Hausmeisterservice" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center px-10">
                        <div className="max-w-[600px]">
                            <span className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.25em] text-[#D7F2DD]">Objektpflege & Service</span>
                            <h1 className="font-heading mt-4 text-[4rem] font-extrabold leading-[1] text-white">Ihr <span className="text-[#2AA34D]">Hausmeisterarbeiten</span></h1>
                            <div className="mt-10 flex gap-5">
                                <a href="#erste-dienstleistung" onClick={scrollToLeistungen} className="bg-[#2AA34D] px-8 py-4 text-[1rem] font-bold uppercase text-white transition-all">Leistungen</a>
                                <a href="/kontakt" className="border border-white/30 bg-white/10 px-8 py-4 text-[1rem] font-bold uppercase text-white backdrop-blur-md">Anfragen</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- DESKTOP HERO --- */}
            <div className="hidden lg:block">
                <div className="relative h-[85vh] overflow-hidden">
                    <img src={HausmeisterBanner} alt="Exklusiver Hausmeisterservice" className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center">
                        <div className="mx-auto w-full max-w-[1700px] px-16 xl:px-20">
                            <div className="max-w-[950px]">
                                <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#D7F2DD]">Premium Objektservice</span>
                                <h1 className="font-heading mt-6 text-[5.5rem] font-extrabold leading-[0.9] text-white xl:text-[6.5rem]">Service & <br /><span className="text-[#2AA34D]">Werterhalt</span></h1>
                                <p className="mt-8 max-w-[750px] font-sans text-[1.4rem] text-slate-200">Wir sorgen dafür, dass Ihre Immobilie in Bestform bleibt – durch professionelle Instandhaltung und zuverlässigen Vor-Ort-Service.</p>
                                <div className="mt-12 flex gap-6">
                                    <a href="#erste-dienstleistung" onClick={scrollToLeistungen} className="group flex items-center gap-3 bg-[#2AA34D] px-10 py-5 text-[1.1rem] font-bold uppercase text-white shadow-2xl transition-all">Service entdecken <FiArrowDown /></a>
                                    <a href="/kontakt" className="group flex items-center gap-3 border border-white/40 bg-white/5 px-10 py-5 text-[1.1rem] font-bold uppercase text-white backdrop-blur-md">Kontakt <FiArrowUpRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full max-w-[1700px] px-16 py-24 xl:px-20">
                    <div className="max-w-[1100px]">
                        <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#2AA34D]">Rundum-Betreuung</span>
                        <h2 className="font-heading mt-6 text-[3.5rem] font-extrabold text-[#083224] xl:text-[4.5rem]">Proaktive <span className="text-[#2AA34D]">Objektpflege</span> für anspruchsvolle Immobilien.</h2>
                        <p className="mt-10 font-sans text-[1.3rem] leading-relaxed text-[#42514A]">Wir übernehmen sämtliche Hausmeistertätigkeiten mit Fokus auf Qualität. Ob privat oder gewerblich – wir garantieren eine saubere Betreuung in Düsseldorf.</p>
                    </div>
                </div>
            </div>

            <div id="erste-dienstleistung"></div>
            <HausmeisterLeistungenGrid />
            <SocialConnect/>
            <Footer />
        </section>
    );
}

export default Hausmeisterarbeiten;