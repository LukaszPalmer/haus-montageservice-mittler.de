/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from "react";
// NEU: FiX importiert für den Schließen-Button
import { FiSearch, FiArrowRight, FiCheckCircle, FiInfo, FiInstagram, FiLinkedin, FiFacebook, FiX } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SEARCH_DATA = [
    {
        category: "Putzarbeiten",
        path: "/putzarbeiten",
        items: [
            "Objektreinigung",
            "Treppenhausreinigung",
            "Allgemeine Putzdienste",
            "Küchen- & Oberflächenreinigung",
            "Fensternahe Reinigung",
            "Flexible Reinigungshilfe",
        ],
    },
    {
        category: "Gartenarbeiten",
        path: "/gartenarbeiten",
        items: [
            "Rasenpflege",
            "Hecken- & Strauchschnitt",
            "Laub- & Grünflächenpflege",
            "Unkrautentfernung",
            "Saisonarbeiten",
            "Allgemeine Gartenhilfe",
        ],
    },
    {
        category: "Renovierungsarbeiten",
        path: "/malerarbeiten",
        items: [
            "Allgemeine Malerhilfe",
            "Deckenanstriche",
            "Ausbesserungsarbeiten",
            "Wandgestaltung",
            "Außenanstriche",
            "Innenanstriche",
        ],
    },
    {
        category: "Montagearbeiten & Hausmeisterarbeiten",
        path: "/montage-hausmeisterarbeiten",
        items: ["Montagearbeiten", "Hausmeisterservice", "Reparaturen"],
    },
];

