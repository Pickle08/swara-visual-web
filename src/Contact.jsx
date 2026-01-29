import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section className="bg-black text-white py-32 px-6 md:px-20 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* --- HEADER --- */}
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
                        Let's build <br />{" "}
                        <span className="text-brandLime underline decoration-white/20">
                            something great.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl uppercase tracking-widest font-medium">
                        Ready to elevate your brand with us? Reach out and let's
                        start the conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* --- LEFT SIDE: CONTACT INFO --- */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-brandLime font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                <span className="w-8 h-[2px] bg-brandLime"></span>
                                Contact Info
                            </h3>

                            <div className="space-y-8">
                                <div className="group flex items-center gap-6 cursor-pointer">
                                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brandLime group-hover:text-black transition-all duration-500">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                                            Email Us
                                        </p>
                                        <p className="text-xl font-bold italic">
                                            hello@swaravisual.com
                                        </p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-6 cursor-pointer">
                                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brandLime group-hover:text-black transition-all duration-500">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                                            Call/WhatsApp
                                        </p>
                                        <p className="text-xl font-bold italic">
                                            +62 812 3456 7890
                                        </p>
                                    </div>
                                </div>

                                <div className="group flex items-center gap-6 cursor-pointer">
                                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-brandLime group-hover:text-black transition-all duration-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                                            Office
                                        </p>
                                        <p className="text-xl font-bold italic">
                                            Jakarta, Indonesia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: CONTACT FORM --- */}
                    <div className="bg-zinc-900/50 p-8 md:p-12 rounded-sm border border-white/5 backdrop-blur-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-black/50 border-b border-white/20 p-4 focus:border-brandLime outline-none transition-colors text-white uppercase italic text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-black/50 border-b border-white/20 p-4 focus:border-brandLime outline-none transition-colors text-white uppercase italic text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">
                                    Interested In
                                </label>
                                <select className="w-full bg-black/50 border-b border-white/20 p-4 focus:border-brandLime outline-none transition-colors text-white uppercase italic text-sm">
                                    <option>Event Production</option>
                                    <option>Equipment Rental</option>
                                    <option>Visual Design</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">
                                    Your Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-black/50 border-b border-white/20 p-4 focus:border-brandLime outline-none transition-colors text-white uppercase italic text-sm resize-none"></textarea>
                            </div>

                            <button className="w-full bg-brandLime text-black font-black uppercase italic py-5 flex items-center justify-center gap-3 hover:bg-white transition-all duration-500 group">
                                Send Message
                                <Send
                                    size={18}
                                    className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                                />
                            </button>
                        </form>
                    </div>
                </div>
                {/* --- GOOGLE MAPS SECTION --- */}
                <div className="mt-20 w-full h-[450px] rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.842247240165!2d106.79781877484433!3d-6.289242893700084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f18dbda9f28b%3A0x94ff6c0c0a330d65!2sSWARA%20VISUAL!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Swara Visual Location"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
