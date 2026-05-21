import React, { useState } from 'react';
import { Code, Server, Cpu, Layers, Database } from 'lucide-react';

export default function Skills() {
    const [activeTab, setActiveTab] = useState('all');

    const skillCategories = [
        {
            id: 'languages',
            title: 'LANGUAGES & CORE',
            icon: <Code size={16} />,
            colorClass: 'text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20 hover:border-[#D48C45]/30',
            bulletColor: 'bg-[#D48C45]',
            desc: 'Core languages used for reliable software engineering.',
            skills: ['Python', 'Java', 'C / C++', 'SQL', 'TypeScript', 'Object-Oriented Design (OOPs)']
        },
        {
            id: 'systems',
            title: 'SYSTEMS & DISTRIBUTED',
            icon: <Server size={16} />,
            colorClass: 'text-[#E07A5F] bg-[#E07A5F]/10 border-[#E07A5F]/20 hover:border-[#E07A5F]/30',
            bulletColor: 'bg-[#E07A5F]',
            desc: 'Low-level protocols, OS kernels, and orchestration setups.',
            skills: ['Operating Systems (Linux)', 'Computer Networks', 'Docker Containerization', 'Kubernetes (K8s)', 'gRPC Protocol', 'WebRTC Signaling']
        },
        {
            id: 'ai',
            title: 'AI & MACHINE LEARNING',
            icon: <Cpu size={16} />,
            colorClass: 'text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20 hover:border-[#D48C45]/30',
            bulletColor: 'bg-[#D48C45]',
            desc: 'Framework integrations & intelligent agent modeling.',
            skills: ['PyTorch & TensorFlow', 'Scikit-learn', 'Natural Language Processing', 'LangChain Framework', 'Retrieval Augmented Generation (RAG)', 'Model Context Protocol (MCP)']
        },
        {
            id: 'devops',
            title: 'DEVOPS & CLOUD',
            icon: <Layers size={16} />,
            colorClass: 'text-[#E07A5F] bg-[#E07A5F]/10 border-[#E07A5F]/20 hover:border-[#E07A5F]/30',
            bulletColor: 'bg-[#E07A5F]',
            desc: 'Automation pipelines, cloud infra, and health logging.',
            skills: ['Google Cloud Platform (GCP)', 'Firebase Services', 'Terraform (IaC)', 'Ansible Automation', 'Jenkins (CI/CD)', 'Grafana & Prometheus', 'SonarQube Linting']
        },
        {
            id: 'web',
            title: 'WEB, APP & DATABASES',
            icon: <Database size={16} />,
            colorClass: 'text-[#D48C45] bg-[#D48C45]/10 border-[#D48C45]/20 hover:border-[#D48C45]/30',
            bulletColor: 'bg-[#D48C45]',
            desc: 'Modern app layers and distributed caching storage engines.',
            skills: ['React & Node.js', 'Express & Flask', 'React Native (Mobile)', 'MySQL Relational DB', 'MongoDB (NoSQL)', 'Redis (Caching)']
        }
    ];

    const filteredCategories = activeTab === 'all'
        ? skillCategories
        : skillCategories.filter(cat => cat.id === activeTab);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
            <div className="bg-[#121412] border border-[#2C302C] p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-[#2C302C] pb-4 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-[#EBE6DD] tracking-tight">Technical Capability Stack</h2>
                        <p className="text-xs text-[#D48C45] font-mono mt-0.5">Categorized Core Strengths</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium transition-all ${
                                activeTab === 'all'
                                    ? 'bg-[#D48C45] text-black border-transparent font-bold'
                                    : 'bg-[#0C0E0C] text-[#C4BFAF] border-[#2C302C] hover:border-gray-500'
                            }`}
                        >
                            [all]
                        </button>
                        {skillCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-3 py-1 rounded-lg border text-xs font-mono font-medium transition-all ${
                                    activeTab === cat.id
                                        ? 'bg-[#D48C45] text-black border-transparent font-bold'
                                        : 'bg-[#0C0E0C] text-[#C4BFAF] border-[#2C302C] hover:border-gray-500'
                                }`}
                            >
                                [{cat.id}]
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {filteredCategories.map((cat, idx) => (
                        <div
                            key={cat.id}
                            className={`bg-[#0C0E0C] border border-[#2C302C] p-5 rounded-xl transition-all flex flex-col justify-between ${cat.colorClass}`}
                        >
                            <div>
                                <div className="w-8 h-8 rounded-lg bg-current/10 flex items-center justify-center mb-4">
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold text-[#EBE6DD] text-xs tracking-wide mb-1.5 font-mono">{cat.title}</h3>
                                <p className="text-[10px] text-gray-400 mb-4 leading-relaxed font-sans">{cat.desc}</p>
                                <ul className="space-y-1.5">
                                    {cat.skills.map((skill, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-[#C4BFAF] font-sans">
                                            <span className={`w-1 h-1 rounded-full ${cat.bulletColor}`} /> {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
