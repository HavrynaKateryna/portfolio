"use client";

import { motion } from "framer-motion";
type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  stack,
  github,
  live,
}: Project) {
  return (
    <div className="
      rounded-xl overflow-hidden
      border border-white/10
      bg-white/5
      hover:border-white/30
      transition
    ">

      {/* IMAGE */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            hover:scale-105
            transition duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <p className="text-sm text-gray-400">
          {description}
        </p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="
                text-xs px-2 py-1 rounded-full
                border border-white/10
                text-gray-300
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 text-sm pt-2">

          {github && (
            <a
              href={github}
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              className="text-white hover:underline"
            >
              Live
            </a>
          )}

        </div>

      </div>
    </div>
  );
}