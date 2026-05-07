import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Layout, Code, Rocket, CheckCircle2, ArrowRight, 
  Smartphone, Zap, Eye, MousePointer2, Shield, Search,
  Monitor, Cpu, PhoneMissed, Send, MessageCircle, Calendar,
  TrendingUp, Clock, Users, Star, MessageSquare, ArrowUpRight, Plus
} from 'lucide-react';

const FadeIn: React.FC<{ delay?: number; className?: string; children: React.ReactNode }> = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const featureList = [
  {
    title: "Conversion-First Design",
    desc: "We don't just build pretty sites. We build sales engines designed to guide your visitors exactly where they need to go.",
    icon: <MousePointer2 className="w-6 h-6 text-[#ff6b00]" />
  },
  {
    title: "Mobile Optimization",
    desc: "Over 60% of your traffic is on mobile. We ensure your site looks and performs flawlessly on every device.",
    icon: <Smartphone className="w-6 h-6 text-[#ff6b00]" />
  },
  {
    title: "Lightning Speed",
    desc: "Every second of load time costs you money. Our builds are optimized for core web vitals and instant performance.",
    icon: <Zap className="w-6 h-6 text-[#ff6b00]" />
  },
  {
    title: "SEO Foundation",
    desc: "Built with search engines in mind from day one. Clean code, proper structure, and meta optimization included.",
    icon: <Search className="w-6 h-6 text-[#ff6b00]" />
  },
  {
    title: "Enterprise Security",
    desc: "Robust hosting and security protocols to keep your site safe from threats and downtime.",
    icon: <Shield className="w-6 h-6 text-[#ff6b00]" />
  },
  {
    title: "Custom Integrations",
    desc: "Need your site to talk to your CRM, booking system, or payment processor? We handle the complex pipes.",
    icon: <Code className="w-6 h-6 text-[#ff6b00]" />
  }
];

