import React from "react";

const About = () => {
    return (
        <div className="bg-black text-white pt-32">
            {/* --- SECTION: SHORT JOURNEY (GRID FOTO) --- */}
            <section className="pt-10 pb-20">
                <div className="text-center mb-10 relative">
                    {/* Efek Titik Oranye seperti di referensi */}
                    <h2 className="text-7xl md:text-[120px] font-black tracking-tighter uppercase italic leading-none opacity-90">
                        Short Journey
                    </h2>
                </div>
                {/* Grid Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-white/10">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div
                            key={num}
                            className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-[0.5px] border-white/5 group relative">
                            <img
                                src={`/image/About/${num}.webp`}
                                alt={`Journey Swara Visual ${num}`}
                                className="absolute inset-0 w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Efek overlay biar lebih 'industrial' pas di-hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SECTION: OUR STORY (FOUNDED IN...) --- */}
            <section className="py-32 px-10">
                <div className="max-w-5xl mx-auto space-y-20">
                    <p className="text-3xl md:text-4xl font-medium leading-tight tracking-tight border-l-4 border-brandLime pl-8">
                        Founded in 2015, our journey began with a simple
                        mission: to transform ordinary gatherings into
                        extraordinary experiences.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <img
                                src="/image/About/uroboros.webp"
                                alt="Our Story"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-6xl font-bold tracking-tighter">
                                Our Story
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                As a one-stop technical production, we're
                                passionate about bringing your story to life.
                                Our team of dedicated professionals is the
                                backbone of our success, each bringing their
                                unique skills to the table.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- SECTION: HERO ABOUT (WE BRING YOUR VISION) --- */}
            <section className="px-10 pb-20 border-b border-gray-900">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h1 className="text-7xl md:text-8xl font-black leading-none tracking-tighter">
                            WE BRING YOUR <br />
                            <span className="text-gray-500 underline decoration-brandLime/20">
                                VISION TO LIFE.
                            </span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                            Swara Visual is a leading technical production
                            provider dedicated to delivering seamless event
                            experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                            <h3 className="font-bold text-xl mb-2">
                                Precision
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Every detail matters. We execute with surgical
                                precision.
                            </p>
                        </div>
                        <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                            <h3 className="font-bold text-xl mb-2">
                                Reliability
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Your event's success is our highest priority.
                            </p>
                        </div>
                        <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                            <h3 className="font-bold text-xl mb-2">
                                Innovation
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Pushing boundaries with technology.
                            </p>
                        </div>
                        <div className="bg-brandLime p-8 rounded-3xl flex items-center justify-center">
                            <span className="text-black text-4xl font-black italic tracking-tighter">
                                SINCE 2015
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
