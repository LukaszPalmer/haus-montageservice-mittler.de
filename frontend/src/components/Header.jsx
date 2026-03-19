import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import {
    FiPhone,
    FiArrowUpRight,
    FiMenu,
    FiX,
    FiInstagram,
    FiLinkedin,
    FiFacebook,
} from "react-icons/fi";
import HeaderSearch from "../components/HeaderComponents/HeaderSearch.jsx";
import LogoMittlerTabletQuery from "../media/rdy.png";
import LogoMittlerLaptopQuery from "../media/laptopQuery.png";
import HeaderGrowth from "./HeaderComponents/HeaderGrowth.jsx";
import New_PNG_Logo_Mobile from "../media/New_PNG_Logo_Mobile.png";

const SocialIcons = ({ className }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        {[
            { icon: <FiInstagram size={18} />, href: "#" },
            { icon: <FiLinkedin size={18} />, href: "#" },
            { icon: <FiFacebook size={18} />, href: "#" },
        ].map((social, idx) => (
            <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2AA34D]/20 text-[#083224] transition-all hover:bg-[#2AA34D] hover:text-white"
            >
                {social.icon}
            </a>
        ))}
    </div>
);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            if (window.scrollY > 100) {
                setIsVisible(false);
            }
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                setIsVisible(true);
            }, 250);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinkClass = ({ isActive }) =>
        `relative py-1 font-sans text-[0.95rem] font-medium tracking-wide transition-all duration-300 xl:text-[1.05rem] 2xl:text-[1.15rem] min-[2200px]:text-[1.3rem] ${
            isActive
                ? "text-[#2AA34D]"
                : "text-[#083224]/80 hover:text-[#2AA34D]"
        } group`;

    const mobileNavLinkClass = ({ isActive }) =>
        `flex items-center justify-between rounded-xl px-5 py-4 font-sans text-[1.1rem] font-semibold transition-all duration-300 ${
            isActive
                ? "bg-[#2AA34D]/[0.08] text-[#2AA34D]"
                : "text-[#083224] hover:bg-gray-50"
        }`;

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className={`sticky top-0 z-[100] w-full transition-all duration-500 ease-in-out ${
                scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white"
            } ${
                isVisible || isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
            }`}
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_100%_at_50%_0%,rgba(42,163,77,0.03)_0%,transparent_100%)]" />

            <HeaderGrowth />

            <div className="relative mx-auto w-full max-w-[1700px] px-5 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-[1900px] 2xl:px-20 min-[2200px]:max-w-[2200px] min-[2200px]:px-24 min-[2200px]:py-6">
                
                <div className="relative z-50 flex items-center justify-between gap-8">
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={`relative z-10 shrink-0 transition-transform duration-500 hover:scale-[1.02] ${isSearchOpen ? "hidden lg:block" : "block"}`}
                    >
                        <img
                            src={New_PNG_Logo_Mobile}
                            alt="Logo"
                            className="h-10 w-auto md:hidden"
                        />
                        <img
                            src={LogoMittlerTabletQuery}
                            alt="Logo"
                            className="hidden h-14 w-auto md:block lg:hidden"
                        />
                        <img
                            src={LogoMittlerLaptopQuery}
                            alt="Logo"
                            className="hidden h-14 w-auto lg:block xl:h-16 2xl:h-20 min-[2200px]:h-24"
                        />
                    </NavLink>

                    {/* Desktop Navigation & Actions */}
                    <div className="hidden flex-1 items-center justify-between md:flex">
                        
                        <div className={`relative z-50 transition-all duration-300 ${isSearchOpen ? "w-full lg:w-auto lg:pl-10 xl:pl-20" : "pl-4 lg:pl-10 xl:pl-20"}`}>
                            <HeaderSearch onSearchStateChange={setIsSearchOpen} />
                        </div>

                        <div className={`relative z-10 flex items-center gap-6 lg:gap-8 xl:gap-10 ${isSearchOpen ? "hidden lg:flex" : "flex"}`}>
                            <SocialIcons className="hidden md:flex lg:hidden mr-4 transition-all" />

                            <a
                                href="tel:015753137765"
                                className="group flex lg:hidden 2xl:flex items-center gap-3 font-sans text-[0.95rem] font-bold text-[#083224] transition-colors hover:text-[#2AA34D] 2xl:text-[1.15rem]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2AA34D]/[0.05] text-[#2AA34D] transition-all group-hover:bg-[#2AA34D] group-hover:text-white">
                                    <FiPhone size={18} />
                                </div>
                                <span className="hidden 2xl:inline">
                                    01575 3137765
                                </span>
                            </a>

                            <div className="flex items-center gap-3 xl:gap-4">
                                <Link
                                    to="/karriere"
                                    className="hidden border border-[#D9E7DC] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#083224] transition-all hover:border-[#2AA34D] hover:text-[#2AA34D] lg:flex xl:px-8 xl:py-4"
                                >
                                    Karriere
                                </Link>
                                <Link
                                    to="/kontakt"
                                    className="group flex items-center gap-2 bg-[#083224] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#2AA34D] hover:shadow-lg hover:shadow-[#2AA34D]/20 xl:px-8 xl:py-4"
                                >
                                    Jetzt anfragen{" "}
                                    <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className={`flex items-center gap-3 sm:gap-5 md:hidden transition-all duration-300 ${isSearchOpen ? "w-full" : ""}`}>
                        <div className={`${isSearchOpen ? "w-full" : ""}`}>
                            <HeaderSearch onSearchStateChange={setIsSearchOpen} />
                        </div>

                        {!isSearchOpen && (
                            <>
                                <a
                                    href="tel:015753137765"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2AA34D]/[0.08] text-[#2AA34D] transition-all"
                                >
                                    <FiPhone size={20} />
                                </a>
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-[#083224] relative z-[60] flex h-10 w-10 shrink-0 items-center justify-end"
                                >
                                    {isMenuOpen ? (
                                        <FiX size={28} />
                                    ) : (
                                        <FiMenu size={28} />
                                    )}
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Sub-Navigation (Desktop) */}
                <nav className="relative z-10 mt-6 hidden border-t border-[#F0F4F1] pt-6 md:block">
                    <div className="flex items-center justify-between w-full">
                        <ul className="flex flex-1 items-center justify-between lg:justify-start lg:gap-8 xl:gap-12">
                            {[
                                { name: "Startseite", path: "/" },
                                {
                                    name: "Montagearbeiten",
                                    path: "/montagearbeiten",
                                },
                                {
                                    name: "Hausmeisterarbeiten",
                                    path: "/hausmeisterarbeiten",
                                },
                                { name: "Malerarbeiten", path: "/malerarbeiten" },
                                { name: "Gartenarbeiten", path: "/gartenarbeiten" },
                                { name: "Putzarbeiten", path: "/putzarbeiten" },
                            ].map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={navLinkClass}
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2AA34D] transition-all duration-300 group-hover:w-full" />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="tel:015753137765"
                            className="group hidden lg:flex 2xl:hidden items-center gap-3 font-sans text-[1.05rem] font-bold text-[#083224] transition-colors hover:text-[#2AA34D] shrink-0 ml-8 mr-2 xl:mr-6"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2AA34D]/[0.05] text-[#2AA34D] transition-all group-hover:bg-[#2AA34D] group-hover:text-white">
                                <FiPhone size={18} />
                            </div>
                            <span>
                                01575 3137765
                            </span>
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 top-[72px] z-50 transform bg-white transition-transform duration-500 md:hidden h-[calc(100vh-72px)] overflow-y-auto ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <nav className="flex min-h-full flex-col p-6">
                        <div className="mb-8 flex flex-col items-center justify-center border-b border-gray-100 pb-8">
                            <span className="mb-4 font-sans text-[0.7rem] font-bold uppercase tracking-widest text-slate-400">
                                Folgen Sie uns
                            </span>
                            <SocialIcons />
                        </div>

                        <ul className="space-y-2">
                            <li>
                                <NavLink
                                    to="/"
                                    className={mobileNavLinkClass}
                                    onClick={closeMenu}
                                >
                                    Startseite
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/montagearbeiten"
                                    className={mobileNavLinkClass}
                                    onClick={closeMenu}
                                >
                                    Montagearbeiten
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/hausmeisterarbeiten"
                                    className={mobileNavLinkClass}
                                    onClick={closeMenu}
                                >
                                    Hausmeisterarbeiten
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/malerarbeiten"
                                    className={mobileNavLinkClass}
                                    onClick={closeMenu}
                                >
                                    Malerarbeiten
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/gartenarbeiten"
                                    className={mobileNavLinkClass}
                                    onClick={closeMenu}
                                >
                                    Gartenarbeiten
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/putzarbeiten"
                                    className={mobileNavLinkClass}
                                    onClick={closeMenu}
                                >
                                    Putzarbeiten
                                </NavLink>
                            </li>
                        </ul>
                        <div className="mt-auto pt-8 pb-8 space-y-4">
                            <Link
                                to="/kontakt"
                                onClick={closeMenu}
                                className="flex h-14 items-center justify-center bg-[#083224] font-bold uppercase tracking-widest text-white shadow-lg shadow-[#083224]/20"
                            >
                                Jetzt anfragen
                            </Link>
                            <Link
                                to="/karriere"
                                onClick={closeMenu}
                                className="flex h-14 items-center justify-center border border-[#D9E7DC] font-bold uppercase tracking-widest text-[#083224]"
                            >
                                Karriere
                            </Link>
                            <a
                                href="tel:015753137765"
                                className="flex h-14 items-center justify-center border border-[#D9E7DC] font-bold text-[#083224] rounded-sm"
                            >
                                01575 3137765
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;