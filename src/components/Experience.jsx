import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: '2025 - Present',
        role: 'Frontend Developer',
        company: 'Self-Employed / Freelance',
        desc: 'Building modern, responsive web applications and high-end portfolios using React, Firebase, and cutting-edge frontend technologies.',
        tech: ['React', 'Firebase', 'Framer Motion', 'Tailwind CSS']
    },
    {
        year: '2024 - 2025',
        role: 'Junior Web Developer',
        company: 'Local Tech Agency',
        desc: 'Assisted in the development of responsive websites and interactive UIs. Focused on mastering modern JavaScript and responsive design principles.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Git']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Career <span className="text-gradient">Journey</span></h2>
                    <p className="opacity-60 text-lg">A chronicle of my professional evolution and the impact I've made along the way.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-primary-500/30 before:to-transparent">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-500/30 bg-[#0f172a] text-primary-400 shadow-2xl shadow-primary-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary-500 animate-pulse"></div>
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass rounded-[2rem] border border-inherit/10 transition-all hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 active:scale-[0.98]">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div className="text-xl font-black tracking-tight">{exp.role}</div>
                                    <time className="font-mono text-[10px] text-primary-500 bg-primary-500/10 px-3 py-1 rounded-full uppercase font-black tracking-widest border border-primary-500/20">{exp.year}</time>
                                </div>
                                <div className="text-[10px] font-black opacity-40 mb-4 uppercase tracking-[0.2em]">{exp.company}</div>
                                <p className="opacity-70 text-sm leading-relaxed mb-6 italic">
                                    "{exp.desc}"
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map(t => (
                                        <span key={t} className="text-[9px] font-bold text-primary-500/80 bg-primary-500/5 px-2 py-0.5 rounded-md border border-primary-500/10">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
