/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
    FiBriefcase,
    FiClock,
    FiStar,
    FiSend,
    FiFileText,
    FiPaperclip,
    FiCheckCircle,
} from "react-icons/fi";
import MobileFooter from "../MobileFooter.jsx";
import BewerbungWorkFlow from "../KarriereComponents/BewerbungWorkflow.jsx";
import SocialConnect from "../KarriereComponents/SocialConnect.jsx";

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function Karriere() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [cvName, setCvName] = useState("");
    const [letterName, setLetterName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("type", "KARRIERE");

        // Wir nutzen hier direkt die Namen aus den Input-Feldern 'cv' und 'letter'
        // Da wir Multer im Backend mit .array('attachments') nutzen, benennen wir sie um:
        const cvFile = form.elements.cv?.files?.[0];
        const letterFile = form.elements.letter?.files?.[0];

        // Wir löschen die alten Namen aus FormData und hängen sie als 'attachments' an
        formData.delete("cv");
        formData.delete("letter");
        if (cvFile) formData.append("attachments", cvFile);
        if (letterFile) formData.append("attachments", letterFile);

        try {
            const res = await fetch(`${API_BASE_URL}/api/send-email`, {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
                setCvName("");
                setLetterName("");
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const inputClasses =
        "w-full bg-transparent border-b border-slate-300 py-4 text-sm text-[#083224] outline-none placeholder:text-slate-400 focus:border-[#2AA34D] transition-colors md:text-base";
    const labelClasses =
        "font-sans mb-1 block text-[10px] font-bold uppercase tracking-widest text-[#2AA34D]";
    const fileInputClasses =
        "flex w-full items-center gap-3 bg-white border border-dashed border-slate-300 p-4 text-sm text-[#42514A] cursor-pointer hover:border-[#2AA34D] hover:bg-[#F8FCF9] transition-all duration-300";

    const benefits = [
        {
            icon: <FiStar />,
            title: "Premium Werkzeug",
            desc: "Wir arbeiten nur mit Profi-Equipment für beste Ergebnisse.",
        },
        {
            icon: <FiClock />,
            title: "Faire Arbeitszeiten",
            desc: "Pünktlicher Feierabend und eine strukturierte Planung.",
        },
        {
            icon: <FiBriefcase />,
            title: "Sicherer Arbeitsplatz",
            desc: "Langfristige Perspektiven in einem wachsenden Betrieb.",
        },
    ];

    return (
        <section className="w-full bg-white">
            <div className="h-20" />
            <div className="mx-auto max-w-[1700px] px-6 py-16 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D]">
                            Werde Teil des Teams
                        </span>
                        <h1 className="font-heading mt-6 text-4xl font-extrabold leading-[1.1] text-[#083224] md:text-5xl lg:text-6xl">
                            Deine Karriere beim <br />{" "}
                            <span className="text-[#2AA34D]">
                                Haus & Montageservice Mittler.
                            </span>
                        </h1>
                        <p className="mt-8 font-sans text-lg leading-relaxed text-[#42514A]">
                            Wir suchen keine Nummern, sondern
                            Persönlichkeiten...
                        </p>
                        <div className="mt-12 space-y-8">
                            {benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-5"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2AA34D]/[0.08] text-[#2AA34D]">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-bold text-[#083224]">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-sm text-[#42514A] leading-relaxed">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="rounded-[4px] p-8">
                            <h3 className="font-heading mb-10 text-2xl font-bold uppercase tracking-tight text-[#083224]">
                                Kurzbewerbung absenden
                            </h3>
                            <form
                                className="space-y-10"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Vollständiger Name *
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Vor- und Nachname"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            E-Mail Adresse *
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="ihre@email.de"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Telefonnummer *
                                        </label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="Für einen schnellen Rückruf"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Bereich *
                                        </label>
                                        <select
                                            name="subject"
                                            required
                                            className={
                                                inputClasses +
                                                " appearance-none cursor-pointer"
                                            }
                                        >
                                            <option value="">
                                                Bitte wählen...
                                            </option>
                                            <option value="Montage">
                                                Montage & Handwerk
                                            </option>
                                            <option value="Garten">
                                                Gartenpflege
                                            </option>
                                            <option value="Maler">
                                                Malerarbeiten
                                            </option>
                                            <option value="Reinigung">
                                                Reinigung
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Lebenslauf (PDF) *
                                        </label>
                                        <label className={fileInputClasses}>
                                            <FiFileText
                                                className="text-[#2AA34D]"
                                                size={20}
                                            />
                                            <span className="truncate">
                                                {cvName || "Datei auswählen"}
                                            </span>
                                            <input
                                                name="cv"
                                                type="file"
                                                accept=".pdf"
                                                required
                                                className="hidden"
                                                onChange={(e) =>
                                                    setCvName(
                                                        e.target.files[0]
                                                            ?.name || ""
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Anschreiben (PDF) - Optional
                                        </label>
                                        <label className={fileInputClasses}>
                                            <FiPaperclip
                                                className="text-slate-400"
                                                size={20}
                                            />
                                            <span className="truncate">
                                                {letterName ||
                                                    "Datei auswählen"}
                                            </span>
                                            <input
                                                name="letter"
                                                type="file"
                                                accept=".pdf"
                                                className="hidden"
                                                onChange={(e) =>
                                                    setLetterName(
                                                        e.target.files[0]
                                                            ?.name || ""
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className={labelClasses}>
                                        Erzähl uns kurz von dir
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="2"
                                        placeholder="Erfahrung..."
                                        className={
                                            inputClasses + " resize-none"
                                        }
                                    />
                                </div>
                                <div className="space-y-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group flex w-full items-center justify-center gap-3 bg-[#083224] py-5 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#0c4432] md:py-6 md:text-base"
                                    >
                                        {loading
                                            ? "Wird gesendet..."
                                            : "Bewerbung absenden"}{" "}
                                        <FiSend className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                    {status === "success" && (
                                        <div className="flex items-center justify-center gap-2 rounded bg-green-50 p-4 text-sm font-bold text-green-700 border border-green-200 animate-fade-in">
                                            <FiCheckCircle size={18} /> Vielen
                                            Dank! Ihre Bewerbung wurde
                                            erfolgreich verschickt.
                                        </div>
                                    )}
                                    {status === "error" && (
                                        <div className="rounded bg-red-50 p-4 text-sm font-bold text-red-700 border border-red-200">
                                            Ein Fehler ist aufgetreten. Bitte
                                            versuchen Sie es später erneut.
                                        </div>
                                    )}
                                </div>
                                <p className="text-center text-[10px] text-slate-400">
                                    Wir melden uns innerhalb von 48 Stunden bei
                                    dir.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <BewerbungWorkFlow />
            <SocialConnect />
            <MobileFooter />
        </section>
    );
}
export default Karriere;
