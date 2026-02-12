import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Target, Zap, CheckCircle, Calendar } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            icon: Trophy,
            title: 'Top Developer Award 2025',
            organization: 'Tech Excellence Awards',
            date: '2025',
            description: 'Recognized as one of the top 10 developers in web development innovation',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            id: 2,
            icon: Award,
            title: 'React Professional Certification',
            organization: 'Meta (Facebook)',
            date: '2024',
            description: 'Advanced React patterns and modern web development practices',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            id: 3,
            icon: Medal,
            title: 'Google Cloud Certified',
            organization: 'Google Cloud Platform',
            date: '2024',
            description: 'Professional Cloud Developer certification',
            color: 'from-green-500 to-emerald-500',
        },
        {
            id: 4,
            icon: Star,
            title: 'Firebase Expert',
            organization: 'Google Firebase',
            date: '2023',
            description: 'Advanced Firebase development and architecture',
            color: 'from-orange-500 to-red-500',
        },
        {
            id: 5,
            icon: Target,
            title: 'Full Stack Web Developer',
            organization: 'freeCodeCamp',
            date: '2023',
            description: 'Complete full-stack development certification with 300+ hours',
            color: 'from-purple-500 to-pink-500',
        },
        {
            id: 6,
            icon: Zap,
            title: 'UI/UX Design Mastery',
            organization: 'Interaction Design Foundation',
            date: '2023',
            description: 'Advanced user interface and experience design principles',
            color: 'from-indigo-500 to-purple-500',
        },
    ];

    const stats = [
        { icon: Trophy, number: '0', label: 'Awards', color: 'text-yellow-500' },
        { icon: Award, number: '0', label: 'Certifications', color: 'text-blue-500' },
        { icon: Star, number: '10+', label: 'Projects', color: 'text-green-500' },
        { icon: CheckCircle, number: '98%', label: 'Success Rate', color: 'text-purple-500' },
    ];

    return (
        <section id="achievements" className="py-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Trophy className="text-yellow-500" size={32} strokeWidth={2} />
                        <h2 className="text-5xl md:text-6xl font-black text-gradient">
                            Achievements & Certifications
                        </h2>
                    </div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Recognition and certifications that showcase expertise and dedication to excellence
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-primary-500/20 transition-all hover:-translate-y-1"
                        >
                            <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} strokeWidth={2} />
                            <div className="text-4xl font-black mb-2 text-gradient">{stat.number}</div>
                            <div className="text-sm font-bold opacity-70 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center glass rounded-3xl p-8 md:p-12"
                >
                    <Trophy className="text-yellow-500 mx-auto mb-4" size={48} strokeWidth={2} />
                    <h3 className="text-3xl font-black mb-4 text-gradient">
                        Constantly Growing & Learning
                    </h3>
                    <p className="text-lg opacity-70 mb-6 max-w-2xl mx-auto">
                        Committed to continuous improvement and staying at the forefront of technology
                    </p>
                    <button className="btn-primary group">
                        <Award size={20} />
                        View Full Resume
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
