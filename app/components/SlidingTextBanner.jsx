import React from 'react';

const SlidingTextBanner = () => {
  const skills = [
    "HTML", "CSS", "JAVA", "JAVASCRIPT", "PYTHON", "C", "TAILWIND", "NEXT.JS", "NODE.JS", "KUBERNETES"
  ];

  // Convert array into a single string with spaces and duplication for continuous animation
  const textContent = skills.join(' · ') + ' · ';

  return (
    <div className="w-full h-16 overflow-hidden relative">
      <div
        className="sliding-text absolute whitespace-nowrap font-bold text-4xl md:text-6xl lg:text-7xl"
        style={{ width: 'max-content' }}
      >
        {textContent}
        {textContent} {/* Duplicate the text content for seamless looping */}
      </div>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%); /* Slide only half the total width to start repeating halfway */
          }
        }
        .sliding-text {
          display: flex;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SlidingTextBanner;


