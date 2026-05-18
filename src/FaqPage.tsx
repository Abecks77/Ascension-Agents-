import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Bot, Zap, Building2, TerminalSquare, GitBranch, Lightbulb, Clock, Layers, ShieldCheck, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqData = [
  {
    icon: Bot,
    question: "What is Ascension Agents?",
    answer: "Ascension Agents designs and deploys custom AI agent teams for businesses. We build a digital workforce that handles your repetitive operations so your human team can focus on work that actually moves the needle."
  },
  {
    icon: TerminalSquare,
    question: "What exactly is an AI agent?",
    answer: "An AI agent is an autonomous program that performs tasks, makes decisions, and takes action on your behalf. Responding to leads, processing data, managing workflows, triggering follow-ups. It runs without someone babysitting it."
  },
  {
    icon: Building2,
    question: "What types of businesses do you work with?",
    answer: "Any business sitting on a pile of repetitive processes. We've worked with lean startups and established companies alike. If your team is doing the same things over and over, there's a system that can handle it."
  },
  {
    icon: Zap,
    question: "What kinds of tasks can your AI agents handle?",
    answer: "Lead qualification, customer outreach, appointment scheduling, data entry, reporting, CRM updates, internal notifications, content workflows, and more. If it follows a pattern, it can be automated."
  },
  {
    icon: GitBranch,
    question: "How is this different from tools like Zapier?",
    answer: "Zapier follows rules. Our agents think. They handle context, adapt to exceptions, and make judgment calls. The difference between a flowchart and an employee."
  },
  {
    icon: Lightbulb,
    question: "Do I need technical knowledge to work with you?",
    answer: "Not at all. You bring the business problem. We handle the architecture, the build, and the deployment."
  },
  {
    icon: Clock,
    question: "How long does it take to go live?",
    answer: "Simpler systems can be up in days. More complex, multi-agent infrastructures typically take a few weeks. Timeline depends on scope and what we're integrating with."
  },
  {
    icon: Layers,
    question: "Will this work with the tools I already use?",
    answer: "Yes. Systems are built to connect with your existing stack, CRMs, email platforms, Slack, Google Workspace, databases, whatever you're running. No need to rip and replace."
  },
  {
    icon: ShieldCheck,
    question: "Is my data secure?",
    answer: "Security is built into every system we deploy. We follow best practices for data handling and design around your compliance requirements. The specifics get covered during your consultation."
  },
  {
    icon: Rocket,
    question: "How do I get started?",
    answer: "Go to ascensionagents.xyz and book a call. We'll look at your operations, find where the leverage is, and map out what a custom agent system looks like for your business."
  }
];

const FAQItem = ({ faq, isOpen, onClick, index }: { faq: typeof faqData[0], isOpen: boolean, onClick: () => void, index: number }) => {
  const Icon = faq.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white border-[#ff6b00]/30 shadow-lg shadow-[#ff6b00]/5' : 'bg-gray-50/50 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm'}`}
    >
      {isOpen && (
        <motion.div 
          layoutId="activeGlow"
          className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6b00]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <button 
        onClick={onClick}
        className="w-full text-left px-6 sm:px-8 py-6 flex items-start gap-4 sm:gap-6 focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className={`mt-0.5 p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#ff6b00]/10 text-[#ff6b00]' : 'bg-gray-100 text-gray-500 group-hover:text-slate-900 group-hover:bg-gray-200'}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 pr-4 text-left">
          <span className={`block font-bold text-lg leading-tight transition-colors duration-300 ${isOpen ? 'text-slate-900' : 'text-slate-800'}`}>
            {faq.question}
          </span>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`mt-0.5 shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#ff6b00] rotate-180' : 'text-gray-400 group-hover:text-slate-900'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
    </motion.div>
  );
};

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 pb-24 relative bg-gray-50/30">
      <Helmet>
        <title>FAQ | Ascension Agents</title>
        <meta name="description" content="Frequently Asked Questions about Ascension Agents. Learn how our AI systems can automate your business." />
        <link rel="canonical" href="https://ascensionagents.xyz/faq" />
      </Helmet>

      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#ff6b00]/5 rounded-full blur-3xl" />
        <div className="absolute -top-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Column - Header Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#ff6b00] text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Frequently<br />Asked Questions
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Everything you need to know about Ascension Agents and how we build AI-powered digital workforces.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-[#ff6b00]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-gray-500 text-sm mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
              <a 
                href="mailto:ascensionagents@proton.me" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem 
                  key={index}
                  index={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(index === openIndex ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
