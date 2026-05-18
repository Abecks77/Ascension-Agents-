import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <Helmet>
        <title>Terms of Service | Ascension Agents</title>
        <meta name="description" content="Terms of Service for Ascension Agents." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8 md:p-12 mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-gray-500 text-sm font-semibold mb-12 flex items-center gap-4">
            <span>Effective Date: May 18, 2025</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Last Updated: May 18, 2025</span>
          </p>

          <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">1.</span> Acceptance of Terms
              </h2>
              <p>By accessing or using any services provided by Ascension Agents ("Company," "we," "us," or "our") — including our website, AI agent systems, automation services, or any communications we send you — you ("Client," "you," or "your") agree to be bound by these Terms of Service. If you do not agree, discontinue use of our services immediately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">2.</span> Description of Services
              </h2>
              <p className="mb-4">Ascension Agents provides custom AI agent systems and business automation solutions, including custom AI agent design and deployment, automated workflow engineering, AI-driven lead generation and customer engagement systems, digital workforce infrastructure, and ongoing maintenance of deployed systems.</p>
              <p>The scope of services for each client is defined in a separately executed Statement of Work or service agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">3.</span> Eligibility
              </h2>
              <p>You must be at least 18 years of age and have the legal authority to enter into binding contracts to use our services. Use of our services on behalf of a business entity constitutes your representation that you are authorized to bind that entity to these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">4.</span> SMS & A2P Messaging Compliance
              </h2>
              <p className="mb-4">Ascension Agents operates SMS communications in compliance with the Telephone Consumer Protection Act (TCPA), CTIA guidelines, and A2P 10DLC regulations enforced by U.S. carriers.</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Consent & Opt-In:</strong> By providing your mobile phone number to Ascension Agents through any channel, you expressly consent to receive SMS and/or MMS messages from us, including service updates, appointment reminders, transactional messages, and promotional communications where separately consented. Consent is not a condition of purchasing any service.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Message Rates:</strong> Message and data rates may apply. Ascension Agents is not responsible for any charges imposed by your wireless carrier.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe. You will receive one confirmation message and no further SMS communications will be sent. You may also opt out by emailing support@ascensionagents.xyz.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Help:</strong> Reply HELP to any message for assistance, or contact support@ascensionagents.xyz.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>A2P 10DLC:</strong> Our messaging campaigns are registered under the A2P 10DLC framework. All messages identify Ascension Agents as the sender and are transmitted through registered, carrier-approved pathways.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Client Responsibilities for AI-Powered Outreach:</strong> Clients who engage Ascension Agents to build AI systems that include outbound SMS capabilities are independently responsible for obtaining prior express written consent from all recipients, registering their own messaging campaigns where required, and complying with all applicable federal and state laws including TCPA. Ascension Agents will not build or deploy systems designed to circumvent carrier regulations or send unsolicited messages.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">5.</span> Client Obligations & Acceptable Use
              </h2>
              <p>You agree to use our services solely for lawful purposes, provide accurate information, maintain the security of any credentials we provision to you, and comply with all applicable laws. We reserve the right to suspend or terminate services for violations without refund.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">6.</span> Intellectual Property
              </h2>
              <p>All proprietary methodologies, frameworks, and tooling developed by Ascension Agents remain our intellectual property. Delivery of a custom AI system grants a non-exclusive license for your own business use. You may not sublicense, resell, or repurpose delivered systems without our written consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">7.</span> Data & Privacy
              </h2>
              <p>Our collection and use of personal data is governed by our Privacy Policy. For AI systems handling customer data on your behalf, you are the data controller and bear responsibility for applicable data protection obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">8.</span> AI Systems Disclaimer
              </h2>
              <p>AI systems can produce inaccurate or unexpected results. You agree to implement human oversight for high-stakes decisions, not rely solely on AI outputs for professional advice, and acknowledge that AI performance depends on third-party infrastructure that may change. Ascension Agents is not liable for decisions made based on AI outputs.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">9.</span> Payment Terms
              </h2>
              <p>Invoices are due within 14 days of issuance. Late payments accrue interest at 1.5% per month. Services may be suspended for accounts more than 30 days past due. All fees are non-refundable except as expressly stated in the service agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">10.</span> Termination
              </h2>
              <p>Either party may terminate with 30 days written notice. Ascension Agents may terminate immediately for material breach, illegal use, non-payment, or insolvency.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">11.</span> Limitation of Liability
              </h2>
              <p>Ascension Agents is not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed fees paid in the three months preceding the claim.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">12.</span> Indemnification
              </h2>
              <p>You agree to indemnify and hold harmless Ascension Agents from claims arising out of your violation of these Terms, misuse of delivered systems, or violation of applicable law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">13.</span> Governing Law
              </h2>
              <p>These Terms are governed by U.S. law and the laws of the state in which Ascension Agents is registered. Disputes shall be resolved through binding arbitration. You waive the right to participate in class-action proceedings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">14.</span> Changes to Terms
              </h2>
              <p>We may update these Terms at any time. Continued use of our services after the effective date of any update constitutes acceptance. Material changes will be communicated via email or website notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">15.</span> Contact
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="font-bold text-slate-900 mb-2">Ascension Agents</p>
                <div className="space-y-1 text-sm">
                  <p><strong>Website:</strong> ascensionagents.xyz</p>
                  <p><strong>Email:</strong> support@ascensionagents.xyz</p>
                </div>
                <p className="mt-4 text-sm bg-orange-50 text-orange-800 p-4 rounded-lg inline-block">For SMS opt-out requests, reply STOP to any message or email us with your phone number.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
