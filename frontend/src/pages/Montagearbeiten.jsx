import MontageBanner_XL_Query_Quadratformat from '../media/MontageBanner/MontageBanner_XL_Query_Quadratformat.png';
import Footer from "../components/MobileFooter.jsx";
import MontageLeistungenGrid from "../components/MontageLeistungenGrid.jsx";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

function MontageHausmeisterarbeiten() {
    const scrollToLeistungen = (e) => {
        e.preventDefault();
        const element = document.getElementById("erste-dienstleistung");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="w-full overflow-x-hidden bg-white">
            {/* --- MOBILE HERO --- */}
            <div className="relative h-[85vh] overflow-hidden md:hidden">
                <img
                    src={MontageBanner_XL_Query_Quadratformat }
                    alt="Professioneller Montageservice in Düsseldorf"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="mt-10">
                        <span className="mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#D7F2DD]">
                            Präzision & Qualität
                        </span>
                        <h1 className="font-heading mb-8 text-4xl font-extrabold leading-[1.1] text-white">
                            Fachgerechte <br />
                            <span className="text-[#2AA34D]">Montage</span>
                        </h1>
                        <p className="mx-auto max-w-sm font-sans text-[1rem] leading-relaxed text-slate-200">
                            Ihr zuverlässiger Partner für{" "}
                            <span className="text-white font-medium">
                                professionelle Montagen
                            </span>
                            , Installationen und fachgerechte Ausführungen
                            direkt vor Ort in Düsseldorf.
                        </p>
                        <div className="mt-12 flex flex-col gap-4">
                            <a
                                href="#erste-dienstleistung"
                                onClick={scrollToLeistungen}
                                className="inline-flex items-center justify-center bg-[#2AA34D] px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white shadow-lg"
                            >
                                Leistungen <FiArrowDown className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TABLET HERO --- */}
            <div className="hidden md:block lg:hidden">
                <div className="relative h-[70vh] overflow-hidden">
                    <img
                        src={MontageBanner_XL_Query_Quadratformat }
                        alt="Professioneller Montageservice"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full px-10">
                            <div className="max-w-[600px]">
                                <span className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.25em] text-[#D7F2DD]">
                                    Montage & Installation
                                </span>
                                <h1 className="font-heading mt-4 text-[4rem] font-extrabold leading-[1] tracking-[-0.03em] text-white">
                                    Experten für<br />
                                    <span className="text-[#2AA34D]">
                                        Montagen
                                    </span>
                                </h1>
                                <p className="mt-6 font-sans text-[1.2rem] leading-relaxed text-slate-200">
                                    Wir sichern die Qualität Ihres Projekts durch{" "}
                                    <span className="text-white">
                                        passgenaue Montagen
                                    </span>{" "}
                                    und saubere Handwerksarbeit in Düsseldorf.
                                </p>
                                <div className="mt-10 flex gap-5">
                                    <a
                                        href="#erste-dienstleistung"
                                        onClick={scrollToLeistungen}
                                        className="bg-[#2AA34D] px-8 py-4 text-[1rem] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#238A40]"
                                    >
                                        Mehr erfahren
                                    </a>
                                    <a
                                        href="/kontakt"
                                        className="border border-white/30 bg-white/10 px-8 py-4 text-[1rem] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20"
                                    >
                                        Anfragen
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- DESKTOP HERO --- */}
            <div className="hidden lg:block">
                <div className="relative h-[85vh] overflow-hidden">
                    <img
                        src={MontageBanner_XL_Query_Quadratformat }
                        alt="Exklusive Montagearbeiten"
                        className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center">
                        <div className="mx-auto w-full max-w-[1700px] px-16 xl:px-20 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px]">
                            <div className="max-w-[950px]">
                                <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#D7F2DD] xl:text-[1.1rem]">
                                    Premium Montageservice
                                </span>
                                <h1 className="font-heading mt-6 text-[5.5rem] font-extrabold leading-[0.9] tracking-[-0.04em] text-white xl:text-[6.5rem] 2xl:text-[7.2rem] min-[2200px]:text-[8rem]">
                                    Präzise<br />
                                    <span className="text-[#2AA34D]">
                                        Montage
                                    </span>
                                </h1>
                                <p className="mt-8 max-w-[750px] font-sans text-[1.4rem] leading-relaxed text-slate-200 xl:text-[1.6rem] 2xl:text-[1.8rem]">
                                    Ihr Partner für{" "}
                                    <span className="font-semibold text-white">
                                        hochwertige Montagearbeiten
                                    </span>{" "}
                                    und anspruchsvolle Installationen. Wir sorgen dafür, dass jedes Detail perfekt sitzt.
                                </p>
                                <div className="mt-12 flex items-center gap-6">
                                    <a
                                        href="#erste-dienstleistung"
                                        onClick={scrollToLeistungen}
                                        className="group flex items-center gap-3 bg-[#2AA34D] px-10 py-5 text-[1.1rem] font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-[#238A40] hover:shadow-[#2AA34D]/30"
                                    >
                                        Leistungen entdecken <FiArrowDown />
                                    </a>
                                    <a
                                        href="/kontakt"
                                        className="group flex items-center gap-3 border border-white/40 bg-white/5 px-10 py-5 text-[1.1rem] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10"
                                    >
                                        Kontakt aufnehmen{" "}
                                        <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-[1700px] px-16 py-24 xl:px-20 2xl:max-w-[1900px] 2xl:py-32 min-[2200px]:max-w-[2200px]">
                    <div className="relative z-10 max-w-[1100px] xl:max-w-[1300px]">
                        <span className="font-sans text-[1rem] font-bold uppercase tracking-[0.3em] text-[#2AA34D]">
                            Vielseitigkeit & Präzision
                        </span>
                        <h2 className="font-heading mt-6 text-[3.5rem] font-extrabold leading-[1] tracking-[-0.03em] text-[#083224] xl:text-[4.5rem] 2xl:text-[5.5rem]">
                            Ihr{" "}
                            <span className="text-[#2AA34D]">
                                Montageservice
                            </span>{" "}
                            für <br />
                            höchste Ansprüche.
                        </h2>
                        <p className="mt-10 font-sans text-[1.3rem] leading-relaxed text-[#42514A] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                            Wir übernehmen sämtliche{" "}
                            <span className="font-semibold text-[#2AA34D]">
                                Montagearbeiten
                            </span>{" "}
                            mit einem klaren Fokus auf Präzision und Ästhetik.
                            Ob gewerbliche Objekte oder private Wohnräume – unser Team garantiert eine{" "}
                            <span className="font-semibold text-[#2AA34D]">
                                saubere Projektabwicklung
                            </span>{" "}
                            und passgenaue Lösungen direkt vor Ort in Düsseldorf.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- TABLET INTRO TEXT --- */}
            <div className="hidden md:block lg:hidden px-10 py-20">
                <span className="font-sans text-[0.9rem] font-bold uppercase tracking-[0.25em] text-[#2AA34D]">
                    Qualität im Fokus
                </span>
                <h2 className="font-heading mt-4 text-[3rem] font-extrabold leading-[1.1] text-[#083224]">
                    Montageservice <br />
                    für höchste Ansprüche.
                </h2>
                <p className="mt-6 text-[1.2rem] leading-relaxed text-[#42514A]">
                    Von der fachgerechten{" "}
                    <span className="text-[#2AA34D] font-medium">
                        Möbelmontage
                    </span>{" "}
                    bis hin zu komplexen{" "}
                    <span className="text-[#2AA34D] font-medium">
                        Systeminstallationen
                    </span>
                    : Wir unterstützen Sie zuverlässig und kompetent bei Ihren Montagevorhaben.
                </p>
            </div>

            <div id="erste-dienstleistung"></div>
            <MontageLeistungenGrid />
            <Footer />
        </section>
    );
}

export default MontageHausmeisterarbeiten;