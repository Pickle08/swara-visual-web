import React from "react";
import { Instagram, Youtube, Music2, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black py-16 px-10 text-white">
            <section className="bg-black py-32 px-10 text-center border-b border-gray-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Ready to elevate your brand with us?
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                        Do you need to bring your event vision to life? From
                        intimate gathering to grand celebration, we can execute
                        your event vision with precision. Don't hesitate to
                        contact us since we look forward to seeing you!
                    </p>

                    {/* Button Let's Talk */}
                    <a
                        href="https://wa.me/6281944131033" // Ganti dengan link WA kamu
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-brandLime text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                        💬 Let's talk with us
                    </a>
                </div>
            </section>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Left: Association Member */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">Member of</span>
                    <div className="bg-[#111] border border-gray-800 px-5 py-2.5 rounded-xl flex items-center gap-3 hover:border-gray-600 transition-all group">
                        {/* Logo IVENDO */}
                        <img
                            src="/image/footer/ivendo.webp"
                            alt="Ivendo"
                            className="h-6 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="font-bold tracking-widest text-xs">
                            INDONESIA
                        </span>
                    </div>
                </div>

                {/* Center: Copyright */}
                <div className="text-center order-3 md:order-2">
                    <p className="text-gray-500 text-sm">Codex Project.</p>
                    <p className="text-gray-600 text-xs mt-1">
                        All Rights Reserved
                    </p>
                </div>

                {/* Right Side: Partners & Social Media */}
                <div className="flex flex-col items-center md:items-end gap-6 order-2 md:order-3">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Row 1: Partner Logos (TSI & AKAN) */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="bg-[#111] border border-gray-800 p-3 rounded-xl hover:border-gray-600 transition-colors">
                                <img
                                    src="/image/footer/tsi-kan.webp"
                                    alt="TSI"
                                    className="h-7 w-auto"
                                />
                            </div>
                        </div>

                        {/* Ganti bagian Social Media Icons sebelumnya dengan ini */}
                        <div className="flex items-center gap-5">
                            <a
                                href="https://instagram.com/swaravisual"
                                target="_blank"
                                className="text-gray-500 hover:text-brandLime transition-colors">
                                <Instagram size={24} />{" "}
                                {/* Ini akan menghilangkan garis coret di atas */}
                            </a>
                            <a
                                href="https://youtube.com/@swaravisual"
                                target="_blank"
                                className="text-gray-500 hover:text-brandLime transition-colors">
                                <Youtube size={24} />
                            </a>
                            <a
                                href="https://tiktok.com/@swaravisual"
                                target="_blank"
                                className="text-gray-500 hover:text-brandLime transition-colors">
                                <Music2 size={24} />
                            </a>
                            <a
                                href="https://x.com/swaravisual"
                                target="_blank"
                                className="text-gray-500 hover:text-brandLime transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
