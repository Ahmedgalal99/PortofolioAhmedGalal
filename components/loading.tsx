"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#323647] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo with animations */}
        <div className="relative mb-8">
          <div className="animate-pulse">
            <Image
              src="/Images/logoWhite.svg"
              alt="Portfolio Logo"
              width={120}
              height={120}
              className="mx-auto animate-bounce"
            />
          </div>
          
          {/* Rotating ring around logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 border-4 border-transparent border-t-[#FFAF29] rounded-full animate-spin"></div>
          </div>
          
          {/* Outer glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#FFAF29]/20 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2 animate-fade-in">
            Ahmed Galal
          </h2>
          <p className="text-[#FFAF29] text-lg animate-fade-in-delay">
            Full Stack Developer
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-[#FFAF29] to-orange-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm">{progress}%</p>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-[#FFAF29] rounded-full animate-float-${i + 1}`}
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(180deg); }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-28px) rotate(180deg); }
        }
        
        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-32px) rotate(180deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.5s both;
        }
        
        .animate-float-1 { animation: float-1 3s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 3.5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 4s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 3.2s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 3.8s ease-in-out infinite; }
        .animate-float-6 { animation: float-6 4.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Loading;
