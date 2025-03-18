"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

import SlidingTextBanner from './components/SlidingTextBanner';

export default function Home() {
  const [printTextIndex, setPrintTextIndex] = useState(0);
  const printTexts = ["console.log", "System.out.println", "print", "printf"];

  const [aboutTextIndex, setAboutTextIndex] = useState(0);
  const aboutTexts = ["Full-Stack Web Developer", "Software Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrintTextIndex((prevIndex) => (prevIndex + 1) % printTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutTextIndex((prevIndex) => (prevIndex + 1) % aboutTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* System.out.println text animation section */}
        <section className="border-b ">
          <div className="container mx-auto py-4 px-8">
            <div className="h-8 overflow-hidden">
              <div className="animate-slide">
                <p className="text-lg font-mono">{printTexts[printTextIndex]}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero section with HELLO WORLD */}
        <section className="py-10 px-8 border-b bg-white">
          <div className="container mx-auto">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center">
              ("HELLO WORLD")
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
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">About</h2>
            <div className="dark:bg-gray-800 dark:text-gray-50">
              <div className="container grid grid-cols-12 mx-auto">
              <div
                  className="flex flex-col justify-center col-span-12 align-middle lg:col-span-6 lg:h-auto"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/25482494/pexels-photo-25482494/free-photo-of-silhouette-of-woman-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    backgroundPosition: "center center",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover"
                  }}>
                  <div className="flex flex-col text-gray-300 pl-52 text-left">
                  <div className="h-8 overflow-hidden">
                    <div className="animate-slide">
                      <p className="text-lg font-mono">{aboutTexts[aboutTextIndex]}</p>
                    </div>
                  </div>
                    <h1 className="pt-2 pl-1 text-5xl font-bold">Clean</h1>
                    <h1 className="pt-2 pl-1 text-5xl font-bold">Functional</h1>
                    <h1 className="pt-2 pl-1 pb-40 text-5xl font-bold">Beautiful</h1>

                  </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
                  <div className="pt-6 pb-4 space-y-2">
                    <span>Sep 2023 - Present</span>
                    <h1 className="text-3xl font-bold">Computer Science</h1>
                    <p>University of Maryland Global Campus</p>
                    <p className='text-sm'>Bachelor of science </p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.umgc.edu/"
                      className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
                    >
                      <span className='text-cyan-700'>Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="pt-6 pb-4 space-y-2">
                    <span>Mar 2025</span>
                    <h1 className="text-3xl font-bold">IBM Full-Stack Software Developer</h1>
                    <p>Coursera</p>
                    <p className='text-sm'>Professional Certificate</p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.coursera.org/account/accomplishments/professional-cert/C4PIYJUXLNZQ"
                      className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
                    >
                      <span className='text-cyan-700'>Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="pt-6 pb-4 space-y-2">
                  <span>Sep 2020 - Feb 2022</span>
                    <h1 className="text-3xl font-bold">Full-Stack Web Developer</h1>
                    <p>Bloom Institute of Technology</p>
                    <p className='text-sm'>Professional Certificate</p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.bloomtech.com/"
                      className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400"
                    >
                      <span className='text-cyan-700'>Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner section */}
        <section className="my-7 pb-9 border-b">
          <SlidingTextBanner/>
        </section>

        {/* Projects section */}
        <section id="projects" className="my-6 pt-8 pb-12 px-8 border-b bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards would go here */}
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p>Description of project goes here</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-16 px-8 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="max-w-md">
              <p className="mb-4">
                Interested in working together? Feel free to reach out!
              </p>
              <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
                contact@example.com
              </a>
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