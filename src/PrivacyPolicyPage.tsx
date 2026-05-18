import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <Helmet>
        <title>Privacy Policy | Ascension Agents</title>
        <meta name="description" content="Privacy Policy for Ascension Agents." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-slate-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8 md:p-12 mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 text-sm font-semibold mb-12 flex items-center gap-4">
            <span>Effective Date: May 18, 2025</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Last Updated: May 18, 2025</span>
          </p>

          <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">1.</span> Introduction
              </h2>
              <p>Ascension Agents ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at ascensionagents.xyz, engage our services, or communicate with us — including via SMS.</p>
              <p className="mt-4">By using our services, you agree to the collection and use of information as described in this policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">2.</span> Information We Collect
              </h2>
              <h3 className="font-bold text-slate-900 mt-6 mb-2">Information you provide directly:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Name, email address, phone number, and business information submitted through contact forms or during onboarding</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Payment and billing information</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Communications you send us via email, SMS, or other channels</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Any content or data you provide for incorporation into AI agent systems we build for you</p>
                </li>
              </ul>

              <h3 className="font-bold text-slate-900 mt-6 mb-2">Information collected automatically:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>IP address, browser type, and device information when you visit our website</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Pages visited, time spent, and referring URLs (via cookies and analytics tools)</p>
                </li>
              </ul>

              <h3 className="font-bold text-slate-900 mt-6 mb-2">Information from third parties:</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Business contact information obtained through legitimate lead generation channels, where applicable</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">3.</span> How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Deliver, manage, and improve our services</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Communicate with you about your engagement, project status, and account</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Send SMS messages you have consented to receive (see Section 6)</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Process payments and manage billing</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Respond to inquiries and provide customer support</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Comply with legal obligations</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p>Protect against fraud, abuse, and unauthorized use of our systems</p>
                </li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">4.</span> How We Share Your Information
              </h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Service providers:</strong> Third-party vendors who assist in delivering our services (e.g., payment processors, cloud infrastructure, SMS messaging platforms, AI model providers). These parties are contractually obligated to protect your data and use it only as directed.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Legal compliance:</strong> When required by law, court order, or governmental authority, or to protect the rights, property, or safety of Ascension Agents, our clients, or others.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
                </li>
              </ul>
              <p>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">5.</span> Cookies & Tracking
              </h2>
              <p className="mb-4">Our website uses cookies and similar tracking technologies to improve user experience and analyze traffic. You may disable cookies through your browser settings; however, some features of our website may not function properly as a result.</p>
              <p>We may use third-party analytics tools such as Google Analytics. These tools collect anonymized usage data subject to their own privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">6.</span> SMS & A2P Messaging Privacy
              </h2>
              <p className="mb-4">This section specifically addresses how we handle information in connection with our SMS communications, in compliance with A2P 10DLC regulations, the TCPA, and CTIA guidelines.</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Information collected for SMS:</strong> When you opt in to receive SMS messages from us, we collect your mobile phone number and your consent record (date, time, and method of opt-in).</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>How we use your phone number:</strong> Your mobile number is used solely to send you messages you have consented to receive. We do not sell, rent, share, or trade your mobile phone number or SMS consent data with third parties for their own marketing purposes.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Opt-out:</strong> You may opt out at any time by replying STOP to any message. Upon opt-out, your number is added to our suppression list and will not receive further messages, except as required by law. Reply HELP for assistance or contact ascensionagents@proton.me.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Message and data rates:</strong> Standard message and data rates may apply based on your carrier plan.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Third-party SMS providers:</strong> We use third-party messaging platforms to transmit SMS communications. These providers access your phone number solely to deliver messages on our behalf and are prohibited from using it for any other purpose.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>No mobile data sharing:</strong> Mobile opt-in data and consent records are never shared with third parties for marketing or promotional purposes.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">7.</span> Data Retention
              </h2>
              <p className="mb-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, maintain our business relationship with you, and comply with legal obligations. SMS opt-out records are retained indefinitely to honor suppression requests.</p>
              <p>When data is no longer needed, we delete or anonymize it in a secure manner.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">8.</span> Data Security
              </h2>
              <p>We implement reasonable technical and organizational safeguards to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is 100% secure. You provide information at your own risk and should take reasonable precautions on your end as well.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">9.</span> Your Privacy Rights
              </h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Access:</strong> Request a copy of the personal information we hold about you</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Correction:</strong> Request correction of inaccurate or incomplete information</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Deletion:</strong> Request deletion of your personal information, subject to certain legal exceptions</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Opt-out of SMS:</strong> Reply STOP to any message or contact us directly</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2.5 shrink-0"></div>
                  <p><strong>Do Not Sell:</strong> We do not sell personal information. California residents may still submit a Do Not Sell request under CCPA at ascensionagents@proton.me</p>
                </li>
              </ul>
              <p>To exercise any of these rights, contact us at ascensionagents@proton.me. We will respond within 30 days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">10.</span> Children's Privacy
              </h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, contact us immediately and we will delete it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">11.</span> Third-Party Links
              </h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">12.</span> Changes to This Policy
              </h2>
              <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Material changes will be communicated via email or a notice on our website. Continued use of our services after any update constitutes acceptance of the revised policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-[#ff6b00]">13.</span> Contact
              </h2>
              <p className="mb-4">If you have questions about this Privacy Policy or how we handle your data:</p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="font-bold text-slate-900 mb-2">Ascension Agents</p>
                <div className="space-y-1 text-sm mb-4">
                  <p><strong>Website:</strong> ascensionagents.xyz</p>
                  <p><strong>Email:</strong> ascensionagents@proton.me</p>
                </div>
                <p className="text-sm bg-orange-50 text-orange-800 p-4 rounded-lg inline-block">For SMS opt-out requests, reply STOP to any message or email us your phone number and we will process your request within 1 business day.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
