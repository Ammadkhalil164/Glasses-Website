import React from "react";
import { ShoppingBag, Search, Compass, Layers, ShieldCheck, HelpCircle } from "lucide-react";

interface HeaderProps {
  onExploreClick: () => void;
  onCustomiseClick: () => void;
  cartCount: number;
  openCart: () => void;
}

export default function Header({ onExploreClick, onCustomiseClick, cartCount, openCart }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-40 px-6 py-8 md:px-12 flex justify-between items-center bg-transparent select-none">
      {/* Brand Logo - 100% same as Reference (MetaLeaf) */}
      <div className="flex items-center gap-2.5 group cursor-pointer" onClick={onExploreClick}>
        <div className="w-5 h-5 flex items-center justify-center border border-[#2E2F2E] rounded-md bg-[#2E2F2E] text-[#F0EADF] shadow-sm transform group-hover:scale-105 transition-transform duration-300">
          <svg viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M4 19c0-4.5 3.5-9 11-10c-1 4.5-3.5 9-11 10z" />
            <path d="M8 15l4-4" />
          </svg>
        </div>
        <span className="font-primary text-sm font-semibold tracking-wider text-[#2E2F2E] uppercase">
          MetaLeaf
        </span>
      </div>

      {/* Navigation - Centered Menu Links matching Reference layout (No icons, clean text) */}
      <nav className="hidden md:flex justify-center items-center gap-10">
        <a
          href="#explore"
          onClick={(e) => {
            e.preventDefault();
            onExploreClick();
          }}
          className="font-primary text-[11px] font-medium tracking-wider text-[#2E2F2E]/70 hover:text-[#2E2F2E] transition-all duration-300 relative py-1"
        >
          Explore
        </a>
        <a
          href="#experiences"
          onClick={(e) => {
            e.preventDefault();
            onExploreClick();
          }}
          className="font-primary text-[11px] font-medium tracking-wider text-[#2E2F2E]/70 hover:text-[#2E2F2E] transition-all duration-300 relative py-1"
        >
          Experiences
        </a>
        <a
          href="#technology"
          onClick={(e) => {
            e.preventDefault();
            onCustomiseClick();
          }}
          className="font-primary text-[11px] font-medium tracking-wider text-[#2E2F2E]/70 hover:text-[#2E2F2E] transition-all duration-300 relative py-1"
        >
          Technology
        </a>
        <a
          href="#about"
          className="font-primary text-[11px] font-medium tracking-wider text-[#2E2F2E]/70 hover:text-[#2E2F2E] transition-all duration-300 relative py-1"
        >
          About Us
        </a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Search toggle (Interactive layout placeholder with beautiful alertless UI) */}
        <button 
          className="p-2 text-[#2E2F2E]/80 hover:text-[#2E2F2E] transition-colors focus:outline-none"
          title="Search Collection"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Dynamic Interactive Shopping Bag */}
        <button
          onClick={openCart}
          className="p-2 text-[#2E2F2E]/80 hover:text-[#2E2F2E] transition-colors focus:outline-none relative flex items-center gap-1.5"
          title="Shopping Cart"
        >
          <ShoppingBag className="w-4 h-4" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#2E2F2E] text-[#F0EADF] text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[#F0EADF] animate-bounce">
              {cartCount}
            </span>
          )}
        </button>

        {/* Call to Action Button */}
        <button
          id="cta-get-started"
          onClick={onCustomiseClick}
          className="font-primary text-xs font-bold uppercase tracking-wider text-[#2E2F2E] border border-[#2E2F2E]/20 hover:border-[#2E2F2E] hover:bg-[#2E2F2E] hover:text-[#F0EADF] transition-all duration-300 rounded-full px-6 py-2.5 shadow-sm active:scale-95"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
