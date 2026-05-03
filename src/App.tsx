import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, ArrowRight, Bot, LineChart, Users, Database, 
  ShieldCheck, Box, Menu, X, Zap, Workflow, Cpu, MessageSquare, PenTool,
  CheckCircle2, PhoneOff, CalendarX, Star, Phone, Bell, Search, Settings,
  Calendar as CalendarIcon, Mail, Clock, Megaphone, ArrowDown
} from 'lucide-react';
import { 
  WhoThisIsFor, Positioning, WhatYouGet, WhatThisDoes, 
  WhyAscension, DoYouQualify, Investment, PictureThis, Contact 
} from './Sections';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  key?: React.Key;
}

const DashboardMockup = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Marketing",
      icon: <Megaphone className="w-4 h-4" />,
      agentName: "Campaign Optimization Agent",
      agentStatus: "Processing",
      agentAction: "Analyzed performance across 4 ad platforms and reallocated budget to highest-performing creatives.",
      agentResponse: "Detected ad fatigue on LinkedIn campaign. Automatically paused underperforming ads and launched 3 new AI-generated variations.",
      logs: [
        { title: "Budget Reallocated", desc: "Shifted $500/day to Meta Ads", time: "10 min ago", icon: <LineChart className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" },
        { title: "A/B Test Concluded", desc: "Variant B outperformed by 24%", time: "45 min ago", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Content Generated", desc: "Drafted 5 new email sequences", time: "2 hrs ago", icon: <Mail className="w-4 h-4 text-slate-600" />, bg: "bg-slate-50" }
      ]
    },
    {
      name: "Content Creation",
      icon: <PenTool className="w-4 h-4" />,
      agentName: "Creative Assets Agent",
      agentStatus: "Active",
      agentAction: "Generated 12 social media posts and 3 blog outlines based on high-performing topics from last week.",
      agentResponse: "Drafted variant C of the 'Operational Audit' video script. Optimized for 15-30s retention.",
      logs: [
        { title: "Script Generated", desc: "Long-form LinkedIn article drafted", time: "Just now", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Image Created", desc: "Hero asset for new case study", time: "8 min ago", icon: <Zap className="w-4 h-4 text-orange-600" />, bg: "bg-orange-50" },
        { title: "Schedule Updated", desc: "Week plan synced with Buffer", time: "25 min ago", icon: <Database className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" }
      ]
    },
    {
      name: "Customer Support",
      icon: <MessageSquare className="w-4 h-4" />,
      agentName: "Support Resolution Agent",
      agentStatus: "Processing",
      agentAction: "Successfully resolved 45 tier-1 support tickets in the last hour. Escalated 2 complex issues to human agents.",
      agentResponse: "Ticket #8922 resolved: Processed refund for order #10042 according to standard return policy.",
      logs: [
        { title: "Ticket Auto-Resolved", desc: "Password reset for user@acme.com", time: "Just now", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Sentiment Alert", desc: "Frustrated customer routed to manager", time: "5 min ago", icon: <Bell className="w-4 h-4 text-orange-600" />, bg: "bg-orange-50" },
        { title: "Knowledge Base Updated", desc: "Added new article from resolved ticket", time: "12 min ago", icon: <Database className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" }
      ]
    },
    {
      name: "Finance Operations",
      icon: <LineChart className="w-4 h-4" />,
      agentName: "Invoice Matching Agent",
      agentStatus: "Active",
      agentAction: "Scanned and matched 120 vendor invoices against purchase orders in ERP system.",
      agentResponse: "Flagged invoice #INV-2024-88 for manual review: 15% discrepancy in line item 3 pricing.",
      logs: [
        { title: "Expense Approved", desc: "Q3 Marketing travel expenses", time: "2 min ago", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Payment Scheduled", desc: "Vendor payout for AWS services", time: "18 min ago", icon: <LineChart className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" },
        { title: "Audit Log Generated", desc: "Weekly compliance report ready", time: "1 hr ago", icon: <Database className="w-4 h-4 text-slate-600" />, bg: "bg-slate-50" }
      ]
    },
    {
      name: "HR & Talent",
      icon: <Users className="w-4 h-4" />,
      agentName: "Onboarding Coordinator",
      agentStatus: "Active",
      agentAction: "Sent welcome packets and provisioned software access for 5 new hires starting Monday.",
      agentResponse: "Candidate screening complete for Senior Engineer role. 3 candidates moved to interview stage based on technical requirements.",
      logs: [
        { title: "Access Provisioned", desc: "Slack, Jira, and Email accounts created", time: "Just now", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Document Signed", desc: "NDA received from John Doe", time: "22 min ago", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Interview Scheduled", desc: "Technical screen with Sarah Jenkins", time: "45 min ago", icon: <CalendarIcon className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" }
      ]
    },
    {
      name: "Sales Operations",
      icon: <Zap className="w-4 h-4" />,
      agentName: "Lead Routing Agent",
      agentStatus: "Processing",
      agentAction: "Enriched 50 new inbound leads with ZoomInfo data and routed to appropriate account executives.",
      agentResponse: "High-intent enterprise lead detected. Bypassed standard sequence and alerted VP of Sales directly.",
      logs: [
        { title: "CRM Updated", desc: "50 records enriched and synced", time: "1 min ago", icon: <Database className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" },
        { title: "Meeting Booked", desc: "Discovery call with Nexus Industries", time: "14 min ago", icon: <CalendarIcon className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Sequence Started", desc: "Nurture campaign for webinar attendees", time: "32 min ago", icon: <Mail className="w-4 h-4 text-slate-600" />, bg: "bg-slate-50" }
      ]
    },
    {
      name: "IT & Internal Ops",
      icon: <Cpu className="w-4 h-4" />,
      agentName: "Helpdesk Auto-Resolver",
      agentStatus: "Active",
      agentAction: "Automatically resolved 18 common IT requests including VPN access and password resets.",
      agentResponse: "Detected unusual login attempts. Temporarily locked account and notified security team.",
      logs: [
        { title: "Ticket Closed", desc: "Software license request approved", time: "4 min ago", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "System Alert", desc: "Server CPU usage spike detected", time: "11 min ago", icon: <Bell className="w-4 h-4 text-orange-600" />, bg: "bg-orange-50" },
        { title: "Access Granted", desc: "Temporary admin rights for deployment", time: "28 min ago", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" }
      ]
    },
    {
      name: "Supply Chain",
      icon: <Box className="w-4 h-4" />,
      agentName: "Inventory Monitor",
      agentStatus: "Active",
      agentAction: "Analyzed current stock levels across 3 warehouses and predicted shortages for next week.",
      agentResponse: "SKU #88291 falling below threshold. Automatically generated and sent purchase order to primary supplier.",
      logs: [
        { title: "PO Generated", desc: "Restock order for 500 units sent", time: "Just now", icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, bg: "bg-green-50" },
        { title: "Shipment Delayed", desc: "Carrier reported weather delay", time: "35 min ago", icon: <Bell className="w-4 h-4 text-orange-600" />, bg: "bg-orange-50" },
        { title: "Inventory Synced", desc: "Warehouse counts updated in ERP", time: "2 hrs ago", icon: <Database className="w-4 h-4 text-blue-600" />, bg: "bg-blue-50" }
      ]
    }
  ];

  const activeData = categories[activeCategory];

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 relative">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-500/10 blur-[100px] -z-10" />
      <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto">
        {/* Sidebar */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col p-3 md:p-4 bg-gray-50/50">
          <div className="hidden md:flex items-center gap-3 px-3 py-4 mb-6">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-900">Agent Console</span>
          </div>
          
          <div className="flex md:block overflow-x-auto pb-2 md:pb-0 space-x-2 md:space-x-0 md:space-y-1 hide-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex-shrink-0 md:w-full flex items-center gap-3 px-4 md:px-3 py-2.5 rounded-lg transition-all text-left whitespace-nowrap ${
                  activeCategory === idx 
                    ? 'bg-white border border-gray-200 shadow-sm text-slate-900 font-semibold' 
                    : 'text-gray-500 hover:bg-white/50 border border-transparent'
                }`}
              >
                <div className={activeCategory === idx ? 'text-blue-600' : 'text-gray-400'}>
                  {cat.icon}
                </div>
                <span className="text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden min-h-[500px] md:min-h-0">
          <div className="h-16 border-b border-gray-100 flex items-center justify-between px-4 md:px-8 bg-white shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100/50 border border-gray-200 overflow-hidden">
              <span className="text-xs font-medium text-gray-500 truncate">app.ascensionagents.io / {activeData.name.toLowerCase().replace(/\s+/g, '-')}</span>
            </div>
            <div className="flex items-center gap-4 shrink-0 px-2">
              <Bell className="w-4 h-4 text-gray-400" />
              <div className="w-8 h-8 rounded-full bg-gradient-brand" />
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden flex-col lg:flex-row">
            {/* Chat Area */}
            <div className="flex-1 flex flex-col p-4 md:p-6 bg-white overflow-y-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">{activeData.name} Agents</h3>
                  <p className="text-xs md:text-sm text-gray-500">Monitoring active workflows</p>
                </div>
                <div className="flex items-center self-start sm:self-auto gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">System Healthy</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex gap-3 md:gap-4 flex-col sm:flex-row">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center font-bold text-blue-600 shrink-0 hidden sm:flex">
                      {activeData.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900 text-sm md:text-base">{activeData.agentName}</span>
                        <span className="text-[10px] text-blue-600 font-bold uppercase">{activeData.agentStatus}</span>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-3 md:p-4 border border-gray-100 text-[13px] md:text-sm text-gray-600 w-full md:max-w-md">
                        {activeData.agentAction}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4 flex-col sm:flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0 hidden sm:flex">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 flex flex-col sm:items-end">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900">AI Agent</span>
                      </div>
                      <div className="bg-slate-900 rounded-2xl p-4 text-sm text-white w-full md:max-w-md sm:text-right">
                        {activeData.agentResponse}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Sidebar - Recent Automations */}
            <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-100 p-4 md:p-6 bg-gray-50/30 overflow-y-auto">
              <h4 className="font-bold text-slate-900 mb-6">Live Logs</h4>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {activeData.logs.map((log, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${log.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        {log.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">{log.title}</div>
                        <div className="text-[10px] text-gray-500 line-clamp-2">{log.desc}</div>
                      </div>
                      <div className="text-[10px] text-gray-400 whitespace-nowrap shrink-0">{log.time}</div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 w-full z-50 px-6">
      <div className={`max-w-5xl mx-auto transition-all duration-300 rounded-2xl border ${scrolled ? 'bg-white/80 backdrop-blur-md border-gray-200 shadow-lg' : 'bg-white/40 backdrop-blur-sm border-white/20'}`}>
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="https://drive.google.com/thumbnail?id=10r344KT6-zbB5oPtuv5ZBHBUqUjxJzD7&sz=w800" alt="Ascension Agents Logo" className="h-8 sm:h-10 md:h-12 w-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="hidden lg:flex items-center gap-2 px-2 py-1 rounded-full bg-green-50 border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">System Live</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-gray-600">
            <a href="#who-this-is-for" className="hover:text-slate-900 transition-colors">Who This Is For</a>
            <a href="#what-you-get" className="hover:text-slate-900 transition-colors">What You Get</a>
            <a href="#what-this-does" className="hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#why-ascension" className="hover:text-slate-900 transition-colors">Why Ascension</a>
            <a href="#investment" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#contact" className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-slate-800 transition-colors shadow-sm">
              Contact Us
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-b-2xl overflow-hidden border-t border-gray-100"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                <a href="#who-this-is-for" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-slate-900 font-semibold">Who This Is For</a>
                <a href="#what-you-get" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-slate-900 font-semibold">What You Get</a>
                <a href="#what-this-does" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-slate-900 font-semibold">How It Works</a>
                <a href="#why-ascension" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-slate-900 font-semibold">Why Ascension</a>
                <a href="#investment" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-slate-900 font-semibold">Pricing</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-center font-bold">
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const ImpactSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scenarios = [
    {
      problem: "The Problem",
      problemDesc: "Expensive manual data entry and repetitive admin tasks",
      solution: "Custom Data Agents handle entry, validation, and syncing 24/7",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      solutionIcon: <Database className="w-8 h-8 text-white" />,
      benefits: [
        "Eliminate human error in critical data pipelines",
        "Scale operations without increasing headcount",
        "Real-time syncing across all your business tools"
      ]
    },
    {
      problem: "The Problem",
      problemDesc: "Leads go cold while waiting for a human response",
      solution: "Qualification Agents engage and book leads instantly",
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      solutionIcon: <Bot className="w-8 h-8 text-white" />,
      benefits: [
        "Instant engagement for every incoming lead",
        "Automated qualification based on your criteria",
        "Direct booking into your team's calendar"
      ]
    },
    {
      problem: "The Problem",
      problemDesc: "Manual research and reporting takes hours of expert time",
      solution: "Research Agents aggregate and analyze data in seconds",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      solutionIcon: <LineChart className="w-8 h-8 text-white" />,
      benefits: [
        "Automated market and competitor monitoring",
        "Instant generation of complex business reports",
        "Data-driven insights delivered to your inbox"
      ]
    },
    {
      problem: "The Problem",
      problemDesc: "Customer support queues are long and expensive to staff",
      solution: "Support Agents resolve 80% of queries without a human",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      solutionIcon: <Zap className="w-8 h-8 text-white" />,
      benefits: [
        "24/7 instant support across all channels",
        "Seamless handoff to humans for complex issues",
        "Drastic reduction in support ticket volume"
      ]
    }
  ];

  return (
    <section id="impact" className="py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full overflow-hidden">
        <FadeIn>
          <div className="text-center mb-20 px-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
              The Impact
            </div>
            <h2 className="text-[28px] sm:text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight pb-1 text-balance">Automate Your Most <span className="text-blue-600">Expensive Work</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto break-words">We build and deploy custom AI agent teams inside your business so the work you're doing manually gets handled automatically.</p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
          <div className="space-y-4">
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-6 ${activeIndex === i ? 'bg-white border-slate-900 shadow-xl shadow-gray-200/50 scale-[1.02]' : 'bg-white/50 border-gray-100 hover:border-gray-300'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeIndex === i ? 'bg-blue-50' : 'bg-gray-50'}`}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{s.problem}</div>
                  <div className={`font-semibold transition-colors ${activeIndex === i ? 'text-slate-900' : 'text-gray-400'}`}>{s.problemDesc}</div>
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[32px] border border-gray-200 p-6 sm:p-10 md:p-12 shadow-2xl shadow-gray-200/50"
            >
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-8">
                <Zap className="w-4 h-4" /> Custom Agent Engineering
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                {scenarios[activeIndex].solutionIcon}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                {scenarios[activeIndex].solution}
              </h3>

              <div className="space-y-4 mb-10">
                {scenarios[activeIndex].benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                Deploy Your Agent Team <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center w-full overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
            Ascend beyond manual operations
          </div>
          <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold leading-[1.1] mb-8 tracking-tight pb-2 overflow-wrap-anywhere">
            <span className="block text-slate-900">Build An AI Workforce That Runs</span>
            <span className="block text-gradient">Your Business Behind The Scenes.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            We build high-leverage, low-maintenance agent teams so your company runs smoother, scales faster, and stops bleeding money on tasks our digital employees can already do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-brand text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-orange-500/20 hover:scale-105">
              Explore Agent systems <ArrowDown className="w-5 h-5" />
            </button>
            <a href="#impact" className="text-gray-500 px-8 py-4 font-bold hover:text-slate-900 transition-colors">
              Book a discovery call
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Mapping",
      desc: "We go deep into your operations to identify workflows with the highest cost, volume, or risk of human error."
    },
    {
      num: "02",
      title: "Custom Architecture",
      desc: "We design a team of agents built around your specific processes. Each has a defined role, scope, and handoff point."
    },
    {
      num: "03",
      title: "Deployment & Optimization",
      desc: "We deploy inside your existing tech stack and continuously review performance, making adjustments month over month."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 overflow-hidden">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight break-words text-balance pb-1">How We Build Your <span className="text-gradient">Agent Team</span></h2>
            <p className="text-gray-600 text-lg">We don't have a template. We have a process for figuring out exactly what your operation needs and building that specific thing.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-3xl font-display font-bold text-gradient">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center w-full">
          <FadeIn delay={0.1}>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">50%</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Resolution Time Cut</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Autonomous Operation</div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">100%</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Custom Architecture</div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">&lt;3 Mo</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Average ROI Time</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#ff6b00]" />,
      title: "Customer Support",
      desc: "Agents handle tickets end-to-end, resolving common issues without a human ever touching them."
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#0055ff]" />,
      title: "Finance Operations",
      desc: "Invoice matching, expense auditing, and approval routing running autonomously inside ERP systems."
    },
    {
      icon: <Users className="w-6 h-6 text-[#ff6b00]" />,
      title: "HR & Talent Workflows",
      desc: "Candidate screening, onboarding document collection, and compliance reminders handled automatically."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0055ff]" />,
      title: "Sales Operations",
      desc: "CRM record updates, follow-up sequencing, and lead routing running on their own."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#ff6b00]" />,
      title: "IT & Internal Ops",
      desc: "Service tickets auto-resolved, access requests processed, and internal requests routed instantly."
    },
    {
      icon: <Box className="w-6 h-6 text-[#0055ff]" />,
      title: "Supply Chain",
      desc: "Inventory monitored in real time, restock orders triggered automatically without a coordinator."
    }
  ];

  return (
    <section id="features" className="py-24 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <FadeIn>
          <div className="mb-16 max-w-3xl overflow-hidden">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight break-words text-balance pb-1">Where Agent Teams Create <span className="text-gradient">Impact</span></h2>
            <p className="text-gray-600 text-lg">Every business is different, but there are patterns in where agent systems are creating the most leverage in production today.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-panel p-8 rounded-2xl hover:bg-white transition-all hover:shadow-xl hover:shadow-gray-200/50 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const partners = [
    "ACME Corp", "GlobalTech", "Nexus Industries", "Vertex Solutions", "Pinnacle"
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
          Trusted by forward-thinking operations teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((p, i) => (
            <span key={i} className="text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "What is the difference between an AI tool and an AI agent team?",
      a: "A tool does one thing when a human tells it to. An agent operates, reasons, and takes action. It handles the full sequence of a workflow from trigger to resolution without waiting for a human to move it along."
    },
    {
      q: "Do we need to change our existing software?",
      a: "No. We deploy inside your existing tech stack. We integrate with the tools you already use rather than forcing you onto a new platform you have to manage."
    },
    {
      q: "How long does it take to build and deploy?",
      a: "Most custom agent teams are deployed and running within weeks, not months. We build the entire system, test it against real scenarios inside your environment, and iterate until it performs perfectly before going live."
    },
    {
      q: "What happens when our business processes change?",
      a: "Your business changes, and your agent team changes with it. Our retainer covers ongoing management and optimization. Every month we review performance, make adjustments, and build on top of what's working."
    },
    {
      q: "How much does an engagement cost?",
      a: "Engagements run on a monthly retainer of $6,000 to $8,000 depending on scope and complexity. This covers the build, deployment, ongoing management, and optimization. For most clients, this pays for itself before the third month."
    },
    {
      q: "How do we know if we qualify?",
      a: "We look for established businesses with real operational complexity, workflows currently running on human effort that shouldn't be, and a willingness to partner closely during the discovery phase."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Common Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about deploying custom agent teams.</p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-gray-300' : 'border-gray-100'}`}
              >
                <button 
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-semibold text-lg pr-8 text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ascension Agents completely transformed our support operations. Resolution times are down 50%, and our team is finally focused on complex escalations instead of repetitive tickets.",
      name: "Sarah Jenkins",
      title: "VP of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "We were drowning in manual data entry across our finance tools. Now it just happens autonomously. The ROI was obvious by month two. It's like having a flawless employee working 24/7.",
      name: "David Chen",
      title: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">What Happens When It's <span className="text-gradient">Done Right</span></h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="glass-panel p-8 md:p-10 rounded-3xl relative h-full flex flex-col shadow-xl shadow-gray-200/30">
                <div className="absolute top-8 right-8 text-6xl text-gray-100 font-serif">"</div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8 relative z-10 flex-1 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} referrerPolicy="no-referrer" className="w-14 h-14 rounded-full object-cover border border-gray-200" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.title}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Get insights on deploying AI agents in production.</h3>
          <p className="text-gray-600 mb-8">Join operations leaders learning how to automate their most expensive workflows.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#0055ff] transition-colors"
                required
              />
            <button type="submit" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://drive.google.com/thumbnail?id=10r344KT6-zbB5oPtuv5ZBHBUqUjxJzD7&sz=w800" alt="Ascension Agents Logo" className="h-10 md:h-12 w-auto" referrerPolicy="no-referrer" />
            </div>
            <p className="text-gray-500 max-w-sm">
              Custom agent engineering teams built for your operations. Deployed inside your environment. Running from day one.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Platform</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</a></li>
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Capabilities</a></li>
              <li><a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Ascension Agents. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 relative w-full overflow-x-hidden">
      {/* Global Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[40%] h-[30%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <WhoThisIsFor />
        <Positioning />
        <WhatYouGet />
        <WhatThisDoes />
        <WhyAscension />
        <DoYouQualify />
        <Investment />
        <PictureThis />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
