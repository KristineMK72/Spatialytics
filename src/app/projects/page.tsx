"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import TagChip from "@/components/TagChip";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const [tag, setTag] = useState("All");

  const filtered = useMemo(() => {
    if (tag === "All") return projects;
    return projects.filter((p) => p.tags.includes(tag));
  }, [tag]);

  return (
    <main>
      <Container className="pt-10">
        <FadeIn>
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="kicker">Portfolio</div>
            <h1 className="h1 mt-3">Projects with real outcomes</h1>
            <p className="p mt-4 max-w-3xl">
              A curated set of interactive maps, dashboards, and data storytelling builds.
              Each case study includes approach, stack, and what changed because of it.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {allTags.map((t) => (
                <TagChip key={t} label={t} active={t === tag} onClick={() => setTag(t)} />
              ))}
            </div>
          </div>
        </FadeIn>

        <Section>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <FadeIn key={p.slug}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
