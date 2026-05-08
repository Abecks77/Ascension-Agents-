import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Layout, Database, Shield, Zap, 
  BarChart3, Calendar, ClipboardList, Settings,
  Cpu, Lock, Search, MousePointer2, Smartphone,
  CheckCircle2, Layers, LineChart, Users,
  ArrowDown, Calendar as CalendarIcon
} from 'lucide-react';
import { DualCTA } from './Sections';

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

import { Helmet } from 'react-helmet-async';

const WorkflowToolsPage = () => {
  const customSolutions = [
    {
      title: "Business Dashboards",
      description: "Real-time visualization of your KPIs, revenue data, and operation metrics in one high-performance interface.",
      icon: <BarChart3 className="w-6 h-6 text-[#ff6b00]" />,
      features: ["Custom API Integrations", "Real-time Stream Updates", "Advanced Filtering", "Export Capabilities"],
      preview: (
        <div className="h-32 mb-8 bg-slate-50 rounded-2xl p-4 flex flex-col gap-3 overflow-hidden relative group-hover:bg-slate-100 transition-colors">
          <div className="flex items-end justify-between h-16 gap-1 px-2">
            {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                className="w-full bg-[#ff6b00] rounded-t-sm opacity-80"
              />
            ))}
          </div>
          <div className="flex justify-between items-center px-1">
            <div className="h-2 w-12 bg-gray-200 rounded-full" />
            <div className="h-2 w-8 bg-orange-200 rounded-full" />
          </div>
        </div>
      )
    },
    {
      title: "Smart Task Managers",
      description: "Automated project management systems that track dependencies and use AI to predict bottlenecks.",
      icon: <ClipboardList className="w-6 h-6 text-[#ff6b00]" />,
      features: ["Automated Assignment", "Dynamic Deadlines", "Resource Allocation", "Priority Analytics"],
      preview: (
        <div className="h-32 mb-8 bg-slate-50 rounded-2xl p-4 flex items-center justify-center gap-2 group-hover:bg-slate-100 transition-colors">
          <div className="flex flex-col gap-2 w-full">
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-100 shadow-sm"
              >
                <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-green-500' : 'bg-gray-200'}`} />
                <div className="h-2 flex-1 bg-gray-100 rounded-full" />
                <div className={`w-6 h-2 rounded-full ${i === 0 ? 'bg-green-100' : 'bg-gray-100'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Marketing Calendars",
      description: "Omni-channel planning tools built specifically for your marketing workflow and approval pipelines.",
      icon: <Calendar className="w-6 h-6 text-[#ff6b00]" />,
      features: ["Drag-and-Drop Scheduling", "Asset Management", "Approval Workflows", "Social Integration"],
      preview: (
        <div className="h-32 mb-8 bg-slate-50 rounded-2xl p-4 grid grid-cols-4 gap-2 group-hover:bg-slate-100 transition-colors">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 flex items-center justify-center relative overflow-hidden">
              {i === 2 && (
                <motion.div 
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-1 bg-orange-100 rounded-md border border-orange-200"
                />
              )}
              {i === 5 && (
                <div className="absolute inset-1 bg-blue-50 rounded-md border border-blue-100" />
              )}
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Client Portals",
      description: "Secure, branded hubs for your clients to access documents, track project progress, and communicate with your team.",
      icon: <Users className="w-6 h-6 text-[#ff6b00]" />,
      features: ["Secure Document Sharing", "Messaging Systems", "Project Tracking", "White-Label Branding"],
      preview: (
        <div className="h-32 mb-8 bg-slate-50 rounded-2xl p-4 flex flex-col gap-2 group-hover:bg-slate-100 transition-colors justify-center">
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <Users className="w-4 h-4 text-[#ff6b00]" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="h-2 w-20 bg-gray-100 rounded-full" />
              <div className="h-1.5 w-12 bg-gray-50 rounded-full" />
            </div>
            <div className="w-8 h-4 rounded-full bg-green-50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-12 bg-white rounded-xl border border-gray-100 shadow-sm p-2 flex flex-col gap-1.5">
              <div className="h-1.5 w-full bg-gray-50 rounded-full" />
              <div className="h-1.5 w-2/3 bg-gray-50 rounded-full" />
            </div>
            <div className="h-12 w-12 bg-orange-500 rounded-xl flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <Helmet>
        <title>Workflow Tools & Dashboards | Ascension Agents</title>
        <meta name="description" content="We build bespoke internal tools, dashboards, and operational software that scales your unique business logic with high performance and reliability." />
        <link rel="canonical" href="https://ascensionagents.io/apps" />
      </Helmet>
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-6">
              Workflow Management Tools
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
              Software Built to Your <span className="text-gradient">Exact DNA.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              We build professional workflow tools, dashboards, and operational applications that eliminate friction and scale your unique business logic.
            </p>
          </FadeIn>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {customSolutions.map((solution, i) => (
            <FadeIn key={solution.title} delay={i * 0.1}>
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-2xl hover:shadow-gray-200/50 group flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#ff6b00] transition-colors">{solution.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {solution.description}
                </p>

                {solution.preview}

                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="flex justify-center mb-32">
          <DualCTA exploreLink="#capabilities" className="justify-center" />
        </FadeIn>

        {/* Technical Capabilities */}
        <div className="mb-32">
            <FadeIn>
                <div className="bg-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center md:text-left border border-gray-100 shadow-2xl shadow-gray-200/50">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -z-10 rounded-full" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Built for Reliability & <span className="text-gradient">Speed</span></h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Real-time Architecture", desc: "Built using modern websocket and serverless patterns for zero delay." },
                                    { title: "Enterprise Security", desc: "Encryption at rest, transit, and role-based access control (RBAC)." },
                                    { title: "Universal Integrations", desc: "Connect seamlessly with Stripe, Twilio, Salesforce, or your custom ERP." }
                                ].map((cap) => (
                                    <motion.div 
                                        key={cap.title} 
                                        className="flex items-start gap-4 group cursor-default"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:bg-[#ff6b00] transition-colors">
                                            <Zap className="w-4 h-4 text-[#ff6b00] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{cap.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <motion.div 
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 rounded-3xl bg-orange-50/50 border border-orange-100 backdrop-blur-sm cursor-pointer group"
                                >
                                    <LineChart className="w-8 h-8 text-[#ff6b00] mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-slate-900">99.9%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Uptime</div>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 rounded-3xl bg-orange-50/50 border border-orange-100 backdrop-blur-sm cursor-pointer group"
                                >
                                    <Shield className="w-8 h-8 text-[#ff6b00] mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-slate-900">AES-256</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Encryption</div>
                                </motion.div>
                            </div>
                            <div className="space-y-4 mt-8">
                                <motion.div 
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 rounded-3xl bg-orange-50/50 border border-orange-100 backdrop-blur-sm cursor-pointer group"
                                >
                                    <Layers className="w-8 h-8 text-[#ff6b00] mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-slate-900">Custom</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">API Layers</div>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 rounded-3xl bg-orange-50/50 border border-orange-100 backdrop-blur-sm cursor-pointer group"
                                >
                                    <Cpu className="w-8 h-8 text-[#ff6b00] mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-slate-900">Scalable</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Cloud Infra</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* Final CTA */}
        <div className="max-w-5xl mx-auto mb-20">
          <FadeIn>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to Build Your System?</h2>
              <p className="text-lg text-gray-500">Let's discuss the specific requirements for your workflow tool. We turn your operational vision into high-performance software.</p>
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
                    Submit Project Request
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

export default WorkflowToolsPage;
