import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="max-w-6xl mx-auto px-6 mt-12 relative z-10">
            <div className="bg-[#121412] border border-[#2C302C] p-8 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-2 font-sans">Let's build reliable software systems.</h2>
                    <p className="text-xs text-gray-400 max-w-lg leading-relaxed font-sans">
                        Open to Software Development Engineer opportunities starting 2026. Reach out to coordinate or review engineering specifications together.
                    </p>
                </div>

                <div className="md:col-span-4 flex flex-col gap-2.5 font-mono text-xs w-full">
                    <a href="mailto:susheelkrishnajabade@gmail.com" className="flex items-center gap-2 p-3 bg-[#0C0E0C] text-[#EBE6DD] border border-[#2C302C] rounded-xl hover:border-[#D48C45]/50 transition-all">
                        <Mail size={13} className="text-[#D48C45]" /> susheelkrishnajabade@gmail.com
                    </a>
                    <div className="flex items-center gap-2 p-3 bg-[#0C0E0C] text-gray-400 border border-[#2C302C] rounded-xl">
                        <Phone size={13} className="text-[#E07A5F]" /> +91 6302608913
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 font-mono text-[11px] text-gray-500">
                © 2026 Susheel Krishna Jabade. Built with React & Tailwind CSS.
            </div>
        </footer>
    );
}
