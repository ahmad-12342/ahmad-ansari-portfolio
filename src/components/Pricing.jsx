import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const { t } = useTranslation();

    const plans = [
        {
            name: "Starter",
            price: "$100",
            description: "Perfect for personal portfolios & landing pages.",
            features: [
                "Single Page Website",
                "Mobile Responsive",
                "Basic SEO Setup",
                "Contact Form Integration",
                "1 Month Support"
            ],
            icon: Star,
            color: "text-blue-400",
            bg: "from-blue-500/10 to-transparent",
            border: "hover:border-blue-500/50",
            button: "bg-white/10 hover:bg-white/20"
        },
        {
            name: "Professional",
            price: "$200",
            description: "Ideal for small businesses & startups.",
            popular: true,
            features: [
                "Multi-Page Website (Up to 5)",
                "Advanced Animations",
                "CMS Integration",
                "Performance Optimization",
                "3 Months Support",
                "Google Analytics Setup"
            ],
            icon: Zap,
            color: "text-primary-400",
            bg: "from-primary-500/20 to-transparent",
            border: "border-primary-500/50 shadow-2xl shadow-primary-500/10",
            button: "bg-primary-500 hover:bg-primary-600"
        },
        {
            name: "Enterprise",
            price: "$150+",
            description: "Full-scale custom web applications.",
            features: [
                "Custom Web Application",
                "Database Integration",
                "User Authentication",
                "Payment Gateway",
                "API Development",
                "6 Months Support"
            ],
            icon: Crown,
            color: "text-purple-400",
            bg: "from-purple-500/10 to-transparent",
            border: "hover:border-purple-500/50",
            button: "bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90"
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary-500/5 blur-[120px] -translate-y-1/2 rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Detailed <span className="text-gradient">Plans</span>
                    </h2>
                    <p className="opacity-60 text-lg max-w-2xl mx-auto">
                        Choose the perfect package for your next project. Transparent pricing with no hidden fees.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-[2rem] glass border border-white/5 transition-all duration-300 flex flex-col ${plan.popular ? 'border-primary-500/30 md:scale-110 md:-translate-y-4 z-10 bg-primary-500/5' : 'hover:border-white/20'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary-500/20">
                                    Most Popular
                                </div>
                            )}

                            {/* Card Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.bg} opacity-50 rounded-[2rem] pointer-events-none`}></div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${plan.color}`}>
                                    <plan.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                                    <span className="opacity-50 text-sm font-medium">/project</span>
                                </div>
                                <p className="opacity-60 text-sm mb-8 min-h-[40px]">{plan.description}</p>

                                <div className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm font-medium opacity-80">
                                            <div className={`mt-0.5 p-0.5 rounded-full bg-white/10 ${plan.color}`}>
                                                <Check size={10} strokeWidth={4} />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="#contact"
                                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${plan.button} ${plan.color === 'text-white' ? 'text-black' : 'text-white'}`}
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
