import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 85, icon: '📜' },
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Tailwind CSS', level: 92, icon: '🌊' },
    { name: 'Firebase', level: 80, icon: '🔥' },
    { name: 'Figma', level: 85, icon: '✒️' },
];

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold mb-6">Technical <br /><span className="text-primary-400">Expertise</span></h2>
                        <p className="opacity-60 mb-8 leading-relaxed">
                            A comprehensive set of skills that allow me to build robust, scalable, and beautiful web applications from start to finish.
                        </p>
                        <div className="flex gap-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-primary-500/20"></div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-2/3 grid gap-8">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold flex items-center gap-3">
                                        <span className="text-2xl">{skill.icon}</span>
                                        <span className="tracking-tight">{skill.name}</span>
                                    </span>
                                    <span className="text-primary-500 font-mono font-bold">{skill.level}%</span>
                                </div>
                                <div className="h-2.5 w-full bg-primary-500/5 rounded-full overflow-hidden border border-inherit/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "circOut", delay: idx * 0.1 }}
                                        className="h-full bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
