import React from 'react';
import Ticker from './components/Ticker';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Architectures from './components/Architectures';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-[#0C0E0C] text-[#EBE6DD] font-sans selection:bg-[#D48C45] selection:text-black pb-20 overflow-x-hidden relative">
            {/* --- PREMIUM GLOW ACCENTS --- */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D48C45]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#E07A5F]/5 rounded-full blur-[100px] pointer-events-none" />

            {/* --- UPPER TICKER --- */}
            <Ticker />

            {/* --- HEADER --- */}
            <Header />

            {/* --- HERO SECTION --- */}
            <Hero />

            {/* --- TECHNICAL CAPABILITIES STACK --- */}
            <Skills />

            {/* --- FORMAL SYSTEM ARCHITECTURE SHOWCASE --- */}
            <Architectures />

            {/* --- PROFESSIONAL EXPERIENCE TIMELINE --- */}
            <Experience />

            {/* --- PROJECTS PORTFOLIO DECK --- */}
            <Projects />

            {/* --- EDUCATION & INVOLVEMENT --- */}
            <Education />

            {/* --- FOOTER & CONTACT INFO --- */}
            <Footer />
        </div>
    );
}
