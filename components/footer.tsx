"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#323647] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Images/logoWhite.svg"
                alt="Portfolio Logo"
                width={100}
                height={100}
                className="brightness-100"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions and bringing ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-10 h-10 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
              >
                <Link
                  href="https://github.com/Ahmedgalal99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-10 h-10 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
              >
                <Link
                  href="https://www.linkedin.com/in/ahmedgalaldev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Ahmed Galal. All rights reserved. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
