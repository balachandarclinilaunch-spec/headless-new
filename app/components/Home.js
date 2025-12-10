"use client";

import React, { useState } from "react";
import {
  CheckCircle, Globe, Briefcase, Users, Clock, Layers, Laptop, Mic,
  MessageCircle, Percent, MapPin, Zap, FileText, Network, UserPlus,
  Video, BarChart2, ChevronDown, Phone, Mail, Facebook, Linkedin, Instagram,
  Award, TrendingUp, Play, Book, Cpu, Download, Key, ChevronRight,
  LayoutTemplate, BrainCircuit, BarChart3, GraduationCap, MessageSquare,
  Code2, MonitorPlay, Scroll, Stamp, Check, Star, Quote, Loader2,CheckCircle2
} from "lucide-react";

// ==========================================
// 1. CONFIGURATION & STATIC DATA
//    (Edit text, colors, and lists here)
// ==========================================

const COLORS = {
  maroon: "#A4255D",
  darkMaroon: "#4A0B2F",
  deepPurple: "#360e24",
  accentPink: "#b91c68",
  highlightYellow: "#fbbf24", // yellow-400
};

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

const SUCCESS_STORIES = [
  { initial: "Y", name: "Yamini Kopanathi", role: "WILA Alumni", quote: "WILA gave me clarity, confidence, and structured mentorship I badly needed at one point in my career." },
  { initial: "B", name: "Basavaraj Rodagi", role: "WILA Alumni", quote: "The trainers simplified tough concepts and built my basics from scratch. This academy genuinely prepares you for real work." },
  { initial: "S", name: "Saurav Kumar Sinha", role: "WILA Alumni", quote: "I wanted to upskill myself in modern tools and develop confidence. The mock interviews changed how I present myself." },
  { initial: "P", name: "Paramanathan N", role: "WILA Alumni", quote: "The mentors patiently taught, corrected and pushed me to improve my knowledge. I finally felt supported." },
  { initial: "A", name: "Adarsha K A", role: "WILA Alumni", quote: "WILA's teaching style, practical labs, and constant feedback helped me understand everything clearly and attend interviews." },
  { initial: "G", name: "Ganesh Kumar M", role: "WILA Alumni", quote: "I had concerns with my communication skills, but WILA's training made me job-ready with steady, practical learning." }
];

const PLACEMENT_STEPS = [
  {
    id: 1,
    title: "Assess & Prepare",
    description: "Evaluate understanding of core concepts. Bridge course learning with interview readiness.",
    activities: ["Knowledge Assessment", "Technical Mock Prep", "Articulation Training"],
    support: ["Identify Gaps", "Personalized Feedback", "HR Style Mocks"]
  },
  {
    id: 2,
    title: "Develop Your Profile",
    description: "Gain clarity on real-world roles. Develop resumes for specific jobs and optimize LinkedIn profiles.",
    activities: ["Roles Briefing", "Resume Support", "LinkedIn Optimization"],
    support: ["Career Path Understanding", "Professional Branding", "Industry Insights"]
  },
  {
    id: 3,
    title: "Apply & Get Hired",
    description: "Transition to real-world opportunities. Map profile to job openings, 1:1 coaching, and interview scheduling.",
    activities: ["Role Mapping", "1:1 Coaching", "Post-placement Help"],
    support: ["Curated Job Listings", "Employer Coordination", "Interview Follow-up"]
  }
];

