/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import MobileFooter from "../MobileFooter.jsx";
import Header from "../Header.jsx"; // Falls benötigt, sonst entfernen

const FORM_ENDPOINT = `${import.meta.env.VITE_API_URL}/api/contact`;

function Kontakt() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("Anfrage-Typ", "ALLGEMEINER KONTAKT");

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
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

    return (
        <section className="w-full bg-white">
            <div className="h-20" />
            <div className="mx-auto max-w-[1700px] px-6 py-16 md:px-12 lg:px-20 lg:py-24">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D]">
                            Kontakt & Anfrage
                        </span>
                        <h1 className="font-heading mt-6 text-4xl font-extrabold leading-[1.1] text-[#083224] md:text-5xl lg:text-6xl">
                            Lassen Sie uns Ihr <br />
                            <span className="text-[#2AA34D]">
                                Projekt realisieren.
                            </span>
                        </h1>
                        <p className="mt-8 font-sans text-lg leading-relaxed text-[#42514A]">
                            Ob private Immobilie oder gewerbliches Objekt...
                        </p>
                        <ul className="mt-10 space-y-6">
                            {[
                                {
                                    title: "Erstklassige Qualität",
                                    desc: "Präzises Handwerk und hochwertige Materialien für Ihr Zuhause.",
                                },
                                {
                                    title: "Termintreue",
                                    desc: "Zuverlässige Planung und pünktliche Ausführung vor Ort.",
                                },
                                {
                                    title: "Alles aus einer Hand",
                                    desc: "Von der Beratung bis zur Montage – wir begleiten Ihr gesamtes Vorhaben.",
                                },
                                {
                                    title: "Transparente Preise",
                                    desc: "Faire Kalkulationen ohne versteckte Kosten für maximale Planungssicherheit.",
                                },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <FiCheckCircle
                                        className="mt-1 flex-shrink-0 text-[#2AA34D]"
                                        size={24}
                                    />
                                    <div>
                                        <h4 className="font-sans font-bold text-[#083224]">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-[#42514A]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="rounded-[4px] p-8 shadow-sm md:p-12 lg:p-16">
                            <h3 className="font-heading mb-10 text-2xl font-bold uppercase tracking-tight text-[#083224]">
                                Direkt-Anfrage
                            </h3>
                            <form
                                className="space-y-10"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Name *
                                        </label>
                                        <input
                                            name="Name"
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Telefon *
                                        </label>
                                        <input
                                            name="Telefon"
                                            type="tel"
                                            placeholder="Telefon"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            E-Mail *
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="E-Mail"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={labelClasses}>
                                            Betreff *
                                        </label>
                                        <select
                                            name="Betreff"
                                            required
                                            className={
                                                inputClasses +
                                                " appearance-none cursor-pointer"
                                            }
                                        >
                                            <option value="">
                                                Grund der Anfrage
                                            </option>
                                            <option value="Montage">
                                                Montagearbeiten & Aufbau
                                            </option>
                                            <option value="Maler">
                                                Renovierungsarbeiten
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className={labelClasses}>
                                        Ihre Nachricht
                                    </label>
                                    <textarea
                                        name="Nachricht"
                                        rows="2"
                                        placeholder="Nachricht..."
                                        className={
                                            inputClasses + " resize-none"
                                        }
                                    />
                                </div>
                                <div className="space-y-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#083224] py-5 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#0c4432] md:py-6 md:text-base"
                                    >
                                        {loading
                                            ? "Wird gesendet..."
                                            : "Anfrage jetzt absenden"}
                                    </button>
                                    {status === "success" && (
                                        <div className="flex items-center justify-center gap-2 rounded bg-green-50 p-4 text-sm font-bold text-green-700 border border-green-200 animate-fade-in">
                                            <FiCheckCircle size={18} /> Vielen
                                            Dank! Ihre Anfrage wurde erfolgreich
                                            verschickt.
                                        </div>
                                    )}
                                    {status === "error" && (
                                        <div className="rounded bg-red-50 p-4 text-sm font-bold text-red-700 border border-red-200">
                                            Ein Fehler ist aufgetreten. Bitte
                                            versuchen Sie es später erneut.
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <MobileFooter />
        </section>
    );
}
export default Kontakt;
