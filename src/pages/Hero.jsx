import React from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../Data/eventsData";
import PageTransition from "../components/PageTransition";

const Hero = () => {
    const latestWorks = eventsData.slice(0, 2);
    // Data dummy untuk logo client
    const clients = [
        { name: "SAMSUNG", webp: "/image/industry/samsung1.webp" },
        { name: "BCA", webp: "/image/industry/BCA.webp" },
        { name: "WALL'S", webp: "/image/industry/wall's.webp" },
        { name: "WhatsApp", webp: "/image/industry/whatsapp.webp" },
        { name: "Wardah", webp: "/image/industry/wardah.webp" },
        { name: "POCARI", webp: "/image/industry/pocari.webp" },
        { name: "NET.", webp: "/image/industry/NET.webp" },
        { name: "Emina", webp: "/image/industry/emina.webp" },
        { name: "Baseus", webp: "/image/industry/baseus.webp" },
        { name: "KOMINFO", webp: "/image/industry/kominfo.webp" },
        { name: "Facebook", webp: "/image/industry/facebook.webp" },
        { name: "WeTV", webp: "/image/industry/weTV.webp" },
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = [
        {
            title: "Step 1 - Consultation",
            desc: "Brainstorm your event vision with our experts. You will get free consultation and survey.",
            contentTitle: "Consultation",
            contentDesc:
                "Arrange a personal consultation with us. We unlock strategies to achieve your goals, together!",
            img: "/image/planning/1.webp", // Ganti dengan gambar aslimu
        },
        {
            title: "Step 2 - Creative Planning",
            desc: "Highlight the importance of creating a narrative for the event experience.",
            contentTitle: "Creative Planning",
            contentDesc:
                "Our team crafts a unique story and visual identity for your event to make it stand out.",
            img: "/image/planning/2.webp",
        },
        {
            title: "Step 3 - Production",
            desc: "We'll handle everything from booking venues to managing logistics.",
            contentTitle: "Production",
            contentDesc:
                "Execution with precision. We bring the plans to life with top-tier equipment and crew.",
            img: "/image/planning/3.webp",
        },
        {
            title: "Step 4 - Event Day!",
            desc: "Relax and enjoy your perfectly executed event.",
            contentTitle: "Event Day!",
            contentDesc:
                "We ensure every detail is managed so you can focus on your guests and the moment.",
            img: "/image/planning/4.webp",
        },
    ];
    const [sliderPos, setSliderPos] = React.useState(50); // Posisi awal di tengah (50%)
    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX || (e.touches && e.touches[0].clientX); // Support mouse & touch
        if (x) {
            const position = ((x - rect.left) / rect.width) * 100;
            setSliderPos(Math.min(Math.max(position, 0), 100)); // Batasi antara 0-100%
        }
    };
    const comparisonImages = {
        before: "/image/before-after/before.webp",
        after: "/image/before-after/after.webp",
    };
    const signatureServices = [
        {
            title: "Event Organizer",
            features: [
                "Concept & Creative Development",
                "Production Plan",
                "Event Management",
                "Man Power",
            ],
        },
        {
            title: "Technical Event Production",
            features: [
                "Audio, Visual and Lighting Equipments",
                "Stage Construction and Equipment",
                "Exhibition Construction and Equipment",
                "Multimedia Broadcasting System",
                "Projection Mapping & Interactive Installation",
            ],
        },
        {
            title: "Event Promotion Support",
            features: [
                "Photo and Video Documentation",
                "Animation & Motion Graphics",
                "Poster, Flyer and Banner Production",
                "Event Permits",
                "Media Handling",
            ],
        },
    ];
    const faqData = [
        {
            question: "What types of events do you specialize in?",
            answer: "We specialize in a wide range of events, including corporate launches, music festivals, brand activations, and private high-end gala dinners.",
        },
        {
            question: "How far in advance should I book your services?",
            answer: "Ideally, we recommend booking at least 3-6 months in advance for major events, but we can often accommodate tighter schedules depending on equipment availability.",
        },
        {
            question:
                "What is included in your full-service event production package?",
            answer: "Our package includes conceptual design, technical production (audio/visual/lighting), stage construction, and on-site event management.",
        },
        {
            question: "Do you offer custom lighting and sound options?",
            answer: "Yes! Every event is unique. We provide tailored technical solutions to match the specific vibe and venue of your event.",
        },
        {
            question: "What is your policy on last-minute changes?",
            answer: "We understand that events are dynamic. While we strive for perfection in planning, our team is trained to handle on-site adjustments professionally.",
        },
    ];

    // State untuk melacak index FAQ yang terbuka (null berarti semuanya tertutup)
    const [openFaq, setOpenFaq] = React.useState(null);

    return (
        <PageTransition>
            <div className="relative">
                {/* 2. Hero Section with Video */}
                <section
                    id="home"
                    className="relative h-screen w-full bg-black overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]">
                            <source src="/Video/klip2.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <h1 className="text-5xl text-white px-4 md:text-8xl font-bold mb-4 tracking-tight">
                            we create a better live.
                        </h1>
                        <p className="text-lg text-white px-4 md:text-xl mb-8 font-light italic opacity-90">
                            Unforgettable experiences, lasting impact.
                        </p>
                        <a
                            href="/credentials.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-[#CCFF00] text-black px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
                            📥 DOWNLOAD OUR CREDENTIALS
                        </a>
                    </div>
                </section>

                {/* 3. Green Expertise Bar */}
                <section className="bg-[#0A3D3D] py-12 px-10 text-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="font-bold flex items-center justify-center gap-2 tracking-wide">
                                <span className="text-brandLime">✓</span> Expert
                                Event Management
                            </h3>
                            <p className="text-sm opacity-70 mt-2">
                                From concept to execution, we handle it with
                                precision.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold flex items-center justify-center gap-2 tracking-wide">
                                <span className="text-brandLime">✓</span> Proven
                                Industry Expertise
                            </h3>
                            <p className="text-sm opacity-70 mt-2">
                                Years of experience ensure exceptional events.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold flex items-center justify-center gap-2 tracking-wide">
                                <span className="text-brandLime">✓</span>{" "}
                                Reliable Vendor Partnerships
                            </h3>
                            <p className="text-sm opacity-70 mt-2">
                                Trusted vendors ensure flawless delivery.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Trusted By Section (Logo Version) */}
                <section className="bg-black py-24 px-10 text-center border-t border-gray-900">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-20 tracking-tight">
                            Trusted by Industry Leaders
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-center">
                            {clients.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center group h-20">
                                    <img
                                        src={client.webp}
                                        alt={client.name}
                                        className="max-h-full max-w-[140px] object-contain opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Our Latest Works Section */}
                <section className="bg-black text-white py-20 px-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-5xl font-bold mb-4">
                                    Our Latest Works
                                </h2>
                                <p className="text-gray-400">
                                    Selected projects that define our
                                    excellence.
                                </p>
                            </div>
                            <Link
                                to="/events"
                                className="text-brandLime font-bold border-b border-brandLime pb-1 hover:text-white hover:border-white transition-all">
                                View All Projects
                            </Link>
                        </div>

                        {/* Grid Project */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {latestWorks.map((work) => (
                                <Link
                                    to={`/events/${work.id}`} // Menghubungkan ke ID spesifik
                                    key={work.id}
                                    className="group relative overflow-hidden rounded-2xl aspect-video bg-zinc-900">
                                    {/* Image dengan Efek Hover */}
                                    <img
                                        src={work.heroImage}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />

                                    {/* Overlay Info */}
                                    <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                                        <p className="text-brandLime font-bold text-sm mb-2 uppercase tracking-widest">
                                            {work.category}
                                        </p>
                                        <h3 className="text-3xl font-bold group-hover:translate-x-2 transition-transform duration-500">
                                            {work.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Planning Section */}
                <section className="bg-black py-24 px-10 text-white">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">
                            Seamless Event Planning with Codex
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Codex goes beyond creating events—we craft
                            unforgettable experiences. Our easy steps ensure
                            your event is planned smoothly and efficiently.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Side: Step Buttons */}
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent ${
                                        activeStep === index
                                            ? "bg-brandLime text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                                            : "bg-[#111] hover:bg-[#1a1a1a]"
                                    }`}>
                                    <h3 className="font-bold text-xl mb-2">
                                        {step.title}
                                    </h3>
                                    <p
                                        className={`text-sm ${
                                            activeStep === index
                                                ? "text-black/80"
                                                : "text-gray-500"
                                        }`}>
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Right Side: Image & Detail Content */}
                        <div className="lg:col-span-8">
                            <div className="rounded-3xl overflow-hidden mb-8 h-[500px] bg-[#111] border border-gray-900 shadow-2xl">
                                <img
                                    key={activeStep} // Menambahkan key agar ada efek transisi saat gambar berubah
                                    src={steps[activeStep].img}
                                    alt={steps[activeStep].contentTitle}
                                    className="w-full h-full object-cover animate-fadeIn"
                                />
                            </div>

                            {/* Detail Text */}
                            <div className="px-2 animate-slideUp">
                                <h3 className="text-4xl font-bold mb-4 text-white">
                                    {steps[activeStep].contentTitle}
                                </h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
                                    {steps[activeStep].contentDesc}
                                </p>
                                <a
                                    href="https://wa.me/6282298721671?text=Halo%20Swara%20Visual..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block">
                                    <button className="border-2 border-brandLime text-brandLime px-10 py-3 rounded-full font-black uppercase italic hover:bg-brandLime hover:text-black transition-all animate-hover-pulse">
                                        Talk to us!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Before After Slider Section */}
                <section className="bg-black py-24 px-10 text-white">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">
                            Magic Happens With Codex
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Feel the magic, embrace the vibe. With Codex your
                            event is alive, even before it starts.
                        </p>
                    </div>

                    <div
                        className="max-w-5xl mx-auto relative h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none"
                        onMouseMove={handleMove}
                        onTouchMove={handleMove}>
                        {/* Gambar AFTER (Background) */}
                        <div className="absolute inset-0">
                            <img
                                src={comparisonImages.after}
                                alt="After Image"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 right-6 bg-black/50 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest">
                                After
                            </div>
                        </div>

                        {/* Gambar BEFORE (Foreground dengan Clipping) */}
                        <div
                            className="absolute inset-0 z-10"
                            style={{
                                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                            }}>
                            <img
                                src={comparisonImages.before}
                                alt="Before Image"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-6 bg-black/50 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest">
                                Before
                            </div>
                        </div>

                        {/* Garis Pemisah (Slider Line) */}
                        <div
                            className="absolute top-0 bottom-0 z-20 w-1 bg-brandLime shadow-[0_0_15px_rgba(204,255,0,0.8)]"
                            style={{ left: `${sliderPos}%` }}>
                            {/* Tombol Geser di Tengah */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brandLime rounded-full flex items-center justify-center shadow-xl">
                                <div className="flex gap-1">
                                    <span className="text-black font-bold">
                                        ←
                                    </span>
                                    <span className="text-black font-bold">
                                        →
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 9. Signature Services Section */}
                <section className="bg-black py-24 px-10 text-white">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">
                            Signature Services
                        </h2>
                        <p className="text-[#CCFF00] max-w-3xl mx-auto text-lg leading-relaxed">
                            Discover a suite of services tailored to bring your
                            event's vision to life. With Codex, experience the
                            synergy of creativity, state-of-the-art technology,
                            and meticulous planning that ensures your occasion
                            shines.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {signatureServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#0A0A0A] border border-gray-900 p-10 rounded-[40px] hover:border-brandLime transition-all duration-500 group">
                                <h3 className="text-3xl font-bold mb-6 border-b-2 border-brandLime pb-4 inline-block">
                                    {service.title}
                                </h3>

                                <ul className="space-y-4">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors">
                                            <span className="text-brandLime font-bold mt-1">
                                                ›
                                            </span>
                                            <span className="text-lg">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                {/* 10. FAQ Section */}
                <section className="bg-black py-24 px-10 text-white">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-6xl font-bold mb-4">FAQ</h2>
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col gap-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#111] rounded-2xl overflow-hidden border border-gray-900 transition-all duration-300">
                                <button
                                    onClick={() =>
                                        setOpenFaq(
                                            openFaq === index ? null : index
                                        )
                                    }
                                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-[#1a1a1a] transition-colors">
                                    <span className="text-xl font-medium pr-4">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`text-2xl transition-transform duration-300 ${
                                            openFaq === index
                                                ? "rotate-45 text-brandLime"
                                                : "rotate-0"
                                        }`}>
                                        {/* Ikon plus (+) yang berubah jadi silang (x) saat terbuka */}
                                        {openFaq === index ? "✕" : "→"}
                                    </span>
                                </button>

                                {/* Jawaban FAQ dengan Animasi Slide */}
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        openFaq === index
                                            ? "max-h-[300px] opacity-100 border-t border-gray-800"
                                            : "max-h-0 opacity-0"
                                    }`}>
                                    <div className="px-8 py-6 text-gray-400 text-lg leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Hero;
