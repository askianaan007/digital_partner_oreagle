"use client";

import Image from "next/image";
import { Info, Code2, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PROJECTS = [
  {
    number: "01",
    name: "Course Management Platform",
    image: "/project-german.webp",
    problem: "Course discovery and enrollment were fragmented across the education platform.",
    built: "A centralized platform for course discovery, recommendations, payments, and separate experiences for learners, institutes, and administrators.",
    outcome: "Improved course discovery and enrollment workflows.",
    tech: "Next.js · Elasticsearch · Stripe",
  },
  {
    number: "02",
    name: "University Boarding Booking System",
    image: "/bodimate.png",
    problem: "Students lacked a reliable way to discover and book suitable accommodation near campus.",
    built: "A booking platform with availability, secure payments, virtual room tours, and property-owner approval workflows.",
    outcome: "Streamlined accommodation discovery and booking.",
    tech: "React · React Native",
  },
  {
    number: "03",
    name: "Vehicle Marketplace Platform",
    image: "/vehicle.png",
    problem: "Vehicle buying and selling involved fragmented processes and limited trust.",
    built: "A marketplace with advanced search, filtering, AI-assisted support, expert consultation, and an auction pathway for unsold inventory.",
    outcome: "Improved marketplace operations and a more structured buying and selling experience.",
    tech: "Full-stack web platform",
  },
];

export function SelectedExperience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Selected Digital Experience
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built by a team that knows how to build serious digital systems.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
            Before OREAGLE, our team built and shipped platforms across education, housing, marketplaces, and other digital products. That experience now supports the systems we build for customer acquisition, conversion, tracking, and growth.
          </p>
        </Reveal>

        {/* 3 Project Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface/60 backdrop-blur-md transition-all duration-300 hover:border-accent/40">
                <div className="relative aspect-[16/9] w-full bg-black/40 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1 backdrop-blur-md">
                    <span className="text-xs font-bold text-accent">{project.number}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {project.name}
                    </h3>

                    <dl className="mt-4 space-y-3.5 text-xs sm:text-sm">
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                          Problem
                        </dt>
                        <dd className="mt-1 leading-relaxed text-zinc-300">
                          {project.problem}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                          Built
                        </dt>
                        <dd className="mt-1 leading-relaxed text-zinc-300">
                          {project.built}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                          Outcome
                        </dt>
                        <dd className="mt-1 font-medium leading-relaxed text-accent">
                          {project.outcome}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400">
                      {project.tech}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Technical Experience Disclaimer Callout Box */}
        <Reveal delay={0.25} className="mt-10">
          <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-black/50 p-5 backdrop-blur-md">
            <Info className="size-5 shrink-0 text-accent mt-0.5" />
            <p className="text-xs leading-relaxed text-zinc-300">
              <span className="font-semibold text-accent">Technical Experience Disclaimer:</span> These projects demonstrate our team&apos;s previous technical experience. They are not presented as OREAGLE customer-acquisition case studies. OREAGLE-specific performance results will be published as verified pilots are completed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
