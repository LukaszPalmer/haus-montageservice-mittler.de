import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function MobileLuxuryShapeSection() {
    const features = [
        { title: "Schnell", text: "Zeitnahe Rückmeldung und klare Abstimmung vom ersten Kontakt bis zur Umsetzung." },
        { title: "Sauber", text: "Sorgfältige Ausführung mit einem gepflegten, ordentlichen und professionellen Ergebnis." },
        { title: "Flexibel", text: "Passende Lösungen für private Anliegen, laufende Unterstützung und Einzelaufträge." },
        { title: "Persönlich", text: "Direkte Kommunikation, verlässliche Betreuung und nachvollziehbare Abläufe." }
    ];

    return (
        <section className="w-full bg-white font-sans">
            <div className="relative mx-auto w-full max-w-[100%] px-5 py-12 md:px-8 md:py-16 lg:px-12 xl:max-w-[1700px] xl:px-16 xl:py-24 2xl:max-w-[1900px] 2xl:px-20 min-[2200px]:max-w-[2200px] min-[2560px]:max-w-[2400px]">
                
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-24">
                    {/* Linke Seite: Hero Content */}
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2AA34D] md:text-sm">
                                Premium Service
                            </span>
                            <h2 className="font-heading mt-4 text-[2.4rem] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-[#083224] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[5.2rem] 2xl:text-[6rem]">
                                Qualität, die <br /> man sieht
                            </h2>
                        </div>

                        <p className="max-w-[580px] text-[1.05rem] leading-relaxed text-[#42514A] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.45rem]">
                            Zuverlässige Arbeiten, saubere Abläufe und ein hochwertiger Service für Haus, Garten und Objekt. Wir verbinden persönliche Betreuung mit einer professionellen Umsetzung.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Link
                                to="/kontakt"
                                className="flex items-center gap-3 bg-[#2AA34D] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#238A40] md:px-10 md:py-5 md:text-base"
                            >
                                Jetzt anfragen <ArrowRight size={18} />
                            </Link>
                            <a href="#leistungen" className="px-8 py-4 text-sm font-bold text-[#083224] underline decoration-[#D9E7DC] underline-offset-8 transition-all hover:decoration-[#2AA34D] md:text-base">
                                Leistungen ansehen
                            </a>
                        </div>
                    </div>

                    {/* Rechte Seite: Features */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:gap-12">
                        {features.map((f, i) => (
                            <div key={i} className="group relative pl-6">
                                <div className="absolute left-0 top-0 h-full w-[2px] bg-[#D9E7DC] transition-colors group-hover:bg-[#2AA34D]" />
                                <h3 className="font-heading text-[1.3rem] font-bold text-[#083224] md:text-[1.6rem] xl:text-[1.8rem]">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#556963] md:text-base lg:text-[1.05rem]">
                                    {f.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileLuxuryShapeSection;