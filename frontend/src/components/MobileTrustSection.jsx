import { Timer, Banknote, ShieldCheck, Zap } from "lucide-react";

function MobileTrustSection() {
    const items = [
        {
            title: "Reaktionsschnell",
            text: "Garantiert zeitnahe Rückmeldung und eine effiziente Planung Ihrer Projekte.",
            icon: <Timer size={32} strokeWidth={1.5} />,
        },
        {
            title: "Transparent",
            text: "Kostenlose Erstberatung und verbindliche Angebote ohne versteckte Gebühren.",
            icon: <Banknote size={32} strokeWidth={1.5} />,
        },
        {
            title: "Zertifiziert",
            text: "Höchste Qualitätsstandards durch geschultes Personal und saubere Arbeitsprozesse.",
            icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        },
        {
            title: "Vielseitig",
            text: "Maßgeschneiderte Service-Lösungen für Haushalt, Garten und Gewerbeobjekte.",
            icon: <Zap size={32} strokeWidth={1.5} />,
        },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 lg:py-32 xl:py-40">
            <div className="mx-auto w-full max-w-[100%] px-5 md:px-8 lg:px-12 xl:max-w-[1700px] xl:px-16 2xl:max-w-[1900px] 2xl:px-20 min-[2200px]:max-w-[2200px]">
                
                {/* Header Bereich */}
                <div className="mb-16 text-center md:mb-24 lg:mb-32">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#2AA34D] md:text-sm lg:text-[1rem]">
                        Ihr Vorteil
                    </span>

                    <h2 className="font-heading mt-4 text-[2.2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#083224] md:text-[3.2rem] lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[5.6rem]">
                        Warum wir die <br /> richtige Wahl sind
                    </h2>

                    <p className="font-sans mx-auto mt-6 max-w-[800px] text-[1.05rem] leading-relaxed text-[#42514A] md:mt-8 md:text-[1.2rem] lg:text-[1.35rem] xl:text-[1.5rem]">
                        Wir setzen auf persönliche Betreuung und erstklassige Ergebnisse. Unser Fokus liegt auf nachhaltigen Lösungen, die den Wert Ihres Objekts langfristig sichern.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 xl:gap-x-16">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Icon Bereich - Minimalistisch ohne Kreise */}
                            <div className="mb-8 flex h-16 w-16 items-center justify-center text-[#2AA34D] transition-transform duration-300 group-hover:-translate-y-2">
                                {item.icon}
                            </div>

                            {/* Akzentlinie */}
                            <div className="mb-8 h-[2px] w-12 bg-[#2AA34D]/20 transition-all duration-300 group-hover:w-24 group-hover:bg-[#2AA34D]" />

                            <h3 className="font-heading text-[1.25rem] font-bold uppercase tracking-tight text-[#083224] lg:text-[1.5rem] xl:text-[1.7rem]">
                                {item.title}
                            </h3>

                            <p className="font-sans mt-4 max-w-[280px] text-[0.95rem] leading-7 text-[#556963] md:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MobileTrustSection;