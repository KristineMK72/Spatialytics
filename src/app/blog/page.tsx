import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <Container className="pt-10">
        <FadeIn>
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="kicker">Blog</div>
            <h1 className="h1 mt-3">Build notes & GIS storytelling</h1>
            <p className="p mt-4 max-w-3xl">
              Short posts on how I build interactive maps, dashboards, and data products — with practical
              takeaways and real examples.
            </p>
          </div>
        </FadeIn>

        <Section>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <FadeIn key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="block">
                  <Card className="hover:bg-white/10 transition">
                    <div className="kicker">{p.date}</div>
                    <h2 className="text-xl font-bold tracking-tight mt-2">{p.title}</h2>
                    <p className="p mt-2">{p.excerpt}</p>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
