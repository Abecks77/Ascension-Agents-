import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Layout, Code, Rocket, CheckCircle2, ArrowRight, 
  Smartphone, Zap, Eye, MousePointer2, Shield, Search
} from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {featureList.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-[2rem] border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden mb-32 border border-slate-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">The Website Ascension Process</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg shadow-orange-500/20">1</div>
                <h4 className="text-xl font-bold text-white mb-4">Architecture</h4>
                <p className="text-gray-400 text-sm">We map out the user journey and conversion funnels before writing a single line of code.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg shadow-orange-500/20">2</div>
                <h4 className="text-xl font-bold text-white mb-4">Build</h4>
                <p className="text-gray-400 text-sm">Our engineering team develops a pixel-perfect, high-performance site integrated with your tools.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg shadow-orange-500/20">3</div>
                <h4 className="text-xl font-bold text-white mb-4">Launch</h4>
                <p className="text-gray-400 text-sm">Strict QA, direct-to-market deployment, and ongoing hosting with 99.9% uptime.</p>
              </div>
            </div>
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
