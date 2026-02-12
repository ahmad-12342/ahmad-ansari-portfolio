import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Strategy",
        desc: "Deep research into the project requirements, target audience, and business goals to define a clear roadmap.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Design",
        desc: "Creating high-fidelity prototypes and premium user interfaces that align with the brand identity.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Build",
        desc: "Transforming designs into performant, clean, and scalable code using modern web technologies.",
        color: "from-orange-500 to-amber-500"
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Launch",
        desc: "Rigorous testing and optimization followed by a seamless deployment to the live environment.",
        color: "from-emerald-500 to-teal-500"
    }
];

const Process = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-primary-500/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">How I <span className="text-gradient">Work</span></h2>
                    <p className="opacity-60 text-lg max-w-2xl mx-auto">A systematic approach to building high-end digital solutions that convert and inspire.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full p-8 glass border border-inherit/10 rounded-[2.5rem] relative overflow-hidden transition-all hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 active:scale-[0.98]">
                                {/* Step Number */}
                                <div className="absolute top-6 right-8 text-5xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    0{idx + 1}
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-inherit/20`}>
                                    {step.icon}
                                </div>

                                <h3 className="text-2xl font-black mb-4 tracking-tight">{step.title}</h3>
                                <p className="opacity-60 text-sm leading-relaxed">{step.desc}</p>

                                {/* Connector for desktop */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-inherit/10 to-transparent z-10"></div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
