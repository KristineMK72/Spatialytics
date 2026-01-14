import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/lib/site";
import { projects } from "@/content/projects";

export default function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <main>
      <Container className="pt-10">
        <FadeIn>
          <div className="glass rounded-[2.25rem] p-8 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="absolute top-10 -right-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-pink-500/15 blur-3xl" />
            </div>

            <div className="relative">
              <div className="kicker">Spatial analytics · web GIS · storytelling</div>
              <h1 className="h1 mt-4">
                Maps that feel modern.
                <br />
                Data that tells the truth.
              </h1>
              <p className="p mt-6 max-w-2xl">
                {site.description} From interactive Leaflet experiences to automated pipelines and
                decision dashboards — I build work people actually use.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/projects">See projects</Button>
                <Button href="/services" variant="ghost">Services</Button>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  { title: "Web Maps", desc: "Leaflet/Next.js experiences with crisp UX and real performance." },
                  { title: "Dashboards", desc: "Decision-friendly views that make patterns obvious." },
                  { title: "Automation", desc: "Pipelines that keep data fresh without manual pain." },
                ].map((x) => (
                  <Card key={x.title} className="p-5">
                    <div className="font-semibold">{x.title}</div>
                    <p className="p mt-2 text-sm">{x.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <Section>
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="kicker">Featured</div>
                <h2 className="h2 mt-2">A couple builds I’m proud of</h2>
              </div>
              <Button href="/projects" variant="ghost">View all</Button>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
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
              <div className="kicker">Let’s collaborate</div>
              <h2 className="h2 mt-2">Want a map experience that feels premium?</h2>
              <p className="p mt-3 max-w-2xl">
                If you can describe the audience and the decision you want them to make, I can build the
                interactive system that gets you there.
              </p>
              <div className="mt-6">
                <Button href="/contact">Contact</Button>
              </div>
            </Card>
          </FadeIn>
        </Section>
      </Container>
    </main>
  );
}
