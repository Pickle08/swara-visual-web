import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Commitment from "./pages/Commitment";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Equipments from "./pages/Equipments";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <main className="bg-black min-h-screen">
                <Navbar />
                <Routes>
                    {/* Halaman Utama (Home) */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                {/* Kamu bisa tambah section lain khusus Home di sini */}
                            </>
                        }
                    />

                    <Route path="/about" element={<About />} />
                    <Route path="/our-commitment" element={<Commitment />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:eventId" element={<EventDetail />} />
                    <Route path="/equipments" element={<Equipments />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <WhatsAppButton />
                <Footer />
            </main>
        </Router>
    );
}

export default App;
