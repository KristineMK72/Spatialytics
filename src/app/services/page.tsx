import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Web GIS & Interactive Maps",
    points: [
      "Leaflet/MapLibre experiences with modern UI",
      "Layer toggles, filters, time sliders, story panels",
      "Hosting + performance tuning + analytics",
    ],
  },
  {
    title: "Dashboards & Data Storytelling",
    points: [
      "Decision-first design (less noise, more signal)",
      "Charts + map views that work together",
      "Shareable outputs for stakeholders",
    ],
  },
  {
    title: "Geospatial Automation",
    points: [
      "ETL pipelines, scheduled updates, API integrations",
      "Data cleaning + reproducible scripts",
      "Versioned outputs and documentation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Container className="pt-10">
        <FadeIn>
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="kicker">Services</div>
            <h1 className="h1 mt-3">Modern GIS work, shipped</h1>
            <p className="p mt-4 max-w-3xl">
              I combine geospatial expertise with modern web development so your maps and analytics feel
              intuitive, fast, and useful — not like a clunky portal.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/projects">See examples</Button>
              <Button href="/contact" variant="ghost">Request a quote</Button>
            </div>
          </div>
        </FadeIn>

        <Section>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {services.map((s) => (
              <FadeIn key={s.title}>
                <Card>
                  <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
                  <ul className="mt-4 space-y-2 text-white/75 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-white/40">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">A simple process</div>
              <h2 className="h2 mt-2">Scoping that doesn’t drag</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  { t: "1) Define the decision", d: "Who’s using it, what should they do after?" },
                  { t: "2) Prototype quickly", d: "Wireframe + data model + UI pattern selection." },
                  { t: "3) Ship + iterate", d: "Deploy, measure usage, improve with real feedback." },
                ].map((x) => (
                  <Card key={x.t} className="p-5">
                    <div className="font-semibold">{x.t}</div>
                    <p className="p mt-2 text-sm">{x.d}</p>
                  </Card>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contact">Let’s talk</Button>
              </div>
            </Card>
          </FadeIn>
        </Section>
      </Container>
    </main>
  );
}
