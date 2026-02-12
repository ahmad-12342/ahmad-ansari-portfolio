import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const socialPosts = [
    {
        platform: 'Twitter',
        icon: <Twitter size={18} />,
        date: '2 hours ago',
        content: "Just finished a stunning portfolio redesign for a client! React + Framer Motion is a match made in heaven. ✨ #WebDesign #ReactJS",
        stats: '24 Likes • 5 Retweets',
        link: 'https://twitter.com'
    },
    {
        platform: 'LinkedIn',
        icon: <Linkedin size={18} />,
        date: 'Yesterday',
        content: "Thrilled to share that I've reached a new milestone in my development journey. Constant learning is the key to mastery in the ever-evolving tech world. 🚀",
        stats: '156 Reactions • 12 Comments',
        link: 'https://linkedin.com'
    },
    {
        platform: 'Instagram',
        icon: <Instagram size={18} />,
        date: '3 days ago',
        content: "Working on some new glassmorphism UI components today. The depth and transparency effects are really coming together! 🎨",
        stats: '89 Likes',
        link: 'https://instagram.com'
    }
];

const SocialFeed = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-primary-500/[0.01]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Social <span className="text-gradient">Feed</span></h2>
                        <p className="opacity-60 text-lg leading-relaxed">Stay updated with my latest thoughts, projects, and tech insights across social platforms.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {socialPosts.map((post, idx) => (
                        <motion.a
                            key={idx}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group block"
                        >
                            <div className="h-full p-8 glass border border-inherit/10 rounded-3xl transition-all hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 active:scale-[0.98]">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                                            {post.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-black uppercase tracking-widest">{post.platform}</div>
                                            <div className="text-[10px] opacity-40 uppercase font-bold">{post.date}</div>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-inherit/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:text-primary-500 transition-all">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed opacity-70 mb-8 italic">
                                    "{post.content}"
                                </p>

                                <div className="pt-6 border-t border-inherit/5 flex justify-between items-center">
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40">
                                        {post.stats}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Post
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
