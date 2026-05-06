import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Layout, Code, Rocket, CheckCircle2, ArrowRight, 
  Smartphone, Zap, Eye, MousePointer2, Shield, Search,
  Monitor, Cpu, PhoneMissed, Send, MessageCircle, Calendar,
  TrendingUp, Clock
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
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
                40% of local businesses miss qualified leads because they can't answer the phone or reply to forms fast enough. We deploy a digital workforce to fix that automatically.
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

        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Ready To Level Up Your Web Presence?</h2>
            <p className="text-lg text-gray-500 mb-10">Stop settling for mediocrity. Build a high-performance website that positions you as the leader in your market.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-brand text-white px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-orange-500/20">
                Book A Website Strategy Call
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default WebsitesPage;
