"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-neutral-200/90 md:hidden flex flex-col">
      <div className="bg-neutral-200 flex justify-between items-center p-6">
        <h1 className="tracking-wide text-2xl font-bold text-gray-900">POLLY YOSPAN</h1>
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="6" x2="18" y2="18"></line>
            <line x1="18" y1="6" x2="6" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="bg-neutral-200 text-center pt-10 flex flex-col">
        <Link href="#about" onClick={onClose} className="text-gray-900 py-3 text-xl">About</Link>
        <Link href="#experiences" onClick={onClose} className="text-gray-900 py-3 text-xl">Experience</Link>
        <Link href="#projects" onClick={onClose} className="text-gray-900 py-3 text-xl">Projects</Link>
        <Link href="#contact" onClick={onClose} className="text-gray-900 py-3 text-xl mb-6">Contact</Link>

        <div className="flex justify-center space-x-6 pb-10">
          <Link href="mailto:pollyyospan@gmail.com" className="bg-black rounded-full p-2 hover:opacity-80 transition" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="1" ry="1" fill="white"/>
              <path d="M2,4 L12,12 L22,4" stroke="black" strokeWidth="1" fill="none"/>
              <path d="M2,20 L9,13" stroke="black" strokeWidth="0.5" fill="none"/>
              <path d="M22,20 L15,13" stroke="black" strokeWidth="0.5" fill="none"/>
            </svg>
          </Link>
          <a href="https://github.com/PollyYP" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-black rounded-full p-2 hover:opacity-80 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/polly-panissara-yospan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-black rounded-full p-2 hover:opacity-80 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.innerWidth >= 768 && window.scrollY > 10;
      setIsSticky(shouldStick);
    };
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Lock background scroll when menu is open
  useEffect(() => {
    const html = document.documentElement;
    if (isMenuOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className={`${isSticky ? "fixed top-0 left-0 right-0 shadow-md z-[100]" : "relative z-[100]"} bg-neutral-200/90 py-6 px-8 transition-all duration-300 w-full`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black hover:text-gray-600 transition">
          <h1 className="tracking-wide text-2xl font-bold">POLLY YOSPAN</h1>
        </Link>

        {/* Desktop nav */}
        <nav className="space-x-12 hidden md:flex">
          <Link href="#about" className="text-black hover:text-gray-600 transition">About</Link>
          <Link href="#experiences" className="text-black hover:text-gray-600 transition">Experiences</Link>
          <Link href="#projects" className="text-black hover:text-gray-600 transition">Projects</Link>
          <Link href="#contact" className="text-black hover:text-gray-600 transition">Contact</Link>
        </nav>

        {/* Desktop icons */}
        <div className="hidden md:flex space-x-4">
          {/* ... your icons unchanged ... */}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none z-[101]" // above the bar itself
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="6" y1="6" x2="18" y2="18"></line>
              <line x1="18" y1="6" x2="6" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && <MenuOverlay onClose={toggleMenu} />}
    </div>
  );
}
