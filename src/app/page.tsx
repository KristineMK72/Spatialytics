import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/lib/site";
import { projects } from "@/content/projects";
import WowDemo from "@/components/WowDemo";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      <Container className="pt-10">
        <FadeIn>
          <div className="glass rounded-[2.25rem] p-8 md:p-14 overflow-hidden relative">
            {/* glow blobs */}
            <div className="absolute inset-0 pointer-events-none opacity-90">
              <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
              <div className="absolute top-10 -right-20 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl" />
              <div className="absolute -bottom-28 left-1/3 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
            </div>

            <div className="relative">
              <div className="kicker">Spatial analytics · Web GIS · Storytelling</div>

              <h1 className="h1 mt-4">
                Beautiful maps.
                <br />
                Brutally clear insights.
              </h1>

              <p className="p mt-6 max-w-2xl">
                I turn messy geospatial data into interactive experiences people actually *use* —
                dashboards, story maps, and automations that make patterns obvious and decisions faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/projects">View case studies</Button>
                <Button href="/services" variant="ghost">
                  What I build
                </Button>
                <Button href="/contact" variant="ghost">
                  Get a quote
                </Button>
              </div>

              {/* Proof strip */}
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  { title: "Modern Web GIS", desc: "Next.js + Leaflet patterns that feel premium, not portal-y." },
                  { title: "Storytelling UX", desc: "Narratives + layers + guided exploration without overwhelming users." },
                  { title: "Automation & Pipelines", desc: "Fresh data, scheduled updates, reproducible workflows." },
                ].map((x) => (
                  <Card key={x.title} className="p-5">
                    <div className="font-semibold">{x.title}</div>
                    <p className="p mt-2 text-sm">{x.desc}</p>
                  </Card>
                ))}
              </div>

              {/* WOW DEMO */}
              <div className="mt-10">
                <WowDemo />
              </div>

              <div className="mt-6 text-xs text-white/55">
                {site.name} · Built to ship quickly, iterate safely, and look good doing it.
              </div>
            </div>
          </div>
        </FadeIn>

        <Section>
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="kicker">Featured work</div>
                <h2 className="h2 mt-2">Case studies with real outcomes</h2>
                <p className="p mt-2 max-w-2xl">
                  Each project includes the problem, approach, stack, and what changed because of it.
                </p>
              </div>
              <Button href="/projects" variant="ghost">
                View all
              </Button>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
              <FadeIn key={p.slug}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">Let’s build something sharp</div>
              <h2 className="h2 mt-2">Want your data to look like a product?</h2>
              <p className="p mt-3 max-w-2xl">
                If you can define the audience and the decision you want them to make, I can build the
                interactive system that gets them there.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Button href="/contact">Contact</Button>
                <Button href="/services" variant="ghost">
                  See services
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Section>
      </Container>
    </main>
  );
}
