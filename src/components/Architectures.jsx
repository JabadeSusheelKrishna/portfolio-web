import React from 'react';
import { Terminal, Database, ExternalLink } from 'lucide-react';

export default function Architectures() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
            <div className="flex items-center gap-2 mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-[#EBE6DD] inline-block bg-[#121412] px-4 py-2 border border-[#2C302C] rounded-lg font-sans">
                    💻 Core Engineering Architectures
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Polymind AI System Workflow Map */}
                <div className="bg-[#121412] border border-[#2C302C] p-6 rounded-2xl flex flex-col justify-between hover:border-[#D48C45]/30 transition-all">
                    <div>
                        <div className="flex justify-between items-center border-b border-[#2C302C] pb-4 mb-4">
                            <div className="flex items-center gap-2">
                                <Terminal size={16} className="text-[#D48C45]" />
                                <span className="text-xs font-mono font-bold text-[#EBE6DD]">POLYMIND AI: MULTI-AGENT PIPELINE</span>
                            </div>
                            <a
                                href="https://github.com/SuryaNarayanaJabade/Polymind-AI---A-Multi-Agent-Based-Chatbot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-mono text-gray-400 hover:text-[#D48C45] flex items-center gap-1 transition-all"
                            >
                                VIEW REPO <ExternalLink size={10} />
                            </a>
                        </div>
                        
                        <p className="text-xs text-[#C4BFAF] mb-6 font-sans leading-relaxed">
                            Built an advanced terminal-based multi-agent system coordinating specialized Coding, Math, and General agents powered by dedicated Model Context Protocol (MCP) tools for high-quality autonomous reasoning.
                        </p>

                        {/* Operational Pipeline Steps */}
                        <div className="space-y-4 font-mono text-xs">
                            <div className="bg-[#0C0E0C] p-3 border border-[#2C302C] rounded-lg">
                                <div className="text-[#D48C45] font-bold mb-1">1. Pre-Query Processor</div>
                                <p className="text-[11px] text-gray-400 leading-normal font-sans">Analyzes raw user queries, resolves conversational state context, and routes work packages to dedicated agent modules.</p>
                            </div>
                            <div className="bg-[#0C0E0C] p-3 border border-[#2C302C] rounded-lg">
                                <div className="text-[#E07A5F] font-bold mb-1">2. Specialized Autonomous Agents</div>
                                <p className="text-[11px] text-gray-400 leading-normal font-sans"><strong>Coding, Math, & Web Scrapers</strong> interact via sandboxed MCP hosts (executing shells, query parsers, and custom local scraping tools).</p>
                            </div>
                            <div className="bg-[#0C0E0C] p-3 border border-[#2C302C] rounded-lg">
                                <div className="text-[#D48C45] font-bold mb-1">3. Structured Reasoner Formatter</div>
                                <p className="text-[11px] text-gray-400 leading-normal font-sans">Enforces JSON schema alignment, checks for syntax errors, and validates tools output prior to outputting responses.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#2C302C] text-[11px] font-mono text-gray-400 flex justify-between">
                        <span>⚡ Stack: Python • MCP • LLM Agents</span>
                        <span className="text-[#D48C45] font-bold">Role: Core Architect</span>
                    </div>
                </div>

                {/* SimpleRA Database Index Engine */}
                <div className="bg-[#121412] border border-[#2C302C] p-6 rounded-2xl flex flex-col justify-between hover:border-[#E07A5F]/30 transition-all">
                    <div>
                        <div className="flex justify-between items-center border-b border-[#2C302C] pb-4 mb-4">
                            <div className="flex items-center gap-2">
                                <Database size={16} className="text-[#E07A5F]" />
                                <span className="text-xs font-mono font-bold text-[#EBE6DD]">SIMPLERA: RELATIONAL DATABASE INDEX ENGINE</span>
                            </div>
                            <a
                                href="https://github.com/JabadeSusheelKrishna/SimpleRA-RDBMS"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-mono text-gray-400 hover:text-[#E07A5F] flex items-center gap-1 transition-all"
                            >
                                VIEW REPO <ExternalLink size={10} />
                            </a>
                        </div>

                        <p className="text-xs text-[#C4BFAF] mb-6 font-sans leading-relaxed">
                            Engineered a minimalist relational database system (RDBMS) in C++ focused on high-efficiency memory management, custom query execution plans, and low-latency storage page structures.
                        </p>

                        {/* Operational Pipeline Steps */}
                        <div className="space-y-4 font-mono text-xs">
                            <div className="bg-[#0C0E0C] p-3 border border-[#2C302C] rounded-lg">
                                <div className="text-[#E07A5F] font-bold mb-1">1. Custom SQL Query Parser & Executor</div>
                                <p className="text-[11px] text-gray-400 leading-normal font-sans">Compiles standard relational algebra commands (SELECT, INSERT, UPDATE) down to operational ASTs and database execution pipelines.</p>
                            </div>
                            <div className="bg-[#0C0E0C] p-3 border border-[#2C302C] rounded-lg">
                                <div className="text-[#D48C45] font-bold mb-1">2. B+ Tree Indexing Architecture</div>
                                <p className="text-[11px] text-gray-400 leading-normal font-sans">Implements binary leaf storage files enabling O(log N) lookup speeds on primary keys. Features node splitting and tree balancing algorithms.</p>
                            </div>
                            <div className="bg-[#0C0E0C] p-3 border border-[#2C302C] rounded-lg">
                                <div className="text-[#E07A5F] font-bold mb-1">3. Optimized Cache Buffer Pool Manager</div>
                                <p className="text-[11px] text-gray-400 leading-normal font-sans">Mitigates disk I/O bottlenecks by loading sequential data blocks inside volatile cache buffers, achieving <strong>60% faster query execution</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#2C302C] text-[11px] font-mono text-gray-400 flex justify-between">
                        <span>⚡ Stack: C++ • Memory Page Alignment • CMake</span>
                        <span className="text-[#E07A5F] font-bold">Speedup: +60% vs Naive</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
