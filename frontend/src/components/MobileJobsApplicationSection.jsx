import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Star, Clock, ShieldCheck } from "lucide-react";

function MobileJobsApplicationSection() {
    return (
        <section className="w-full bg-white py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 min-[2200px]:py-32 min-[2560px]:py-36">
            <div className="relative mx-auto w-full max-w-[100%] overflow-hidden px-5 md:px-8 lg:px-12 xl:max-w-[1700px] xl:px-16 2xl:max-w-[1900px] 2xl:px-20 min-[2200px]:max-w-[2200px] min-[2200px]:px-24 min-[2560px]:max-w-[2400px] min-[2560px]:px-0">
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 md:gap-12 lg:gap-16 xl:gap-24 items-start">
                    
                    {/* Linker Block: Hauptcontent */}
                    <div className="md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-6">
                        <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#2AA34D] md:text-sm md:tracking-[0.24em] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.06rem] min-[2200px]:text-[1.12rem]">
                            Karriere
                        </span>

                        <h2 className="font-heading mt-3 max-w-[320px] text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#0f3b35] md:mt-4 md:max-w-[560px] md:text-[3.1rem] lg:max-w-[760px] lg:text-[3.8rem] xl:max-w-[880px] xl:text-[4.4rem] 2xl:max-w-[980px] 2xl:text-[4.9rem] min-[2200px]:max-w-[1100px] min-[2200px]:text-[5.4rem] min-[2560px]:text-[5.8rem]">
                            Werden Sie
                            <br />
                            Teil unseres
                            <br />
                            Teams
                        </h2>

                        <p className="font-sans mt-5 max-w-[320px] text-[1rem] leading-7 text-[#42514A] md:mt-6 md:max-w-[700px] md:text-[1.15rem] md:leading-9 lg:max-w-[860px] lg:text-[1.28rem] lg:leading-10 xl:mt-7 xl:max-w-[980px] xl:text-[1.4rem] xl:leading-10 2xl:max-w-[1080px] 2xl:text-[1.52rem] min-[2200px]:max-w-[1180px] min-[2200px]:text-[1.64rem] min-[2200px]:leading-[2.9rem]">
                            Wir suchen zuverlässige Unterstützung für Reinigungsarbeiten,
                            Renovierungsarbeiten, Hausmeisterservice, Möbeltransport,
                            Gartenarbeiten und Montagearbeiten.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:max-w-3xl md:gap-8 lg:mt-12 lg:max-w-4xl lg:gap-10 xl:max-w-[980px] xl:gap-12 2xl:gap-14 min-[2200px]:mt-14 min-[2200px]:max-w-[1100px] min-[2200px]:gap-16">
                            <div>
                                <p className="font-heading text-[1.15rem] font-bold text-[#294D33] md:text-[1.8rem] lg:text-[2.15rem] xl:text-[2.4rem] 2xl:text-[2.65rem] min-[2200px]:text-[2.9rem]">
                                    Flexibel
                                </p>
                                <p className="font-sans mt-1 text-sm leading-6 text-[#42514A] md:mt-2 md:text-[1rem] md:leading-7 lg:text-[1.12rem] lg:leading-8 xl:text-[1.22rem] xl:leading-8 2xl:text-[1.3rem] min-[2200px]:text-[1.38rem] min-[2200px]:leading-9">
                                    Verschiedene Einsatzbereiche
                                </p>
                            </div>

                            <div>
                                <p className="font-heading text-[1.15rem] font-bold text-[#294D33] md:text-[1.8rem] lg:text-[2.15rem] xl:text-[2.4rem] 2xl:text-[2.65rem] min-[2200px]:text-[2.9rem]">
                                    Direkt
                                </p>
                                <p className="font-sans mt-1 text-sm leading-6 text-[#42514A] md:mt-2 md:text-[1rem] md:leading-7 lg:text-[1.12rem] lg:leading-8 xl:text-[1.22rem] xl:leading-8 2xl:text-[1.3rem] min-[2200px]:text-[1.38rem] min-[2200px]:leading-9">
                                    Einfache Bewerbung per Formular
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 lg:mt-12 xl:mt-14">
                            <Link
                                to="/karriere"
                                className="font-sans inline-block bg-[#2AA34D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#238A40] md:px-8 md:py-4 md:text-base lg:px-9 lg:py-4 lg:text-[1.08rem] xl:min-h-[68px] xl:px-10 xl:text-[1.16rem] 2xl:min-h-[74px] 2xl:px-12 2xl:text-[1.24rem] min-[2200px]:min-h-[82px] min-[2200px]:px-14 min-[2200px]:text-[1.32rem]"
                            >
                                Jetzt bewerben
                            </Link>
                        </div>
                    </div>

                    {/* Rechter Block: Professionelle Benefits */}
                    <div className="hidden md:flex md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-start-8 flex-col space-y-12 lg:space-y-16 xl:space-y-20 pt-10">
                        <div className="space-y-6">
                            <h3 className="font-heading text-[1.4rem] lg:text-[1.8rem] xl:text-[2.2rem] font-bold text-[#0f3b35] uppercase tracking-tight">
                                Ihre Vorteile <br /> bei uns
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { icon: <Clock size={24} className="text-[#2AA34D]"/>, title: "Faire Vergütung", desc: "Pünktliche und leistungsgerechte Bezahlung." },
                                    { icon: <ShieldCheck size={24} className="text-[#2AA34D]"/>, title: "Sicherer Job", desc: "Langfristige Perspektiven in einem stabilen Unternehmen." },
                                    { icon: <Star size={24} className="text-[#2AA34D]"/>, title: "Teamgeist", desc: "Ein familiäres Umfeld, in dem jeder zählt." },
                                    { icon: <CheckCircle2 size={24} className="text-[#2AA34D]"/>, title: "Moderne Ausrüstung", desc: "Wir stellen professionelles Werkzeug & Kleidung." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <p className="font-sans font-bold text-[#294D33] text-[1rem] lg:text-[1.1rem]">{item.title}</p>
                                            <p className="font-sans text-[0.85rem] lg:text-[0.95rem] text-[#42514A] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative pl-8 border-l-2 border-[#2AA34D]/30">
                            <p className="font-heading text-[1.2rem] lg:text-[1.5rem] xl:text-[1.8rem] text-[#0f3b35] italic leading-snug">
                                "Wir glauben an Qualität durch Wertschätzung. Jeder Mitarbeiter ist das Gesicht unserer Firma."
                            </p>
                            <p className="mt-4 font-sans text-xs uppercase tracking-widest text-[#2AA34D] font-bold">
                                — Unsere Philosophie
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileJobsApplicationSection;