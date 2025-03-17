// components/IntroAnimation.jsx
import React, { useEffect, useState } from 'react';

const IntroAnimation = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);
  // 0: initial, 1: growing, 2: fully grown, 3: fading, 4: complete

  useEffect(() => {
    // Start growing animation after a short delay
    const growTimeout = setTimeout(() => {
      setAnimationStage(1);
    }, 1000);

    // Set to fully grown
    const fullGrowTimeout = setTimeout(() => {
      setAnimationStage(2);
    }, 2500);

    // Start fading
    const fadeTimeout = setTimeout(() => {
      setAnimationStage(3);
    }, 3200);

    // Animation complete
    const completeTimeout = setTimeout(() => {
      setAnimationStage(4);
      if (onAnimationComplete) onAnimationComplete();
    }, 4000);

    // Cleanup
    return () => {
      clearTimeout(growTimeout);
      clearTimeout(fullGrowTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onAnimationComplete]);

  // Hide the animation when it's complete
  if (animationStage === 4) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div
        className={`text-white font-bold transition-all duration-1500 ${
          animationStage === 0 ? 'text-6xl' :
          animationStage === 1 ? 'text-9xl scale-150' :
          animationStage === 2 ? 'text-9xl scale-[5]' :
          'text-9xl scale-[7] opacity-0'
        }`}
      >
        PY
      </div>
    </div>
  );
};

export default IntroAnimation;