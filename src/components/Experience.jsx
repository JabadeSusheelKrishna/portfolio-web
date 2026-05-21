import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
            <h2 className="text-2xl font-bold text-[#EBE6DD] mb-8 uppercase tracking-tight inline-block bg-[#121412] px-4 py-2 border border-[#2C302C] rounded-lg font-sans">
                💼 Professional Engineering Experience
            </h2>

            <div className="space-y-6">
                {/* AT&T */}
                <div className="bg-[#121412] border border-[#2C302C] p-6 rounded-2xl relative overflow-hidden group hover:border-[#D48C45]/30 transition-all">
                    <div className="absolute top-0 right-0 bg-[#D48C45]/10 text-[#D48C45] border-b border-l border-[#2C302C] font-mono text-[10px] font-bold px-4 py-1.5 rounded-bl-lg">
                        MAR 2024 - JUN 2024
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                        <h3 className="text-xl font-bold text-[#EBE6DD] font-sans">Software Developer</h3>
                        <span className="hidden md:inline text-gray-600">|</span>
                        <span className="text-[#D48C45] font-mono font-bold text-base">AT&T</span>
                    </div>

                    <p className="text-xs font-mono text-gray-400 mb-4 flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-[#D48C45]" /> Domain: Secure Electronic Health Records & Consent Sharing Networks (FHIR Compliant).
                    </p>

                    <ul className="space-y-2.5 text-xs md:text-sm text-[#C4BFAF] font-sans">
                        <li className="flex items-start gap-2">
                            <span className="text-[#D48C45] font-bold mt-0.5">•</span>
                            <span>Developed a secure Electronic Health Record (EHR) sharing system replacing email-based exchange, enabling hospitals to access patient data through a centralized <strong>FHIR-compliant</strong> server.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#D48C45] font-bold mt-0.5">•</span>
                            <span>Implemented a unique <strong>Hash ID-based</strong> identity protection model and strict consent-driven data retrieval, improving security and data accessibility metrics by <strong>30%</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#D48C45] font-bold mt-0.5">•</span>
                            <span>Built robust backend APIs and infrastructure, along with a multi-platform interactive <strong>React Native</strong> mobile application and responsive web dashboard for seamless consent flow management.</span>
                        </li>
                    </ul>
                </div>

                {/* VP Innovations */}
                <div className="bg-[#121412] border border-[#2C302C] p-6 rounded-2xl relative overflow-hidden group hover:border-[#E07A5F]/30 transition-all">
                    <div className="absolute top-0 right-0 bg-[#E07A5F]/10 text-[#E07A5F] border-b border-l border-[#2C302C] font-mono text-[10px] font-bold px-4 py-1.5 rounded-bl-lg">
                        JAN 2024 - FEB 2024
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                        <h3 className="text-xl font-bold text-[#EBE6DD] font-sans">Software Developer</h3>
                        <span className="hidden md:inline text-gray-600">|</span>
                        <span className="text-[#E07A5F] font-mono font-bold text-base">VP Innovations</span>
                    </div>

                    <p className="text-xs font-mono text-gray-400 mb-4 flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-[#E07A5F]" /> Domain: Health API Wearable Integration & Biometric Insights.
                    </p>

                    <ul className="space-y-2.5 text-xs md:text-sm text-[#C4BFAF] font-sans">
                        <li className="flex items-start gap-2">
                            <span className="text-[#E07A5F] font-bold mt-0.5">•</span>
                            <span>Built a cross-platform health monitoring application integrating Google Fit and Samsung Health via <strong>Health Connect APIs</strong>, enabling real-time wearable synchronization utilizing <strong>Firebase</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#E07A5F] font-bold mt-0.5">•</span>
                            <span>Implemented a <strong>Python-based Naive Bayes model</strong> to process raw wearable feeds and deliver personalized activity insights, improving recommendations precision by <strong>15%</strong>.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
