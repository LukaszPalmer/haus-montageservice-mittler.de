import React from "react";
import Obekt_Reinigung from "../media/Putzen_AVIF/Objekt_Reinigung.avif"; 
import Treppenhausreinigung from "../media/Putzen_AVIF/Treppenhausreinigung.avif";
import Allgemeine_Putzdienste from "../media/Putzen_AVIF/Allgemeine_Putzdienste.avif";
import Küchen_Oberflächenreinigung from "../media/Putzen_AVIF/Küchen_Oberflächenreinigung.avif";
import Fensternahe_Reinigung from "../media/Putzen_AVIF/Fensternahe_Reinigung.avif";
import Flexible_Reinigungshilfe from "../media/Putzen_AVIF/Flexible_Reinigungshilfe.avif";
import Tablet_Query_Flexible_Reinigungshilfe from '../media/Putzen_AVIF/Tablet_Query_Flexible_Reinigungshilfe_QuadratFormat.avif';


import PutzServiceAblauf from "./PutzarbeitenComponents/PutzServiceAblauf";
import PutzFAQBereich from "./PutzarbeitenComponents/PutzFAQBereich";

function PutzLeistungenGrid() {
    const leistungen = [
        {
            title: "Objektreinigung",
            text: (
                <>
                    Unsere professionelle Objektreinigung bietet umfassende Lösungen für den Werterhalt und die langfristige Pflege Ihrer Wohn- und Gewerbeimmobilien. Wir entwickeln maßgeschneiderte Hygienekonzepte, die für{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        höchste Hygienestandards
                    </span>{" "}
                    und eine dauerhaft{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        repräsentative Optik
                    </span>
                    {" "}sorgen. So hinterlässt Ihr Objekt bei Bewohnern, Mitarbeitern und Gästen jederzeit einen professionellen und makellosen Eindruck. Von der sorgfältigen Grundreinigung bis zur regelmäßigen Unterhaltsreinigung decken wir alle Aspekte der modernen Gebäudereinigung ab, um die Aufenthaltsqualität und den Wert Ihrer Immobilie nachhaltig zu sichern.
                </>
            ),
            image: Obekt_Reinigung,
            link: "/kontakt",
            // Auf Tablet und Laptop (md bis xl) nur 1 Spalte breit, damit es neben Treppenhausreinigung passt
            wrapper: "md:col-span-1 xl:col-span-2",
            imageHeight:
                "h-64 md:h-[300px] lg:h-[350px] xl:h-[460px] 2xl:h-[520px] min-[2200px]:h-[580px]",
            titleSize:
                "text-[1.55rem] md:text-[1.9rem] lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[2.9rem] min-[2200px]:text-[3.2rem]",
        },
        {
            title: "Treppenhausreinigung",
            text: (
                <>
                    Mit unserer spezialisierten Treppenhausreinigung sorgen wir für die gründliche und zuverlässige Säuberung von Treppenhäusern, Eingangsbereichen, Fluren und Laufwegen in Wohnanlagen sowie Geschäftsgebäuden. Durch feste Reinigungsintervalle und den Einsatz professioneller Reinigungsmittel entsteht ein{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        gepflegter erster Eindruck
                    </span>{" "}
                    bei jedem Besucher und ein sichtbar{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        sauberes Gesamtbild
                    </span>{" "}
                    im täglichen Gebrauch. Wir entfernen Schmutz und Staub, reinigen Geländer, Briefkastenanlagen sowie Fahrstühle und garantieren eine einladende, sichere Atmosphäre für Mieter und Kunden.
                </>
            ),
            image: Treppenhausreinigung,
            link: "/kontakt",
            wrapper: "md:col-span-1 xl:col-span-1",
            imageHeight:
                "h-64 md:h-[300px] lg:h-[350px] xl:h-[340px] 2xl:h-[390px] min-[2200px]:h-[430px]",
            titleSize:
                "text-[1.3rem] md:text-[1.5rem] lg:text-[1.78rem] xl:text-[2.05rem] 2xl:text-[2.3rem] min-[2200px]:text-[2.5rem]",
        },
        {
            title: "Allgemeine Putzdienste",
            text: (
                <>
                    Unsere allgemeinen Putzdienste und privaten Reinigungsleistungen bieten Ihnen zuverlässige Unterstützung bei klassischen Reinigungsarbeiten im Alltag für Haus, Wohnung und Objekt. Wir übernehmen alltägliche Aufgaben wie Staubsaugen, Bodenwischen, Staubwischen und die hygienische Reinigung von Sanitäreinrichtungen. So schaffen wir nachhaltig{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        Ordnung
                    </span>{" "}
                    und ein dauerhaft{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        gepflegtes Umfeld
                    </span>
                    , das sauber und einladend wirkt. Sparen Sie wertvolle Zeit und vertrauen Sie auf unsere diskreten und gründlichen Reinigungskräfte für Ihr Zuhause oder Büro.
                </>
            ),
            image: Allgemeine_Putzdienste,
            link: "/kontakt",
            wrapper: "md:col-span-1 xl:col-span-1",
            imageHeight:
                "h-64 md:h-[300px] lg:h-[350px] xl:h-[340px] 2xl:h-[390px] min-[2200px]:h-[430px]",
            titleSize:
                "text-[1.3rem] md:text-[1.5rem] lg:text-[1.78rem] xl:text-[2.05rem] 2xl:text-[2.3rem] min-[2200px]:text-[2.5rem]",
        },
        {
            title: "Küchen- & Oberflächenreinigung",
            text: (
                <>
                    Die professionelle Küchenreinigung und Oberflächenpflege umfasst die tiefenwirksame Reinigung und Desinfektion stark beanspruchter Oberflächen, Arbeitsplatten, Nutzbereiche und Küchenfronten. Wir entfernen hartnäckiges Fett, Schmutz und Keime und sorgen für kompromisslose Hygiene in sensiblen Bereichen. Durch eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        gründliche Ausführung
                    </span>{" "}
                    und den Einsatz spezieller, materialschonender Reinigungsmittel bleiben Ihre Flächen langfristig{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        gepflegted und ordentlich
                    </span>
                    . Ideal für Privathaushalte, Büroküchen und gewerbliche Einrichtungen mit hohen Sauberkeitsansprüchen.
                </>
            ),
            image: Küchen_Oberflächenreinigung,
            link: "/kontakt",
            // Hier ebenfalls auf md/lg auf 1 Spalte reduziert für Symmetrie
            wrapper: "md:col-span-1 xl:col-span-2",
            imageHeight:
                "h-64 md:h-[300px] lg:h-[350px] xl:h-[360px] 2xl:h-[410px] min-[2200px]:h-[450px]",
            titleSize:
                "text-[1.3rem] md:text-[1.55rem] lg:text-[1.86rem] xl:text-[2.15rem] 2xl:text-[2.4rem] min-[2200px]:text-[2.65rem]",
        },
        {
            title: "Fensternahe Reinigung",
            text: (
                <>
                    Unser Service für die professionelle Fensterreinigung und fensternahe Reinigung beinhaltet die streifenfreie Säuberung von Fensterbereichen, Rahmen, Glasflächen, Fensterbänken und angrenzenden Oberflächen. Wir befreien Ihre Fenster zuverlässig von Schmutz, Staub und witterungsbedingten Umweltablagerungen. So entsteht eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        helle, gepflegte Wirkung
                    </span>{" "}
                    mit einer sichtbar{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        sauberen Ausstrahlung
                    </span>
                    {" "}Ihrer Räumlichkeiten. Genießen Sie wieder einen klaren Durchblick, ungetrübten Lichteinfall und eine optisch deutlich aufgewertete Immobilie von innen wie von außen.
                </>
            ),
            image: Fensternahe_Reinigung,
            link: "/kontakt",
            wrapper: "xl:col-span-1",
            imageHeight:
                "h-64 md:h-[300px] lg:h-[350px] xl:h-[340px] 2xl:h-[390px] min-[2200px]:h-[430px]",
            titleSize:
                "text-[1.3rem] md:text-[1.55rem] lg:text-[1.86rem] xl:text-[2.08rem] 2xl:text-[2.3rem] min-[2200px]:text-[2.5rem]",
        },
        {
            title: "Flexible Reinigungshilfe",
            text: (
                <>
                    Unsere flexible Reinigungshilfe und kurzfristige Putzhilfe bietet Ihnen bedarfsgerechte und praktische Unterstützung bei unregelmäßigen oder spontanen Reinigungsaufgaben rund um Haus und Objekt. Ob nach Feiern und Events, für Ein- und Auszüge (Endreinigung), als Urlaubsvertretung oder beim groß angelegten Frühjahrsputz: Wir helfen schnell und unkompliziert dort, wo dringend{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        Entlastung
                    </span>{" "}
                    benötigt wird, und sorgen für einen zuverlässig{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        sauberen Gesamteindruck
                    </span>
                    . Maßgeschneiderte Sauberkeit, genau dann, wenn Sie sie am meisten brauchen.
                </>
            ),
            image: Flexible_Reinigungshilfe,
            tabletImage: Tablet_Query_Flexible_Reinigungshilfe,
            link: "/kontakt",
            wrapper: "xl:col-span-1",
            imageHeight:
                "h-64 md:h-[300px] lg:h-[350px] xl:h-[340px] 2xl:h-[390px] min-[2200px]:h-[430px]",
            titleSize:
                "text-[1.3rem] md:text-[1.55rem] lg:text-[1.86rem] xl:text-[2.08rem] 2xl:text-[2.3rem] min-[2200px]:text-[2.5rem]",
        },
    ];

    return (
        <section className="relative mx-auto w-full max-w-[100%] overflow-hidden bg-white px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:max-w-[1700px] xl:px-16 xl:py-24 2xl:max-w-[1900px] 2xl:px-20 2xl:py-28 min-[2200px]:max-w-[2200px] min-[2200px]:px-24 min-[2200px]:py-32 min-[2560px]:max-w-[2400px] min-[2560px]:px-28">
            <div className="relative z-10">
                <div className="max-w-4xl xl:max-w-[1100px] 2xl:max-w-[1220px] min-[2200px]:max-w-[1340px]">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#2AA34D] md:text-sm md:tracking-[0.24em] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.06rem] min-[2200px]:text-[1.12rem]">
                        Unsere Leistungen
                    </span>

                    <h2 className="font-heading mt-4 text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#083224] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[4.9rem] min-[2200px]:text-[5.4rem]">
                        Putzarbeiten
                        <br />
                        im Überblick
                    </h2>

                    <p className="mt-5 max-w-[860px] font-sans text-[1rem] leading-7 text-[#42514A] md:mt-6 md:text-[1.15rem] md:leading-9 lg:text-[1.24rem] lg:leading-9 xl:max-w-[980px] xl:text-[1.38rem] xl:leading-10 2xl:max-w-[1080px] 2xl:text-[1.5rem] min-[2200px]:max-w-[1180px] min-[2200px]:text-[1.62rem] min-[2200px]:leading-[2.9rem]">
                        Entdecken Sie unsere professionellen Putzarbeiten und umfassenden Gebäudereinigungsleistungen für strahlend saubere Räume, bestens gepflegte Objekte und zuverlässige Unterstützung im Alltag. Wir bieten maßgeschneiderte Reinigungskonzepte für private und gewerbliche Kunden.
                    </p>
                </div>

                <div className="mt-10 grid gap-x-6 gap-y-8 md:mt-12 md:grid-cols-2 md:gap-x-8 md:gap-y-10 xl:grid-cols-2 xl:gap-x-10 xl:gap-y-14 2xl:gap-x-12 2xl:gap-y-16 min-[2200px]:gap-x-14 min-[2200px]:gap-y-18">
                    {leistungen.map((item) => (
                        <article
                            key={item.title}
                            className={`group flex h-full flex-col overflow-hidden bg-white ${item.wrapper}`}
                        >
                            <div
                                className={`relative overflow-hidden ${item.imageHeight}`}
                            >
                                {item.tabletImage ? (
                                    <picture>
                                        <source
                                            media="(min-width: 768px) and (max-width: 1023px)"
                                            srcSet={item.tabletImage}
                                        />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                        />
                                    </picture>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>

                            <div className="flex min-h-[320px] flex-1 flex-col justify-between bg-white pt-4 md:min-h-[360px] md:pt-5 lg:min-h-[420px] lg:pt-6 xl:min-h-[470px] xl:pt-7 2xl:min-h-[520px] 2xl:pt-8 min-[2200px]:min-h-[560px]">
                                <div>
                                    <h3
                                        className={`font-heading font-bold leading-tight text-[#083224] ${item.titleSize} min-h-[52px] md:min-h-[60px] lg:min-h-[84px] xl:min-h-[100px] 2xl:min-h-[112px]`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-[96%] font-sans text-sm leading-7 text-[#42514A] md:text-[1rem] md:leading-8 lg:text-[1.08rem] lg:leading-8 xl:text-[1.18rem] xl:leading-9 2xl:text-[1.28rem] min-[2200px]:text-[1.36rem] min-[2200px]:leading-10">
                                        {item.text}
                                    </p>
                                </div>

                                <a
                                    href={item.link}
                                    className="font-sans mt-6 inline-block w-fit bg-[#2AA34D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#238A40] md:text-base lg:px-7 lg:py-3.5 lg:text-[1rem] xl:px-8 xl:py-4 xl:text-[1.08rem] 2xl:px-9 2xl:text-[1.16rem] min-[2200px]:px-10 min-[2200px]:py-4.5 min-[2200px]:text-[1.22rem]"
                                >
                                    Anfragen
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <PutzServiceAblauf/>
            <PutzFAQBereich/>
        </section>
    );
}

export default PutzLeistungenGrid;