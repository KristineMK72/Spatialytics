import Container from "@/components/Container";
import Card from "@/components/Card";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getBlogSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const { data } = post;

  return {
    title: String(data.title ?? slug),
    description: data.excerpt ? String(data.excerpt) : undefined,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const { data, content } = post;

  return (
    <main>
      <Container className="pt-10">
        <Card className="p-8 md:p-12">
          {!!data.date && <div className="kicker">{String(data.date)}</div>}

          <h1 className="h1 mt-3">{String(data.title ?? slug)}</h1>

          {!!data.excerpt && (
            <p className="p mt-4">{String(data.excerpt)}</p>
          )}

          <div className="prose prose-invert max-w-none mt-10">
            <MDXRemote source={content} />
          </div>
        </Card>
      </Container>
    </main>
  );
}
