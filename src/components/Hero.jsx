import React, { useState } from 'react';
import { Sparkle, User, Upload, MapPin } from 'lucide-react';

export default function Hero() {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <main className="max-w-6xl mx-auto px-6 pt-6 pb-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Hero Context */}
            <section className="lg:col-span-7 flex flex-col justify-between bg-[#121412] border border-[#2C302C] p-8 rounded-2xl relative overflow-hidden">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D48C45]/10 border border-[#D48C45]/20 text-[#D48C45] font-mono text-[11px] rounded-full mb-6">
                        <Sparkle size={10} className="animate-pulse" /> SYSTEMS ARCHITECTURE & AI ENGINE
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EBE6DD] mb-6 leading-[1.15]">
                        Developing <span className="text-orange-400 bg-clip-text bg-gradient-to-r from-[#D48C45] to-[#E07A5F]">Scalable Architectures</span> and ML Models.
                    </h1>

                    <p className="text-[#C4BFAF] text-sm md:text-base leading-relaxed max-w-xl mb-8 font-sans">
                        Computer Science Graduate from <strong>IIIT Hyderabad</strong>. Experienced in optimizing low-latency distributed networks, designing reliable multi-agent workflows, and constructing robust memory management pipelines.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#2C302C]">
                    <div>
                        <div className="text-xl font-bold text-[#D48C45]">7.58</div>
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">CGPA @ IIITH</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-[#E07A5F]">10+</div>
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Systems Projects</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-[#D48C45]">10k+</div>
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">P2P Concurrency</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-[#E07A5F]">15%</div>
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">AI Rec. Boost</div>
                    </div>
                </div>
            </section>

            {/* Right Hero Image Card */}
            <section className="lg:col-span-5 flex flex-col justify-between bg-[#121412] border border-[#2C302C] p-8 rounded-2xl relative">
                <div className="flex flex-col items-center justify-center flex-grow py-4">
                    {/* Elegant Portrait Box */}
                    <div className="relative w-56 h-56 rounded-xl border border-[#2C302C] bg-[#0C0E0C] shadow-lg overflow-hidden group">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Susheel Krishna Jabade"
                                className="w-full h-full object-cover filter brightness-95"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-1 text-center text-[#EBE6DD] relative">
                                {/* <User size={40} className="text-[#D48C45] mb-2 opacity-80" />
                                <p className="font-mono text-[11px] text-[#A29E93]">Drop your profile picture here to preview!</p>
                                <label className="mt-4 px-3 py-1.5 bg-[#D48C45] hover:bg-[#b07335] text-black font-sans text-xs font-bold rounded-lg transition-all cursor-pointer">
                                    <span className="flex items-center gap-1"><Upload size={12} /> Upload Photo</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </label> */}
                                <img
                                    src="https://raw.githubusercontent.com/JabadeSusheelKrishna/portfolio-web/main/src/assets/profile_compressed.png"
                                    alt="Susheel Krishna Jabade"
                                    className="w-full h-full object-cover filter brightness-95"
                                />
                            </div>
                        )}
                    </div>

                    {/* Quick Profile Description */}
                    <div className="text-center mt-6">
                        <h3 className="text-lg font-bold text-[#EBE6DD]">Susheel Krishna Jabade</h3>
                        <p className="text-xs text-[#A29E93] mt-1">International Institute of Information Technology</p>
                        <div className="flex gap-1.5 justify-center mt-3">
                            <span className="px-2 py-0.5 bg-[#0C0E0C] border border-[#2C302C] rounded text-gray-300 font-mono text-[9px] font-bold uppercase">HYDERABAD, IN</span>
                            <span className="px-2 py-0.5 bg-[#D48C45]/10 border border-[#D48C45]/20 rounded text-[#D48C45] font-mono text-[9px] font-bold uppercase">UG2K22 Batch</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#2C302C] flex justify-between items-center text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-[#D48C45]" /> Telangana, India</span>
                    <span className="text-[#EBE6DD] font-bold">Status: Available</span>
                </div>
            </section>
        </main>
    );
}
