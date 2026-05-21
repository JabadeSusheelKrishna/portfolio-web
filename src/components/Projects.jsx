import React from 'react';
import { Network, Server, Layers, ExternalLink } from 'lucide-react';

export default function Projects() {
    const projectList = [
        {
            title: "Online Peer-to-Peer Meeting Platform",
            tag: "WEBRTC & SIGNALING",
            icon: <Network size={16} />,
            colorClass: "hover:border-[#D48C45]/30 text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20",
            textColor: "text-[#D48C45]",
            desc: "Designed and implemented a heavy peer audio/video streaming network based on a decoupled microservices architecture.",
            bullets: [
                "Supports 10,000+ simultaneous real-time concurrent user streams.",
                "Leveraged Firebase for signaling alongside containerized Docker nodes.",
                "Achieved 99.95% system availability and 25% lower latency overhead."
            ],
            stack: "WebRTC • MERN • Docker • Firebase",
            stat: "Availability: 99.95%",
            link: "https://github.com/SuryaNarayanaJabade/online-meeting-webrtc-MS"
        },
        {
            title: "Distributed Network File System",
            tag: "CONCURRENCY & SOCKETS",
            icon: <Server size={16} />,
            colorClass: "hover:border-[#E07A5F]/30 text-[#E07A5F] bg-[#E07A5F]/10 border-[#E07A5F]/20",
            textColor: "text-[#E07A5F]",
            desc: "Created a distributed Network File System featuring independent client, naming, and data storage servers.",
            bullets: [
                "Implemented file operations over TCP/UDP with thread-safe mutex structures.",
                "Added data replication and robust automatic fault-tolerance mechanisms.",
                "Improved transfer consistency by 30% using POSIX socket threads."
            ],
            stack: "Systems C • Sockets • POSIX Sockets • Linux Calls",
            stat: "Layer: Thread-Safe TCP/UDP",
            link: "https://github.com/JabadeSusheelKrishna/Network_File_System"
        },
        {
            title: "RSS Reader: System Redesign & CI/CD",
            tag: "OOP DESIGN & BUILD PIPELINES",
            icon: <Layers size={16} />,
            colorClass: "hover:border-[#D48C45]/30 text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20",
            textColor: "text-[#D48C45]",
            desc: "Refactored and modularized a classic feed news aggregator system to eliminate code/architectural design smells.",
            bullets: [
                "Resolved 20+ critical design smell violations using SonarQube code review.",
                "Appended AI feed summaries, user auth, and bug reporting modules.",
                "Automated Jenkins testing pipelines, increasing code quality by 15%."
            ],
            stack: "Java • Spring Boot • OOP • Jenkins • SonarQube",
            stat: "Builds: Automated CI Pipelines",
            link: "https://github.com/SuryaNarayanaJabade/RSS_Reader-System_Redesign_and_Feature_Enhancement"
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
            <h2 className="text-2xl font-bold text-[#EBE6DD] mb-8 uppercase tracking-tight inline-block bg-[#121412] px-4 py-2 border border-[#2C302C] rounded-lg font-sans">
                💾 Engineering Projects & System Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectList.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-[#121412] border border-[#2C302C] p-6 rounded-2xl flex flex-col justify-between transition-all group hover:-translate-y-1 hover:shadow-xl"
                        style={{ contentVisibility: 'auto' }}
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-2 py-0.5 border rounded font-mono text-[9px] font-bold ${project.textColor} bg-current/5`}>
                                    {project.tag}
                                </span>
                                <span className={project.textColor}>{project.icon}</span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-[#EBE6DD] mb-2 font-sans">{project.title}</h3>
                            <p className="text-xs text-[#C4BFAF] leading-relaxed mb-4 font-sans">{project.desc}</p>
                            
                            <ul className="space-y-1.5 text-[11px] text-gray-400 font-sans mb-4">
                                {project.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-1">
                                        <span className={`${project.textColor} font-bold`}>•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 mb-4 border-t border-[#2C302C]/60 pt-3">
                                Stack: {project.stack}
                            </div>
                            <div className="pt-2 border-t border-[#2C302C] flex justify-between items-center text-[10px] font-mono text-gray-400">
                                <span>{project.stat}</span>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-1 hover:underline transition-all ${project.textColor} font-bold`}
                                >
                                    View Repository <ExternalLink size={10} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
