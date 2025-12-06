import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// ==========================================
// STATIC DATA
// ==========================================

const FOOTER_LINKS = [
  {
    title: "Quick Links",
    items: [
      { label: "About Us", href: "#" },
      { label: "Curriculum", href: "#" },
      { label: "Placements", href: "#" },
      { label: "Contact", href: "#" },
    ]
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Success Stories", href: "#" },
      { label: "Events", href: "#" },
    ]
  }
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
    >
      {children}
    </a>
  </li>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Footer() {
  return (
    <footer className="bg-[#1E1D2A] pt-16 pb-8 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand Info (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-white">WILA</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Win In Life Academy transforms careers through industry-led education, cutting-edge AI tools, and a commitment to 100% placement support.
            </p>
            {/* Newsletter Input (Optional enhancement) */}
            <div className="flex gap-2 max-w-xs pt-2">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-pink-500 w-full"
                />
                <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-sm font-semibold transition">
                    Subscribe
                </button>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {FOOTER_LINKS.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((link, idx) => (
                  <FooterLink key={idx} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEPARATOR */}
        <div className="border-t border-white/10 my-8"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Win In Life Academy. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((social, index) => {
                const Icon = social.icon;
                return (
                    <a 
                        key={index} 
                        href={social.href} 
                        className="p-2 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white text-gray-400 transition-all duration-300"
                        aria-label="Social Link"
                    >
                        <Icon size={18} />
                    </a>
                );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}