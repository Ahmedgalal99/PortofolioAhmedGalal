"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Heart, Code, Coffee, Sparkles, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Ahmedgalal99",
      icon: Github,
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-purple-500 hover:to-pink-500"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmedgalaldev/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-cyan-500 hover:to-blue-500"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/Images/logoWhite.svg"
                  alt="Portfolio Logo"
                  width={80}
                  height={80}
                  className="brightness-100"
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ahmed Galal
                </h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate about creating innovative web solutions and bringing ideas to life through code. 
              Let's build something amazing together! ✨
            </p>
            
            {/* Fun Stats */}
            <div className="flex flex-wrap gap-4 text-sm">
              <motion.div 
                className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">Clean Code</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">Coffee Lover</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer relative group flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <motion.div
                        className={`flex items-center space-x-3 p-3 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl transition-all duration-300 cursor-pointer`}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">{social.name}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gradient-to-r from-transparent via-purple-500/30 to-transparent pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-center md:text-left"
              whileHover={{ scale: 1.02 }}
            >
              © 2024 Ahmed Galal. Made with{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 inline" />
              </motion.span>{" "}
              and lots of{" "}
              <Coffee className="w-4 h-4 text-orange-400 inline" />
            </motion.p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