function HeaderSearch({ onSearchStateChange }) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (onSearchStateChange) {
            onSearchStateChange(isOpen);
        }
    }, [isOpen, onSearchStateChange]);

    useEffect(() => {
        if (query.length < 1) {
            setResults([]);
            return;
        }

        const filtered = SEARCH_DATA.map((section) => ({
            ...section,
            items: section.items.filter(
                (item) =>
                    item.toLowerCase().includes(query.toLowerCase()) ||
                    section.category.toLowerCase().includes(query.toLowerCase())
            ),
        })).filter((section) => section.items.length > 0);

        setResults(filtered);
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target))
                setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (path) => {
        setQuery("");
        setIsOpen(false);
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        /* OPTIMIERUNG: w-full auf kleinen Screens hinzugefügt, wenn offen */
        <div className={`relative z-[99999] ${isOpen ? "w-full lg:w-auto" : "w-auto"}`} ref={searchRef}>
            {/* Search Input Group */}
            <div
                className={`flex items-center transition-all duration-500 relative z-[100001] ${
                    isOpen
                        ? "rounded-full border border-[#2AA34D] bg-white shadow-[0_10px_30px_rgba(42,163,77,0.15)] w-full lg:w-auto"
                        : "rounded-full border border-transparent bg-transparent lg:border-[#083224]/10 lg:bg-[#f9fafb]"
                }`}
            >
                <div
                    onClick={() => setIsOpen(true)}
                    className={`flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                        isOpen ? "h-12 pl-4 pointer-events-none shrink-0" : "h-10 w-10 lg:h-auto lg:w-auto lg:pl-4"
                    }`}
                >
                    <FiSearch
                        className={`${
                            isOpen ? "text-[#2AA34D]" : "text-[#083224] lg:text-[#083224]/40 hover:text-[#2AA34D]"
                        } transition-colors duration-300`}
                        size={20}
                    />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Suchen..."
                    /* OPTIMIERUNG: flex-1 auf mobilen Geräten für volle Breite */
                    className={`h-12 bg-transparent font-sans text-sm text-[#083224] outline-none placeholder:text-slate-400 transition-all duration-700 ease-in-out ${
                        isOpen
                            ? "flex-1 ml-2 opacity-100 min-w-[100px] lg:flex-none lg:w-[260px] xl:w-[450px] 2xl:w-[600px] 4k:w-[900px]"
                            : "w-0 ml-0 opacity-0 lg:w-[180px] xl:w-[300px] 2xl:w-[400px] 4k:w-[600px] lg:opacity-100 lg:ml-3"
                    }`}
                />
                
                {/* NEU: X-Icon zum Schließen (Sichtbar auf allen Geräten, wenn offen) */}
                {isOpen && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                            setQuery("");
                        }}
                        className="flex items-center justify-center h-full pr-4 text-slate-400 hover:text-[#2AA34D] transition-colors shrink-0"
                    >
                        <FiX size={18} />
                    </button>
                )}
            </div>

            {/* WOW-Effect Dropdown */}
            <AnimatePresence>
                {isOpen && query.length >= 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        /* OPTIMIERUNG: Volle Breite auf Mobile (fixed/absolute) */
                        className="absolute left-0 lg:left-auto lg:right-0 top-full mt-2 w-full lg:w-full lg:min-w-[400px] max-h-[70vh] lg:max-h-[60vh] overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_40px_80px_-15px_rgba(8,50,36,0.25)] z-[100000]"
                    >
                        <div className="p-5 md:p-7 overflow-y-auto max-h-[calc(70vh-60px)] lg:max-h-[calc(60vh-60px)]">
                            {results.length > 0 ? (
                                <>
                                    <div className="mb-4 flex items-center justify-between border-b border-slate-50 pb-3">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                            Gefundene Leistungen
                                        </span>
                                        <span className="rounded-full bg-[#2AA34D]/10 px-3 py-1 text-[10px] font-bold text-[#2AA34D]">
                                            {results.reduce(
                                                (acc, curr) => acc + curr.items.length,
                                                0
                                            )}{" "}
                                            Treffer
                                        </span>
                                    </div>

                                    {results.map((group, idx) => (
                                        <div key={idx} className="mb-8 last:mb-0">
                                            <div
                                                onClick={() => handleSelect(group.path)}
                                                className="flex cursor-pointer items-center justify-between group/cat mb-3"
                                            >
                                                <h5 className="text-[12px] font-black uppercase tracking-widest text-[#083224] group-hover/cat:text-[#2AA34D] transition-colors">
                                                    {group.category}
                                                </h5>
                                                <div className="h-[1px] flex-grow mx-4 bg-slate-100 group-hover/cat:bg-[#2AA34D]/20 transition-colors"></div>
                                                <FiArrowRight className="text-slate-300 group-hover/cat:text-[#2AA34D] transition-all" />
                                            </div>

                                            <div className="grid grid-cols-1 gap-1">
                                                {group.items.map((item, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleSelect(group.path)}
                                                        className="group flex items-center justify-between rounded-xl p-3 transition-all duration-200 hover:bg-[#f8fafc] border border-transparent"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2AA34D]/5 text-[#2AA34D] group-hover:bg-[#2AA34D] group-hover:text-white transition-colors">
                                                                <FiCheckCircle size={12} />
                                                            </div>
                                                            <span className="text-sm font-medium text-slate-600 group-hover:text-[#083224] text-left">
                                                                {item}
                                                            </span>
                                                        </div>
                                                        <FiArrowRight className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#2AA34D]" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="py-12 flex flex-col items-center text-center">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-200">
                                        <FiInfo size={28} />
                                    </div>
                                    <h3 className="text-base font-bold text-[#083224]">
                                        Keine direkten Treffer
                                    </h3>
                                    <p className="mt-1 max-w-[200px] text-xs leading-relaxed text-slate-400">
                                        Nichts zu <span className="text-[#2AA34D] font-bold">"{query}"</span> gefunden.
                                    </p>
                                    <button
                                        onClick={() => navigate("/kontakt")}
                                        className="mt-6 rounded-full bg-[#083224] px-6 py-2 text-[11px] font-bold text-white transition-all hover:bg-[#2AA34D]"
                                    >
                                        Jetzt anfragen
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Footer des Dropdowns */}
                        <div className="bg-[#083224] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-1 rounded-full bg-[#2AA34D] animate-pulse" />
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                                    Haus-Montageservice Mittler | Online
                                </p>
                            </div>

                            <div className="flex items-center gap-4 lg:hidden">
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <FiInstagram size={16} />
                                </a>
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <FiLinkedin size={16} />
                                </a>
                                <a href="#" className="text-white/60 hover:text-white transition-colors">
                                    <FiFacebook size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default HeaderSearch;