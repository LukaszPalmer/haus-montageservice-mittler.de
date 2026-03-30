import { NavLink } from "react-router-dom";
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiInstagram,
    FiLinkedin,
    FiFacebook,
    FiArrowUpRight,
} from "react-icons/fi";
import newLogoMittler from "../media/laptopQuery.png";

function MobileFooter() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative w-full overflow-hidden bg-white font-sans">
            <div className="relative mx-auto w-full max-w-[1700px] px-6 pb-12 pt-20 md:px-12 md:pt-24 lg:px-16 xl:px-20 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px] min-[2560px]:pt-32">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <img
                            src={newLogoMittler}
                            alt="Haus & Montageservice Mittler"
                            className="h-12 w-auto transition-transform duration-500 hover:scale-[1.02] xl:h-16"
                        />
                        <p className="mt-8 max-w-xs text-[1rem] leading-relaxed text-[#556963] xl:text-[1.1rem]">
                            Ihr Partner für erstklassige Objektpflege. Wir
                            sichern den Wert Ihrer Immobilie durch Präzision,
                            Leidenschaft und professionellen Service.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#D9E7DC] text-[#173C2E] transition-all duration-300 hover:border-[#2AA34D] hover:bg-[#2AA34D] hover:text-white"
                                aria-label="Instagram"
                            >
                                <FiInstagram className="text-xl" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#D9E7DC] text-[#173C2E] transition-all duration-300 hover:border-[#2AA34D] hover:bg-[#2AA34D] hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="text-xl" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#D9E7DC] text-[#173C2E] transition-all duration-300 hover:border-[#2AA34D] hover:bg-[#2AA34D] hover:text-white"
                                aria-label="Facebook"
                            >
                                <FiFacebook className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#2AA34D]">
                            Navigation
                        </h4>
                        <nav className="mt-8">
                            <ul className="space-y-4">
                                {[
                                    { name: "Startseite", path: "/" },
                                    {
                                        name: "Montagearbeiten & Service",
                                        path: "/montage-hausmeisterarbeiten",
                                    },
                                    {
                                        name: "Renovierungsarbeiten",
                                        path: "/malerarbeiten",
                                    },
                                    {
                                        name: "Gartenpflege",
                                        path: "/gartenarbeiten",
                                    },
                                    {
                                        name: "Reinigungsarbeiten",
                                        path: "/putzarbeiten",
                                    },
                                ].map((link) => (
                                    <li key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            onClick={scrollToTop}
                                            className="group flex items-center text-[1rem] font-medium text-[#173C2E] transition-colors hover:text-[#2AA34D] xl:text-[1.1rem]"
                                        >
                                            <span className="relative">
                                                {link.name}
                                                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#2AA34D] transition-all duration-300 group-hover:w-full" />
                                            </span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Kontakt Details */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#2AA34D]">
                            Kontakt
                        </h4>
                        <div className="mt-8 space-y-6">
                            <a
                                href="tel:015753137765"
                                className="group flex items-start gap-4"
                            >
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8FCF9] text-[#2AA34D] transition-colors group-hover:bg-[#2AA34D] group-hover:text-white">
                                    <FiPhone size={16} />
                                </div>
                                <div>
                                    <p className="text-[0.9rem] font-bold text-[#173C2E]">
                                        Telefon
                                    </p>
                                    <p className="text-[1rem] text-[#556963]">
                                        01575 3137765
                                    </p>
                                </div>
                            </a>

                            <a
                                href="mailto:info@mittler-service.de"
                                className="group flex items-start gap-4"
                            >
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8FCF9] text-[#2AA34D] transition-colors group-hover:bg-[#2AA34D] group-hover:text-white">
                                    <FiMail size={16} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[0.9rem] font-bold text-[#173C2E]">
                                        E-Mail
                                    </p>
                                    <p className="truncate text-[1rem] text-[#556963]">
                                        info@haus-montageservice-mittler.de
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8FCF9] text-[#2AA34D]">
                                    <FiClock size={16} />
                                </div>
                                <div>
                                    <p className="text-[0.9rem] font-bold text-[#173C2E]">
                                        Servicezeit
                                    </p>
                                    <p className="text-[1rem] text-[#556963]">
                                        Mo. – Fr. 08:00 – 18:00 Uhr
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Einsatzgebiet & CTA */}
                    <div>
                        <h4 className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[#2AA34D]">
                            Einsatzgebiet
                        </h4>
                        <div className="mt-8">
                            <div className="flex items-start gap-4 text-[#556963]">
                                <FiMapPin
                                    className="mt-1 shrink-0 text-[#2AA34D]"
                                    size={20}
                                />
                                <p className="text-[1rem] leading-relaxed">
                                    Düsseldorf, Neuss, Ratingen & Umgebung.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-col gap-4">
                                <NavLink
                                    to="/kontakt"
                                    onClick={scrollToTop}
                                    className="group inline-flex w-full items-center justify-center gap-3 bg-[#083224] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#2AA34D] hover:shadow-xl hover:shadow-[#2AA34D]/20"
                                >
                                    Jetzt anfragen{" "}
                                    <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </NavLink>
                                <NavLink
                                    to="/karriere"
                                    onClick={scrollToTop}
                                    className="group inline-flex w-full items-center justify-center gap-3 border-2 border-[#083224] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#083224] transition-all hover:bg-[#083224] hover:text-white"
                                >
                                    Jetzt bewerben{" "}
                                    <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[#D9E7DC]/50 pt-10 md:flex-row">
                    <p className="order-2 text-[0.9rem] text-[#8EA098] md:order-1">
                        © {currentYear} Haus & Montageservice Mittler. Alle
                        Rechte vorbehalten.
                    </p>

                    <div className="order-1 flex items-center gap-8 md:order-2">
                       
                        <NavLink
                            to="/datenschutz"
                            onClick={scrollToTop}
                            className="text-[0.9rem] font-medium text-[#173C2E] transition-colors hover:text-[#2AA34D]"
                        >
                            Datenschutz
                        </NavLink>
                        <NavLink
                            to="/impressum"
                            onClick={scrollToTop}
                            className="text-[0.9rem] font-medium text-[#173C2E] transition-colors hover:text-[#2AA34D]"
                        >
                            Impressum
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default MobileFooter;
