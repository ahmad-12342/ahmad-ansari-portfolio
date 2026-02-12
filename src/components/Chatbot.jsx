import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, Code2, Briefcase, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Chatbot = ({ isOpen, setIsOpen }) => {
    const { t, i18n } = useTranslation();
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: t('chatbot.welcome') }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, isTyping]);

    const knowledgeBase = {
        en: {
            skills: "I specialize in high-end Frontend Development. My stack includes React.js, Next.js, Framer Motion for animations, and Tailwind CSS for styling. For backend, I use Firebase and Node.js.",
            services: "I offer a range of premium services:\n1. Custom Web Applications\n2. UI/UX Design & Prototyping\n3. Responsive Site Redesigns\n4. Performance Optimization\n5. API Integration",
            projects: "I've handled over 50+ projects. You can scroll through the 'Featured Portfolio' section on this page to see my latest work in E-commerce, AI Dashboards, and more!",
            contact: "Let's build something great! You can email me at muhammadansariahmad323@gmail.com, call +92 325 2207294, or use the Contact section below.",
            experience: "I have 1 year of professional experience, building modern web applications and high-end portfolios for clients.",
            unknown: "That's a great question! While I'm still learning, I can specifically help you with info about Ahmad's skills, his services, past projects, or how to hire him. What would you like to know?"
        },
        ur: {
            skills: "میں جدید فرنٹ اینڈ ڈویلپمنٹ میں مہارت رکھتا ہوں۔ میرا اسٹیک React.js، Next.js اور Framer Motion پر مشتمل ہے۔ میں Firebase اور Node.js کا استعمال بھی کرتا ہوں۔",
            services: "میں یہ خدمات فراہم کرتا ہوں:\n1. کسٹم ویب ایپلی کیشنز\n2. UI/UX ڈیزائن\n3. ریسپانسیو ری ڈیزائن\n4. پرفارمنس آپٹیمائزیشن",
            projects: "میں نے 50 سے زیادہ پروجیکٹس مکمل کیے ہیں۔ آپ اسی پیج پر 'Featured Portfolio' کے سیکشن میں میرا کام دیکھ سکتے ہیں۔",
            contact: "مجھ سے muhammadansariahmad323@gmail.com پر رابطہ کریں یا +92 325 2207294 پر کال کریں۔",
            experience: "میرے پاس 1 سال کا پیشہ ورانہ تجربہ ہے، جس میں میں نے جدید ویب ٹیکنالوجیز پر کام کیا ہے۔",
            unknown: "بہت اچھا سوال ہے! میں فی الحال احمد کی مہارتوں، سروسز، اور پروجیکٹس کے بارے میں بتا سکتا ہوں۔ آپ کیا جاننا چاہیں گے؟"
        }
    };

    const getBotResponse = (userInput) => {
        const lang = i18n.language.startsWith('ur') ? 'ur' : 'en';
        const kb = knowledgeBase[lang] || knowledgeBase['en'];
        const m = userInput.toLowerCase();

        if (m.includes('skill') || m.includes('tech') || m.includes('stack') || m.includes('know')) return kb.skills;
        if (m.includes('service') || m.includes('offer') || m.includes('help') || m.includes('price')) return kb.services;
        if (m.includes('project') || m.includes('work') || m.includes('portfolio') || m.includes('show')) return kb.projects;
        if (m.includes('contact') || m.includes('hire') || m.includes('email') || m.includes('call') || m.includes('reach')) return kb.contact;
        if (m.includes('experience') || m.includes('history') || m.includes('time') || m.includes('old')) return kb.experience;
        if (m.includes('hi') || m.includes('hello') || m.includes('hey') || m.includes('aoa') || m.includes('salam')) {
            return lang === 'ur' ? "سلام! میں احمد کا AI اسسٹنٹ ہوں۔ میں آپ کی کیا مدد کر سکتا ہوں؟" : "Hi there! I'm Ahmad's AI Assistant. How can I help you today?";
        }
        if (m.includes('thank') || m.includes('thanks') || m.includes('shukria')) {
            return lang === 'ur' ? "آپ کا شکریہ! کیا آپ کو کچھ اور پوچھنا ہے؟" : "You're welcome! Is there anything else you'd like to know?";
        }

        return kb.unknown;
    };

    const handleSend = (text = input) => {
        const messageToSend = text.trim();
        if (!messageToSend) return;

        setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
        setInput('');
        setIsTyping(true);

        const delay = Math.random() * 1000 + 1000; // Realistic typing delay
        setTimeout(() => {
            const response = getBotResponse(messageToSend);
            setIsTyping(false);
            setMessages(prev => [...prev, { role: 'bot', content: response }]);
        }, delay);
    };

    const suggestions = [
        { label: 'Skills', icon: <Sparkles size={12} /> },
        { label: 'Services', icon: <Code2 size={12} /> },
        { label: 'Contact', icon: <Mail size={12} /> },
    ];

    return (
        <>
            {/* Floating Button Matched to Switcher */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-tr from-primary-600 to-primary-400 text-white rounded-full flex items-center justify-center shadow-2xl z-[1000] cursor-pointer"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0f172a]"></span>
                )}
            </motion.button>

            {/* Chat Window Matched to Switcher (320x400) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-28 right-8 w-[320px] h-[400px] glass border border-white/10 rounded-[2rem] shadow-2xl flex flex-col z-[1000] overflow-hidden"
                    >
                        {/* Compact Header */}
                        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-primary-500 rounded-xl flex items-center justify-center text-white">
                                        <Bot size={18} />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1e293b]"></span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold opacity-90">Ahmad AI</div>
                                    <div className="text-primary-500 text-[8px] font-black uppercase tracking-widest leading-none">Assistant</div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100 transition-opacity">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-inherit/50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-[11px] font-medium leading-relaxed shadow-sm ${msg.role === 'user'
                                        ? 'bg-primary-500 text-white rounded-tr-none'
                                        : 'glass border border-inherit/10 text-inherit rounded-tl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="glass p-4 rounded-2xl rounded-tl-none border border-inherit/10 flex gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Suggestions */}
                        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-inherit/5">
                            {suggestions.map((sug) => (
                                <button
                                    key={sug.label}
                                    onClick={() => handleSend(sug.label)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-[9px] font-bold opacity-60 hover:opacity-100 hover:text-primary-500 border border-inherit/10 whitespace-nowrap transition-all shadow-sm"
                                >
                                    {sug.icon} {sug.label}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-inherit/30 backdrop-blur-md">
                            <div className="relative flex items-center group">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={t('chatbot.placeholder')}
                                    className="w-full bg-inherit/5 border border-inherit/10 rounded-xl pl-4 pr-11 py-3 text-xs focus:outline-none focus:border-primary-500/50 transition-all placeholder:opacity-40 font-medium"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className="absolute right-1 w-8 h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all shadow-md shadow-primary-500/20"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
