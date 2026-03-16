import React from "react";
import { FiSearch, FiEdit3, FiCalendar, FiCheckCircle } from "react-icons/fi";

const GartenServiceProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Besichtigung",
            icon: <FiSearch className="text-3xl" />,
            text: (
                <>
                    Wir begutachten Ihren Garten oder Außenbereich{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        vor Ort in Düsseldorf
                    </span>{" "}
                    und besprechen Ihre Wünsche sowie den Pflegeumfang.
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
                    für Ihre Gartenarbeiten – wahlweise als Einzelleistung oder
                    als regelmäßiges Pflegepaket.
                </>
            ),
        },
        {
            number: "03",
            title: "Terminplanung",
            icon: <FiCalendar className="text-3xl" />,
            text: (
                <>
                    Wir vereinbaren einen{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        passenden Termin
                    </span>{" "}
                    für die Ausführung. Wir richten uns dabei flexibel nach den
                    saisonalen Anforderungen.
                </>
            ),
        },
        {
            number: "04",
            title: "Ausführung",
            icon: <FiCheckCircle className="text-3xl" />,
            text: (
                <>
                    <span className="text-[#2AA34D] font-semibold">
                        Fachgerechte Umsetzung
                    </span>{" "}
                    durch unser Team. Wir verlassen Ihren Garten sauber und
                    gepflegt – Qualität, die man sieht.
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

            {/* Steps Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-12">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 lg:p-10"
                    >
                        {/* Hintergrund Nummer */}
                        <span className="absolute right-4 top-2 select-none font-heading text-[5rem] font-black text-[#083224]/5 transition-colors group-hover:text-[#2AA34D]/10">
                            {step.number}
                        </span>

                        {/* Icon */}
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] transition-colors group-hover:bg-[#2AA34D] group-hover:text-white">
                            {step.icon}
                        </div>

                        {/* Content */}
                        <h3 className="font-heading mb-4 text-xl font-bold text-[#083224] lg:text-2xl">
                            {step.title}
                        </h3>
                        <p className="font-sans text-[0.95rem] leading-relaxed text-[#42514A] md:text-[1rem] lg:text-[1.05rem]">
                            {step.text}
                        </p>

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#2AA34D] transition-all duration-500 group-hover:w-full" />
                    </div>
                ))}
            </div>

            {/* Subtiler Background Text (SEO & Design) */}
            <div className="absolute -bottom-10 left-0 right-0 hidden select-none justify-center opacity-[0.02] lg:flex">
                <span className="font-heading text-[12rem] font-black uppercase text-[#083224]">
                    Natur
                </span>
            </div>
        </section>
    );
};

export default GartenServiceProcess;
