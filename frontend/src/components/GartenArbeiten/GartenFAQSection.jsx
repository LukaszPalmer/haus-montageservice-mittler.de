import React, { useState } from "react";
import { FiPlus, FiMessageCircle } from "react-icons/fi";

const GartenFAQSection = () => {
    const [open, setOpen] = useState(null);
    const faqs = [
        {
            q: "Bringen Sie professionelle Maschinen für die Gartenpflege mit?",
            a: (
                <>
                    Selbstverständlich. Wir verfügen über einen <span className="text-[#2AA34D] font-semibold">modernen Maschinenpark</span>, der von geräuscharmen Akku-Heckenscheren bis hin zu leistungsstarken Freischneidern reicht. Unser Equipment ermöglicht eine <span className="text-[#2AA34D] font-semibold">effiziente und präzise Gartenarbeit</span>, ohne dass Sie eigene Geräte zur Verfügung stellen müssen.
                </>
            ),
        },
        {
            q: "Wird der Grünschnitt nach dem Heckenschnitt entsorgt?",
            a: (
                <>
                    Ja, die <span className="text-[#2AA34D] font-semibold">fachgerechte Entsorgung von Gartenabfällen</span> ist fester Bestandteil unseres Services. Nach dem Rückschnitt von Hecken, Sträuchern oder Bäumen transportieren wir das Material ab und führen es der <span className="text-[#2AA34D] font-semibold">ökologischen Kompostierung</span> zu. Ihr Garten bleibt absolut sauber zurück.
                </>
            ),
        },
        {
            q: "Bieten Sie Dauerpflege für gewerbliche Außenanlagen an?",
            a: (
                <>
                    Gerade für Unternehmen in <span className="text-[#2AA34D] font-semibold">Düsseldorf und Umgebung</span> bieten wir Ganzjahrespflege an. Dies beinhaltet regelmäßiges Rasenmähen, Unkrautentfernung und die <span className="text-[#2AA34D] font-semibold">Saisonpflege im Frühjahr und Herbst</span>. Ein gepflegtes Firmengelände ist die Visitenkarte Ihres Unternehmens.
                </>
            ),
        },
        {
            q: "Führen Sie auch den Rückschnitt von hohen Bäumen durch?",
            a: (
                <>
                    Wir übernehmen den <span className="text-[#2AA34D] font-semibold">Form- und Erhaltungsschnitt</span> an Bäumen und Gehölzen bis zu einer gewissen Arbeitshöhe. Dabei achten wir strikt auf die gesetzlichen Schonzeiten und die <span className="text-[#2AA34D] font-semibold">Gesundheit Ihrer Pflanzen</span>, um ein gesundes Wachstum für die nächste Saison zu fördern.
                </>
            ),
        },
    ];

    return (
        <section className="bg-white px-5 py-24 md:px-12 lg:py-32 xl:px-16">
            <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[1fr_1.5fr] xl:gap-24 2xl:max-w-[2000px]">
                <div className="flex flex-col justify-start">
                    <div className="sticky top-10">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D] md:text-sm">Garten-Service</span>
                        <h2 className="font-heading mt-6 text-[2.8rem] font-extrabold leading-[1.1] text-[#083224] md:text-[4rem] xl:text-[4.5rem]">Häufige <br /><span className="text-[#2AA34D]">Fragen.</span></h2>
                        <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-slate-500">Alles rund um Ihre <span className="text-[#2AA34D] font-medium">grüne Oase</span>. Wir beantworten Ihre Fragen zur professionellen Gartenpflege und Gestaltung in Düsseldorf.</p>
                        <div className="mt-12 hidden h-20 w-20 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] lg:flex border border-[#2AA34D]/20">
                            <FiMessageCircle size={32} />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className={`transition-all duration-300 border rounded-xl overflow-hidden ${open === i ? "border-[#2AA34D] bg-[#F9FAFB] shadow-md" : "border-slate-100 bg-white hover:border-slate-200"}`}>
                            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left transition-all md:p-8">
                                <span className={`font-heading text-lg font-bold md:text-xl ${open === i ? "text-[#083224]" : "text-[#42514A]"}`}>{f.q}</span>
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${open === i ? "rotate-45 bg-[#2AA34D] border-[#2AA34D] text-white" : "text-slate-400 border-slate-200"}`}><FiPlus /></div>
                            </button>
                            <div className={`grid transition-all duration-500 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-8 md:px-8 md:pb-10">
                                        <div className="h-[1px] w-full bg-slate-200 mb-6" />
                                        <p className="font-sans text-[1.1rem] leading-relaxed text-slate-600">{f.a}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
//a

export default GartenFAQSection;