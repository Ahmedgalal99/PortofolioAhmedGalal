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
} from "lucide-react";
import Link from "next/link";

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
    { name: "React", icon: Code2, color: "text-blue-400" },
    { name: "Next.js", icon: Globe, color: "text-gray-300" },
    { name: "TypeScript", icon: Code2, color: "text-blue-500" },
    { name: "JavaScript", icon: Zap, color: "text-yellow-400" },
    { name: "Python", icon: Code2, color: "text-yellow-500" },
    { name: "Django", icon: Server, color: "text-green-600" },
    { name: "Node.js", icon: Server, color: "text-green-400" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "WordPress", icon: Globe, color: "text-blue-600" },
    { name: "Elementor", icon: Palette, color: "text-purple-500" },
    { name: "WPBakery", icon: Code2, color: "text-cyan-400" },
    { name: "GraphQL", icon: Database, color: "text-pink-500" },
    { name: "Git", icon: GitBranch, color: "text-orange-400" },
    { name: "CSS/Tailwind", icon: Palette, color: "text-pink-400" },
    { name: "Full Stack", icon: Server, color: "text-indigo-400" },
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
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-[#323647] flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="text-white">Ahmed Galal</span>
                </h1>
                <div className="flex items-center mt-4">
                  <span className="text-orange-400 text-2xl md:text-3xl font-bold">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                I’m a results-driven full-stack developer with a passion for
                turning ideas into powerful web applications. With expertise in
                modern JavaScript frameworks and a strong eye for design, I
                craft solutions that are fast, scalable, and user-focused.
                Whether it’s building from scratch or optimizing existing
                projects, I deliver code that makes an impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/images/AhmedGalalCv.pdf"
                  download="AhmedGalalCV.pdf"
                  className="cursor-pointer"
                >
                  <Button
                    className="bg-orange-400 cursor-pointer  hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </a>
                <a
                  href="mailto:Ahmedgalalui@gmail.com"
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    className="border-orange-400 cursor-pointer text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Let's Connect
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Orange glow background */}
                <div className="absolute inset-0 bg-orange-400 rounded-full blur-3xl opacity-30 scale-110"></div>

                {/* Profile image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl">
                  <Image
                    src="/Images/ahmedgalalImh.png"
                    alt="Ahmed Galal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#242734] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-8">
              🚀 Skills & Expertise
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-16">
              I’m passionate about building modern, scalable, and user-friendly
              web applications. My expertise spans both frontend and backend
              development, allowing me to deliver complete end-to-end solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="group bg-[#323647] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-600/30 cursor-pointer"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div
                        className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={48} />
                      </div>
                      <h3 className="text-white font-semibold text-sm text-center">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#323647] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-8">
              Projects
            </h2>
            <div className="text-center mt-16">
              <p className="text-sm text-gray-400">
                Note: Some project repositories are private. Please contact me
                for access to the code.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-20">
            {currentProjects.map((project: Project, index: number) => (
              <Dialog key={project.id}>
                <div
                  className={`flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Content */}
                  <div
                    className={`space-y-6 lg:order-none ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    {typeof project.description === "string" ? (
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    ) : (
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-2">
                          {project.description.title}
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          {project.description.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(
                        (tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <Button className="bg-orange-400 cursor-pointer hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                            View Live
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-gray-500 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
                          disabled
                        >
                          Live demo available upon request
                        </Button>
                      )}
                      {project.codeUrl ? (
                        <Link
                          href={project.codeUrl}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <Button
                            variant="outline"
                            className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                          >
                            View Code
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-gray-500 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
                          disabled
                        >
                          Private Repository
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div
                    className={`order-first lg:order-none ${index % 2 === 1 ? "lg:col-start-1" : ""}`
                  }>
                    <DialogTrigger asChild>
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-orange-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </DialogTrigger>
                  </div>
                </div>
                <DialogContent className="bg-[#323647] border-orange-400 text-white max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-orange-400 text-2xl">
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
                              className="object-contain rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white border-none hover:bg-black/75" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white border-none hover:bg-black/75" />
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
      <section id="contact" className="py-20 bg-[#242734]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFAF29] mb-4">
              <span className="text-[#FFAF29]">Contact</span> Me
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's discuss your next project or just say hello. I'm always open
              to new opportunities and interesting conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="text-center p-8 bg-[#323647] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600/30 cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFAF29] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
              <a href="mailto:Ahmedgalalui@gmail.com">
                <p className="text-gray-300 text-sm">Ahmedgalalui@gmail.com</p>
              </a>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-[#323647] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600/30 cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFAF29] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>

              <a href="tel:+201004084914">
                {" "}
                <p className="text-gray-300 text-sm">+20 100 408 4914</p>
              </a>
              <a href="tel:+201559553925">
                {" "}
                <p className="text-gray-300 text-sm">+20 155 955 3925</p>
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-[#323647] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600/30 md:col-span-2 lg:col-span-1 cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFAF29] to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Location
              </h3>
              <p className="text-gray-300 text-sm">Cairo, Egypt</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a href="mailto:Ahmedgalalui@gmail.com">
              {" "}
              <Button className="bg-gradient-to-r from-[#FFAF29] to-orange-500 hover:from-orange-500 hover:to-[#FFAF29] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
