"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SlidingSkillBanner from './components/SlidingSkillBanner';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function Home() {
  const [printTextIndex, setPrintTextIndex] = useState(0);
  const printTexts = ["console.log", "System.out.println", "print", "printf"];


  useEffect(() => {
    const interval = setInterval(() => {
      setPrintTextIndex((prevIndex) => (prevIndex + 1) % printTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [printTexts.length]);


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* System.out.println text animation section */}
        <section className="border-b ">
          <div className="container mx-auto py-4 px-8">
            <div className="h-8 overflow-hidden">
              <div className="animate-slide">
                <p className="tracking-wide text-lg font-mono">{printTexts[printTextIndex]}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero section with HELLO WORLD */}
        <section className="py-10 px-8 border-b bg-white">
          <div className="container mx-auto">
            <h2 className="tracking-wide text-4xl md:text-8xl lg:text-9xl font-bold text-center">
            <div>{"(\"HELLO WORLD\")"}</div>
            </h2>
          </div>
        </section>

        {/* Person image section */}
        <section className="my-6 bg-black">
          <div className="container mx-auto">
            <div className="relative w-full h-96 md:h-[300px] lg:h-[450px]">
              <Image
                src="/window.jpg"
                alt="Polly Yospan"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="my-6 py-12 px-8 border-y bg-white">
          <About/>
        </section>

        {/* Banner section */}
        <section className="my-7 md:pb-9 border-b">
          <SlidingSkillBanner/>
        </section>

        {/* Experience section */}
        <section id="experience" className="border-b bg-gray-50">
          <Experience/>
        </section>

        {/* Projects section */}
        <section id="projects" className="mt-12 pb-12 px-8 border-b bg-gray-50">
          <Projects/>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-16 px-8 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="mb-5 text-sm md:text-base">
                Interested in working together? Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-4 items-center">
                <Link href="mailto:pollyyospan@gmail.com" className="bg-black rounded-full p-2 hover:opacity-80 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="1" ry="1" fill="white"/>
                      <path d="M2,4 L12,12 L22,4" stroke="black" strokeWidth="1" fill="none"/>
                      <path d="M2,20 L9,13" stroke="black" strokeWidth="0.5" fill="none"/>
                      <path d="M22,20 L15,13" stroke="black" strokeWidth="0.5" fill="none"/>
                      </svg>
                </Link>
                <Link href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="bg-black rounded-full p-2 hover:opacity-80 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-6 px-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Polly Yospan. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            transform: translateY(0);
            opacity: 1;
          }
          90% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .animate-slide {
          animation: slideUp 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}