import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { projects } from "@/content/projects";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main>
        <Container className="pt-10">
          <Card>
            <h1 className="text-2xl font-bold">Project not found</h1>
            <p className="p mt-2">That case study doesn’t exist yet.</p>
            <div className="mt-6">
              <Button href="/projects" variant="ghost">Back to projects</Button>
            </div>
          </Card>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container className="pt-10">
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <div className="kicker">{project.year} · {project.role}</div>
          <h1 className="h1 mt-3">{project.title}</h1>
          <p className="p mt-4 max-w-3xl">{project.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-2xl text-xs border border-white/10 text-white/70">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center justify-center px-5 py-3 rounded-2xl glass border-white/15 text-sm font-semibold hover:bg-white/10 transition">
                  View live
                </span>
              </a>
            )}
            {project.links?.repo && (
              <a href={project.links.repo} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center justify-center px-5 py-3 rounded-2xl border border-white/10 bg-white/0 hover:bg-white/5 text-sm font-semibold text-white/80 hover:text-white transition">
                  View code
                </span>
              </a>
            )}
          </div>
        </div>

        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <div className="font-semibold">Stack</div>
              <ul className="mt-3 space-y-2 text-white/75 text-sm">
                {project.stack.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-white/40">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 font-semibold">Highlights</div>
              <ul className="mt-3 space-y-2 text-white/75 text-sm">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-white/40">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="md:col-span-2">
              <div className="font-semibold">Problem</div>
              <p className="p mt-2">{project.narrative.problem}</p>

              <div className="mt-6 font-semibold">Approach</div>
              <ul className="mt-3 space-y-2 text-white/75">
                {project.narrative.approach.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-white/40">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 font-semibold">Outcome</div>
              <ul className="mt-3 space-y-2 text-white/75">
                {project.narrative.outcome.map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="text-white/40">•</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/projects" variant="ghost">Back to projects</Button>
              </div>
            </Card>
          </div>
        </Section>
      </Container>
    </main>
  );
}
