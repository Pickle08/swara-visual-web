import React, { useState } from "react";
import { X } from "lucide-react";
import { equipmentsData } from "../Data/equipmentsData";

const Equipments = () => {
    const [activeFilter, setActiveFilter] = useState("Sound System");
    const [selectedItem, setSelectedItem] = useState(null);

    // Debugging: Cek di Console F12 apakah data ini muncul
    console.log("Semua Data:", equipmentsData);

    const categories = [
        "Sound System",
        "Lighting",
        "Truss & Construction",
        "Multimedia",
        "Communication",
    ];

    // Filter data berdasarkan kategori aktif
    const filteredData = equipmentsData
        ? equipmentsData.filter((item) => item.category === activeFilter)
        : [];

    return (
        <section className="bg-black text-white py-32 px-10 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-black uppercase italic mb-2">
                        Our Equipments
                    </h2>
                    <div className="w-16 h-1 bg-brandLime mx-auto mt-4"></div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-6 mb-20 border-b border-white/10 pb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`text-sm font-bold uppercase tracking-widest transition-all ${
                                activeFilter === cat
                                    ? "text-brandLime border-b-2 border-brandLime pb-2"
                                    : "text-gray-500 hover:text-white"
                            }`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Konten */}
                {filteredData.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredData.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className="group cursor-pointer">
                                <div className="bg-white rounded-xl aspect-square flex items-center justify-center p-8 transition-transform group-hover:scale-105">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="max-h-full object-contain"
                                    />
                                </div>
                                <p className="mt-4 text-center text-xs font-bold uppercase text-gray-400 group-hover:text-brandLime">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        No equipment found for this category.
                    </p>
                )}

                {/* --- MODAL POPUP --- */}
                {selectedItem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        {/* Overlay Hitam Transparan */}
                        <div
                            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                            onClick={() => setSelectedItem(null)}></div>

                        {/* Box Putih Konten */}
                        <div className="relative bg-white text-black max-w-3xl w-full p-8 md:p-12 rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors">
                                <X size={30} />
                            </button>

                            <div className="flex flex-col items-center">
                                {/* Gambar Alat Besar */}
                                <div className="w-full aspect-video flex items-center justify-center mb-10">
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.name}
                                        className="max-h-full max-w-full object-contain drop-shadow-2xl"
                                    />
                                </div>

                                {/* Info Alat */}
                                <div className="text-center">
                                    <p className="text-brandLime font-black text-xs uppercase tracking-[0.3em] mb-3">
                                        {selectedItem.category}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-6">
                                        {selectedItem.name}
                                    </h3>
                                    <div className="w-12 h-1 bg-brandLime mx-auto mb-6"></div>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl mx-auto">
                                        {selectedItem.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Equipments;
