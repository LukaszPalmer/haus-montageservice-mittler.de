import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import ScrollToTop from "../components/GenerellWebseiteComponents/ScrollToTop.jsx"; // NEU IMPORTIERT
import Home from "../pages/Home";
import MontageHausmeisterarbeiten from "../pages/MontageHausmeisterarbeiten";
import Malerarbeiten from "../pages/Malerarbeiten";
import Gartenarbeiten from "../pages/Gartenarbeiten";
import Putzarbeiten from "../pages/Putzarbeiten";
import Kontakt from "../components/KontaktComponents/Kontakt.jsx";
import Karriere from "../components/KarriereComponents/Karriere.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            {/* Das Gadget wird hier platziert, damit es über allen Routen schwebt */}
            <ScrollToTop /> 
            
            <main className="min-h-screen bg-white text-slate-800">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/montage-hausmeisterarbeiten"
                        element={<MontageHausmeisterarbeiten />}
                    />
                    <Route path="/malerarbeiten" element={<Malerarbeiten />} />
                    <Route
                        path="/gartenarbeiten"
                        element={<Gartenarbeiten />}
                    />
                    <Route path="/putzarbeiten" element={<Putzarbeiten />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/karriere" element={<Karriere />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default AppRouter;