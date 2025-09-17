"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Static navigation for now - will be translated in the locale layout
  const navigation = [
    { name: "Home", href: "/#home" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-slate-900/20 backdrop-blur-sm border-b border-purple-500/20"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <Link href="/#home" className="mr-4 flex items-center space-x-2 lg:mr-6 cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                src="/Images/logoWhite.svg"
                alt="Portfolio Logo"
                width={100}
                height={100}
                className={`transition-all duration-300 ${
                  isScrolled ? "brightness-0" : "brightness-100"
                }`}
              />
            </div>
            <span
              className={`hidden font-bold lg:inline-block ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            ></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="flex md:hidden">
              <Link href="/#home" className="flex items-center space-x-2 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Image
                    src="/Images/logoWhite.svg"
                    alt="Portfolio Logo"
                    width={100}
                    height={100}
                    className={`transition-all duration-300 ${
                      isScrolled ? "brightness-0" : "brightness-100"
                    }`}
                  />
                </div>
                <span
                  className={`font-bold ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                ></span>
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`relative transition-all duration-300 hover:scale-105 cursor-pointer group ${
                    isScrolled
                      ? "text-slate-800 hover:text-purple-600"
                      : "text-white/90 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={`mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden cursor-pointer ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-gradient-to-br from-slate-900 to-purple-900/50 backdrop-blur-xl border-r border-purple-500/20">
              <div className="flex items-center space-x-2 pb-6">
                <div className="flex h-8 w-8 items-center justify-center">
                  <Image
                    src="/Images/logoWhite.svg"
                    alt="Portfolio Logo"
                    width={100}
                    height={100}
                    className="brightness-100"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg text-white/90 hover:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
