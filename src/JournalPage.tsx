import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Search, Calendar, Clock, User, 
  ChevronRight, ArrowUpRight, Filter, MessageSquare,
  Zap, Bot, LineChart, Database, ArrowDown, Calendar as CalendarIcon
} from 'lucide-react';
import { DualCTA } from './Sections';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const categories = ["All", "AI Strategy", "Engineering", "Case Studies", "Future of Work"];

const articles = [
  {
    id: 1,
    title: "How to Build a High-Leverage AI Workforce in 2026",
    excerpt: "The shift from generative AI tools to autonomous agent teams is here. Learn the architecture required to build systems that think, reason, and execute.",
    category: "AI Strategy",
    date: "May 12, 2026",
    readTime: "8 min read",
    author: "Adam Beck",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Case Study: Scaling Support to 1M Users with 2 Human Agents",
    excerpt: "Nexus Industries cut their resolution times by 75% using our tiered agent system. Here's exactly how the handoff works.",
    category: "Case Studies",
    date: "May 8, 2026",
    readTime: "12 min read",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad79?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Avoiding the 'Agent Loop': Principles of Reliable AI Workflows",
    excerpt: "Agents that hallucinate or get stuck in infinite loops are a liability. We share our internal safety protocols for production deployments.",
    category: "Engineering",
    date: "May 5, 2026",
    readTime: "6 min read",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "The Death of the Mid-Level Admin Task",
    excerpt: "Why digital employees are replacing standard administrative pipelines and what it means for your local business headcount.",
    category: "Future of Work",
    date: "Apr 28, 2026",
    readTime: "10 min read",
    author: "Adam Beck",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Integrating AI Agents with Legacy ERP Systems",
    excerpt: "A deep dive into bridging the gap between cutting-edge LLMs and 20-year-old database architectures.",
    category: "Engineering",
    date: "Apr 22, 2026",
    readTime: "15 min read",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "3 Patterns for Human-in-the-Loop Validation",
    excerpt: "Sometimes you need a person to check the work. These are the most efficient ways to insert humans into the agent loop.",
    category: "AI Strategy",
    date: "Apr 15, 2026",
    readTime: "5 min read",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
  }
];

import { Helmet } from 'react-helmet-async';

import { submitToWebhook } from './lib/webhook';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const success = await submitToWebhook({
      ...formData,
      formType: 'Journal Page Final CTA Inquiry'
    });

    if (success) {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: ''
      });
    } else {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const regularPosts = filteredArticles;

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <Helmet>
        <title>Ascension Journal | AI Strategy & Engineering Insights</title>
        <meta name="description" content="Explore our latest thoughts on AI agents, autonomous systems, and high-leverage business operations. Stay ahead with insights from Ascension Agents." />
        <link rel="canonical" href="https://ascensionagents.io/journal" />
      </Helmet>
      {/* Background Accents (Consistent with other pages) */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-6">
                Insights & Engineering
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Ascension <span className="text-gradient">Journal</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                Our thoughts on autonomous systems, high-leverage business operations, and the frontier of digital employees.
              </p>
            </FadeIn>
          </div>
          <div className="w-full md:w-auto">
            <FadeIn delay={0.2}>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#ff6b00] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 pl-12 pr-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:border-[#ff6b00] focus:ring-4 focus:ring-orange-500/5 outline-none transition-all"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 mb-12 gap-2 hide-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${
                activeCategory === cat 
                ? 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-gray-200' 
                : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <FadeIn delay={0.4} className="mb-16">
          <DualCTA exploreLink="#articles" />
        </FadeIn>


        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {regularPosts.map((post, i) => (
              <motion.div
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/journal/${post.id}`} className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-2xl hover:shadow-gray-200/50 overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 border border-gray-200 uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                      <span className="text-gray-200">•</span>
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#ff6b00] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-brand" />
                        <span className="text-xs font-bold text-slate-900">{post.author}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#ff6b00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Final CTA */}
        <div className="max-w-5xl mx-auto mt-20 mb-20">
          <FadeIn>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready To Ascend?</h2>
              <p className="text-lg text-gray-500">Stop settling for mediocrity. Build a high-performance website that positions you as the leader in your market.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-orange-500/10 text-left">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-900">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading' || status === 'success'}
                      placeholder="John Doe" 
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-900">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading' || status === 'success'}
                      placeholder="Acme Corp" 
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-900">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading' || status === 'success'}
                      placeholder="john@example.com" 
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-900">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading' || status === 'success'}
                      placeholder="(555) 123-4567" 
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center h-5 mt-1">
                    <input 
                      type="checkbox" 
                      id="a2p" 
                      className="w-5 h-5 rounded border-gray-300 text-[#ff6b00] focus:ring-[#ff6b00] focus:ring-offset-0 cursor-pointer accent-[#ff6b00]" 
                      required 
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>
                  <label htmlFor="a2p" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                    By submitting this form, you agree to receive SMS and email communications from Ascension OS regarding your inquiry. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP to SMS or clicking unsubscribe in emails.
                  </label>
                </div>

                <div className="pt-4 text-center">
                  <button 
                    type="submit" 
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-gradient-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Inquiry Sent!' : 'Submit Inquiry'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {status === 'error' && <p className="text-red-500 mt-4 text-sm">Something went wrong. Please try again.</p>}
                  {status === 'success' && <p className="text-green-600 mt-4 text-sm font-bold">Thank you! We'll be in touch soon.</p>}
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export default BlogPage;
