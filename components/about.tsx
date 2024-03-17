"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing a Diploma of Property Serives,{" "}
        <span className="font-medium"></span> I decided to take a 180 and learn programming, I studied Computer Science through FreeCodeCamp.{" "}
        <span className="font-medium"></span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span>love </span> 
        the design and development aspect of coding. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js
        </span>
        . I am also familiar with JavaScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy listening to music
        on Spotify, watching YouTube videos and spending time down at the beach. I also enjoy{" "}
        <span className="font-medium">learning new stuff</span>. I've done some writing too{" "}
        <span className="font-medium">mostly my philosophy on life</span>.
      </p>
    </motion.section>
  );
}
