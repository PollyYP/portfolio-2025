"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

import SlidingSkillBanner from './components/SlidingSkillBanner';
import About from './components/About';
import ExperiencePreview from './components/ExperiencePreview';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

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
            <h2 className="tracking-wide text-3xl md:text-8xl lg:text-9xl font-bold text-center">
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
          <ExperiencePreview/>
        </section>

        {/* Projects section */}
        <section id="projects" className="mt-12 pb-12 px-8 border-b bg-gray-50">
          <Projects/>
        </section>

        <section id="projects" className="mt-12 pb-12 px-8 border-b bg-gray-50">
          <ContactMe/>
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