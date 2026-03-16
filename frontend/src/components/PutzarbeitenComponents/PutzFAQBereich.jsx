import React, { useState } from "react";
import { FiPlus, FiMessageCircle } from "react-icons/fi";

const PutzFAQBereich = () => {
    const [open, setOpen] = useState(null);
    const fragen = [
        {
            q: "Bringen Sie umweltschonende Reinigungsmittel selbst mit?",
            a: (
                <>
                    Ja, wir arbeiten ausschließlich mit{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        professionellen Reinigungskonzentraten
                    </span>{" "}
                    und modernem Equipment. Wir achten dabei besonders auf die
                    Materialverträglichkeit und nutzen, wo immer möglich,{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        umweltfreundliche Reinigungsmittel
                    </span>
                    , die sowohl für Ihre Gesundheit als auch für die
                    Oberflächen absolut schonend sind.
                </>
            ),
        },
        {
            q: "Sind Fenster- und Glasreinigungen im Service enthalten?",
            a: (
                <>
                    Wir bieten die{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Glas- und Rahmenreinigung
                    </span>{" "}
                    sowohl als integrativen Bestandteil einer
                    Unterhaltsreinigung als auch als spezifische Einzelleistung
                    an. Mit professionellen Abziehern und streifenfreien
                    Reinigungstechniken sorgen wir für{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        klare Sicht in Ihren Privat- oder Geschäftsräumen
                    </span>{" "}
                    in ganz Düsseldorf.
                </>
            ),
        },
        {
            q: "Ist Ihr Personal für eventuelle Schäden versichert?",
            a: (
                <>
                    Sicherheit und Vertrauen stehen bei uns an erster Stelle.
                    Unser gesamtes Team ist über eine{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        umfassende Betriebshaftpflichtversicherung
                    </span>{" "}
                    abgesichert. Sollte trotz unserer extrem sorgfältigen
                    Arbeitsweise einmal ein Missgeschick passieren, sind Sie als
                    Kunde{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        vollständig geschützt und abgesichert
                    </span>
                    .
                </>
            ),
        },
        {
            q: "Wie flexibel können Reinigungsintervalle angepasst werden?",
            a: (
                <>
                    Wir passen uns Ihrem Rhythmus an. Ob tägliche Reinigung,
                    wöchentliche{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Unterhaltsreinigung
                    </span>{" "}
                    oder monatliche Grundreinigung – wir erstellen einen{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        individuellen Reinigungsplan
                    </span>
                    . Terminänderungen sind bei einer Vorlaufzeit von 48 Stunden
                    meist problemlos und ohne Zusatzkosten möglich.
                </>
            ),
        },
    ];

    return (
        <section className="bg-white px-5 py-24 md:px-12 lg:py-32 xl:px-16">
            <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[1fr_1.5fr] xl:gap-24 2xl:max-w-[2000px]">
                <div className="flex flex-col justify-start">
                    <div className="sticky top-10">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D] md:text-sm">
                            Reinigungsservice
                        </span>
                        <h2 className="font-heading mt-6 text-[2.8rem] font-extrabold leading-[1.1] text-[#083224] md:text-[4rem] xl:text-[4.5rem]">
                            Häufige <br />
                            <span className="text-[#2AA34D]">Fragen.</span>
                        </h2>
                        <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-slate-500">
                            Hygiene auf höchstem Niveau. Hier finden Sie Details
                            zu unserem{" "}
                            <span className="text-[#2AA34D] font-medium">
                                Reinigungs- und Putzservice
                            </span>{" "}
                            für Düsseldorf und Umgebung.
                        </p>
                        <div className="mt-12 hidden h-20 w-20 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] lg:flex border border-[#2AA34D]/20">
                            <FiMessageCircle size={32} />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {fragen.map((f, i) => (
                        <div
                            key={i}
                            className={`transition-all duration-300 border rounded-xl overflow-hidden ${
                                open === i
                                    ? "border-[#2AA34D] bg-[#F9FAFB] shadow-md"
                                    : "border-slate-100 bg-white hover:border-slate-200"
                            }`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="flex w-full items-center justify-between p-6 text-left transition-all md:p-8"
                            >
                                <span
                                    className={`font-heading text-lg font-bold md:text-xl ${
                                        open === i
                                            ? "text-[#083224]"
                                            : "text-[#42514A]"
                                    }`}
                                >
                                    {f.q}
                                </span>
                                <div
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                                        open === i
                                            ? "rotate-45 bg-[#2AA34D] border-[#2AA34D] text-white"
                                            : "text-slate-400 border-slate-200"
                                    }`}
                                >
                                    <FiPlus />
                                </div>
                            </button>
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${
                                    open === i
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-8 md:px-8 md:pb-10">
                                        <div className="h-[1px] w-full bg-slate-200 mb-6" />
                                        <p className="font-sans text-[1.1rem] leading-relaxed text-slate-600">
                                            {f.a}
                                        </p>
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

export default PutzFAQBereich;
