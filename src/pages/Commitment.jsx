import React from "react";
// Jangan lupa impor ikonnya, bre!
import { Shield, Scale, Users, Award } from "lucide-react";

const Commitment = () => {
    const commitmentData = [
        {
            title: "Building Client Trust",
            desc: "Our commitment is to ensure transparency in every step of our process. Each phase we undertake is well-documented, allowing easy tracking and accountability for our clients.",
            icon: <Shield className="text-brandLime" size={24} />,
        },
        {
            title: "Integrity and Adherence",
            desc: "We guarantee that all our employees perform their duties in compliance with established procedures and regulations, so you can focus on growing your business with peace of mind.",
            icon: <Scale className="text-brandLime" size={24} />,
        },
        {
            title: "Competent Workforce",
            desc: "We provide trained professionals whom we continuously evaluate and develop. This ensures each employee is equipped to meet the demands of various industry sectors.",
            icon: <Users className="text-brandLime" size={24} />,
        },
        {
            title: "Quality Service",
            desc: "With the support of quality management and safety certifications, we are confident that our services meet high standards. Codex Project is committed to excellence.",
            icon: <Award className="text-brandLime" size={24} />,
        },
    ];

    return (
        <section className="bg-black text-white pt-20">
            {/* --- BAGIAN 1: HEADER & FOTO TIM --- */}
            <div className="px-10 mb-20 text-center">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
                    Our Commitment
                </h2>
                <p className="text-gray-400 text-lg md:text-xl mb-12 uppercase tracking-widest">
                    Delivering Optimal Solutions for Every Industry
                </p>

                <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 aspect-[21/9] border border-white/5">
                    <img
                        src="/image/Comitment/1.webp"
                        alt="Swara Visual Team"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* --- BAGIAN 2: NARASI & CORE VALUES --- */}
            <div className="max-w-7xl mx-auto px-10 pb-32">
                <div className="max-w-4xl mb-24">
                    <p className="text-2xl md:text-4xl font-light leading-tight text-gray-300">
                        We believe that the right solutions can significantly
                        enhance
                        <span className="text-white font-bold">
                            {" "}
                            productivity and business performance.
                        </span>{" "}
                        At Codex Project, each member of our workforce is
                        trained from the basics to advanced levels.
                    </p>
                </div>

                {/* Grid Modern */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {commitmentData.map((item, index) => (
                        <div
                            key={index}
                            className="group p-10 border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-brandLime/30 transition-all duration-500 rounded-3xl relative overflow-hidden">
                            {/* Efek angka transparan */}
                            <span className="absolute -right-4 -bottom-4 text-9xl font-black text-white/[0.03] group-hover:text-brandLime/[0.05] transition-colors pointer-events-none">
                                0{index + 1}
                            </span>

                            <div className="relative z-10">
                                <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 group-hover:bg-brandLime/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brandLime transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Commitment;
