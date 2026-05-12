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
    title: "You Built This. You Shouldn't Be Running All of It.",
    excerpt: "The people who build things worth building usually do it because they are extraordinary at something specific. Then the thing grows, and the work they are brilliant at becomes a fraction of what fills their day.",
    content: [
      "The people who build things worth building usually do it because they are extraordinary at something specific. Writing code. Closing deals. Understanding people. Designing systems that work. For a while, that is exactly what the job is. Then the thing grows, and slowly, the work they are actually brilliant at becomes a fraction of what fills their day. The rest is everything the growth brought with it.",
      "That \"everything else\" is not the hard part. It is the relentless part. Scheduling, following up, pulling reports, sending confirmations, updating records, chasing approvals. None of it requires judgment. All of it demands time. And it keeps expanding to fill whatever space you give it.",
      "This is not a time management problem. No calendar system or productivity framework fixes it. It is a structural problem. You are spending your best hours doing work that does not need you, and the work that does need you is waiting.",
      "## The Tasks That Should Not Require a Person",
      "According to Microsoft's 2025 Work Trend Index, knowledge workers now spend more than 60% of their working hours on coordination and communication rather than the core output they were hired to produce. That number has climbed every year for the past five years. For people running their own operations without a team to redistribute the load, it runs higher.",
      "The work that AI agents handle first is precisely this category. Not creative decisions. Not relationship judgment. Pattern work. Predictable, rule-following tasks that need to happen consistently regardless of whether anyone has the bandwidth, remembered, or is having a hard week.",
      "A 2025 Gartner analysis found that businesses deploying agentic workflows for operational tasks reported reclaiming between 10 and 20 hours per person per week on work previously handled manually. That is not a rounding error. That is a restructuring of what a workday looks like.",
      "## What Tuesday Looks Like When the Pattern Work Is Gone",
      "The follow-up to last week's proposal went out while you slept. The new inquiry that came in at 11pm has been acknowledged, qualified, and scheduled. The weekly report is already in your inbox, not waiting on anyone to compile it.",
      "You open your laptop. The first thing on the agenda is the thing you actually want to work on.",
      "That is not a better version of your current business. It is your business running the way it was supposed to before the overhead took over.",
      "AscensionAgents.io builds the digital workforces that create that version. The agents handle the pattern. The scheduling, the follow-ups, the reporting, the handoffs. What comes back to you is not just recovered hours. It is the focus to use them on the work that actually required you to show up.",
      "You built something worth running. You just should not have to run all of it yourself."
    ],
    category: "AI Strategy",
    date: "May 11, 2026",
    readTime: "4 min read",
    author: "Sloane Mercer",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

import { Helmet } from 'react-helmet-async';

import { submitToWebhook } from './lib/webhook';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof articles[0] | null>(null);
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
        {!selectedPost && (
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
        )}

        {!selectedPost && (
          <FadeIn delay={0.4} className="mb-16">
            <DualCTA exploreLink="#articles" />
          </FadeIn>
        )}


        {/* Content Area */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            {selectedPost ? (
              <motion.div
                key="article-detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto"
              >
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm mb-8 hover:gap-3 transition-all"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" /> Back to Journal
                </button>

                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span className="px-3 py-1 bg-orange-50 text-[#ff6b00] rounded-full">{selectedPost.category}</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    {selectedPost.date}
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    {selectedPost.readTime}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 mb-12 pb-12 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-brand shadow-lg" />
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{selectedPost.author}</div>
                      <div className="text-sm text-gray-500">AscensionAgents.io</div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
                  {selectedPost.content?.map((paragraph, i) => (
                    paragraph.startsWith('##') ? (
                      <h2 key={i} className="text-2xl font-bold text-slate-900 pt-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    ) : (
                      <p key={i} className="text-lg">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>

                <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-0" />
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Want help automating your operations?</h3>
                    <p className="text-gray-400 mb-8 max-w-xl text-lg">We build custom agent teams that handle follow-ups, data entry, and coordination while you stay focused on higher-leverage work.</p>
                    <button 
                      onClick={() => {
                        setSelectedPost(null);
                        setTimeout(() => {
                           const contact = document.getElementById('contact');
                           if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="bg-[#ff6b00] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/20"
                    >
                      Book a Strategy Audit
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="article-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredArticles.map((post, i) => (
                  <motion.div
                    layout
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div 
                      onClick={() => setSelectedPost(post)}
                      className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-2xl hover:shadow-gray-200/50 overflow-hidden cursor-pointer"
                    >
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
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
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
