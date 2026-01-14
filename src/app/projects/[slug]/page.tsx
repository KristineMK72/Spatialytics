import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  // TODO: Replace with your real slugs.
  // Example:
  // import { projects } from "@/lib/projects";
  // return projects.map((p) => ({ slug: p.slug }));
  return [];
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">{slug}</h1>
      <p className="mt-3 text-white/70">
        This page is now Next.js 15 compatible. Replace this placeholder with your
        real project rendering logic.
      </p>
    </main>
  );
}
