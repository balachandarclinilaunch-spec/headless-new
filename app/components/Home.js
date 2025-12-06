"use client";

import { useState } from "react";
import {
  CheckCircle, Globe, Briefcase, Users, Clock, Layers, Laptop, Mic,
  MessageCircle, Percent, MapPin, Zap, FileText, Network, UserPlus,
  Video, BarChart2, ChevronDown, Phone, Mail, Facebook, Linkedin, Instagram
} from "lucide-react";

// ==========================================
// STATIC DATA & CONSTANTS
// ==========================================

const COLORS = {
  maroon: "#A4255D",
  darkMaroon: "#4A0B2F",
  darkBg: "#352F44",
  lightBg: "#f5f5f5",
  accent: "#B02067",
};

const TECHNICAL_MODULES = [
  {
    id: 1,
    name: "Foundations of Digital Marketing & AI Basics",
    lessons: [
      "Intro to SEO, SEM, SMM, Email Marketing",
      "Content Marketing & Funnels",
      "E-commerce Marketing Basics",
      "Influencer Marketing Basics",
      "Intro to AI & Generative AI",
      "IBM Watson Assistant Basics",
    ],
  },
  {
    id: 2,
    name: "Marketing Automation & Campaign Management",
    lessons: ["HubSpot", "Mailchimp", "Automated Funnels"],
  },
  {
    id: 3,
    name: "AI-driven Digital Marketing",
    lessons: ["ChatGPT", "OpenAI Playground", "AI Ad Targeting"],
  },
  {
    id: 4,
    name: "Advanced IBM Technologies",
    lessons: ["Watson NLP", "Watson Speech", "Cognos Analytics"],
  },
];

const NON_TECHNICAL_MODULES = [
  {
    id: 1,
    name: "English Communication & Grammar",
    lessons: [
      "Basics of Grammar & Vocabulary",
      "Verbal & Written Communication",
      "Non-verbal Communication",
      "Confidence & Public Speaking",
      "Professional Etiquette",
    ],
  },
  {
    id: 2,
    name: "Mock Interviews",
    lessons: ["HR Round", "Technical Round Basics", "Body Language"],
  },
  {
    id: 3,
    name: "Soft Skills",
    lessons: ["Leadership", "Teamwork", "Time Management"],
  },
  {
    id: 4,
    name: "Aptitude",
    lessons: ["Logical Reasoning", "Math Aptitude", "Problem Solving"],
  },
];

const PLACEMENT_STEPS = [
  {
    id: 1,
    title: "1. Assess & Prepare",
    desc: "Evaluate understanding of core concepts. Bridge course learning with interview readiness through structured evaluations.",
    activities: ["Knowledge Assessment", "Technical Mock Prep", "Articulation Training"],
    keySupport: ["Identify Gaps", "Personalized Feedback", "HR Style Mocks"],
    borderColor: "border-pink-500",
    circleColor: "bg-pink-500",
    align: "left",
  },
  {
    id: 2,
    title: "2. Develop Your Profile",
    desc: "Gain clarity on real-world roles. Develop resumes for specific jobs and optimize LinkedIn profiles.",
    activities: ["Roles Briefing", "Resume Support", "LinkedIn Optimization"],
    keySupport: ["Career Path Understanding", "Professional Branding", "Industry Insights"],
    borderColor: "border-orange-500",
    circleColor: "bg-orange-500",
    align: "right",
  },
  {
    id: 3,
    title: "3. Apply & Get Hired",
    desc: "Transition to real-world opportunities. Map profile to job openings, 1:1 coaching, and interview scheduling.",
    activities: ["Role Mapping", "1:1 Coaching", "Post placement Help"],
    keySupport: ["Curated Job Listings", "Employer Coordination", "Interview Follow up"],
    borderColor: "border-green-500",
    circleColor: "bg-green-500",
    align: "left",
  },
];

