"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-[#323647] border-b border-[#323647]/20"
      }`}
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
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
            <SheetContent side="left" className="pr-0 bg-[#323647] border-r-0">
              <div className="flex items-center space-x-2 pb-4">
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
              <div className="flex flex-col items-start space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-white/90 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
