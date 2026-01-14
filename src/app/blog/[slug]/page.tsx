import Container from "@/components/Container";
import Card from "@/components/Card";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getBlogSlugs } from "@/lib/mdx";

export function generateStaticParams() {
  return getBlogSlugs().map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data, content } = getPostBySlug(params.slug);

  return (
    <main>
      <Container className="pt-10">
        <Card className="p-8 md:p-12">
          <div className="kicker">{String(data.date ?? "")}</div>
          <h1 className="h1 mt-3">{String(data.title ?? params.slug)}</h1>
          <p className="p mt-4">{String(data.excerpt ?? "")}</p>

          <div className="prose prose-invert max-w-none mt-10">
            <MDXRemote source={content} />
          </div>
        </Card>
      </Container>
    </main>
  );
}
