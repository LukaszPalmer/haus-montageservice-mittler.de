import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import ScrollToTop from "../components/GenerellWebseiteComponents/ScrollToTop.jsx";
import Home from "../pages/Home";
import Montagearbeiten from "../pages/Montagearbeiten.jsx";
import Malerarbeiten from "../pages/Malerarbeiten";
import Hausmeisterarbeiten from '../pages/Hausmeisterarbeiten.jsx';
import Gartenarbeiten from "../pages/Gartenarbeiten";
import Putzarbeiten from "../pages/Putzarbeiten";
import Kontakt from "../components/KontaktComponents/Kontakt.jsx";
import Karriere from "../components/KarriereComponents/Karriere.jsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <ScrollToTop /> 
            
            <main className="min-h-screen bg-white text-slate-800">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/montagearbeiten"
                        element={<Montagearbeiten />}
                    />
                    <Route
                        path="/hausmeisterarbeiten"
                        element={<Hausmeisterarbeiten />}
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