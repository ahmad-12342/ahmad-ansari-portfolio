import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

const Blog = () => {
    const [filter, setFilter] = useState('All');

    const blogPosts = [
        {
            id: 1,
            title: 'Getting Started with React & Modern Web Development',
            excerpt: 'Learn the fundamentals of React and how to build scalable web applications with modern tools and best practices.',
            date: '2026-01-15',
            readTime: '8 min read',
            category: 'Web Development',
            image: '🚀',
            tags: ['React', 'JavaScript', 'Web Dev'],
        },
        {
            id: 2,
            title: 'The Art of UI/UX Design: Creating Beautiful Interfaces',
            excerpt: 'Discover the principles of great design and learn how to create stunning user interfaces that users love.',
            date: '2026-01-20',
            readTime: '6 min read',
            category: 'Design',
            image: '🎨',
            tags: ['UI/UX', 'Design', 'Figma'],
        },
        {
            id: 3,
            title: 'Building Scalable APIs with Node.js',
            excerpt: 'A comprehensive guide to creating robust and scalable backend APIs using Node.js and Express.',
            date: '2026-01-25',
            readTime: '10 min read',
            category: 'Backend',
            image: '⚡',
            tags: ['Node.js', 'API', 'Backend'],
        },
        {
            id: 4,
            title: 'Firebase Authentication Made Easy',
            excerpt: 'Step-by-step tutorial on implementing secure authentication in your web apps using Firebase.',
            date: '2026-02-01',
            readTime: '7 min read',
            category: 'Tutorial',
            image: '🔐',
            tags: ['Firebase', 'Auth', 'Security'],
        },
        {
            id: 5,
            title: 'CSS Animations: Bringing Your Website to Life',
            excerpt: 'Master CSS animations and transitions to create engaging and interactive web experiences.',
            date: '2026-02-05',
            readTime: '5 min read',
            category: 'Web Development',
            image: '✨',
            tags: ['CSS', 'Animation', 'Frontend'],
        },
        {
            id: 6,
            title: 'Mobile-First Design Strategies',
            excerpt: 'Learn how to design and develop websites with a mobile-first approach for better user experience.',
            date: '2026-02-10',
            readTime: '6 min read',
            category: 'Design',
            image: '📱',
            tags: ['Mobile', 'Responsive', 'UX'],
        },
    ];

    const categories = ['All', 'Web Development', 'Design', 'Backend', 'Tutorial'];

    const filteredPosts = filter === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === filter);

    return (
        <section id="blog" className="py-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                        <BookOpen className="text-primary-500" size={32} strokeWidth={2} />
                        <h2 className="text-5xl md:text-6xl font-black text-gradient">
                            Blog & Articles
                        </h2>
                    </div>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        Insights, tutorials, and thoughts on web development, design, and technology
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${filter === category
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                                    : 'bg-white/5 hover:bg-white/10 opacity-70 hover:opacity-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 cursor-pointer hover:-translate-y-2"
                        >
                            {/* Image/Icon */}
                            <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center overflow-hidden">
                                <div className="text-8xl group-hover:scale-110 transition-transform duration-500">
                                    {post.image}
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex items-center gap-4 mb-3 text-sm opacity-60">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="opacity-70 mb-4 line-clamp-3 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-white/5 text-xs rounded-md flex items-center gap-1"
                                        >
                                            <Tag size={10} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More */}
                                <button className="flex items-center gap-2 text-primary-500 font-bold text-sm group-hover:gap-3 transition-all">
                                    Read More
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button className="btn-primary group">
                        View All Articles
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
