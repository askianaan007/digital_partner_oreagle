import Image from "next/image";
import { Reveal } from "@/components/reveal";

const PROJECTS = [
  {
    name: "Course Management Platform",
    image: "/project-german.webp",
    problem:
      "Fragmented course discovery and enrollment across an education platform's catalog.",
    solution:
      "A course management platform with search-powered discovery, personalized recommendations, integrated payments, and separate dashboards for learners, institutes, and admins.",
    outcome:
      "Enrollments up 30% in the first quarter, course discovery time cut by 50%.",
    tech: "Next.js, ElasticSearch, Stripe",
  },
  {
    name: "University Boarding Booking System",
    image: "/bodimate.png",
    problem:
      "Students had no reliable way to find and book verified accommodation near campus.",
    solution:
      "A booking platform with real-time availability, secure payments, virtual room tours, and approval workflows for property owners.",
    outcome: "Search efficiency up 40%, property occupancy up 25%.",
    tech: "React, React Native",
  },
  {
    name: "Vehicles Marketplace Agent System",
    image: "/vehicle.png",
    problem:
      "A fragmented, low-trust process for buying and selling vehicles in a regional market.",
    solution:
      "A marketplace with advanced search and filtering, AI-assisted support, expert consultation, and an auction path for unsold inventory.",
    outcome: "Improved operational efficiency and expanded market presence.",
    tech: "Full-stack web platform",
  },
];

export function SelectedExperience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Selected digital experience
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical execution, proven elsewhere.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            Before AtomyCoders focused on cleaning-business growth, the team
            built and shipped platforms across education, housing, and
            marketplace software. Same team, same discipline — now applied to
            customer acquisition for local service businesses.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60">
                <div className="relative aspect-[16/9] w-full bg-background/40">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-medium">
                    {project.name}
                  </h3>

                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-[11px] uppercase tracking-wide text-muted">
                        Problem
                      </dt>
                      <dd className="mt-1 leading-relaxed text-foreground/80">
                        {project.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-wide text-muted">
                        Solution
                      </dt>
                      <dd className="mt-1 leading-relaxed text-foreground/80">
                        {project.solution}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-wide text-muted">
                        Outcome
                      </dt>
                      <dd className="mt-1 leading-relaxed text-accent">
                        {project.outcome}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-5 border-t border-border pt-4 text-xs text-muted">
                    {project.tech}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
