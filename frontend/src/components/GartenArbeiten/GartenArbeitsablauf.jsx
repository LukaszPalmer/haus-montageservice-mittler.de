import React from "react";

const GartenArbeitsablauf = () => {
    return (
        <div className="relative mx-auto w-full max-w-[100%] overflow-hidden px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:max-w-[1700px] xl:px-20 xl:py-32 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px]">
            <div className="relative z-10 max-w-[1100px] xl:max-w-[1300px] 2xl:max-w-[1450px]">
                <span className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.3em] text-[#2AA34D] md:text-[1rem] xl:text-[1.1rem]">
                    Struktur & Werterhalt
                </span>

                <h2 className="font-heading mt-6 text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#083224] md:text-[4rem] xl:text-[5rem] 2xl:text-[5.8rem] min-[2200px]:text-[6.5rem]">
                    Gepflegte Außenbereiche <br />
                    <span className="text-[#2AA34D]">
                        mit System & Präzision.
                    </span>
                </h2>

                <p className="mt-8 font-sans text-[1.1rem] leading-relaxed text-[#42514A] md:mt-10 md:text-[1.35rem] xl:text-[1.55rem] 2xl:text-[1.75rem]">
                    Ein gepflegter Garten ist die Visitenkarte Ihrer Immobilie.
                    Wir planen unsere Arbeitsschritte genau ein – von der{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        laufenden Pflege
                    </span>{" "}
                    über den{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        fachgerechten Rückschnitt
                    </span>{" "}
                    bis hin zu saisonalen Einsätzen. Unser Team garantiert eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        saubere Projektabwicklung
                    </span>{" "}
                    und sorgt dafür, dass Ihr Außenbereich zu jeder Jahreszeit
                    in Bestform bleibt.
                </p>
            </div>
        </div>
    );
};

export default GartenArbeitsablauf;
