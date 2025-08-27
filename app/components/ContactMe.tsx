"use client";

import Link from 'next/link';

export default function ContactMe() {
    return (
        <section id="contact" className="py-16 px-8 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <div className="max-w-md mx-auto text-center">
                    <p className="text-sm md:text-base">
                        Interested in working together?
                    </p>
                    <p className="mb-5 text-sm md:text-base">
                        Feel free to reach out!
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
    );
}