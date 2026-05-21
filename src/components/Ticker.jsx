import React from 'react';

export default function Ticker() {
    const items = [
        "IIIT HYDERABAD COMPUTER SCIENCE SENIOR",
        "SYSTEMS ENGINEERING & DISTRIBUTED NETWORKS",
        "MULTI-AGENT ARCHITECTURE SPECIALIST",
        "AVAILABLE FOR SOFTWARE ROLES STARTING 2026"
    ];

    const tickerContent = (
        <div className="animate-marquee flex gap-10 shrink-0">
            {items.map((item, idx) => (
                <span key={idx}>✦ {item}</span>
            ))}
        </div>
    );

    return (
        <div className="bg-[#121412] border-b border-[#2C302C] py-2.5 px-4 overflow-hidden whitespace-nowrap text-[#D48C45] font-mono text-[11px] font-semibold tracking-wider flex gap-10 select-none">
            {tickerContent}
            {tickerContent}
        </div>
    );
}
