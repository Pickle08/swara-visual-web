import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        "Home",
        "About",
        "Our Commitment",
        "Events",
        "Equipments",
        "Contact",
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled || isMobileMenuOpen
                    ? "bg-black/80 backdrop-blur-xl py-2" // Sedikit lebih gelap dari 20 agar teks terbaca saat di-scroll
                    : "bg-transparent py-4"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/image/logo/swara.png"
                        alt="Logo"
                        className="h-14 md:h-20 w-auto object-contain cursor-pointer"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-[12px] font-bold text-white uppercase tracking-widest">
                    {navLinks.map((item) => (
                        <li
                            key={item}
                            className="relative group overflow-hidden py-2">
                            <Link
                                to={
                                    item === "Home"
                                        ? "/"
                                        : `/${item
                                              .toLowerCase()
                                              .replace(/\s+/g, "-")}`
                                }
                                className="hover:text-brandLime transition-colors duration-300 relative block"
                                onClick={() => setIsMobileMenuOpen(false)}>
                                {item}
                                {/* Pindahkan Span Garis Bawah ke SINI (di dalam Link) */}
                                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-brandLime -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 speculative ease-out"></span>
                            </Link>

                            {/* HAPUS TAG <a> INI, jangan double link */}
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-in-out overflow-hidden ${
                    isMobileMenuOpen
                        ? "max-h-screen border-b border-white/10"
                        : "max-h-0"
                }`}>
                <ul className="flex flex-col items-center py-12 gap-8">
                    {navLinks.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`} // DIPERBAIKI DISINI
                                className="text-white text-xl font-bold uppercase tracking-widest hover:text-[#D4FF00] active:text-[#D4FF00]"
                                onClick={() => setIsMobileMenuOpen(false)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
