import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const About = () => {
    const [aboutTextIndex, setAboutTextIndex] = useState(0);
    const aboutTexts = ["Full-Stack Web Developer", "Software Developer"];

    useEffect(() => {
        const interval = setInterval(() => {
          setAboutTextIndex((prevIndex) => (prevIndex + 1) % aboutTexts.length);
        }, 3000);

        return () => clearInterval(interval);
      }, []);

    return (
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
            <div className="flex flex-col md:pl-52 text-left">
            <div className="h-8 overflow-hidden">
              <div className="animate-slide">
                <p className="text-md md:text-lg font-mono md:text-gray-300">{aboutTexts[aboutTextIndex]}</p>
              </div>
            </div>
              <h1 className="pt-36 md:pt-2 md:pl-1 text-5xl font-bold text-gray-400">Clean</h1>
              <h1 className="md:pt-2 md:pl-1 text-5xl font-bold text-gray-400">Functional</h1>
              <h1 className="md:pt-2 md:pl-1 md:pb-40 text-5xl font-bold text-gray-400">Beautiful</h1>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10">
            <div className="pt-6 pb-4 space-y-2">
              <span>Sep 2023 - Present</span>
              <h1 className="text-3xl font-bold">Computer Science</h1>
              <p>University of Maryland Global Campus</p>
              <p className='text-sm'>Bachelor of science </p>
              <Link
                href="https://www.umgc.edu/"
                className="inline-flex items-center py-2 space-x-2 text-sm text-cyan-700 hover:opacity-75"
              >
                <span>Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <span>Mar 2025</span>
              <h1 className="text-3xl font-bold">IBM Full-Stack Software Developer</h1>
              <p>Coursera</p>
              <p className='text-sm'>Professional Certificate</p>
              <Link
                href="https://www.coursera.org/account/accomplishments/professional-cert/C4PIYJUXLNZQ"
                className="inline-flex items-center py-2 space-x-2 text-sm text-cyan-700 hover:opacity-75"
              >
                <span>Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
            <div className="pt-6 pb-4 space-y-2">
            <span>Sep 2020 - Feb 2022</span>
              <h1 className="text-3xl font-bold">Full-Stack Web Developer</h1>
              <p>Bloom Institute of Technology</p>
              <p className='text-sm'>Professional Certificate</p>
              <Link
                href="https://www.bloomtech.com/"
                className="inline-flex items-center py-2 space-x-2 text-sm text-cyan-700 hover:opacity-75"
              >
                <span>Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default About;