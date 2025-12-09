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
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Description (Spans half width on desktop) */}
          <div className="md:col-span-6">
            <h2 className="text-2xl font-bold text-[#b91c68] mb-4 tracking-tight">
              WILA <span className="text-[#b91c68]">•</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Win In Life Academy transforms careers through industry-led education.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-[#22c55e] font-bold mb-6 text-sm">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#b91c68] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#b91c68] transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-[#b91c68] transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-[#b91c68] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="md:col-span-3">
            <h3 className="text-[#22c55e] font-bold mb-6 text-sm">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#b91c68] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#b91c68] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="border-t border-gray-200 pt-8 flex justify-center">
          <p className="text-gray-400 text-xs">
            © 2025 Win In Life Academy. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}