import React, { useState } from 'react';
import {
    Network,
    Server,
    Layers,
    Cpu,
    Sparkles,
    Shield,
    Heart,
    MessageSquare,
    BookOpen,
    ExternalLink
} from 'lucide-react';

export default function Projects() {
    const [activeTab, setActiveTab] = useState('all');

    const projectList = [
        // --- Systems & Distributed ---
        {
            title: "Online Peer-to-Peer Meeting Platform",
            tag: "WEBRTC & SIGNALING",
            category: "systems",
            icon: <Network size={16} />,
            colorClass: "hover:border-[#D48C45]/30 text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20",
            textColor: "text-[#D48C45]",
            desc: "Designed and implemented a high-performance peer audio/video streaming network based on a decoupled microservices architecture.",
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
            title: "Distributed Messaging Queue using RabbitMQ",
            tag: "HIGH AVAILABILITY QUEUES",
            category: "systems",
            icon: <Layers size={16} />,
            colorClass: "hover:border-[#E07A5F]/30 text-[#E07A5F] bg-[#E07A5F]/10 border-[#E07A5F]/20",
            textColor: "text-[#E07A5F]",
            desc: "Engineered a highly available, fault-tolerant distributed task processing system using Raft-consensus Quorum Queues to eliminate single points of failure.",
            bullets: [
                "Successfully routed 60 tasks in a 6s micro-burst with 100% reliability.",
                "Implemented random gRPC client-side load balancing to producer gateways.",
                "Configured QoS Prefetch=1 and manual acknowledgments to prevent data loss."
            ],
            stack: "Go • RabbitMQ • gRPC • AMQP 0-9-1 • Docker",
            stat: "Rate: 10 tasks/sec Peak",
            link: "https://github.com/JabadeSusheelKrishna/Distributed-Messaging-Queue-using-RabbitMQ"
        },
        {
            title: "Distributed Network File System",
            tag: "CONCURRENCY & SOCKETS",
            category: "systems",
            icon: <Server size={16} />,
            colorClass: "hover:border-[#D48C45]/30 text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20",
            textColor: "text-[#D48C45]",
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
            title: "Agent-Based Simulation of Commuter EVs",
            tag: "ALGORITHMIC SIMULATION",
            category: "systems",
            icon: <Cpu size={16} />,
            colorClass: "hover:border-[#E07A5F]/30 text-[#E07A5F] bg-[#E07A5F]/10 border-[#E07A5F]/20",
            textColor: "text-[#E07A5F]",
            desc: "Designed a discrete-time simulator running on 1-minute intervals to model daily navigation and battery charging behavior of vehicle agents on city graphs.",
            bullets: [
                "Implemented Dijkstra to resolve nearest-station spatial allocation paths.",
                "Parsed spatial city layouts and infrastructure coordinates from GeoJSON files.",
                "Mapped speed limits to battery discharge curves and finite-state timelines."
            ],
            stack: "Go • Dijkstra • GeoJSON • Matplotlib",
            stat: "Interval: 1-minute telemetry",
            link: "https://github.com/JabadeSusheelKrishna/Agent-Based-Simulation-of-Commuter-EVs"
        },

        // --- AI & Cryptography ---
        {
            title: "Tamil Nadu Temple Detection AI",
            tag: "COMPUTER VISION & DEEP LEARNING",
            category: "ai",
            icon: <Sparkles size={16} />,
            colorClass: "hover:border-[#D48C45]/30 text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20",
            textColor: "text-[#D48C45]",
            desc: "Developed an end-to-end computer vision solution to accurately identify and classify 15 historically significant temples using vision-language foundations.",
            bullets: [
                "Trained V5 Hybrid FFNN (MLP) head with ReLU, achieving 85.15% accuracy.",
                "Boosted accuracy by ~63.37% absolute compared to V1 baseline CLIP model.",
                "Enriched prompts semantically and dynamically cropped 70% ROI target regions."
            ],
            stack: "Python • PyTorch • HuggingFace CLIP • Docker • Streamlit",
            stat: "Accuracy: 85.15% (V5 FFNN)",
            link: "https://github.com/JabadeSusheelKrishna/Tamil-Nadu-Temple-Detection-AI"
        },
        {
            title: "MiniCrypt System",
            tag: "CRYPTOGRAPHY & MULTIPARTY COMPUTATION",
            category: "ai",
            icon: <Shield size={16} />,
            colorClass: "hover:border-[#E07A5F]/30 text-[#E07A5F] bg-[#E07A5F]/10 border-[#E07A5F]/20",
            textColor: "text-[#E07A5F]",
            desc: "Engineered a massive, dependency-free cryptographic chain and Multi-Party Computation compiler from scratch based on strict mathematical formulas.",
            bullets: [
                "Built Goldreich-Levin PRG, GGM-tree PRF, and modular CBC/CTR ciphers.",
                "Coded RSA/ElGamal PKC using Garner's CRT for a 4x decryption speedup.",
                "Implemented 1-out-of-2 OT and Yao's Garbled Circuits for Millionaire's Problem."
            ],
            stack: "Python • React • WebAssembly • Custom Safe Primes",
            stat: "No External Cryptographic Libs",
            link: "https://github.com/JabadeSusheelKrishna/Provably-Secure-Cryptographic-Stack"
        },
        {
            title: "HealthMate AI",
            tag: "MED-TECH CHATBOT & MOBILE PWA",
            category: "ai",
            icon: <Heart size={16} />,
            colorClass: "hover:border-[#D48C45]/30 text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20",
            textColor: "text-[#D48C45]",
            desc: "Created a privacy-preserving, installable health assistant utilizing Large Language Models to parse complex natural language symptom queries.",
            bullets: [
                "Architected LLM routing to downstream predictive model services.",
                "Built offline-first React PWA with secure Atlas database and JWT auth.",
                "Aligned 100% of codebase with Controller-Service and Factory design patterns."
            ],
            stack: "React 18 • Flask • Gemini LLM • MongoDB • Progressive Web App",
            stat: "Security: 100% Decoupled/Secure",
            link: "https://github.com/JabadeSusheelKrishna/HealthMate-AI"
        },

        // --- Fullstack & Web ---
        {
            title: "Greddit (Reddit-Inspired Platform)",
            tag: "FULLSTACK WEB APPLICATION",
            category: "web",
            icon: <MessageSquare size={16} />,
            colorClass: "hover:border-[#E07A5F]/30 text-[#E07A5F] bg-[#E07A5F]/10 border-[#E07A5F]/20",
            textColor: "text-[#E07A5F]",
            desc: "Engineered a high-performance community content sharing ecosystem inspired by the structural pillars of Greddit.",
            bullets: [
                "Created reactive single-page app utilizing Context API global states.",
                "Programmed administrative portal featuring real-time content auditing tools.",
                "Secured routes with Bcrypt salting and stateless JWT session variables."
            ],
            stack: "React.js • Router v7 • Node.js • Express.js • MongoDB Atlas",
            stat: "Session: Stateful/JWT Guarded",
            link: "https://github.com/JabadeSusheelKrishna/Greddit"
        },
        {
            title: "RSS Reader: System Redesign & CI/CD",
            tag: "OOP DESIGN & BUILD PIPELINES",
            category: "web",
            icon: <BookOpen size={16} />,
            colorClass: "hover:border-[#D48C45]/30 text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20",
            textColor: "text-[#D48C45]",
            desc: "Refactored and modularized a classic feed news aggregator system to eliminate code and architectural design smells.",
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

    const filteredProjects = activeTab === 'all'
        ? projectList
        : projectList.filter(proj => proj.category === activeTab);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-[#2C302C] pb-4 gap-4">
                <div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight text-[#EBE6DD] font-sans">
                        💾 Engineering Projects & System Packages
                    </h2>
                    <p className="text-xs text-[#D48C45] font-mono mt-0.5">Explore systems, ML and full-stack software repos</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium transition-all ${activeTab === 'all'
                                ? 'bg-[#D48C45] text-black border-transparent font-bold'
                                : 'bg-[#0C0E0C] text-[#C4BFAF] border-[#2C302C] hover:border-gray-500'
                            }`}
                    >
                        [all]
                    </button>
                    <button
                        onClick={() => setActiveTab('systems')}
                        className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium transition-all ${activeTab === 'systems'
                                ? 'bg-[#D48C45] text-black border-transparent font-bold'
                                : 'bg-[#0C0E0C] text-[#C4BFAF] border-[#2C302C] hover:border-gray-500'
                            }`}
                    >
                        [systems & routing]
                    </button>
                    <button
                        onClick={() => setActiveTab('ai')}
                        className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium transition-all ${activeTab === 'ai'
                                ? 'bg-[#D48C45] text-black border-transparent font-bold'
                                : 'bg-[#0C0E0C] text-[#C4BFAF] border-[#2C302C] hover:border-gray-500'
                            }`}
                    >
                        [ai & security]
                    </button>
                    <button
                        onClick={() => setActiveTab('web')}
                        className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium transition-all ${activeTab === 'web'
                                ? 'bg-[#D48C45] text-black border-transparent font-bold'
                                : 'bg-[#0C0E0C] text-[#C4BFAF] border-[#2C302C] hover:border-gray-500'
                            }`}
                    >
                        [web & databases]
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, idx) => (
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

                            <h3 className="text-lg font-bold text-[#EBE6DD] mb-2 font-sans leading-snug">{project.title}</h3>
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