// Technical Curriculum
const TECHNICAL_MODULES = [
  {
    id: 1, title: "Foundations of Digital Marketing & AI Basics", icon: LayoutTemplate,
    topics: [
      { title: "Intro to SEO, SEM, SMM", tools: ["Google Tag Manager", "GA4", "SEMrush", "Canva"] },
      { title: "Content Marketing & Funnels", tools: ["HubSpot CRM", "Mailchimp"] },
      { title: "Intro to AI & Generative AI", tools: ["ChatGPT", "OpenAI", "IBM Watson"] }
    ]
  },
  {
    id: 2, title: "Marketing Automation & CRM", icon: BarChart3,
    topics: [
      { title: "Automated Email Drip Campaigns", tools: ["ActiveCampaign", "Mailchimp"] },
      { title: "CRM Integration Strategies", tools: ["Salesforce", "HubSpot"] }
    ]
  },
  {
    id: 3, title: "AI-Driven Analytics", icon: BrainCircuit,
    topics: [
      { title: "Predictive Analytics", tools: ["Tableau", "PowerBI"] },
      { title: "AI in Ad Targeting", tools: ["Meta Pixel", "Google Ads AI"] }
    ]
  },
  {
    id: 4, title: "Advanced IBM Technologies", icon: Cpu,
    topics: [
      { title: "IBM Watson Studio Deep Dive", tools: ["Watson Studio", "IBM Cloud"] },
      { title: "Natural Language Understanding", tools: ["IBM NLU", "Watson Assistant"] }
    ]
  },
  {
    id: 5, title: "Technical Capstone", icon: GraduationCap,
    topics: [
      { title: "Full-Stack Marketing Project", tools: ["WordPress", "Google Analytics", "Ads Manager"] }
    ]
  }
];

// Non-Technical Curriculum
const NON_TECHNICAL_MODULES = [
  {
    id: 1, title: "Effective Communication", icon: MessageSquare,
    topics: [{ title: "Business Storytelling", tools: ["PowerPoint"] }, { title: "Client Negotiation", tools: ["Role Play"] }]
  },
  {
    id: 2, title: "Resume & Portfolio", icon: FileText,
    topics: [{ title: "ATS-Friendly Resume", tools: ["Canva"] }, { title: "Digital Portfolio", tools: ["Behance"] }]
  },
  {
    id: 3, title: "Personal Branding", icon: Users,
    topics: [{ title: "LinkedIn Optimization", tools: ["Sales Navigator"] }, { title: "Networking", tools: ["Meetup"] }]
  },
  {
    id: 4, title: "Agile Management", icon: Book,
    topics: [{ title: "Agile & Scrum", tools: ["Jira", "Trello"] }, { title: "Time Management", tools: ["Notion"] }]
  },
  {
    id: 5, title: "Career Launchpad", icon: Briefcase,
    topics: [{ title: "Mock Interviews", tools: ["Zoom"] }, { title: "Salary Negotiation", tools: ["Glassdoor"] }]
  }
];


// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

const SocialIcon = ({ Icon }) => (
  <div className="p-3 border border-white/50 rounded-full hover:bg-white/10 transition cursor-pointer text-white">
    <Icon className="h-5 w-5" />
  </div>
);

