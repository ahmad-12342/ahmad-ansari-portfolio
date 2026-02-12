import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { auth, googleProvider, githubProvider } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { Github } from 'lucide-react';

const Signup = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [passwordRules, setPasswordRules] = useState({
        length: false,
        number: false,
        special: false,
    });

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormData({ ...formData, password: password });
        setPasswordRules({
            length: password.length >= 8,
            number: /\d/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!passwordRules.length || !passwordRules.number || !passwordRules.special) {
            setError('Please meet all password requirements.');
            return;
        }

        setIsLoading(true);
        console.log("Attempting Signup with:", { email: formData.email, name: formData.name });
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("User Credential created:", userCredential.user.uid);
            await updateProfile(userCredential.user, {
                displayName: formData.name
            });
            setIsLoading(false);
            navigate('/');
        } catch (err) {
            setIsLoading(false);
            const friendlyError = err.code === 'auth/email-already-in-use'
                ? 'Email already registered.'
                : `Error (${err.code}): ${err.message}`;
            setError(friendlyError);
            console.error("Signup error:", err);
        }
    };

    const handleSocialLogin = async (provider) => {
        setError('');
        setIsLoading(true);
        try {
            await signInWithPopup(auth, provider);
            setIsLoading(false);
            navigate('/');
        } catch (err) {
            setIsLoading(false);
            setError(`Social Login Error: ${err.message}`);
            console.error("Social login error:", err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-mesh flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg glass border border-inherit/10 rounded-3xl p-8 relative z-10 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-gradient tracking-tighter mb-2">Join Waitlist</h2>
                    <p className="text-inherit opacity-60 text-sm">Create an account to access exclusive content and features.</p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mb-6 bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-xs font-bold uppercase tracking-widest text-center"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary-500 transition-all text-inherit" size={18} />
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                className="w-full bg-primary-500/5 border border-inherit/10 rounded-xl pl-12 pr-4 py-3.5 text-sm  text-inherit focus:outline-none focus:border-primary-500/50 transition-all font-medium placeholder:text-inherit placeholder:opacity-40 focus:bg-primary-500/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary-500 transition-all text-inherit" size={18} />
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@example.com"
                                className="w-full bg-primary-500/5 border border-inherit/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-inherit focus:outline-none focus:border-primary-500/50 transition-all font-medium placeholder:text-inherit placeholder:opacity-40 focus:bg-primary-500/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-100 group-focus-within:text-primary-500 transition-all text-inherit" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.password}
                                onChange={handlePasswordChange}
                                placeholder="••••••••"
                                className="w-full bg-primary-500/5 border border-inherit/10 rounded-xl pl-12 pr-12 py-3.5 text-sm text-inherit focus:outline-none focus:border-primary-500/50 transition-all font-medium placeholder:text-inherit placeholder:opacity-40 focus:bg-primary-500/10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity text-inherit"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {/* Password Strength Indicators */}
                        <div className="flex gap-4 px-2 mt-2">
                            <div className={`flex items-center gap-1 text-[10px] font-bold uppercase transition-colors ${passwordRules.length ? 'text-green-500' : 'opacity-40'}`}>
                                {passwordRules.length ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />} 8+ Chars
                            </div>
                            <div className={`flex items-center gap-1 text-[10px] font-bold uppercase transition-colors ${passwordRules.number ? 'text-green-500' : 'opacity-40'}`}>
                                {passwordRules.number ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />} Number
                            </div>
                            <div className={`flex items-center gap-1 text-[10px] font-bold uppercase transition-colors ${passwordRules.special ? 'text-green-500' : 'opacity-40'}`}>
                                {passwordRules.special ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />} Symbol
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 group cursor-pointer">
                        <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-inherit/20 bg-primary-500/10 checked:bg-primary-500 text-primary-500 focus:ring-0 transition-all cursor-pointer accent-primary-500" />
                        <span className="text-xs font-bold opacity-60 leading-tight group-hover:opacity-100 transition-opacity">
                            I agree to the <a href="#" className="text-primary-500 hover:underline decoration-primary-500/30 hover:decoration-primary-500">Terms of Service</a> & <a href="#" className="text-primary-500 hover:underline decoration-primary-500/30 hover:decoration-primary-500">Privacy Policy</a>
                        </span>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-xs"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            "Create Account"
                        )}
                    </button>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-inherit/10"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em]">
                            <span className="bg-[#0f172a] px-4 opacity-40">Or Continue With</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={() => handleSocialLogin(googleProvider)}
                            disabled={isLoading}
                            className="px-12 flex items-center justify-center gap-3 py-3.5 glass border border-inherit/10 rounded-xl hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest disabled:opacity-50 active:scale-95 shadow-xl shadow-primary-500/5"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center text-xs font-bold opacity-60">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary-500 hover:text-primary-400 underline decoration-primary-500/30 hover:decoration-primary-500 transition-all">Sign In</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