const WebsitesPage = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-6">
              Full-Stack Web Development
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              We Build Websites That <br />
              <span className="text-gradient">Actually Work.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Your website shouldn't just be an expensive business card. It should be your hardest-working employee, generating leads and closing sales 24/7.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-brand text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-orange-500/20">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featureList.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div className="p-8 h-full rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Process Section */}
        <FadeIn>
          <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden mb-32 border border-gray-100 shadow-xl shadow-gray-200/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none" />
          <div className="relative z-10 w-full max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">The Website Ascension Process</h2>
            
            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/0 via-[#ff6b00]/40 to-[#ff6b00]/0 animate-pulse" />
                {/* Flowing dots along the line */}
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent opacity-80"
                  animate={{ left: ["-10%", "110%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 relative group-hover:border-[#ff6b00] group-hover:shadow-[0_0_40px_rgba(255,107,0,0.15)] transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ff6b00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Monitor className="w-10 h-10 text-slate-700 group-hover:text-[#ff6b00] transition-colors" />
                    </motion.div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#ff6b00] transition-colors">Your Website</h4>
                  <div className="px-3 py-1 bg-gray-100 rounded-full mb-4 group-hover:bg-orange-50 transition-colors border border-transparent group-hover:border-orange-100">
                    <p className="text-slate-600 group-hover:text-[#ff6b00] font-bold text-xs tracking-wide uppercase">Captures the Lead</p>
                  </div>
                  <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed group-hover:text-gray-700 transition-colors">Your website's primary job is to effectively capture and nurture prospects into leads.</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full bg-orange-50 border-2 border-[#ff6b00] flex items-center justify-center mb-6 relative group-hover:shadow-[0_0_50px_rgba(255,107,0,0.3)] transition-all duration-300">
                    <div className="absolute inset-0 rounded-full border border-[#ff6b00] animate-ping opacity-20" />
                    <motion.div
                       animate={{ rotate: 360 }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff6b00]/30"
                    />
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Cpu className="w-10 h-10 text-[#ff6b00]" />
                    </motion.div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#ff6b00] transition-colors">AI Automation Engine</h4>
                  <div className="px-3 py-1 bg-orange-50 rounded-full mb-4 border border-orange-100 shadow-sm shadow-orange-500/10">
                    <p className="text-[#ff6b00] font-bold text-xs tracking-wide uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
                      Works 24/7 Behind The Scenes
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed group-hover:text-gray-700 transition-colors">Tying your site to intelligent AI engines helps your business operate and scale 24/7 without you.</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 relative group-hover:border-green-400 group-hover:shadow-[0_0_40px_rgba(74,222,128,0.2)] transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Zap className="w-10 h-10 text-slate-700 group-hover:text-green-500 transition-colors" />
                    </motion.div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">The Result</h4>
                  <div className="px-3 py-1 bg-gray-100 rounded-full mb-4 group-hover:bg-green-50 transition-colors border border-transparent group-hover:border-green-100">
                    <p className="text-slate-600 group-hover:text-green-600 font-bold text-xs tracking-wide uppercase">More Business</p>
                  </div>
                  <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed group-hover:text-gray-700 transition-colors">The result of combining a website to an automation engine is more booked jobs and rapid growth.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>

        {/* Cold Lead Prevention Section */}
        <div className="relative mb-32 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-6">
                Why Automation Is Important
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Never let a lead <span className="text-[#ff6b00]">go cold again.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                40% of businesses miss qualified leads because they can't answer the phone or reply to forms fast enough. We deploy automations to fix that.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="h-full">
              <div className="p-8 h-full rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <PhoneMissed className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Missed Call Text-Back</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  Instantly text back anyone who calls your business when you're busy on a job site. Turn a missed call into a text conversation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="h-full">
              <div className="p-8 h-full rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Send className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Instant SMS Follow-Up</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  Automatically text leads the second they submit a form to book a meeting. Strike while the iron is hot.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="p-8 h-full rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <MessageCircle className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">24/7 AI Website Chat</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  Engage visitors on your site and collect their information around the clock. Your website never sleeps.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="h-full">
              <div className="p-8 h-full rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Calendar className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Seamless Booking</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  Let the AI handle the back-and-forth scheduling directly on your calendar, eliminating friction.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} className="h-full">
              <div className="p-8 h-full rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <TrendingUp className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Stop Wasting Ad Spend</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  Ensure every lead from Google or Facebook gets an immediate, personalized response to maximize your ROI.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6} className="h-full">
              <div className="p-8 h-full rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Clock className="w-6 h-6 text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Focus on Your Craft</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  Stop playing phone tag and get back to running your local business. We handle the front lines.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ACRM Section */}
        <div className="relative mb-32 pt-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-6">
                Automated CRM
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                What is an <span className="text-[#ff6b00]">ACRM?</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                A traditional CRM just stores names and emails. Our <strong>Automated Customer Relationship Manager (ACRM)</strong> actually works the leads for you. Everything from missed calls to appointment reminders happens in one place, automatically.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2}>
            {/* Dashboard Mockup */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col md:flex-row shadow-orange-500/10">
              
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-slate-50 p-6 flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6b00] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-900 font-bold text-lg tracking-tight">Ascension OS</span>
                </div>
                
                <nav className="flex flex-col gap-2">
                  <div 
                    onClick={() => setActiveTab('Dashboard')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors ${activeTab === 'Dashboard' ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                  >
                    <Layout className="w-5 h-5" />
                    Dashboard
                  </div>
                  <div 
                    onClick={() => setActiveTab('Conversations')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer justify-between transition-colors ${activeTab === 'Conversations' ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5" />
                      Conversations
                    </div>
                    <span className={activeTab === 'Conversations' ? 'bg-white text-[#ff6b00] text-[10px] font-bold px-2 py-0.5 rounded-full' : 'bg-[#ff6b00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full'}>3</span>
                  </div>
                  <div 
                    onClick={() => setActiveTab('Contacts')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors ${activeTab === 'Contacts' ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                  >
                    <Users className="w-5 h-5" />
                    Contacts
                  </div>
                  <div 
                    onClick={() => setActiveTab('Calendar')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors ${activeTab === 'Calendar' ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                  >
                    <Calendar className="w-5 h-5" />
                    Calendar
                  </div>
                  <div 
                    onClick={() => setActiveTab('Automations')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors ${activeTab === 'Automations' ? 'bg-[#ff6b00] text-white shadow-lg shadow-orange-500/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                  >
                    <Zap className="w-5 h-5" />
                    Automations
                  </div>
                </nav>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6 sm:p-8 bg-white">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">{activeTab === 'Dashboard' ? 'Overview' : activeTab}</h3>
                  <button className="px-4 py-2 rounded-xl bg-white text-slate-700 text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
                    Last 7 Days ↓
                  </button>
                </div>
                
                {activeTab === 'Dashboard' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      {/* Stat Card 1 */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <p className="text-slate-500 font-medium text-xs sm:text-sm">Missed Calls Recovered</p>
                          <PhoneMissed className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">14</div>
                        <div className="flex items-center gap-1 text-[#ff6b00] text-xs sm:text-sm font-medium">
                          <ArrowUpRight className="w-4 h-4" />
                          +3 from last week
                        </div>
                      </div>
                      
                      {/* Stat Card 2 */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <p className="text-slate-500 font-medium text-xs sm:text-sm">Estimates Booked</p>
                          <Calendar className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">8</div>
                        <div className="text-slate-500 text-xs sm:text-sm font-medium">
                          $4,200 potential value
                        </div>
                      </div>
                      
                      {/* Stat Card 3 */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <p className="text-slate-500 font-medium text-xs sm:text-sm">Review Rqsts Sent</p>
                          <Star className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">22</div>
                        <div className="flex items-center gap-1 text-[#ff6b00] text-xs sm:text-sm font-medium">
                          <ArrowUpRight className="w-4 h-4" />
                          +4 new 5-star reviews
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Live Automations */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col h-full hover:border-gray-300 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center mb-6">
                          <h4 className="text-slate-900 font-bold">Live Automations</h4>
                          <div className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                            <MessageSquare className="w-5 h-5 text-slate-400" />
                          </div>
                          <div>
                            <p className="text-slate-700 text-sm font-medium mb-1">Auto text-back sent to <span className="text-slate-900 font-bold">John D.</span></p>
                            <p className="text-slate-500 text-xs">2 mins ago</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Unified Inbox */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col h-full hover:border-gray-300 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center mb-6">
                          <h4 className="text-slate-900 font-bold">Unified Inbox</h4>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                            <MessageCircle className="w-5 h-5 text-slate-400" />
                          </div>
                          <div>
                            <p className="text-slate-700 text-sm mb-1 line-clamp-1 italic">"Hi! I need a quote for a roof repair..."</p>
                            <p className="text-slate-500 text-xs">From SMS • 1 hr ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'Conversations' && (
                  <div className="flex h-[400px] border border-gray-200 rounded-2xl overflow-hidden bg-white">
                    {/* Left Sidebar - Chat List */}
                    <div className="w-1/3 border-r border-gray-200 bg-slate-50 flex flex-col">
                      <div className="p-4 border-b border-gray-200">
                        <div className="bg-white px-3 py-2 rounded-lg border border-gray-200 flex items-center gap-2">
                          <Search className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">Search messages...</span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto p-2 space-y-1">
                        <div className="bg-white p-3 rounded-xl border-l-4 border-[#ff6b00] shadow-sm cursor-pointer">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-slate-900 text-sm">Mike Johnson</span>
                            <span className="text-xs text-[#ff6b00] font-medium">Just now</span>
                          </div>
                          <p className="text-xs text-slate-600 truncate">Yes, the 2pm slot works for me.</p>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white transition-colors cursor-pointer text-slate-600">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-slate-900 text-sm">Sarah Williams</span>
                            <span className="text-xs text-slate-400">2 hrs ago</span>
                          </div>
                          <p className="text-xs truncate">Can you send over the updated quote?</p>
                        </div>
                        <div className="p-3 rounded-xl hover:bg-white transition-colors cursor-pointer text-slate-600">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-slate-900 text-sm">John D.</span>
                            <span className="text-xs text-slate-400">1 day ago</span>
                          </div>
                          <p className="text-xs truncate">Thanks! I got the text message.</p>
                        </div>
                      </div>
                    </div>
                    {/* Right Side - Chat Window */}
                    <div className="flex-1 flex flex-col">
                      <div className="p-4 border-b border-gray-200 flex items-center gap-3 bg-white">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#ff6b00] font-bold">MJ</div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">Mike Johnson</h4>
                          <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Online
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 p-4 bg-slate-50 flex flex-col gap-3 overflow-y-auto">
                        <div className="flex flex-col gap-1 items-start">
                          <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl rounded-tl-none text-sm text-slate-700 max-w-[80%]">
                            Hi, I saw your ad and I'm interested in an estimate.
                          </div>
                          <span className="text-[10px] text-gray-400 ml-1">1:42 PM • SMS</span>
                        </div>
                        <div className="flex flex-col gap-1 items-end pt-2">
                          <div className="text-[10px] text-gray-400 bg-orange-50 px-2 py-1 rounded-full border border-orange-100 mb-1 flex items-center gap-1">
                            <Zap className="w-3 h-3 text-[#ff6b00]" /> Automated Reply
                          </div>
                          <div className="bg-[#ff6b00] text-white px-4 py-2 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                            Hi Mike! Thanks for reaching out. We can definitely help with that. Would you like to schedule a quick call to discuss the details?
                          </div>
                          <span className="text-[10px] text-gray-400 mr-1">1:43 PM</span>
                        </div>
                        <div className="flex flex-col gap-1 items-start pt-2">
                          <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl rounded-tl-none text-sm text-slate-700 max-w-[80%]">
                            Yes, the 2pm slot works for me.
                          </div>
                          <span className="text-[10px] text-gray-400 ml-1">Just now • SMS</span>
                        </div>
                      </div>
                      <div className="p-4 bg-white border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-400">
                            Type your message...
                          </div>
                          <button className="w-10 h-10 rounded-full bg-[#ff6b00] text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                            <Send className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Contacts' && (
                  <div className="h-[400px] border border-gray-200 rounded-2xl overflow-hidden bg-white flex flex-col">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-slate-50">
                      <div className="text-sm font-bold text-slate-900">All Contacts (1,248)</div>
                      <div className="flex gap-2">
                        <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-2 text-sm text-gray-500">
                          <Search className="w-4 h-4" /> Search
                        </div>
                        <div className="bg-[#ff6b00] px-3 py-1.5 rounded-lg text-white font-medium text-sm flex items-center gap-1 cursor-pointer hover:bg-orange-600">
                          <Plus className="w-4 h-4" /> Add Contact
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 font-medium border-b border-gray-200">
                          <tr>
                            <th className="px-6 py-3 font-medium">Name</th>
                            <th className="px-6 py-3 font-medium">Phone</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Last Contact</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                              { name: 'Mike Johnson', phone: '(555) 123-4567', status: 'Hot Lead', bg: 'bg-green-100 text-green-700', last: 'Just now' },
                              { name: 'Sarah Williams', phone: '(555) 987-6543', status: 'Follow Up', bg: 'bg-orange-100 text-orange-700', last: '2 hrs ago' },
                              { name: 'John D.', phone: '(555) 456-7890', status: 'Booked', bg: 'bg-blue-100 text-blue-700', last: '1 day ago' },
                              { name: 'Emily Chen', phone: '(555) 234-5678', status: 'New', bg: 'bg-purple-100 text-purple-700', last: '2 days ago' },
                              { name: 'Robert Fox', phone: '(555) 345-6789', status: 'Lost', bg: 'bg-gray-100 text-gray-600', last: '1 week ago' },
                            ].map((contact, i) => (
                              <tr key={i} className="hover:bg-slate-50 cursor-pointer transition-colors text-slate-700">
                                <td className="px-6 py-4 flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">{contact.name.split(' ').map(n=>n[0]).join('')}</div>
                                  <span className="font-semibold">{contact.name}</span>
                                </td>
                                <td className="px-6 py-4">{contact.phone}</td>
                                <td className="px-6 py-4">
                                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${contact.bg}`}>{contact.status}</span>
                                </td>
                                <td className="px-6 py-4 text-slate-500">{contact.last}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'Calendar' && (
                  <div className="h-[400px] border border-gray-200 rounded-2xl overflow-hidden bg-white flex flex-col">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-slate-50">
                      <div className="flex items-center gap-4">
                        <h4 className="font-bold text-slate-900 text-lg">May 2026</h4>
                        <div className="flex gap-1">
                          <button className="p-1 rounded bg-white border border-gray-200 hover:bg-gray-50 text-slate-500 font-bold">&lt;</button>
                          <button className="p-1 rounded bg-white border border-gray-200 hover:bg-gray-50 text-slate-500 font-bold">&gt;</button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
                        <button className="px-3 py-1 rounded text-sm text-slate-500 hover:bg-slate-50">Day</button>
                        <button className="px-3 py-1 rounded text-sm bg-slate-100 font-medium text-slate-900 shadow-sm">Week</button>
                        <button className="px-3 py-1 rounded text-sm text-slate-500 hover:bg-slate-50">Month</button>
                      </div>
                    </div>
                    <div className="flex-1 flex overflow-hidden">
                      {/* Time column */}
                      <div className="w-16 border-r border-gray-200 flex flex-col">
                        {['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'].map(time => (
                          <div key={time} className="flex-1 border-b border-gray-100 flex items-center justify-center text-xs text-gray-400 px-1 py-4">{time}</div>
                        ))}
                      </div>
                      {/* Days columns */}
                      <div className="flex-1 flex overflow-hidden bg-slate-50/50">
                        {['Mon 4', 'Tue 5', 'Wed 6', 'Thu 7', 'Fri 8'].map((day, i) => (
                          <div key={day} className="flex-1 border-r last:border-r-0 border-gray-200 relative min-w-[100px]">
                             <div className="text-center py-2 text-xs font-semibold text-slate-500 border-b border-gray-200 bg-white">{day}</div>
                             {/* Render lines */}
                             <div className="absolute inset-x-0 top-[33px] flex flex-col">
                                {[...Array(6)].map((_, idx) => (
                                  <div key={idx} className="h-12 border-b border-gray-100"></div>
                                ))}
                             </div>
                             {/* Example Events */}
                             {i === 2 && ( /* Wed 6 */
                               <div className="absolute top-[50px] left-1 right-1 bg-orange-100 border border-orange-200 text-orange-800 rounded p-1.5 text-[10px] leading-tight z-10 hover:shadow-md cursor-pointer">
                                 <div className="font-bold">Initial Consult</div>
                                 <div className="text-orange-700">Sarah W.</div>
                                 <div className="text-orange-600/70">10:00 AM</div>
                               </div>
                             )}
                             {i === 2 && (
                                <div className="absolute top-[250px] left-1 right-1 bg-blue-100 border border-blue-200 text-blue-800 rounded p-1.5 text-[10px] leading-tight z-10 hover:shadow-md cursor-pointer">
                                  <div className="font-bold">Estimate Call</div>
                                  <div className="text-blue-700">Mike J.</div>
                                  <div className="text-blue-600/70">2:00 PM</div>
                                </div>
                             )}
                             {i === 4 && ( /* Fri 8 */
                                <div className="absolute top-[120px] left-1 right-1 bg-green-100 border border-green-200 text-green-800 rounded p-1.5 text-[10px] leading-tight z-10 hover:shadow-md cursor-pointer">
                                  <div className="font-bold">Site Visit</div>
                                  <div className="text-green-700">John D.</div>
                                  <div className="text-green-600/70">11:30 AM</div>
                                </div>
                             )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Automations' && (
                  <div className="h-[400px] border border-gray-200 rounded-2xl overflow-hidden bg-slate-50 flex">
                    {/* Sidebar list */}
                    <div className="w-1/3 min-w-[200px] border-r border-gray-200 bg-white flex flex-col">
                      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 text-sm">Active Flows</h4>
                        <button className="text-white bg-[#ff6b00] rounded-full p-1 border border-orange-600"><Plus className="w-3 h-3" /></button>
                      </div>
                      <div className="p-2 space-y-1 overflow-y-auto flex-1">
                        <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl cursor-pointer">
                          <div className="font-semibold text-[#ff6b00] text-sm flex items-center justify-between">Missed Call Text-Back <div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                          <p className="text-xs text-orange-600 mt-1">Triggers on missed call</p>
                        </div>
                        <div className="p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors border border-transparent">
                          <div className="font-semibold text-slate-900 text-sm flex items-center justify-between">New Lead Nurture <div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                          <p className="text-xs text-slate-500 mt-1">3 days of follow up texts</p>
                        </div>
                        <div className="p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors border border-transparent">
                          <div className="font-semibold text-slate-900 text-sm flex items-center justify-between">Review Request <div className="w-2 h-2 rounded-full bg-slate-300"></div></div>
                          <p className="text-xs text-slate-500 mt-1">Sent 2 days after job finish</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Canvas area mock */}
                    <div className="flex-1 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-90 p-8 flex flex-col items-center">
                      <div className="absolute inset-0 bg-slate-50/80 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-sm">
                        {/* Trigger Node */}
                        <div className="bg-white border-2 border-blue-200 rounded-xl p-4 w-full shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><PhoneMissed className="w-4 h-4" /></div>
                            <h5 className="font-bold text-slate-900 text-sm">Trigger: Missed Call</h5>
                          </div>
                          <p className="text-xs text-slate-500">From any integrated phone number.</p>
                        </div>
                        
                        {/* Arrow */}
                        <div className="w-0.5 h-6 bg-gray-300"></div>
                        
                        {/* Action Node */}
                        <div className="bg-white border-2 border-orange-200 rounded-xl p-4 w-full shadow-sm relative">
                           <div className="absolute -top-3 -right-3 bg-white p-1 rounded-full"><div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Active</div></div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="bg-orange-100 p-2 rounded-lg text-[#ff6b00]"><Send className="w-4 h-4" /></div>
                            <h5 className="font-bold text-slate-900 text-sm">Action: Send SMS</h5>
                          </div>
                          <div className="bg-slate-50 border border-gray-100 rounded p-2 text-xs text-slate-600 italic">
                            "Hi, sorry we missed you! We're currently assisting another customer..."
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="w-0.5 h-6 bg-gray-300"></div>
                        
                        <div className="text-sm bg-white border border-gray-300 rounded-full px-4 py-1.5 text-slate-500 shadow-sm cursor-pointer hover:bg-gray-50 flex items-center justify-center gap-1 font-medium"><Plus className="w-3 h-3" /> Add Step</div>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Final CTA */}
        <div className="max-w-5xl mx-auto mb-20">
          <FadeIn>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready To Ascend?</h2>
              <p className="text-lg text-gray-500">Stop settling for mediocrity. Build a high-performance website that positions you as the leader in your market.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-orange-500/10 text-left">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-900">Name</label>
                    <input type="text" id="name" placeholder="John Doe" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-900">Company Name</label>
                    <input type="text" id="company" placeholder="Acme Corp" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-900">Email</label>
                    <input type="email" id="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-900">Phone Number</label>
                    <input type="tel" id="phone" placeholder="(555) 123-4567" className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center h-5 mt-1">
                    <input type="checkbox" id="a2p" className="w-5 h-5 rounded border-gray-300 text-[#ff6b00] focus:ring-[#ff6b00] focus:ring-offset-0 cursor-pointer accent-[#ff6b00]" required />
                  </div>
                  <label htmlFor="a2p" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                    By submitting this form, you agree to receive SMS and email communications from Ascension OS regarding your inquiry. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP to SMS or clicking unsubscribe in emails.
                  </label>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-gradient-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group">
                    Submit Request
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default WebsitesPage;
