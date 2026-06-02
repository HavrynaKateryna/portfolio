"use client";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="
          group cursor-pointer
          rounded-3xl overflow-hidden

          border border-white/10
          bg-white/5
          backdrop-blur-xl

          transition-all duration-300
          hover:-translate-y-2
          hover:border-emerald-500/30
          hover:bg-white/[0.08]
        "
      >

        {/* IMAGE */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              scale-105
              transition duration-700
              group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
            {title}
          </h3>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-4">

          <p className="text-sm text-white/60">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-5 pt-2">

            {github && (
              <a
                href={github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-white/60 hover:text-emerald-400"
              >
                GitHub →
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-white/60 hover:text-white"
              >
                Live →
              </a>
            )}

          </div>

        </div>
      </div>

      {/* LIGHTBOX / MODAL */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/80
            backdrop-blur-md

            flex items-center justify-center
            p-6
          "
          onClick={() => setOpen(false)}
        >

          <div className="relative max-w-5xl w-full">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute -top-10 right-0
                text-white/70 hover:text-white
                text-sm
              "
            >
              Close ✕
            </button>

            {/* IMAGE */}
            <img
              src={image}
              alt={title}
              className="
                w-full max-h-[80vh]
                object-contain
                rounded-2xl
                shadow-2xl
              "
            />
          </div>

        </div>
      )}
    </>
  );
}