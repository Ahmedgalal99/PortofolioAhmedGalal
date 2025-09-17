"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Loading from "@/components/loading";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Zap,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string | { title: string; points: string[] };
  images: string[];
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export default function HomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const jobTitles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "Software Engineer",
  ];

  const skills = [
    { name: "React", icon: Code2, color: "from-cyan-400 to-blue-500", percentage: 95 },
    { name: "Next.js", icon: Globe, color: "from-gray-400 to-gray-600", percentage: 90 },
    { name: "TypeScript", icon: Code2, color: "from-blue-400 to-blue-600", percentage: 88 },
    { name: "JavaScript", icon: Zap, color: "from-yellow-400 to-orange-500", percentage: 95 },
    { name: "Python", icon: Code2, color: "from-green-400 to-blue-500", percentage: 85 },
    { name: "Django", icon: Server, color: "from-green-500 to-emerald-600", percentage: 80 },
    { name: "Node.js", icon: Server, color: "from-green-400 to-green-600", percentage: 85 },
    { name: "MongoDB", icon: Database, color: "from-green-500 to-teal-600", percentage: 82 },
    { name: "WordPress", icon: Globe, color: "from-blue-500 to-indigo-600", percentage: 90 },
    { name: "Elementor", icon: Palette, color: "from-purple-400 to-pink-500", percentage: 88 },
    { name: "WPBakery", icon: Code2, color: "from-cyan-400 to-teal-500", percentage: 85 },
    { name: "GraphQL", icon: Database, color: "from-pink-400 to-rose-500", percentage: 78 },
    { name: "Git", icon: GitBranch, color: "from-orange-400 to-red-500", percentage: 92 },
    { name: "CSS/Tailwind", icon: Palette, color: "from-pink-400 to-purple-500", percentage: 93 },
    { name: "Full Stack", icon: Server, color: "from-indigo-400 to-purple-600", percentage: 87 },
  ];

  const projects: Project[] = [
    {
      id: 2,
      title: "Enigma Website",
      description: {
        title:
          "Built and customized a responsive corporate website using WordPress and Elementor. Implemented interactive sections, custom layouts, and ensured smooth user experience across devices. Focused on:",
        points: [
          "Designing and building pages with Elementor.",
          "Custom styling with HTML & CSS.",
          "Adding interactive behaviors using JavaScript.",
          "Optimizing speed and SEO for better performance.",
        ],
      },
      images: ["/Images/projects/enigma/Enigma.png"],
      technologies: [
        "wordpress",
        "elementor",
        "contact 7",
        "JavaScript",
        "js",
        "css",
        "html",
      ],
      liveUrl: "https://enigmacrafts.com/",
      codeUrl: "",
    },
    {
      id: 6,
      title: "Rasid Payment – Fintech Dashboard",
      description: {
        title:
          "Developed a production-ready Fintech dashboard for Rasid Payment with a rich set of features to manage financial operations. Key aspects:",
        points: [
          "GraphQL Integration: Data fetching & real-time updates using Apollo Client.",
          "Internationalization (i18n): Multi-language support (Arabic/English).",
          "Modern UI/UX: Designed with Shadcn UI + Tailwind CSS for a clean, consistent design system.",
          "Advanced Features: Included transaction management, reporting, notifications, and role-based access.",
          "Scalable Architecture: Built on Next.js for performance, SEO, and maintainability.",
          "Production Ready: Currently live and in use.",
        ],
      },
      images: [
        "/Images/projects/rasidpyment/controlPanel.webp",
        "/Images/projects/rasidpyment/rasid1.png",
        "/Images/projects/rasidpyment/rasid2.png",
        "/Images/projects/rasidpyment/rasid3.png",
      ],
      technologies: [
        "Next.js",
        "Apollo",
        "GraphQL",
        "Shadcn UI",
        "Tailwind CSS",
        "i18n",
        "Fintech",
        "Dashboard",
      ],
      liveUrl: "",
      codeUrl: "",
    },
    {
      id: 1,
      title: "Comrafts Website",
      description: {
        title:
          "Developed a responsive corporate website for a technology company. The project included:",
        points: [
          "Custom UI design implementation using HTML, CSS, and JavaScript.",
          "WordPress integration for content management.",
          "Interactive sections for projects, services, and contact forms.",
          "Optimized performance and cross-browser compatibility.",
        ],
      },
      images: [
        "/Images/projects/comcrafts/comcrafts1.png",
        "/Images/projects/comcrafts/comcrafts2.png",
        "/Images/projects/comcrafts/comcrafts3.png",
        "/Images/projects/comcrafts/comcrafts4.png",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "wordpress"],
      liveUrl: "https://comcrafts.net",
      codeUrl: "",
    },

    {
      id: 3,
      title: "Rasid Payment website",
      description: {
        title:
          "Developed a modern, multi-language website for Resid Payment, focusing on clean UI and seamless user experience. Key features include:",
        points: [
          "Internationalization (i18n): Full Arabic/English language support.",
          "GraphQL Integration: Data fetching and mutations using Apollo Client.",
          "UI/UX: Styled with Tailwind CSS and Shadcn UI for a consistent design system.",
          "Responsive Design: Optimized for desktop, tablet, and mobile devices.",
          "Performance Optimization: Implemented lazy loading, code splitting, and caching strategies.",
          "Scalable Architecture: Built on Next.js for performance and SEO optimization.",
        ],
      },
      images: ["/Images/projects/rasidpyment/rasidpymentSite.png"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      liveUrl: "https://www.rasidpayments.com.sa/en",
      codeUrl: "",
    },
    {
      id: 4,
      title: "Green Riyadh – LMS System",
      description: {
        title:
          "Developed a scalable Learning Management System for Green Riyadh initiative with focus on accessibility and multi-language support. Key features include:",
        points: [
          "State Management: Centralized state handling using Redux and efficient data fetching with Redux Toolkit Query.",
          "UI/UX: Built with Mantine UI components and styled using Tailwind CSS for a modern, responsive interface.",
          "UI/UX: Styled with Tailwind CSS and Shadcn UI for a consistent design system.",
          "Internationalization (i18n): Full Arabic/English support across all modules.",
          "Core Features: Course management, user authentication, progress tracking, and admin dashboards",
          "Responsive Design: Optimized for desktops, tablets, and mobiles.",
        ],
      },
      images: [
        "/Images/projects/green/green.png",
        "/Images/projects/green/green1.png",
        "/Images/projects/green/green2.png",
        "/Images/projects/green/green3.png",
        "/Images/projects/green/green4.png",
        "/Images/projects/green/green5.png",
        "/Images/projects/green/green6.png",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
        "Mantine UI ",
        "i18n (Arabic/English)",
        "Responsive Design",
        "Booking System · Custom Seat Selection",
      ],
      liveUrl: "",
      codeUrl: "",
    },
    {
      id: 5,
      title: "ComedyPod – Booking System",
      description: {
        title:
          "Developed a seat-based booking system for ComedyPod events, similar in architecture to the Green Riyadh LMS but tailored for event management. Key highlights:",
        points: [
          "Custom Seat Selection: Built from scratch (no external libraries) to allow users to choose and book seats directly on the platform.",
          "State Management: Implemented with Redux and Redux Toolkit Query for efficient data fetching and caching.",
          "UI/UX: Designed with Mantine UI + Tailwind CSS for a smooth and responsive booking experience.",
          "Internationalization (i18n): Full Arabic/English support across all modules.",
          "nationalization (i18n): Full Arabic/English support for accessibility.",
          "Responsive Design: Optimized for desktops, tablets, and mobiles.",
        ],
      },
      images: [
        "/Images/projects/comedy/comedy1.png",
        "/Images/projects/comedy/comedy.png",
        "/Images/projects/comedy/comedy2.png",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
        "Mantine UI ",
        "i18n (Arabic/English)",
        "Responsive Design",
        "Booking System · Custom Seat Selection",
      ],
      liveUrl: "",
      codeUrl: "",
    },
    {
      id: 6,
      title: "Rasid Payment – Fintech Dashboard",
      description: {
        title:
          "Developed a production-ready Fintech dashboard for Rasid Payment with a rich set of features to manage financial operations. Key aspects:",
        points: [
          "GraphQL Integration: Data fetching & real-time updates using Apollo Client.",
          "Internationalization (i18n): Multi-language support (Arabic/English).",
          "Modern UI/UX: Designed with Shadcn UI + Tailwind CSS for a clean, consistent design system.",
          "Advanced Features: Included transaction management, reporting, notifications, and role-based access.",
          "Scalable Architecture: Built on Next.js for performance, SEO, and maintainability.",
          "Production Ready: Currently live and in use.",
        ],
      },
      images: [
        "/Images/projects/rasidpyment/controlPanel.webp",
        "/Images/projects/rasidpyment/rasid1.ong",
        "/Images/projects/rasidpyment/rasid2.ong",
        "/Images/projects/rasidpyment/rasid3.ong",
      ],
      technologies: [
        "Next.js",
        "Apollo",
        "GraphQL",
        "Shadcn UI",
        "Tailwind CSS",
        "i18n",
        "Fintech",
        "Dashboard",
      ],
      liveUrl: "",
      codeUrl: "",
    },
  ];

  // Pagination logic
  const projectsPerPage = 6;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const currentWord = jobTitles[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % jobTitles.length);
      } else {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, jobTitles]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-white space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Ahmed Galal
                  </span>
                </motion.h1>
                <motion.div 
                  className="flex items-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
                    {displayText}
                    <span className="animate-pulse text-cyan-400">|</span>
                  </span>
                </motion.div>
              </div>

              <motion.p 
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I'm a results-driven full-stack developer with a passion for
                turning ideas into powerful web applications. With expertise in
                modern JavaScript frameworks and a strong eye for design, I
                craft solutions that are fast, scalable, and user-focused.
                Whether it's building from scratch or optimizing existing
                projects, I deliver code that makes an impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.a
                  href="/images/AhmedGalalCv.pdf"
                  download="AhmedGalalCV.pdf"
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </motion.a>
                <motion.a
                  href="mailto:Ahmedgalalui@gmail.com"
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                    size="lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Let's Connect
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 scale-110"
                  animate={{
                    rotate: 360,
                    scale: [1.1, 1.2, 1.1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                ></motion.div>

                {/* Profile image container */}
                <motion.div 
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <Image
                      src="/Images/ahmedgalalImh.png"
                      alt="Ahmed Galal"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-full h-full text-white p-1" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Star className="w-full h-full text-white p-2" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ⚡ Skills & Expertise
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm passionate about building modern, scalable, and user-friendly
              web applications. My expertise spans both frontend and backend
              development, allowing me to deliver complete end-to-end solutions.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                    }}
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative flex items-center space-x-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent size={32} className="text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">
                          {skill.name}
                        </h3>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        <motion.span 
                          className="text-gray-400 text-sm font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                          viewport={{ once: true }}
                        >
                          {skill.percentage}%
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🚀 Featured Projects
            </motion.h2>
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full inline-block border border-purple-500/20">
                💡 Some project repositories are private. Please contact me for access to the code.
              </p>
            </motion.div>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-20">
            {currentProjects.map((project: Project, index: number) => (
              <Dialog key={project.id}>
                <motion.div
                  className={`flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Project Content */}
                  <motion.div
                    className={`space-y-6 lg:order-none ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    {typeof project.description === "string" ? (
                      <motion.p 
                        className="text-gray-300 text-base leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-gray-300 text-base leading-relaxed mb-4">
                          {project.description.title}
                        </p>
                        <ul className="list-none text-gray-300 text-sm space-y-2">
                          {project.description.points.map((point, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + 0.8 + i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <span className="text-cyan-400 mt-1">▶</span>
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    <motion.div 
                      className="flex flex-wrap gap-3 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                      viewport={{ once: true }}
                    >
                      {project.technologies.map(
                        (tech: string, techIndex: number) => (
                          <motion.span
                            key={techIndex}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + 1 + techIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
                          >
                            {tech}
                          </motion.span>
                        )
                      )}
                    </motion.div>
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                      viewport={{ once: true }}
                    >
                      {project.liveUrl ? (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            className="cursor-pointer"
                          >
                            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                              <Globe className="mr-2 h-5 w-5" />
                              View Live
                            </Button>
                          </Link>
                        </motion.div>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-gray-500 text-gray-500 px-8 py-3 rounded-xl font-semibold cursor-not-allowed backdrop-blur-sm"
                          disabled
                        >
                          Live demo available upon request
                        </Button>
                      )}
                      {project.codeUrl ? (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            href={project.codeUrl}
                            target="_blank"
                            className="cursor-pointer"
                          >
                            <Button
                              variant="outline"
                              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                            >
                              <Code2 className="mr-2 h-5 w-5" />
                              View Code
                            </Button>
                          </Link>
                        </motion.div>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-gray-500 text-gray-500 px-8 py-3 rounded-xl font-semibold cursor-not-allowed backdrop-blur-sm"
                          disabled
                        >
                          Private Repository
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Project Image */}
                  <motion.div
                    className={`order-first lg:order-none ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <DialogTrigger asChild>
                      <motion.div 
                        className="relative group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl border border-purple-500/20 backdrop-blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-full p-4"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Sparkles className="w-8 h-8 text-cyan-400" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </DialogTrigger>
                  </motion.div>
                </motion.div>
                <DialogContent className="bg-gradient-to-br from-slate-900 to-purple-900/50 border-2 border-purple-500/30 text-white max-w-4xl backdrop-blur-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  <Carousel className="w-full mt-4">
                    <CarouselContent>
                      {project.images.map((image, i) => (
                        <CarouselItem key={i}>
                          <div className="relative aspect-video">
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-contain rounded-xl border border-purple-500/20"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-none hover:from-cyan-600 hover:to-purple-700 shadow-lg" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-none hover:from-cyan-600 hover:to-purple-700 shadow-lg" />
                  </Carousel>
                </DialogContent>
              </Dialog>
            ))}

            {/* Pagination Controls */}
            {/* <div className="flex justify-center items-center space-x-4 mt-16">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Previous
              </Button>
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              💬 Let's Connect
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let's discuss your next project or just say hello. I'm always open
              to new opportunities and interesting conversations.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
              <a href="mailto:Ahmedgalalui@gmail.com" className="group-hover:text-cyan-400 transition-colors duration-300">
                <p className="text-gray-300 text-sm">Ahmedgalalui@gmail.com</p>
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
              <div className="space-y-1">
                <a href="tel:+201004084914" className="block group-hover:text-purple-400 transition-colors duration-300">
                  <p className="text-gray-300 text-sm">+20 100 408 4914</p>
                </a>
                <a href="tel:+201559553925" className="block group-hover:text-purple-400 transition-colors duration-300">
                  <p className="text-gray-300 text-sm">+20 155 955 3925</p>
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 md:col-span-2 lg:col-span-1 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">Location</h3>
              <p className="text-gray-300 text-sm group-hover:text-pink-400 transition-colors duration-300">Cairo, Egypt</p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="mailto:Ahmedgalalui@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
