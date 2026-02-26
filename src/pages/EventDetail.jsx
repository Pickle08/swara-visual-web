import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { eventsData } from "../Data/eventsData";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";

const EventDetail = () => {
    const { eventId } = useParams();
    const currentIndex = eventsData.findIndex((item) => item.id === eventId);
    const project = eventsData.find((item) => item.id === eventId);
    const nextProject = eventsData[(currentIndex + 1) % eventsData.length];
    const prevProject =
        eventsData[(currentIndex - 1 + eventsData.length) % eventsData.length];

    // ... kode UI kamu yang sudah ada ...

    // Scroll ke atas otomatis saat halaman dibuka
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [eventId]);

    if (!project) {
        return (
            <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <Link to="/events" className="text-brandLime hover:underline">
                    Back to Events
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen pb-20">
            {/* --- BACK BUTTON --- */}
            <div className="fixed top-28 left-6 md:left-12 z-50">
                <Link
                    to="/events"
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-brandLime hover:text-black transition-all duration-300 group">
                    <ArrowLeft
                        size={18}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest">
                        Back
                    </span>
                </Link>
            </div>

            {/* --- HERO SECTION --- */}
            <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
                <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <div className="w-12 h-[2px] bg-brandLime mb-6"></div>
                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-4">
                        {project.title}
                    </h1>
                    <p className="text-brandLime text-sm md:text-base font-bold uppercase tracking-[0.4em]">
                        {project.category}
                    </p>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-10">
                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 p-8 md:p-16 rounded-sm">
                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-white/10 pb-12">
                        <div className="flex items-center gap-4">
                            <Calendar className="text-brandLime" size={24} />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                                    Date
                                </p>
                                <p className="font-bold">{project.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="text-brandLime" size={24} />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                                    Location
                                </p>
                                <p className="font-bold">{project.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Tag className="text-brandLime" size={24} />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                                    Type
                                </p>
                                <p className="font-bold">{project.category}</p>
                            </div>
                        </div>
                    </div>

                    {/* Section Deskripsi & Equipments */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
                        <div className="lg:col-span-8">
                            <h2 className="text-3xl font-bold mb-6">
                                {project.description}
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                {project.subDescription}
                            </p>
                        </div>

                        {/* Box Equipments Used */}
                        <div className="lg:col-span-4 bg-zinc-900/80 p-8 border-l-4 border-brandLime rounded-r-lg">
                            <h3 className="text-brandLime font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className="w-4 h-4 bg-brandLime rounded-full"></span>
                                Equipments Used
                            </h3>
                            <ul className="space-y-4">
                                {project.equipments?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm border-b border-white/5 pb-2 last:border-0">
                                        <span className="text-brandLime mt-1">
                                            ▹
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section Dokumentasi Gambar */}
                <div className="mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <h3 className="text-3xl font-black italic uppercase">
                            Event Documentation
                        </h3>
                        <div className="flex-1 h-[1px] bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {project.gallery?.map((img, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-sm bg-zinc-900">
                                <img
                                    src={img}
                                    alt={`Gallery ${index}`}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- NAVIGATION SECTION --- */}
            <section className="mt-32 border-t border-white/10">
                <div className="grid grid-cols-2 w-full h-40 md:h-64">
                    {/* Left: Previous Project */}
                    <Link
                        to={`/events/${prevProject.id}`}
                        className="group relative flex flex-col justify-center items-center border-r border-white/10 hover:bg-zinc-900 transition-colors">
                        <span className="text-brandLime font-black uppercase tracking-widest text-[10px] mb-2 opacity-50">
                            Prev
                        </span>
                        <h4 className="text-xl md:text-3xl font-black uppercase italic group-hover:-translate-x-2 transition-transform italic">
                            {prevProject.title}
                        </h4>
                    </Link>

                    {/* Right: Next Project */}
                    <Link
                        to={`/events/${nextProject.id}`}
                        className="group relative flex flex-col justify-center items-center hover:bg-zinc-900 transition-colors">
                        <span className="text-brandLime font-black uppercase tracking-widest text-[10px] mb-2 opacity-50">
                            Next
                        </span>
                        <h4 className="text-xl md:text-3xl font-black uppercase italic group-hover:translate-x-2 transition-transform italic">
                            {nextProject.title}
                        </h4>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EventDetail;
