"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Sparkles, Zap, Coffee } from "lucide-react";

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    { text: "Initializing...", icon: Zap },
    { text: "Loading components...", icon: Code },
    { text: "Brewing coffee...", icon: Coffee },
    { text: "Adding magic...", icon: Sparkles },
    { text: "Almost ready!", icon: Sparkles }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
          return 100;
        }
        
        // Update message based on progress
        const messageIndex = Math.floor((prev / 100) * loadingMessages.length);
        setCurrentMessage(Math.min(messageIndex, loadingMessages.length - 1));
        
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Logo with modern animations */}
          <motion.div 
            className="relative mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Outer rotating rings */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-48 h-48 border-2 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-40 h-40 border-2 border-transparent border-b-pink-400 border-l-cyan-500 rounded-full"></div>
            </motion.div>

            {/* Pulsing glow effect */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-36 h-36 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur-xl"></div>
            </motion.div>

            {/* Logo */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/Images/logoWhite.svg"
                alt="Portfolio Logo"
                width={120}
                height={120}
                className="mx-auto relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* Modern loading text */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ahmed Galal
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Dynamic loading message */}
          <motion.div 
            className="mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessage}
                className="flex items-center justify-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {React.createElement(loadingMessages[currentMessage].icon, {
                    className: "w-5 h-5 text-cyan-400"
                  })}
                </motion.div>
                <span className="text-gray-300 font-medium">
                  {loadingMessages[currentMessage].text}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Modern progress bar */}
          <motion.div 
            className="w-80 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="relative">
              {/* Background bar */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-full h-3 mb-4 border border-purple-500/20">
                {/* Progress fill */}
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 h-full rounded-full relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
              
              {/* Progress percentage */}
              <motion.div 
                className="flex justify-between items-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-gray-400 text-sm font-medium">Loading...</span>
                <span className="text-cyan-400 text-sm font-bold">{Math.round(progress)}%</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating tech icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[Code, Sparkles, Zap, Coffee].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                <Icon className="w-6 h-6 text-purple-400/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
