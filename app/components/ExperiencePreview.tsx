'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { experienceData, Experience } from '@/data/experienceData';

function ExperiencePreview() {
  const [selected, setSelected] = useState<Experience | null>(null);

  const openModal = (id: number) => {
    const found = experienceData.find((exp) => exp.id === id);
    if (found) setSelected(found);
  };

  const closeModal = () => setSelected(null);

  return (
    <div className="flex justify-center">
      <div className="2xl:mx-auto 2xl:container lg:px-28 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-full">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Experience</h2>

        {/* Main image */}
        <div className="relative mt-8 w-full" onClick={() => openModal(1)}>
          <div className="absolute bottom-0 left-0 p-6 bg-neutral-200/60 w-full">
            <h2 className="text-lg font-bold md:text-3xl">Restaurant Website - Web Developer</h2>
            <button
              onClick={() => openModal(1)}
              className="focus:outline-none focus:underline flex items-center mt-2 cursor-pointer hover:text-gray-200 hover:underline"
            >
              <p className="pr-2 text-sm font-medium md:text-base">Read More</p>
              <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <Image
            src="/shoHomePage.png"
            alt="sitting place"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Two bottom images */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6" onClick={() => openModal(2)}>
          <div className="relative w-full">
            <div className="absolute bottom-0 left-0 p-6 bg-neutral-200/60 w-full">
              <h2 className="text-lg font-bold md:text-3xl">Family Promise - Frontend</h2>
              <button
                onClick={() => openModal(2)}
                className="focus:outline-none focus:underline flex items-center mt-2 cursor-pointer hover:text-gray-200 hover:underline"
              >
                <p className="pr-2 text-sm font-medium md:text-base">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <Image
              src="/promise.jpg"
              alt="chair"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          <div className="relative w-full" onClick={() => openModal(3)}>
            <div className="absolute bottom-0 left-0 p-6 bg-neutral-200/60 w-full">
              <h2 className="text-lg font-bold md:text-3xl">Scribble Stadium - Frontend</h2>
              <button
                onClick={() => openModal(3)}
                className="focus:outline-none focus:underline flex items-center mt-2 cursor-pointer hover:text-gray-200 hover:underline"
              >
                <p className="pr-2 text-sm font-medium md:text-base">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <Image
              src="/kidscreen.jpg"
              alt="wall design"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/70 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full relative shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-black/80 hover:bg-black p-1.5 rounded-full z-50"
              >
                ✕
              </button>

              <article>
                <div className="w-full relative h-96">
                  <div
                    className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7))',
                    }}
                  />
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover opacity-70 z-0"
                  />
                  <div className="p-4 absolute bottom-0 left-0 z-20 text-white">
                    {selected.github && (
                      <Link
                        target="_blank"
                        href={selected.github}
                        className="px-4 py-1 bg-black text-gray-200 inline-flex space-x-2 items-center justify-center mb-2"
                      >
                        <span>GitHub Repo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    )}
                    {selected.liveUrl && (
                      <Link
                        target="_blank"
                        href={selected.liveUrl}
                        className="px-4 py-1 bg-green-700 text-white inline-flex space-x-2 items-center justify-center mb-2"
                      >
                        <span>Live Website</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    )}
                    <h2 className="text-3xl font-semibold">{selected.title}</h2>
                    <div className="flex mt-3 items-center">
                      <Image
                        src={selected.logo}
                        alt={selected.org}
                        width={40}
                        height={40}
                        className="rounded-full mr-2 object-cover"
                        quality={100}
                      />
                      <div>
                        <p className="font-semibold text-sm">{selected.org}</p>
                        <p className="font-semibold text-xs text-gray-300">{selected.date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-10 text-gray-700 dark:text-white text-justify md:text-lg leading-relaxed whitespace-pre-line">
                  <p className="mb-6">{selected.description}</p>
                  <h3 className="text-2xl font-semibold mb-4">My Role and Contributions</h3>
                  <p>{selected.role}</p>
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperiencePreview;
