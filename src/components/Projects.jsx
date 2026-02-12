import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';

const projects = [
    {
        title: "Eco-Commerce Platform",
        desc: "A full-scale e-commerce solution with sustainable focus and payment integration.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Firebase", "Stripe"],
        category: "Web Apps",
        link: "#",
        github: "#"
    },
    {
        title: "AI Dashboard Pro",
        desc: "Real-time analytics dashboard with AI-driven insights and interactive charts.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Tailwind", "D3.js"],
        category: "Web Apps",
        link: "#",
        github: "#"
    },
    {
        title: "Social Connect App",
        desc: "A modern social media platform with real-time chat and media sharing.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        tags: ["React Native", "Socket.io", "Node.js"],
        category: "Mobile Apps",
        link: "#",
        github: "#"
    },
    {
        title: "Fitness Tracker Mobile",
        desc: "Cross-platform fitness tracking app with workout plans and nutrition tracking.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
        tags: ["Flutter", "Firebase", "HealthKit"],
        category: "Mobile Apps",
        link: "#",
        github: "#"
    },
    {
        title: "Restaurant Brand Identity",
        desc: "Complete brand identity and UI/UX design for premium restaurant chain.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
        tags: ["Figma", "Adobe XD", "Illustrator"],
        category: "UI/UX",
        link: "#",
        github: "#"
    },
    {
        title: "Banking App Redesign",
        desc: "Modern redesign of mobile banking app with enhanced UX and accessibility.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
        tags: ["Figma", "Prototype", "User Testing"],
        category: "UI/UX",
        link: "#",
        github: "#"
    },
    {
        title: "Microservices API Gateway",
        desc: "Scalable API gateway with authentication, rate limiting, and monitoring.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        tags: ["Node.js", "Docker", "Redis"],
        category: "Backend",
        link: "#",
        github: "#"
    },
    {
        title: "Real-time Chat Server",
        desc: "High-performance WebSocket server supporting millions of concurrent connections.",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
        tags: ["Go", "WebSocket", "PostgreSQL"],
        category: "Backend",
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio CMS Platform",
        desc: "Custom content management system for creative professionals and agencies.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "GraphQL", "MongoDB"],
        category: "Web Apps",
        link: "#",
        github: "#"
    }
];

const ProjectCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { damping: 20, stiffness: 200 });
    const mouseYSpring = useSpring(y, { damping: 20, stiffness: 200 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[450px] w-full rounded-[2.5rem] glass border border-inherit/10 overflow-hidden group cursor-pointer shadow-2xl transition-shadow hover:shadow-primary-500/10"
        >
            <div
                style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-primary-500/10 to-purple-500/10 overflow-hidden border border-inherit/10"
            >
                {/* Project Image/Video Area */}
                <div className="relative h-1/2 w-full overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>

                {/* Content Area */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-4 translate-z-20">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[8px] font-black bg-white/10 text-white px-3 py-1 rounded-full uppercase tracking-widest border border-white/20 backdrop-blur-md">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 tracking-tighter group-hover:text-primary-400 transition-colors uppercase italic">{project.title}</h3>
                    <p className="text-white/60 text-[11px] font-medium mb-6 line-clamp-2 leading-relaxed">{project.desc}</p>

                    <div className="flex items-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.link}
                            className="flex-1 bg-white text-black h-12 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all shadow-lg shadow-white/5"
                        >
                            <ExternalLink size={14} strokeWidth={3} /> Live Demo
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.github}
                            className="w-12 h-12 glass border border-white/10 flex items-center justify-center rounded-xl text-white hover:text-primary-400 transition-all hover:border-primary-500/30"
                        >
                            <Github size={18} strokeWidth={2.5} />
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Background decorative glow */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-500/20 blur-[80px] rounded-full group-hover:bg-primary-500/40 transition-all duration-500"></div>
        </motion.div>
    );
};


const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Web Apps', 'Mobile Apps', 'UI/UX', 'Backend'];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = filter === 'All' || project.category === filter;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Featured <span className="text-gradient">Portfolio</span></h2>
                        <p className="opacity-60 text-lg leading-relaxed">A curated collection of my most impactful digital products, blending technical precision with high-end design aesthetics.</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 glass rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-inherit/10 shadow-lg"
                    >
                        Explore Vault
                    </motion.button>
                </div>

                {/* Filter & Search Section */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 opacity-60" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects, tags, or tech..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 glass rounded-xl border border-inherit/10 focus:border-primary-500/50 outline-none transition-all text-sm font-medium"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 text-sm font-bold opacity-60">
                            <Filter size={18} />
                            <span>Filter:</span>
                        </div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${filter === category
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                                    : 'glass border border-inherit/10 opacity-60 hover:opacity-100 hover:border-primary-500/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                        {(filter !== 'All' || searchQuery) && (
                            <button
                                onClick={() => {
                                    setFilter('All');
                                    setSearchQuery('');
                                }}
                                className="px-4 py-2.5 text-xs font-bold text-red-500 hover:bg-red-500/10 rounded-full transition-all"
                            >
                                Clear All
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="text-sm opacity-60">
                        Showing <span className="font-bold text-primary-500">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 glass rounded-3xl">
                        <div className="text-6xl mb-4 opacity-30">🔍</div>
                        <h3 className="text-2xl font-bold mb-2 opacity-60">No projects found</h3>
                        <p className="opacity-40">Try adjusting your filters or search query</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

