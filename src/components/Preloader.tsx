"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  onLoaded: () => void;
}

export const Preloader = ({ onLoaded }: PreloaderProps) => {
  const [isLogoMoving, setIsLogoMoving] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // TIMELINE:
    // 0.0s - 1.2s: Letters slide in (handled by CSS animation)
    // 1.2s - 2.7s: Liquid fills up (CSS: 1.5s duration + 1.2s delay)
    // 2.0s: Monogram moves left, Name appears
    const moveTimer = setTimeout(() => {
      setIsLogoMoving(true);
    }, 2000); 

    // 3.0s: Page opens
    const loadTimer = setTimeout(() => {
      setIsHiding(true);
      // Notify parent that loading is complete after transition
      setTimeout(onLoaded, 1000); // 1s matches the preloader exit transition
    }, 3000); 

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(loadTimer);
    };
  }, [onLoaded]);

  return (
    <div id="preloader" className={cn(isHiding && 'preloader-exit')}>
      <div id="logoWrapper" className={cn('logo-container', isLogoMoving && 'move-left')}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <mask id="letterMask">
                    <g fontFamily="'Times New Roman', serif" fontWeight="300">
                        <text x="50" y="135" fontSize="110" fill="white" className="letter-n">N</text>
                        <text x="65" y="130" fontSize="120" fill="white" className="letter-c">C</text>
                    </g>
                </mask>
            </defs>
            <g fontFamily="'Times New Roman', serif" fontWeight="300" fill="none" stroke="#1a1a1a" strokeWidth="0.8">
                <text x="50" y="135" fontSize="110" className="letter-n">N</text>
                <text x="65" y="130" fontSize="120" className="letter-c">C</text>
            </g>
            <rect x="0" y="200" width="200" height="200" fill="#1a1a1a" mask="url(#letterMask)" className="liquid" />
        </svg>
        
        <div className="company-name">NUMBER CRAFT CONSULTING</div>
      </div>
    </div>
  );
};