const WhatsIncluded = () => {
  const tags = ["AI tools", "Digital Marketing", "Marketing Tools", "Social Media", "SEO"];
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-8">What’s Included</h2>
        <div className="flex flex-wrap gap-4 mb-12">
          {tags.map((tag, index) => (
            <span key={index} className="border border-[#b91c68] text-[#b91c68] px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#b91c68] hover:text-white transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
        <div className="w-full bg-black rounded-[2rem] aspect-video flex items-center justify-center relative shadow-lg overflow-hidden group cursor-pointer">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
            <Play className="w-8 h-8 text-black ml-1" fill="currentColor" strokeWidth={0} />
          </div>
        </div>
      </div>
    </section>
  );
};

const IBMPartnership = () => (
  <section className="py-16 px-4 md:px-8 lg:px-12 font-sans bg-white">
    <div className="container px-6 mx-auto gap-12">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#381232] to-[#240e24] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 p-8 md:p-12 lg:py-16 lg:pl-16 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Partnership with IBM</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Integrated programs featuring guided labs, accessible through the IBM Learning Management System.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-yellow-400">IBM Modules</h3>
                </div>
                <ul className="space-y-3">
                  {["Prompt Engineering Essentials", "Generative AI Models", "Intro to Cognos Analytics"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-xs md:text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MonitorPlay className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-yellow-400">IBM Guided Labs</h3>
                </div>
                <ul className="space-y-3">
                  {["Create a Personal Assistant", "Analyze YouTube Trends", "Market Basket Analysis"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-xs md:text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-full min-h-[300px] lg:min-h-[500px] flex items-end justify-center lg:justify-end">
             {/* Placeholder Image */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
              alt="Student with Laptop" 
              className="relative z-10 object-contain max-h-[400px] lg:max-h-[550px] lg:-mb-10 lg:mr-8"
              style={{ maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' }}
            />
            <div className="absolute bottom-0 right-10 w-64 h-64 bg-purple-600/30 blur-[80px] rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CourseCurriculum = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [trainingType, setTrainingType] = useState('technical');
  const currentModules = trainingType === 'technical' ? TECHNICAL_MODULES : NON_TECHNICAL_MODULES;

  const handleTabSwitch = (type) => {
    setTrainingType(type);
    setActiveModuleIndex(0);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-50 text-[#b91c68] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">Industry-Ready Syllabus</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">Course Curriculum</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">A meticulously crafted syllabus covering everything from foundational marketing to advanced AI strategies.</p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-lg flex items-center">
            <button onClick={() => handleTabSwitch('technical')} className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${trainingType === 'technical' ? 'bg-white text-[#b91c68] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
              <Cpu className="w-4 h-4" /> Technical Training
            </button>
            <button onClick={() => handleTabSwitch('non-technical')} className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${trainingType === 'non-technical' ? 'bg-white text-[#b91c68] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
              <Book className="w-4 h-4" /> Non-Technical Training
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {currentModules.map((module, index) => {
              const isActive = index === activeModuleIndex;
              const IconComponent = module.icon;
              return (
                <button key={module.id} onClick={() => setActiveModuleIndex(index)} className={`relative group flex items-center p-4 rounded-xl text-left transition-all duration-300 border ${isActive ? 'bg-[#3f0f2d] border-[#3f0f2d] text-white shadow-lg' : 'bg-white border-slate-100 text-[#1e1b4b] hover:border-pink-200 hover:shadow-md'}`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mr-4 ${isActive ? 'bg-[#b91c68] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-[10px] font-bold uppercase mb-1 ${isActive ? 'text-pink-300' : 'text-slate-400'}`}>Module {module.id}</p>
                    <h3 className="text-sm font-bold leading-tight">{module.title}</h3>
                  </div>
                  {isActive && <ChevronRight className="w-5 h-5 text-pink-300" />}
                </button>
              );
            })}
            <button className="mt-4 w-full bg-[#b91c68] text-white font-bold py-4 rounded-lg shadow-md hover:bg-[#9d1757] transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Download Brochure
            </button>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 min-h-[500px]">
              <div className="mb-8 border-b border-slate-100 pb-6">
                <span className="text-[#b91c68] font-bold text-sm uppercase tracking-wide">Module {currentModules[activeModuleIndex].id}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mt-2">{currentModules[activeModuleIndex].title}</h3>
              </div>
              <div className="space-y-8">
                {currentModules[activeModuleIndex].topics.map((topic, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-green-500" /></div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#1e1b4b] mb-3">{topic.title}</h4>
                      <div className="flex flex-wrap gap-3">
                        {topic.tools.map((tool, tIndex) => (
                          <span key={tIndex} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-md">
                            <Key className="w-3 h-3 text-[#b91c68]" /> {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ToolsMastery = () => (
  <section className="bg-[#360e24] py-20 px-4 md:px-8 font-sans">
    <div className="container mx-auto px-6  text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Master in demand <span className="text-[#ff4e2e]">40+ Tools</span></h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {["Google Tag Manager", "GA4", "SEMrush", "HubSpot", "ChatGPT", "IBM Watson", "Jasper AI", "Midjourney"].map((tool, index) => (
          <div key={index} className="bg-white/10 text-white/90 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-all cursor-default">
            {tool}
          </div>
        ))}
      </div>
      <button className="border border-white/40 text-white px-8 py-2.5 rounded-lg text-sm font-semibold hover:bg-white hover:text-[#360e24] transition-all duration-300">View more</button>
    </div>
  </section>
);

const PlacementMentorship = () => (
  <section className="bg-[#eeeff1] py-16 px-4 md:px-8 lg:px-12 font-sans">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-[#b91c68] font-bold text-xs md:text-sm tracking-widest uppercase mb-3">Career Success</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">Placement Mentorship Program</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          At Win In Life Academy, we see every learner as a future professional. We personally guide, nurture, and mould you through every stage.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <div className="hidden lg:block absolute top-[40%] left-0 w-full h-0.5 border-t-2 border-dashed border-slate-300 -z-0" />
        {PLACEMENT_STEPS.map((step) => (
          <div key={step.id} className="bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg border-b-4 border-[#b91c68]/20 z-10 flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-20 bg-[#dcbccf] rounded-bl-[4rem] opacity-60 pointer-events-none"></div>
            <div className="mb-8 relative z-10">
              <h3 className="text-xl font-bold text-[#1e1b4b] mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
            <div className="border-t border-dashed border-slate-200 mb-6"></div>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div>
                <h4 className="text-[#b91c68] font-bold text-[10px] md:text-xs uppercase tracking-wide mb-3">Activities</h4>
                <ul className="space-y-2">
                  {step.activities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium"><Check className="w-3.5 h-3.5 text-[#b91c68] shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#b91c68] font-bold text-[10px] md:text-xs uppercase tracking-wide mb-3">Key Support</h4>
                <ul className="space-y-2">
                  {step.support.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium"><Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 shrink-0 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StudentSuccessStories = () => (
  <section className="bg-[#360e24] py-20 px-4 md:px-8 lg:px-12 font-sans">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-yellow-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Real Stories</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Student Success Stories</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUCCESS_STORIES.map((story, index) => (
          <div key={index} className="bg-[#802358] rounded-2xl p-8 flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md">{story.initial}</div>
              <Quote className="w-10 h-10 text-yellow-400 opacity-80 fill-current" />
            </div>
            <p className="text-white/90 italic text-sm md:text-[15px] leading-relaxed mb-6 flex-grow">"{story.quote}"</p>
            <div className="border-t border-white/20 mb-4"></div>
            <div>
              <h4 className="text-yellow-400 font-bold text-base mb-1">{story.name}</h4>
              <p className="text-white/70 text-xs uppercase tracking-wide">{story.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LeadForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    language: "",
    program: ""
  });
  
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://nextwordpress.wininlifeacademy.in/wp-json/customform/v1/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      
      if (res.ok) {
        alert(data.message || "Form Submitted Successfully!");
        // Reset form on success
        setForm({
          firstName: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          language: "",
          program: ""
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
      
      
    
    // 2️⃣ Send to Pabbly Webhook
    const pbRes = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY0MDYzMTA0MzQ1MjY1NTUzNjUxMzIi_pc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const pbData = await pbRes.text();
    console.log("Pabbly Response:", pbData);

    alert("Form Submitted Successfully!");

  } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Row 1: First Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Your Full Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A4255D] focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A4255D] focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      {/* Row 2: Phone Number */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          maxLength={10}
          placeholder="+91 99999 99999"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A4255D] focus:border-transparent outline-none transition"
        />
      </div>

      {/* Row 3: State + City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
          <select
            name="state"
            required
            value={form.state}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#A4255D] outline-none"
          >
            <option value="">--Select State--</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">City Name</label>
          <input
            type="text"
            name="city"
            required
            placeholder="City Name"
            value={form.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#A4255D] focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      {/* Row 4: Language */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Language</label>
        <select
          name="language"
          required
          value={form.language}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#A4255D] outline-none"
        >
          <option value="">Select Your Language</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Kannada">Kannada</option>
        </select>
      </div>

      {/* Row 5: Program */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Program</label>
        <select
          name="program"
          required
          value={form.program}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#A4255D] outline-none"
        >
          <option value="">Select Your Preferred Program</option>
          <option value="Medical Coding">Medical Coding</option>
          <option value="Bioinformatics">Bioinformatics</option>
          <option value="Clinical Research">Clinical Research</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#A4255D] hover:bg-[#8d1d4c] disabled:bg-gray-400 text-white text-lg font-bold p-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" /> Submitting...
          </>
        ) : (
          "Get Free Career Counseling"
        )}
      </button>
    </form>
  );
};
// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================

export default function Hero({ data = {} }) {
  // Use fallbacks for data to prevent crashes if props are missing
  const heroTitle = data?.hero_title || "Admissions Open";
  const heroImage = data?.hero_image?.url || "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000";
  const certificateImage = data?.certificate?.url || "https://placehold.co/600x400/png?text=Certificate+Preview";

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFAQ = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="bg-[#4A0B2F] pt-32 pb-24 overflow-hidden relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <div className="inline-block bg-yellow-400 text-[#4A0B2F] px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide">
              {heroTitle} rio
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold leading-tight">
              Advanced Diploma in <br />
              <span className="text-green-400">Digital Marketing</span> +{" "}
              <span className="text-green-400">AI Essentials</span>
            </h1>
            <p className="text-white/80 mt-6 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Become a future-ready marketing professional in just 6 months. Master 40+ tools, gain IBM Certifications, and secure your career with our 100% placement support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/20">
                Talk to Advisor
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#4A0B2F] transition">
                Download Brochure
              </button>
            </div>

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

          <div className="flex justify-center z-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition duration-500 max-w-lg w-full">
              <img src={heroImage} alt="Classroom Environment" className="w-full object-cover h-[400px] lg:h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & IDEAL FOR */}
      <div className=" font-sans text-slate-800">
        <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto px-6 ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">Course Overview</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-5xl">
              The Advanced Diploma in Digital Marketing + AI Essentials is a comprehensive 6-month program designed to create future-ready marketing professionals. Learners bridge creativity with technology, mastering SEO, SEM, and Social Media while integrating AI-powered tools like ChatGPT, Jasper AI, and IBM Watson.
            </p>
          </div>
        </section>

        <section className="bg-[#f9f9fb] py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col items-start gap-6">
              <div className="w-14 h-14 bg-[#b91c68] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                <Briefcase className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] leading-tight">
                This <span className="text-[#b91c68]">Program</span> is Ideal for
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                The Advanced Diploma in Digital Marketing + AI Essentials is a comprehensive 6-month program designed to create future-ready marketing professionals.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {[
                { title: "Fresh Graduates", icon: Award },
                { title: "Early Professionals", icon: TrendingUp },
                { title: "Mid-Career", icon: Briefcase }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-[#b91c68] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e1b4b]">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">The Advanced Diploma in Digital Marketing + AI Essentials is a comprehensive 6-month program</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 3. DETAILS SECTIONS */}
      <WhatsIncluded />
      <IBMPartnership />
      <CourseCurriculum />
      <ToolsMastery />

      {/* 4. CERTIFICATION SECTION */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-12 font-sans flex justify-center">
  <div className="container mx-auto px-6 w-full">
    <div className="bg-[#f9f9fb] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-block bg-[#eaddd7] px-4 py-1.5 rounded-full mb-2">
            <span className="text-[#b91c68] text-xs font-bold uppercase tracking-wide">Global Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b]">Certification You Will Earn</h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>Upon completing the program, receive a <span className="text-[#b91c68] font-bold">globally recognized certification from Win In Life Academy</span>.</p>
            <p>In addition, earn separate certifications for each IBM module completed through IBM's official e-learning platform.</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-5 h-5 text-yellow-500" /><span className="font-bold text-[#1e1b4b] text-sm">WILA Diploma</span>
            </button>
            <button className="flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Scroll className="w-5 h-5 text-blue-600" /><span className="font-bold text-[#1e1b4b] text-sm">IBM Certificates</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center lg:justify-end pt-8 lg:pt-0">
          {/* Moved Badge INSIDE the image wrapper for relative positioning */}
          <div className="relative group w-full max-w-lg">
            
            {/* The Badge */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 z-20 bg-[#00c853] text-white w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center text-center border-[5px] border-white shadow-lg transform rotate-[-10deg]">
              <span className="text-[9px] md:text-[10px] font-bold leading-tight">GLOBALLY<br />RECOGNIZED</span>
            </div>

            {/* The Image */}
            <img 
              src={certificateImage} 
              alt="Certificate Preview" 
              className="w-full rounded-xl shadow-2xl transition-all duration-500 transform translate-x-6 translate-y-4 rotate-3 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 border border-gray-100" 
            />
          </div>
        </div>

      </div>
    </div>
    <p className="text-center text-slate-400 text-[10px] md:text-xs italic mt-6">Note: To secure your certificate, you must successfully complete the training from Win in Life Academy.</p>
  </div>
</section>

      <PlacementMentorship />
      <StudentSuccessStories />

      {/* 5. FEATURES */}
      <section className="w-full bg-[#E9E9E9] py-24 px-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#B02067] font-bold tracking-wide text-sm uppercase">The WILA Advantage</p>
          <h2 className="text-4xl font-bold mt-2 text-gray-900">Why Choose <span className="text-[#B02067]">WILA?</span></h2>
          <div className="w-24 h-[4px] bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {FEATURES_LIST.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <item.icon className="w-10 h-10 text-[#B02067]" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-gray-800 text-center leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked <span className="text-[#B02067]">Questions</span></h2>
          <div className="flex flex-col gap-4">
            {FAQS_LIST.map((faq, index) => (
              <div key={index} className={`bg-[#f4f5f7] rounded-xl p-6 cursor-pointer transition-all duration-300 border border-transparent ${openFaqIndex === index ? "bg-white shadow-md border-gray-200" : "hover:bg-gray-200"}`} onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-center">
                  <p className={`font-semibold text-lg ${openFaqIndex === index ? "text-[#B02067]" : "text-gray-800"}`}>{faq.question}</p>
                  <ChevronDown className={`w-6 h-6 text-[#B02067] transition-transform duration-300 ${openFaqIndex === index ? "rotate-180" : ""}`} />
                </div>
                {openFaqIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT FORM */}
      <div className="min-h-screen py-20 flex items-center justify-center px-4" style={{ backgroundColor: COLORS.darkMaroon }}>
        <div className="w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="p-12 lg:w-5/12 text-white flex flex-col justify-between" style={{ backgroundColor: COLORS.maroon }}>
            <div>
              <h2 className="text-4xl font-extrabold leading-snug mb-6">Let's Build Your Career Together</h2>
              <p className="text-pink-100 text-lg leading-relaxed">Ready to master Digital Marketing & AI? Fill out the form and our expert counselors will get in touch with you shortly.</p>
              <div className="space-y-8 mt-12">
                <div className="flex items-start space-x-4"><Phone className="h-6 w-6 mt-1 text-yellow-400" /><div><p className="font-bold text-lg">Call Us</p><p className="text-pink-100">+91 98765-43210</p></div></div>
                <div className="flex items-start space-x-4"><Mail className="h-6 w-6 mt-1 text-yellow-400" /><div><p className="font-bold text-lg">Email Us</p><p className="text-pink-100">admissions@wila.edu</p></div></div>
                <div className="flex items-start space-x-4"><MapPin className="h-6 w-6 mt-1 text-yellow-400" /><div><p className="font-bold text-lg">Visit Us</p><p className="text-pink-100">South India Regional Office</p></div></div>
              </div>
            </div>
            <div className="flex space-x-4 mt-12">
              <SocialIcon Icon={Facebook} /><SocialIcon Icon={Linkedin} /><SocialIcon Icon={Instagram} />
            </div>
          </div>
          <div className="bg-white p-12 lg:w-7/12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Enquire Now</h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </>
  );
}


// function MyForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("https://nextwordpress.wininlifeacademy.in/wp-json/customform/v1/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(form)
//     });

//     const data = await res.json();
//     console.log(data);
//     alert(data.message);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" onChange={handleChange} />
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <input name="phone" placeholder="Phone" onChange={handleChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
   
    
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
