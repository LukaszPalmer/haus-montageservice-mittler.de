import { Check, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EinsatzgebietSection() {
    const nearbyCities = [
        "Düsseldorf",
        "Neuss",
        "Ratingen",
        "Meerbusch",
        "Krefeld",
        "Duisburg",
        "Erkrath",
    ];

    return (
        <section className="w-full bg-white py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 min-[2200px]:py-32 min-[2560px]:py-36">
            <div className="relative mx-auto w-full max-w-[100%] overflow-hidden px-5 md:px-8 lg:px-12 xl:max-w-[1700px] xl:px-16 2xl:max-w-[1900px] 2xl:px-20 min-[2200px]:max-w-[2200px] min-[2200px]:px-24 min-[2560px]:max-w-[2400px] min-[2560px]:px-0">
                
                {/* Kleine Dachzeile */}
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#2AA34D] md:text-sm md:tracking-[0.24em] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.06rem] min-[2200px]:text-[1.12rem] mb-4">
                    Regional für Sie da
                </p>

                {/* Main Grid: Beide Blöcke starten hier auf gleicher Höhe */}
                <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 lg:gap-16 xl:gap-24 items-start">
                    
                    {/* Linke Seite: Headline & Gekürzter Text */}
                    <div className="md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-6">
                        <h2 className="font-heading text-[2.2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#0f3b35] md:text-[3.1rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[4.9rem] min-[2200px]:text-[5.4rem] min-[2560px]:text-[5.8rem]">
                            Unser <br /> Einsatzgebiet
                        </h2>

                        {/* Gekürzter, prägnanter Text */}
                        <p className="font-sans mt-6 max-w-[320px] text-[1.1rem] font-medium leading-relaxed text-[#42514A] md:mt-8 md:max-w-[600px] md:text-[1.25rem] lg:max-w-[700px] lg:text-[1.4rem] xl:mt-10 xl:text-[1.5rem] 2xl:text-[1.65rem] min-[2200px]:text-[1.8rem]">
                            Ihr Partner in <span className="text-[#2AA34D]">Düsseldorf & Umgebung</span> – für Privat- und Firmenkunden.
                        </p>
                        
                        <p className="font-sans mt-4 max-w-[550px] text-[0.95rem] leading-7 text-[#556963] md:text-[1.05rem] lg:text-[1.15rem] xl:text-[1.25rem]">
                            Zuverlässiger Service in Reinigungsarbeiten, Gartenpflege, Montagearbeiten und Hausmeisterarbeiten direkt vor Ihrer Haustür.
                        </p>

                        <div className="mt-8 flex items-center gap-3 md:mt-10">
                            <Link
                                to="/kontakt"
                                className="font-sans inline-flex items-center gap-3 bg-[#2AA34D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#238A40] md:px-8 md:py-4 md:text-base lg:px-9 lg:py-4"
                            >
                                Verfügbarkeit anfragen <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Rechte Seite: Regionen (Startet exakt auf Höhe der Headline links) */}
                    <div className="mt-12 md:mt-0 md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-start-8">
                        <div className="flex items-center gap-4 mb-8">
                            <MapPin className="text-[#2AA34D]" size={24} />
                            <p className="font-heading text-[1.1rem] font-bold uppercase tracking-wider text-[#0f3b35] lg:text-[1.25rem]">
                                Fokus Regionen
                            </p>
                        </div>

                        {/* Städte-Liste */}
                        <div className="grid grid-cols-2 gap-y-5 gap-x-6 border-t border-[#2AA34D]/10 pt-8">
                            {nearbyCities.map((city) => (
                                <div key={city} className="flex items-center gap-3 group">
                                    <Check size={18} className="text-[#2AA34D] transition-transform group-hover:scale-125" />
                                    <span className="font-sans font-semibold text-[#294D33] text-[1rem] lg:text-[1.15rem]">
                                        {city}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 bg-[#F8FCF9] border-l-4 border-[#2AA34D]">
                            <p className="font-sans text-[0.95rem] lg:text-[1.05rem] text-[#42514A] leading-relaxed">
                                <span className="block font-bold text-[#0f3b35] mb-1">Nicht dabei?</span>
                                Wir prüfen Ihr Gebiet individuell. Kontaktieren Sie uns für ein unverbindliches Angebot.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}