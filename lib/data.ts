import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/crypto-investor.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FreeCodeCamp",
    location: "Perth, Aus",
    description:
      "I studied Computer Science online via, focusing on responsive web design and development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Perth, Aus",
    description:
      "I started and worked on cryptoinvestor.tech building the web application with HTML, CSS and JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Cryptoinvestor.tech",
    description:
      "I build a crypto news web application that showcases different short form articles on everything crypto.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
