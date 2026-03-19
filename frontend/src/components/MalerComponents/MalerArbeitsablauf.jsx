import React from "react";
import { FiEdit3, FiSearch, FiCalendar, FiCheckCircle } from "react-icons/fi";

const MalerArbeitsablauf = () => {
    const steps = [
        {
            number: "01",
            title: "Besichtigung",
            icon: <FiSearch className="text-3xl" />,
            text: (
                <>
                    Wir begutachten die Flächen{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        vor Ort in Düsseldorf
                    </span>{" "}
                    und besprechen Ihre Farbwünsche und den Renovierungsumfang.
                </>
            ),
        },
        {
            
            number: "02",
            title: "Angebot",
            icon: <FiEdit3 className="text-3xl" />,
            text: (
                <>
                    Sie erhalten ein{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        transparentes Angebot
                    </span>{" "}
                    für Ihre Malerarbeiten – inklusive aller Material- und
                    Lohnkosten.
                </>
            ),
        },
        {
            number: "03",
            title: "Vorbereitung",
            icon: <FiCalendar className="text-3xl" />,
            text: (
                <>
                    Wir vereinbaren einen passenden Termin. Wir kümmern uns um
                    das{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Abkleben und den Schutz
                    </span>{" "}
                    Ihrer Möbel.
                </>
            ),
        },
        {
            number: "04",
            title: "Anstrich",
            icon: <FiCheckCircle className="text-3xl" />,
            text: (
                <>
                    <span className="text-[#2AA34D] font-semibold">
                        Fachgerechte Ausführung
                    </span>{" "}
                    mit hochwertigen Farben und eine saubere Übergabe der frisch
                    renovierten Räume.
                </>
            ),
        },
    ];

    return (
        <section className="relative mx-auto w-full max-w-[100%] overflow-hidden px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32 xl:max-w-[1700px] xl:px-16 2xl:max-w-[1900px] 2xl:px-20 min-[2200px]:max-w-[2200px] min-[2200px]:px-24">
            {/* Header Bereich */}
            <div className="relative z-10 mb-12 md:mb-20">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#2AA34D] md:text-sm lg:text-[1rem]">
                    Schritt für Schritt
                </span>
                <h2 className="font-heading mt-4 text-[2.2rem] font-extrabold uppercase leading-[1.1] tracking-[-0.03em] text-[#083224] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem]">
                    Saubere <br />
                    <span className="text-[#2AA34D]">Planung</span>
                </h2>
                <div className="mt-6 h-1 w-24 bg-[#2AA34D]" />
            </div>

            {/* Steps Grid - Geändert auf 2 Spalten für Laptop & Laptop L */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 lg:p-14"
                    >
                        {/* Hintergrund Nummer */}
                        <span className="absolute right-6 top-4 select-none font-heading text-[6rem] font-black text-[#083224]/5 transition-colors group-hover:text-[#2AA34D]/10">
                            {step.number}
                        </span>

                        {/* Icon */}
                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] transition-colors group-hover:bg-[#2AA34D] group-hover:text-white">
                            {step.icon}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-[85%]">
                            <h3 className="font-heading mb-6 text-2xl font-bold text-[#083224] lg:text-3xl">
                                {step.title}
                            </h3>
                            <p className="font-sans text-[1.05rem] leading-relaxed text-[#42514A] md:text-[1.1rem] lg:text-[1.15rem]">
                                {step.text}
                            </p>
                        </div>

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#2AA34D] transition-all duration-500 group-hover:w-full" />
                    </div>
                ))}
            </div>

            {/* Subtiler Background Text (SEO & Design) */}
            <div className="absolute -bottom-10 left-0 right-0 hidden select-none justify-center opacity-[0.02] lg:flex">
                <span className="font-heading text-[12rem] font-black uppercase text-[#083224]">
                    Farbe
                </span>
            </div>
        </section>
    );
};

export default MalerArbeitsablauf;