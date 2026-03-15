import React from "react";
import { Search, FileText, Calendar, CheckCircle } from "lucide-react";

const GartenServiceProcess = () => {
    const steps = [
        {
            number: "01",
            title: "Besichtigung",
            text: "Wir begutachten Ihren Garten oder Außenbereich vor Ort in Düsseldorf und besprechen Ihre Wünsche sowie den Pflegeumfang.",
            icon: <Search className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "02",
            title: "Angebot",
            text: "Sie erhalten ein transparentes Angebot für Ihre Gartenarbeiten – wahlweise als Einzelleistung oder als regelmäßiges Pflegepaket.",
            icon: <FileText className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "03",
            title: "Terminplanung",
            text: "Wir vereinbaren einen passenden Termin für die Ausführung. Wir richten uns dabei flexibel nach den saisonalen Anforderungen.",
            icon: <Calendar className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "04",
            title: "Ausführung",
            text: "Fachgerechte Umsetzung durch unser Team. Wir verlassen Ihren Garten sauber und gepflegt – Qualität, die man sieht.",
            icon: <CheckCircle className="w-6 h-6 text-[#2AA34D]" />,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <span className="text-[#2AA34D] font-bold uppercase tracking-widest text-sm">
                        Schritt für Schritt
                    </span>
                    <h2 className="text-[3rem] font-extrabold text-[#083224] mt-2 leading-tight">
                        Saubere <span className="text-[#2AA34D]">Planung.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative p-8 rounded-sm transition-all hover:shadow-md"
                        >
                            <span className="absolute top-4 right-6 text-5xl font-black text-black/5">
                                {step.number}
                            </span>
                            <div className="mb-6 inline-block p-3 bg-white shadow-sm rounded-sm">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#083224] mb-4">
                                {step.title}
                            </h3>
                            <p className="text-[#42514A] leading-relaxed text-sm">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GartenServiceProcess;