const FEATURES_LIST = [
  { icon: Globe, label: "Global Accreditations" },
  { icon: Briefcase, label: "IBM Program Partner" },
  { icon: Users, label: "Industry Leaders Council" },
  { icon: Clock, label: "Flexible Learning" },
  { icon: Layers, label: "Cross-Skilling" },
  { icon: Laptop, label: "Hands-On Projects" },
  { icon: Mic, label: "Industry Experts" },
  { icon: Globe, label: "Global Outreach" },
  { icon: MessageCircle, label: "Multilingual Support" },
  { icon: Percent, label: "0% Interest Loans" },
  { icon: MapPin, label: "Regional Presence" },
  { icon: CheckCircle, label: "100% Placement" },
  { icon: Zap, label: "Internship Programs" },
  { icon: FileText, label: "Resume Guidance" },
  { icon: Network, label: "Industry Network" },
  { icon: UserPlus, label: "Expert Guidance" },
  { icon: Video, label: "Mock Interviews" },
  { icon: BarChart2, label: "Scorecards & Feedback" },
];

const FAQS_LIST = [
  {
    question: "What is the course fee structure?",
    answer: "Our course fee structure varies based on the program type. Contact our admissions team for details.",
  },
  {
    question: "What is the duration of the course?",
    answer: "Most programs range between 3 to 6 months depending on the specialization.",
  },
  {
    question: "Do you provide 100% placement support?",
    answer: "Yes, we offer dedicated placement assistance including mock interviews and industry connections.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer: "Yes, all our courses are designed to start from basics and gradually move to advanced concepts.",
  },
  {
    question: "What are the batch timings?",
    answer: "We offer both weekday and weekend batches. Timing options will be shared upon enrollment.",
  },
];

const TESTIMONIALS_DATA = [
  { name: "Yamini Kopanathi", role: "WILA Alumni", quote: "WILA gave me clarity, confidence, and structured mentorship I badly needed at one point in my career." },
  { name: "Rahul Verma", role: "Marketing Associate", quote: "The IBM partnership modules were a game changer for my technical understanding of AI tools." },
  { name: "Sneha Reddy", role: "Content Strategist", quote: "I landed my dream job within 2 months of completing the placement mentorship program." },
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#A4255D] focus:border-[#A4255D]"
    />
  </div>
);

const SocialIcon = ({ Icon }) => (
  <div className="p-3 border border-white/50 rounded-full hover:bg-white/10 transition cursor-pointer">
    <Icon className="h-5 w-5" />
  </div>
);

