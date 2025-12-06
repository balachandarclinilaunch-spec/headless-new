"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Download } from "lucide-react";

// ==========================================
// STATIC DATA
// ==========================================

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Placement", href: "#placement" },
  { label: "Success Stories", href: "#success" },
];

const CONTACT_INFO = {
  phone: "+91 98765 43210",
  ctaText: "Download Brochure",
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#4A0B2F] shadow-lg py-3"
          : "bg-[#4A0B2F]/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <a href="/" className="flex items-center gap-2 group">
          {/* Replace src with your actual logo path */}
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#4A0B2F] font-bold text-xl group-hover:scale-105 transition">
            W
          </div>
          <span className="text-white font-bold text-xl tracking-wide">WILA</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/90 text-sm font-medium hover:text-pink-300 transition-colors relative group"
            >
              {item.label}
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* DESKTOP RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Phone Number */}
          <div className="flex items-center text-white gap-2 group cursor-pointer">
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition">
              <Phone size={18} className="text-pink-300" />
            </div>
            <span className="font-medium text-sm">{CONTACT_INFO.phone}</span>
          </div>

          {/* CTA Button */}
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 text-sm">
            <span>{CONTACT_INFO.ctaText}</span>
            <Download size={16} />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 top-[70px] bg-[#4A0B2F] z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 bg-[#4A0B2F]  overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl font-medium text-white border-b border-white/10 pb-4 hover:text-pink-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-auto pb-20 space-y-4">
            <div className="flex items-center gap-3 text-white justify-center bg-white/5 p-4 rounded-xl">
              <Phone size={20} className="text-pink-300" />
              <span className="font-semibold">{CONTACT_INFO.phone}</span>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 bg-green-500 active:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg">
              {CONTACT_INFO.ctaText}
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}