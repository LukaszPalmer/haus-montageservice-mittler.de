import React from "react";
import {
    Leaf,
    Scissors,
    Sprout,
    CalendarCheck,
    Shovel,
    Trees,
} from "lucide-react";

const gartenServices = [
    {
        title: "Gartenpflege",
        desc: "Regelmäßige Pflege von Beeten, Rasen und Gehwegen für ein dauerhaft gepflegtes Erscheinungsbild.",
        icon: <Leaf className="w-8 h-8 text-[#2AA34D]" />,
    },
    {
        title: "Rückschnitt",
        desc: "Fachgerechter Hecken- und Strauchschnitt zur Förderung des Wachstums und für eine saubere Optik.",
        icon: <Scissors className="w-8 h-8 text-[#2AA34D]" />,
    },
    {
        title: "Außenanlagen",
        desc: "Instandhaltung und Reinigung von Wegen, Terrassen und Zufahrten rund um Ihr Objekt.",
        icon: <Shovel className="w-8 h-8 text-[#2AA34D]" />,
    },
    {
        title: "Saisonale Arbeiten",
        desc: "Vorbereitung auf Frühjahr und Winter sowie Laubentfernung und Düngung zum richtigen Zeitpunkt.",
        icon: <CalendarCheck className="w-8 h-8 text-[#2AA34D]" />,
    },
    {
        title: "Rasenpflege",
        desc: "Mähen, Vertikutieren und Nachsaat für einen dichten, gesunden und sattgrünen Rasen.",
        icon: <Sprout className="w-8 h-8 text-[#2AA34D]" />,
    },
    {
        title: "Baumpflege",
        desc: "Kontrolle und leichte Baumpflegearbeiten zur Sicherheit und Vitalität Ihres Baumbestands.",
        icon: <Trees className="w-8 h-8 text-[#2AA34D]" />,
    },
];

const GartenFAQ = () => {
    return (
        <div className="w-full py-20 lg:py-32">
            <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px]">
                <div className="mb-16 max-w-3xl">
                    <h3 className="font-heading text-[2.2rem] font-bold text-[#083224] md:text-[3rem]">
                        Leistungen & Häufige Fragen
                    </h3>
                    <div className="mt-4 h-1.5 w-24 bg-[#2AA34D]"></div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                    {gartenServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-b-4 border-transparent hover:border-[#2AA34D]"
                        >
                            <div className="mb-6 inline-block rounded-xl bg-[#F0F7F1] p-4 transition-colors group-hover:bg-[#2AA34D]/10">
                                {service.icon}
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-[#083224] mb-4">
                                {service.title}
                            </h4>
                            <p className="font-sans text-lg leading-relaxed text-[#42514A]">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GartenFAQ;