const CurriculumSection = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const [activeModule, setActiveModule] = useState(TECHNICAL_MODULES[0]);

  const currentModules = activeTab === "technical" ? TECHNICAL_MODULES : NON_TECHNICAL_MODULES;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset to the first module of the new tab
    setActiveModule(tab === "technical" ? TECHNICAL_MODULES[0] : NON_TECHNICAL_MODULES[0]);
  };

  return (
    <section className="w-full py-20 flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-6xl px-6 py-10 font-sans">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center md:justify-start">
          <button
            onClick={() => handleTabChange("technical")}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeTab === "technical" ? "bg-pink-600 text-white border-pink-600" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Technical Training
          </button>
          <button
            onClick={() => handleTabChange("nonTechnical")}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeTab === "nonTechnical" ? "bg-purple-600 text-white border-purple-600" : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Non-Technical Training
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Module List */}
          <div className="w-full md:w-1/3 space-y-3">
            {currentModules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  activeModule.id === module.id
                    ? "bg-indigo-900 text-white border-indigo-900 shadow-md"
                    : "bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
              >
                <p className="text-xs font-bold uppercase opacity-80">Module {module.id}</p>
                <p className="text-sm font-semibold">{module.name}</p>
              </button>
            ))}
          </div>

          {/* Module Details */}
          <div className="w-full md:w-2/3 p-8 rounded-xl border bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{activeModule.name}</h2>
            <ul className="space-y-4">
              {activeModule.lessons.map((lesson, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">●</span>
                  <span className="text-gray-700 text-lg">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Hero({ data }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    // Add API integration here
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="bg-[#4A0B2F] pt-32 pb-24 overflow-hidden relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-block bg-yellow-400 text-[#4A0B2F] px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide">
              {data.hero_title}
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold leading-tight">
              Advanced Diploma in <br />
              <span className="text-green-400">Digital Marketing</span> +{" "}
              <span className="text-green-400">AI Essentials</span>
            </h1>
            <p className="text-white/80 mt-6 text-lg leading-relaxed max-w-lg">
              Become a future-ready marketing professional in just 6 months. Master 40+ tools, gain IBM Certifications, and secure your career with our 100% placement support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/20">
                Talk to Advisor
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#4A0B2F] transition">
                Download Brochure
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 bg-[#530E37] border border-white/10 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-sm">
              {[
                { val: "6-12 Months", label: "Duration" },
                { val: "IBM", label: "Certification" },
                { val: "1:1", label: "Mentorship" },
                { val: "300+", label: "Hiring Partners" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-yellow-400 text-2xl font-bold">{stat.val}</div>
                  <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center z-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl  border-4 border-white/10 rotate-2 hover:rotate-0 transition duration-500">
              <img
                src={data.hero_image?.url} // Ensure this image exists in public folder
                alt="Classroom Environment"
                className="w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 shadow-xl border-l-[12px] border-[#C41173]">
            <h2 className="text-3xl font-bold text-[#1d1d1d] mb-4">Course Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              The Advanced Diploma in Digital Marketing + AI Essentials is a comprehensive 6-month program designed to create future-ready marketing professionals. Learners bridge creativity with technology, mastering SEO, SEM, and Social Media while integrating AI-powered tools like ChatGPT, Jasper AI, and IBM Watson.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: "🎖️", title: "Fresh Graduates", desc: "Seeking a stable, future-ready career start." },
              { icon: "📈", title: "Early Professionals", desc: "Looking for better opportunities or a career shift." },
              { icon: "🎁", title: "Mid-Career", desc: "Aiming to upskill for high-demand roles." },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-t-[6px] border-green-400 hover:shadow-2xl transition hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
                <p className="text-gray-600 text-center">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IBM PARTNERSHIP SECTION */}
      <section className="py-20 px-6 bg-[#e6e6e6]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl p-12 bg-gradient-to-br from-[#0f1a37] to-[#141423] overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-white text-4xl font-semibold">Industry Partnership with IBM</h2>
                        <p className="text-gray-300 mt-4 max-w-3xl text-lg">
                        Integrated programs featuring guided labs, accessible through the IBM Learning Management System.
                        </p>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-xl shadow hidden md:block">
                        <img src="/ibm-logo.png" alt="IBM" className="h-8" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-[#1b2037] border border-[#2a304d] rounded-2xl p-8 hover:border-yellow-400/30 transition">
                    <h3 className="text-yellow-400 text-xl font-semibold flex items-center gap-2">
                    <span>💠</span> IBM Modules
                    </h3>
                    <ul className="mt-6 space-y-4">
                    {["Prompt Engineering Essentials", "Generative AI Models", "Intro to Cognos Analytics"].map(item => (
                        <li key={item} className="flex items-start gap-3 text-gray-300">
                        <span className="text-green-400">•</span> {item}
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="bg-[#1b2037] border border-[#2a304d] rounded-2xl p-8 hover:border-green-400/30 transition">
                    <h3 className="text-green-400 text-xl font-semibold flex items-center gap-2">
                    <span>💻</span> IBM Guided Labs
                    </h3>
                    <ul className="mt-6 space-y-4">
                    {["Create a Personal Assistant", "Analyze YouTube Trends", "Market Basket Analysis"].map(item => (
                        <li key={item} className="flex items-start gap-3 text-gray-300">
                        <span className="text-yellow-400">•</span> {item}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRICULUM SECTION */}
      <CurriculumSection />

      {/* 5. TOOLS SECTION */}
      <section className="w-full bg-[#1d1d34] py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-white text-4xl font-bold mb-10">
            Master <span className="text-[#ff5722]">40+ Tools</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {/* Generating pills dynamically */}
            {Array(10).fill("Google Analytics").map((tool, i) => (
              <span key={i} className="px-6 py-3 bg-[#2a2a45] text-white rounded-full border border-gray-600 text-sm hover:border-[#ff5722] hover:text-[#ff5722] transition cursor-default">
                {tool} {i + 1}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATION SECTION */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
          <div>
            <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-xs font-bold tracking-wider">
              GLOBAL RECOGNITION
            </span>
            <h2 className="text-4xl font-bold text-[#1d1d34] mt-6">
              Certification You Will Earn
            </h2>
            <p className="text-gray-700 mt-6 leading-relaxed text-lg">
              Upon completing the Advanced Diploma in Digital Marketing + AI Essentials, you will receive a{" "}
              <span className="font-semibold text-[#b21b59]">globally recognized certification from Win In Life Academy.</span>
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              In addition, learners earn separate certifications for each IBM module completed through IBM’s official e-learning platform.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="flex items-center gap-2 text-sm px-6 py-3 bg-white shadow-md rounded-full border hover:bg-gray-50 transition">
                <span>📜</span> WILA Diploma
              </button>
              <button className="flex items-center gap-2 text-sm px-6 py-3 bg-white shadow-md rounded-full border hover:bg-gray-50 transition">
                <span>🎓</span> IBM Certificates
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-8 italic">
              Note: To secure your certificate, you must successfully complete the training from Win In Life Academy.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative group w-full max-w-md">
                {/* Fallback image if data.hero_subtitle is missing */}
              <img
                src={data?.hero_subtitle || "/certificate-placeholder.jpg"}
                alt="Certificate Preview"
                className="w-full rounded-xl shadow-2xl transition-all duration-500 transform translate-x-6 translate-y-4 rotate-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 border border-gray-100"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1d1d34] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg border border-white/20">
                GLOBALLY RECOGNIZED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLACEMENT MENTORSHIP SECTION */}
      <section className="w-full py-24 bg-[#f4f5f7] flex flex-col items-center overflow-hidden">
        <div className="text-center mb-20 px-4">
          <p className="text-sm tracking-wide text-[#A54CFF] font-bold uppercase">Career Success</p>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">Placement Mentorship Program</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            At Win In Life Academy, we see every learner as a future professional. We guide and mould you at every stage to build a successful career.
          </p>
        </div>

        <div className="relative w-full max-w-5xl px-6">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {PLACEMENT_STEPS.map((step) => (
              <div key={step.id} className={`relative flex flex-col md:flex-row ${step.align === "left" ? "md:justify-start" : "md:justify-end"} ml-10 md:ml-0`}>
                {/* Card */}
                <div className={`w-full md:w-[45%] bg-white shadow-lg p-8 rounded-xl border-l-4 ${step.borderColor}`}>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.desc}</p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="font-bold mb-2 text-xs text-gray-500 tracking-wider">ACTIVITIES</p>
                      {step.activities.map((a) => (
                        <p key={a} className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                            <span className="text-green-500 text-xs">✔</span> {a}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="font-bold mb-2 text-xs text-gray-500 tracking-wider">KEY SUPPORT</p>
                      {step.keySupport.map((k) => (
                        <p key={k} className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                            <span className="text-yellow-500 text-xs">⭐</span> {k}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Circle Marker */}
                <div className={`absolute left-[-42px] md:left-1/2 top-0 md:top-8 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md z-10 md:-translate-x-1/2 ${step.circleColor}`}>
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="w-full py-24 bg-[#0f112b] text-white flex flex-col items-center">
        <div className="text-center mb-16">
          <p className="text-sm text-orange-400 uppercase tracking-wide font-bold">Real Stories</p>
          <h2 className="text-3xl font-bold mt-2">Student Success Stories</h2>
          <div className="w-20 h-[3px] bg-orange-400 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-6">
            {/* Duplicating data for visual fullness based on original design */}
          {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((student, idx) => (
            <div key={idx} className="relative bg-[#1b1d3a] p-8 rounded-2xl shadow-lg border border-white/5 hover:border-orange-400/50 transition duration-300 group">
              <div className="absolute top-6 right-6 text-orange-500/20 text-6xl font-serif group-hover:text-orange-500 transition-colors">”</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-lg font-bold text-white">
                  {student.name.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-green-400">{student.name}</p>
                    <p className="text-gray-400 text-sm">{student.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed relative z-10">"{student.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FEATURES GRID */}
      <section className="w-full bg-[#E9E9E9] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#B02067] font-bold tracking-wide text-sm uppercase">The WILA Advantage</p>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">
            Why Choose <span className="text-[#B02067]">WILA?</span>
          </h2>
          <div className="w-24 h-[4px] bg-yellow-400 mx-auto mt-4 rounded-full"></div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {FEATURES_LIST.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  <Icon className="w-10 h-10 text-[#B02067]" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-gray-800 text-center leading-tight">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked <span className="text-[#B02067]">Questions</span>
          </h2>
          <div className="flex flex-col gap-4">
            {FAQS_LIST.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#f4f5f7] rounded-xl p-6 cursor-pointer transition-all duration-300 border border-transparent ${
                    openFaqIndex === index ? "bg-white shadow-md border-gray-200" : "hover:bg-gray-200"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className={`font-semibold text-lg ${openFaqIndex === index ? "text-[#B02067]" : "text-gray-800"}`}>
                    {faq.question}
                  </p>
                  <ChevronDown
                    className={`w-6 h-6 text-[#B02067] transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                    className={`grid transition-all duration-300 ease-in-out ${
                        openFaqIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <p className="text-gray-600 leading-relaxed border-t pt-4 border-gray-200">
                            {faq.answer}
                        </p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT FORM SECTION */}
      <div className="min-h-screen py-20 flex items-center justify-center px-4" style={{ backgroundColor: COLORS.darkBg }}>
        <div className="w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info (Left) */}
          <div className="p-12 lg:w-5/12 text-white flex flex-col justify-between" style={{ backgroundColor: COLORS.maroon }}>
            <div>
                <h2 className="text-4xl font-extrabold leading-snug mb-6">Let's Build Your Career Together</h2>
                <p className="text-pink-100 text-lg leading-relaxed">
                Ready to master Digital Marketing & AI? Fill out the form and our expert counselors will get in touch with you shortly.
                </p>

                <div className="space-y-8 mt-12">
                <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 mt-1 text-yellow-400 flex-shrink-0" />
                    <div>
                    <p className="font-bold text-lg">Call Us</p>
                    <p className="text-pink-100">+91 98765-43210</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1 text-yellow-400 flex-shrink-0" />
                    <div>
                    <p className="font-bold text-lg">Email Us</p>
                    <p className="text-pink-100">admissions@wila.edu</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 mt-1 text-yellow-400 flex-shrink-0" />
                    <div>
                    <p className="font-bold text-lg">Visit Us</p>
                    <p className="text-pink-100">South India Regional Office</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Instagram} />
            </div>
          </div>

          {/* Form (Right) */}
          <div className="bg-white p-12 lg:w-7/12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Enquire Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <InputGroup label="First Name" placeholder="John" />
                <InputGroup label="Last Name" placeholder="Doe" />
              </div>
              <InputGroup label="Email Address" placeholder="john@example.com" type="email" />
              <InputGroup label="Phone Number" placeholder="+91 99999 99999" type="tel" />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Qualification</label>
                <select
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-[#A4255D] focus:border-[#A4255D]"
                  defaultValue=""
                >
                  <option value="" disabled>Select...</option>
                  <option>Graduate</option>
                  <option>Post Graduate</option>
                  <option>12th Pass</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#A4255D] hover:bg-[#8D1D4C] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-200 text-lg"
                >
                  Get Free Career Counseling
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


   
    
    // <div className="relative w-full h-[90vh] flex items-center">

    //   <img
    //     src={data.hero_image?.url}
    //     alt="hero background"

    //     className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
    //   />

    //   <div className="relative z-20 max-w-5xl mx-auto px-6">
    //     <h1 className="text-white text-6xl font-extrabold leading-tight drop-shadow-lg">
    //       {data.hero_title}
    //     </h1>
    //     <h3 className="text-white text-5xl font-extrabold leading-tight drop-shadow-lg">
    //       {data.hero_subtitle}
    //     </h3>

      
    //        <ul className="text-gray-200 mt-4 text-xl">
    //     {data.hero_points?.map((item, i) => (
    //       <li key={i}>{item.point}</li>
    //     ))}
    //   </ul>
        
    //   </div>
      
    // </div>
