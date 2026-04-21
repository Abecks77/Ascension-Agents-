import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Cpu, Workflow, Users, LineChart, MessageSquare, CheckCircle2, ArrowRight, Bot, Zap, Calendar as CalendarIcon, ShieldCheck, XCircle, Hexagon, PenTool, CircleDot, Play, Square, ChevronDown } from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  key?: React.Key;
  className?: string;
}

const FadeIn = ({ children, delay = 0, className = "w-full" }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={`w-full ${className}`}
  >
    {children}
  </motion.div>
);

export const WhoThisIsFor = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const tabs = [
    { label: "The Ceiling", icon: <LineChart className="w-4 h-4" />, data: "Revenue plateauing due to operational bottlenecks." },
    { label: "The Leak", icon: <Search className="w-4 h-4" />, data: "30% of leads lost due to delayed follow-ups." },
    { label: "The Solution", icon: <Cpu className="w-4 h-4" />, data: "Automated agent systems handling 80% of manual tasks." }
  ];

  return (
    <section id="who-this-is-for" className="py-24 relative overflow-hidden w-full">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-8">Who This Is For</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight break-words text-balance pb-1">You don't have a growth problem. <span className="text-gradient">You have a leverage problem.</span></h2>
            <div className="space-y-6 text-lg text-gray-600 break-words">
              <p>You're running a real company. Revenue is coming in. The team is working hard.</p>
              <p>But somewhere between the leads, the follow-ups, the no-shows, the manual reporting, and the client communication... you've hit a ceiling.</p>
              <p>Not because your offer is weak. Not because your team isn't talented.</p>
              <p className="font-semibold text-slate-900">Because your operations are still running on human effort where they should be running on systems.</p>
              <p>Every dollar of growth you add right now comes with more weight. More hires. More overhead. More things that fall through the cracks when someone has a bad week.</p>
              <p>And that's exactly what we fix.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden">
              <div className="bg-gradient-brand px-4 py-3 flex items-center justify-between border-b border-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/40" />
                  <div className="w-3 h-3 rounded-full bg-white/60" />
                </div>
                <div className="text-xs font-mono text-white/90 font-medium">operational_analysis.exe</div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex gap-2 mb-6 border-b border-gray-100 pb-2 overflow-x-auto hide-scrollbar">
                  {tabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${activeTab === i ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-4 md:p-6 min-h-[150px] flex items-center justify-center border border-gray-100">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <p className="text-lg font-medium text-slate-700">{tabs[activeTab].data}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Positioning = () => {
  const [isAscension, setIsAscension] = React.useState(true);

  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-100 w-full">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <FadeIn delay={0.2} className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 p-2">
              <div className="flex p-1 bg-gray-100 rounded-xl mb-4">
                <button onClick={() => setIsAscension(false)} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${!isAscension ? 'bg-white shadow-sm text-slate-900' : 'text-gray-500 hover:text-slate-700'}`}>Other Agencies</button>
                <button onClick={() => setIsAscension(true)} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${isAscension ? 'bg-white shadow-sm text-slate-900' : 'text-gray-500 hover:text-slate-700'}`}>Ascension Agents</button>
              </div>
              <div className="relative h-auto min-h-[380px] md:min-h-[320px] rounded-xl bg-slate-900 overflow-hidden p-6 md:p-6 flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20" />
                
                <AnimatePresence mode="wait">
                  {!isAscension ? (
                    <motion.div key="other" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 w-full max-w-sm">
                      <div className="flex flex-col gap-4">
                        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center"><Users className="w-5 h-5 text-gray-400" /></div>
                          <div><div className="text-sm font-bold text-white">Software Access Granted</div><div className="text-xs text-gray-400">"Here's your login."</div></div>
                        </div>
                        <div className="w-0.5 h-8 bg-red-500/50 mx-auto" />
                        <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center"><XCircle className="w-5 h-5 text-red-400" /></div>
                          <div><div className="text-sm font-bold text-red-400">Implementation Failed</div><div className="text-xs text-red-400/70">Team doesn't know how to use it.</div></div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="ascension" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 w-full max-w-sm">
                      <div className="flex flex-col gap-4">
                        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center gap-4 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-brand" />
                          <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center"><Search className="w-5 h-5 text-orange-400" /></div>
                          <div><div className="text-sm font-bold text-white">1. Operational Audit</div><div className="text-xs text-gray-400">We map your workflows.</div></div>
                        </div>
                        <div className="w-0.5 h-4 bg-gradient-brand mx-auto" />
                        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center gap-4 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-brand" />
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center"><Cpu className="w-5 h-5 text-blue-400" /></div>
                          <div><div className="text-sm font-bold text-white">2. Custom Build</div><div className="text-xs text-gray-400">Agents built for your business.</div></div>
                        </div>
                        <div className="w-0.5 h-4 bg-gradient-brand mx-auto" />
                        <div className="bg-gradient-brand p-4 rounded-lg border border-transparent flex items-center gap-4 shadow-lg shadow-orange-500/20">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                          <div><div className="text-sm font-bold text-white">3. Turnkey Handover</div><div className="text-xs text-white/90">System running & team trained.</div></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-8">Positioning</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight break-words">Most agencies sell you software <span className="text-gradient">and call it a solution.</span></h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>They hand you a login, point you to a tutorial, and disappear. You're left trying to figure out how to make it work inside a business they've never seen.</p>
              <p className="font-bold text-xl text-slate-900 mt-8">Ascension Agents is different.</p>
              <p>We don't sell tools. We don't sell access. We build done-for-you agent systems, install them inside your existing business, and hand you the keys to something that actually runs.</p>
              <p>No learning curves. No implementation headaches. No wondering if it's working.</p>
              <p className="font-semibold text-slate-900">Just a system built for your business, your workflows, and your team.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const WhatYouGet = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const items = [
    { title: "Operational Audit", desc: "We map every workflow, find every leak, and identify the highest-leverage places to deploy agents.", icon: <Search className="w-6 h-6" />, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Custom Agent Stack", desc: "Lead intake, follow-up sequences, appointment handling, reputation management, client communication, internal reporting.", icon: <Cpu className="w-6 h-6" />, color: "text-[#ff6b00]", bg: "bg-orange-50" },
    { title: "Build & Deployment", desc: "We deliver a working system, tested inside your environment, with documented flows your team can actually manage.", icon: <Workflow className="w-6 h-6" />, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Team Training", desc: "Your people will know exactly what the system does, how to monitor it, and what to do if something needs attention.", icon: <Users className="w-6 h-6" />, color: "text-[#ff6b00]", bg: "bg-orange-50" },
    { title: "Monthly Optimization", desc: "We stay in your corner with monthly calls, reporting, and upgrades as your business grows.", icon: <LineChart className="w-6 h-6" />, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Direct Access", desc: "Questions don't wait for the next scheduled call. You have a direct line to the people who built your system.", icon: <MessageSquare className="w-6 h-6" />, color: "text-[#ff6b00]", bg: "bg-orange-50" }
  ];

  return (
    <section id="what-you-get" className="py-24 relative overflow-hidden border-t border-gray-100">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <FadeIn>
          <div className="text-center mb-16 px-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">What You Get</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight break-words text-balance">Here's exactly <span className="text-gradient">what's included</span></h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 w-full">
          <div className="lg:col-span-1 space-y-4">
            {items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`flex flex-col transition-all duration-300 ${activeItem === i ? 'scale-[1.02] z-10' : 'scale-100'}`}>
                  <button
                    onClick={() => setActiveItem(activeItem === i ? -1 : i)}
                    aria-expanded={activeItem === i}
                    aria-controls={`content-${i}`}
                    className={`w-full text-left p-4 transition-all flex items-center justify-between border ${
                      activeItem === i 
                        ? 'bg-white border-slate-900 shadow-lg rounded-t-xl lg:rounded-xl' 
                        : 'bg-white/50 border-gray-100 hover:border-gray-300 rounded-xl'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                        {item.icon}
                      </div>
                      <span className="font-bold text-slate-900">{item.title}</span>
                    </div>
                    <div className="lg:hidden">
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeItem === i ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  
                  {/* Mobile-only accordion content */}
                  <AnimatePresence>
                    {activeItem === i && (
                      <motion.div
                        id={`content-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="bg-gradient-brand rounded-b-xl p-6 text-white shadow-lg border-x border-b border-slate-900">
                          <p className="text-white/90 leading-relaxed font-semibold">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="bg-gradient-brand rounded-3xl border border-transparent p-6 sm:p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-orange-500/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                
                <AnimatePresence mode="wait">
                  {items[activeItem] ? (
                    <motion.div
                      key={activeItem}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 md:mb-8 backdrop-blur-sm border border-white/20 text-white">
                        {items[activeItem].icon}
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">{items[activeItem].title}</h3>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed">{items[activeItem].desc}</p>
                      
                      <div className="mt-12 pt-8 border-t border-white/20 flex items-center gap-4 text-sm text-white/70 font-mono">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white animate-pulse" /> Included in Engagement</span>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center text-center text-white/80 h-full">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <p className="text-xl font-bold">Select a component above to see details</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatThisDoes = () => {
  const [isSystemActive, setIsSystemActive] = React.useState(false);

  return (
    <section id="what-this-does" className="py-24 relative overflow-hidden border-t border-gray-100">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <FadeIn className="lg:order-2 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-8">What This Does For Your Business</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900 break-words text-balance">When the right agent system is running inside your company <span className="text-gradient">you stop trading time for output.</span></h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>Your team stops doing the work that never needed a human in the first place. Your leads get followed up with instantly, every time, without someone having to remember. Your reputation manages itself. Your reporting runs on its own.</p>
              <p className="font-bold text-2xl text-slate-900 my-8">The business starts to breathe.</p>
              <p>Owners get their time back. Operators stop firefighting. Revenue stops being tied directly to headcount.</p>
              <p>That's what a well-built agent system actually delivers. Not a feature. A shift in how the whole thing runs.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:order-1 w-full">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20" />
              {isSystemActive && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />}
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 flex items-center justify-center"><Users className="w-5 h-5 md:w-6 md:h-6 text-gray-400"/></div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">Leads In</span>
                </div>
                <div className="flex-1 h-1 mx-2 md:mx-4 bg-slate-800 relative overflow-hidden rounded-full">
                  <motion.div 
                    className={`absolute top-0 left-0 h-full ${isSystemActive ? 'bg-gradient-brand' : 'bg-red-500'}`}
                    animate={{ width: isSystemActive ? '100%' : '30%' }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isSystemActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {isSystemActive ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6"/> : <XCircle className="w-5 h-5 md:w-6 md:h-6"/>}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">{isSystemActive ? 'Closed' : 'Dropped'}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 relative z-10">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-slate-700">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{isSystemActive ? '< 2s' : '4+ hrs'}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Response Time</div>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-slate-700">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{isSystemActive ? '100%' : '35%'}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Follow-up Rate</div>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-slate-700">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{isSystemActive ? '$0' : '$4k+'}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Lost Revenue</div>
                </div>
              </div>

              <button 
                onClick={() => setIsSystemActive(!isSystemActive)}
                className={`relative z-10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-full ${isSystemActive ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700' : 'bg-gradient-brand text-white hover:opacity-90 shadow-lg shadow-orange-500/20'}`}
              >
                {isSystemActive ? 'Revert to Manual' : 'Deploy Agent System'}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const systemAgents = [
  { id: 'research', role: 'Data Ingestion', label: 'Research Agent', icon: Search, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', activeBorder: 'border-blue-500', glow: 'shadow-blue-500/20', dot: 'bg-blue-500', log: 'Scanning market trends & extracting competitor ad creative...' },
  { id: 'content', role: 'Asset Generation', label: 'Content Agent', icon: PenTool, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-200', activeBorder: 'border-orange-500', glow: 'shadow-orange-500/20', dot: 'bg-orange-500', log: 'Drafting 50+ personalized email sequences and ad variations...' },
  { id: 'distribution', role: 'Campaign Execution', label: 'Distribution Agent', icon: CircleDot, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-200', activeBorder: 'border-purple-500', glow: 'shadow-purple-500/20', dot: 'bg-purple-500', log: 'Syncing assets to GHL and scheduling multi-channel posts...' },
  { id: 'engagement', role: 'Lead Qualification', label: 'Engagement Agent', icon: MessageSquare, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', activeBorder: 'border-emerald-500', glow: 'shadow-emerald-500/20', dot: 'bg-emerald-500', log: 'Responding to inbound DMs and booking calendar appointments...' },
  { id: 'analytics', role: 'Performance Tracking', label: 'Analytics Agent', icon: LineChart, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200', activeBorder: 'border-amber-500', glow: 'shadow-amber-500/20', dot: 'bg-amber-500', log: 'Running A/B tests on open rates and calculating daily ROI...' }
];

const AgentMindMap = () => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const autoPlayRef = React.useRef(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        setActiveIdx((prev) => (prev + 1) % systemAgents.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const AgentBlock = ({ agent, index }: { agent: typeof systemAgents[0], index: number }) => {
    const isActive = activeIdx === index;
    const Icon = agent.icon;
    return (
      <div
        onMouseEnter={() => { setActiveIdx(index); autoPlayRef.current = false; }}
        onMouseLeave={() => autoPlayRef.current = true}
        className={`relative group cursor-pointer p-3 sm:p-4 rounded-2xl border-2 transition-all duration-300 bg-white flex items-center gap-3 sm:gap-4 w-full ${isActive ? agent.activeBorder + ' shadow-lg scale-[1.02] ' + agent.glow : 'border-slate-100 hover:border-slate-300 shadow-sm'}`}
      >
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
           <div className={`w-1.5 h-1.5 rounded-full ${isActive ? agent.dot + ' animate-pulse' : 'bg-slate-200'}`} />
           <span className="text-[8px] sm:text-[9px] uppercase font-bold text-slate-400 hidden sm:inline-block">{isActive ? 'Active' : 'Standby'}</span>
        </div>

        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive ? agent.bg : 'bg-slate-50'}`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isActive ? agent.color : 'text-slate-400'}`} />
        </div>
        <div className="pr-4 sm:pr-8">
          <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5 sm:mb-1">{agent.role}</div>
          <div className={`font-semibold text-sm sm:text-base leading-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{agent.label}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-slate-50/50 rounded-[32px] border border-slate-200 shadow-2xl p-4 sm:p-8 md:p-12 mx-auto max-w-6xl mt-8 md:mt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Input Agents */}
        <div className="flex flex-col gap-4">
          <AgentBlock agent={systemAgents[0]} index={0} />
          <AgentBlock agent={systemAgents[1]} index={1} />
        </div>

        {/* Middle Column: Orchestrator */}
        <div className="flex flex-col items-center justify-center relative py-6 lg:py-0 w-full lg:w-[320px]">
          {/* Animated dashed line connector visible mostly on desktop */}
          <div className="hidden lg:block absolute w-[200%] h-0.5 border-t-2 border-dashed border-slate-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

          <div className={`w-full bg-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col items-center shadow-2xl transition-all duration-300 border-2 ${activeIdx !== null ? 'border-orange-500/50 shadow-orange-500/20' : 'border-slate-800'}`}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-800 flex items-center justify-center mb-6 relative border border-slate-700">
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 relative z-10" />
              <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-[0.15]" />
            </div>
            
            <div className="text-orange-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2">Central Node</div>
            <div className="text-white font-bold text-xl sm:text-2xl mb-8">Mission Control</div>

            {/* Live Log Console */}
            <div className="w-full bg-[#0a0f16] rounded-xl p-4 sm:p-5 border border-slate-800 relative overflow-hidden flex flex-col h-[100px] sm:h-[120px] justify-center shadow-inner">
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <div className="text-slate-500 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">System Log Activity</div>
              </div>
              <div className="font-mono text-xs sm:text-sm text-emerald-400 leading-relaxed">
                {'>'} {systemAgents[activeIdx].log}
                <span className="animate-pulse opacity-70">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Output Agents */}
        <div className="flex flex-col gap-4">
          <AgentBlock agent={systemAgents[2]} index={2} />
          <AgentBlock agent={systemAgents[3]} index={3} />
          <AgentBlock agent={systemAgents[4]} index={4} />
        </div>

      </div>
    </div>
  );
};

export const WhyAscension = () => {
  return (
    <section id="why-ascension" className="py-24 relative overflow-hidden border-t border-gray-100">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <div className="flex flex-col gap-12 lg:gap-16 items-center w-full">
          <FadeIn className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-8">Why Ascension Agents</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight break-words text-balance">We don't guess. <span className="text-gradient">We've done it.</span></h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>We've built agent systems inside businesses doing $500K to $5M per year across professional services such as Executive Coaches, Real Estate Investors, E-Commerce Brands, and more.</p>
              <p>We've seen firsthand where the leverage is hiding in these businesses. And we've seen what happens when you pull the right lever at the right time.</p>
              <p>And we can show you exactly what it looks like inside businesses like yours.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full">
            <AgentMindMap />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const DoYouQualify = () => {
  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);
  const criteria = [
    "You have existing staff and workflows we can build around",
    "You're ready to commit to implementing what we build, not just watching it sit",
    "You understand that systems require a short runway before they perform at full capacity",
    "You take ownership of your outcomes. We build the system. You run the business."
  ];

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(i => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const progress = (checkedItems.length / criteria.length) * 100;

  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-100">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="lg:order-2 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-8">Do You Qualify</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">This is not for <span className="text-gradient">every business.</span></h2>
            <p className="text-lg text-gray-600 mb-8">We take on a limited number of engagements at a time because the work we do requires real attention, not a cookie-cutter rollout. To be a fit, you need to check every box.</p>
            <p className="text-lg text-gray-600">If you're a startup still finding product-market fit, this isn't your next step. Agents amplify what's already working. They don't replace the work of finding your footing.</p>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:order-1 w-full">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 p-6 md:p-8">
              <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                  <span>Qualification Status</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                {criteria.map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => toggleCheck(i)}
                    className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${checkedItems.includes(i) ? 'border-blue-500 bg-blue-50/50' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${checkedItems.includes(i) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className={`font-medium transition-colors ${checkedItems.includes(i) ? 'text-slate-900' : 'text-gray-600'}`}>{item}</span>
                  </div>
                ))}
              </div>
              
              <AnimatePresence>
                {progress === 100 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 font-medium flex items-center gap-2"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    You meet all the criteria. Let's talk.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Investment = () => {
  const [months, setMonths] = React.useState(12);
  const opsHireMonthly = 5000;
  const systemMonthly = 2500;
  
  const opsTotal = opsHireMonthly * months;
  const systemTotal = systemMonthly * months;
  const savings = opsTotal - systemTotal;

  return (
    <section id="investment" className="py-24 relative overflow-hidden border-t border-gray-100">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-8">Investment</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight break-words text-balance px-1">Our Custom Ascension Agents Build out runs on a <span className="text-gradient">monthly recurring cycle.</span></h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>Pricing scales based on the complexity of your operations and the number of systems we're deploying and maintaining.</p>
              <p>That's not a small number. But consider what it's replacing.</p>
              <p className="font-semibold text-slate-900 mt-8">Most clients see the system pay for itself within the first 90 days.</p>
              <p className="text-sm text-gray-500 italic">Financing is available for qualified engagements.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Cost Comparison Calculator</h3>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-gray-600 mb-4">
                  <span>Timeframe: {months} Months</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="24" 
                  step="3"
                  value={months}
                  onChange={(e) => setMonths(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>3m</span>
                  <span>12m</span>
                  <span>24m</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl border border-red-100 bg-red-50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-full bg-red-100/50" style={{ width: `${Math.min((opsTotal / Math.max(opsTotal, systemTotal)) * 100, 100)}%` }} />
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-red-900">Full-Time Ops Hire</h4>
                      <p className="text-xs text-red-800/80">Needs sleep, PTO, has bad weeks.</p>
                    </div>
                    <span className="font-mono font-bold text-red-900">${opsTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-green-100 bg-green-50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-full bg-green-100/50" style={{ width: `${Math.min((systemTotal / Math.max(opsTotal, systemTotal)) * 100, 100)}%` }} />
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-green-900">Agent System</h4>
                      <p className="text-xs text-green-800/80">Runs 24/7, responds in seconds.</p>
                    </div>
                    <span className="font-mono font-bold text-green-900">${systemTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-1">Projected Savings over {months} months</p>
                <p className="text-3xl font-bold text-slate-900">${Math.max(0, savings).toLocaleString()}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const PictureThis = () => {
  const [timeline, setTimeline] = React.useState(0);
  const milestones = [
    { week: "Week 1", title: "Audit & Architecture", desc: "Mapping workflows and designing the agent stack." },
    { week: "Week 4", title: "Core Build", desc: "Agents built, tested, and integrated with your tools." },
    { week: "Week 8", title: "Deployment & Training", desc: "System goes live. Team is trained on handoffs." },
    { week: "Week 12", title: "Full Autonomy", desc: "System running smoothly, handling 80% of manual load." }
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden border-t border-gray-100">
      {/* Techy Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="lg:order-2 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-8">The Vision</div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight break-words">Picture <span className="text-gradient">This</span></h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>Twelve weeks from now your lead follow-up is running automatically. Your reputation is building without anyone managing it. Your team is working on the things that actually grow the business.</p>
              <p className="font-bold text-xl text-slate-900 my-8">You open your dashboard on a Tuesday morning and everything is moving the way it should. Without you having to touch it.</p>
              <p>That's not a fantasy. That's what the right system does when it's built right and installed by people who've done it before.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:order-1 w-full">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 p-6 md:p-8">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {milestones.map((milestone, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors duration-300 ${timeline >= i ? 'bg-blue-600' : 'bg-gray-300'}`}>
                      {timeline >= i ? <CheckCircle2 className="w-5 h-5 text-white" /> : <div className="w-3 h-3 bg-white rounded-full" />}
                    </div>
                    
                    <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border shadow-sm transition-all duration-300 cursor-pointer ${timeline === i ? 'border-blue-500 bg-blue-50/50 scale-[1.02]' : 'border-gray-100 bg-white hover:border-gray-300'}`} onClick={() => setTimeline(i)}>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900">{milestone.title}</h4>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${timeline >= i ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>{milestone.week}</span>
                      </div>
                      <p className="text-sm text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => (
  <section id="contact" className="py-24 relative overflow-hidden border-t border-gray-100">
    {/* Techy Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-50 rounded-full blur-3xl opacity-50" />
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full overflow-hidden">
      <FadeIn>
        <div className="text-center mb-12 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-bold text-[#ff6b00] uppercase tracking-widest mb-8">Next Steps</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight break-words text-balance pb-1">Let's Build Your <span className="text-gradient">Agent System</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to stop trading time for output? Fill out the form below and we'll get in touch to discuss how an agentic system can transform your operations.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-gray-200/50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-900">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-900">Business Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Acme Corp" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-900">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-900">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-slate-900">What area would you like to install an agentic system in?</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white text-slate-900">
                <option value="">Select an area...</option>
                <option value="lead-intake">Lead Intake & Qualification</option>
                <option value="customer-support">Customer Support & Service</option>
                <option value="sales-followup">Sales Follow-up & Nurture</option>
                <option value="operations">Internal Operations & Workflows</option>
                <option value="reputation">Reputation Management</option>
                <option value="other">Other / Not Sure Yet</option>
              </select>
            </div>

            <div className="pt-6 text-center">
              <button type="submit" className="w-full md:w-auto bg-gradient-brand text-white px-12 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-orange-500/20 hover:scale-105">
                Submit Inquiry <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </FadeIn>
    </div>
  </section>
);
