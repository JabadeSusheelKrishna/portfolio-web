import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function Education() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education Frame */}
            <div className="lg:col-span-6 bg-[#121412] border border-[#2C302C] p-6 rounded-2xl flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-4 border-b border-[#2C302C] pb-4">
                        <BookOpen className="text-[#D48C45]" size={18} />
                        <h3 className="font-sans font-bold text-[#EBE6DD] text-base uppercase">Academic Credentials</h3>
                    </div>

                    <div className="p-4 bg-[#0C0E0C] border border-[#2C302C] rounded-xl mb-4">
                        <span className="px-2 py-0.5 bg-[#D48C45]/10 border border-[#D48C45]/20 rounded text-[#D48C45] font-mono text-[9px] font-bold inline-block mb-2">2022 - 2026</span>
                        <h4 className="text-base font-bold text-[#EBE6DD] font-sans">International Institute of Information Technology</h4>
                        <p className="text-xs font-mono text-[#D48C45] mt-0.5">IIIT Hyderabad, Telangana, India</p>
                        <p className="text-xs text-[#C4BFAF] mt-3 leading-relaxed font-sans">
                            Bachelor of Technology (B.Tech) in <strong>Computer Science and Engineering</strong>.
                        </p>
                        <div className="mt-4 flex gap-4 text-xs font-mono">
                            <div>GPA: <span className="text-[#EBE6DD] font-bold">7.58 / 10</span></div>
                            <div>Year: <span className="text-[#D48C45] font-bold">Senior Class</span></div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#E07A5F]/10 border border-[#E07A5F]/20 p-3 text-xs text-[#E07A5F] font-mono rounded font-sans">
                    📚 Core Curriculum: Operating Systems, Computer Networks, Database Systems, Natural Language Processing, Distributed Systems.
                </div>
            </div>

            {/* Hackathons & Community involvement */}
            <div className="lg:col-span-6 bg-[#121412] border border-[#2C302C] p-6 rounded-2xl flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-4 border-b border-[#2C302C] pb-4">
                        <Sparkles className="text-[#E07A5F]" size={18} />
                        <h3 className="font-sans font-bold text-[#EBE6DD] text-base uppercase">Interests & Core Areas</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#E07A5F]/10 text-[#E07A5F] flex items-center justify-center font-bold font-mono text-xs shrink-0">
                                01
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-[#EBE6DD] font-sans">National Hackathon Prototyping</h4>
                                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-sans">
                                    Enjoys deploying systems and orchestrating AI workflows within short hackathon sprints.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#D48C45]/10 text-[#D48C45] flex items-center justify-center font-bold font-mono text-xs shrink-0">
                                02
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-[#EBE6DD] font-sans">System Design Exploration</h4>
                                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-sans">
                                    Avidly studies distributed cache replication, database logging structures, and latency optimization.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#E07A5F]/10 text-[#E07A5F] flex items-center justify-center font-bold font-mono text-xs shrink-0">
                                03
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-[#EBE6DD] font-sans">Data Privacy & Security</h4>
                                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-sans">
                                    Committed to researching zero-knowledge proofs and secure ID hash algorithms for privacy compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-[11px] text-gray-500 italic mt-6 pt-2 border-t border-[#2C302C] font-sans">
                    * Ready to apply systems modeling and AI pipeline design within high-growth engineering environments.
                </div>
            </div>
        </section>
    );
}
