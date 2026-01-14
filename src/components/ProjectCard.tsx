import Link from "next/link";
import Card from "@/components/Card";
import { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="hover:bg-white/10 transition">
        <div className="kicker">{project.year} · {project.role}</div>
        <h3 className="mt-2 text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="p mt-2">{project.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-2xl text-xs border border-white/10 text-white/70">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 text-sm text-white/70">
          <span className="text-white/85 font-semibold">Stack:</span>{" "}
          {project.stack.slice(0, 4).join(" · ")}
        </div>
      </Card>
    </Link>
  );
}
