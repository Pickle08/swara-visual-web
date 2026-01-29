import React, { useState } from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../Data/eventsData"; // Pastikan D kapital sesuai folder kamu

const Events = () => {
    const [activeFilter, setActiveFilter] = useState("All Events");

    // Ambil kategori unik dari data
    const categories = [
        "All Events",
        "Activation",
        "Social",
        "Conference",
        "Exhibition",
    ];

    // Logika Filter
    const filteredEvents =
        activeFilter === "All Events"
            ? eventsData
            : eventsData.filter((event) => event.category === activeFilter);

    return (
        <section className="bg-black text-white py-32 px-10 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic mb-4">
                        Our Success Stories
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.2em] text-sm">
                        Behind every event lies a story of collaboration and
                        innovation.
                    </p>
                </div>

                {/* --- FILTER NAVIGATION (Seperti Referensi) --- */}
                <div className="flex flex-wrap justify-center gap-8 mb-20 border-b border-white/10 pb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`text-sm md:text-base font-bold uppercase tracking-widest transition-all relative pb-2 ${
                                activeFilter === cat
                                    ? "text-brandLime"
                                    : "text-gray-500 hover:text-white"
                            }`}>
                            {cat}
                            {activeFilter === cat && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brandLime transition-all duration-300"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* --- EVENT GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => (
                        <Link
                            to={`/events/${event.id}`}
                            key={event.id}
                            className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 rounded-sm">
                            {/* Image dengan Zoom Effect */}
                            <img
                                src={event.heroImage}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>

                            {/* Title & Category (Bottom Left) */}
                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <p className="text-brandLime text-xs font-black uppercase tracking-[0.3em] mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {event.category}
                                </p>
                                <h4 className="text-2xl font-bold leading-tight group-hover:text-brandLime transition-colors duration-300 uppercase italic tracking-tighter">
                                    {event.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* --- LOAD MORE BUTTON --- */}
                <div className="mt-20 text-center">
                    <button className="px-12 py-4 border border-white/20 rounded-full hover:bg-brandLime hover:border-brandLime hover:text-black transition-all duration-500 font-bold uppercase tracking-widest text-xs">
                        Explore More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;
