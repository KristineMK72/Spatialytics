import Container from "@/components/Container";
import Card from "@/components/Card";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getBlogSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  // If your getBlogSlugs() returns ["post.mdx", ...], keep the replace.
  // If it already returns ["post", ...], you can remove the replace.
  return getBlogSlugs().map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post: ReturnType<typeof getPostBySlug> | null = null;

  try {
    post = getPostBySlug(slug);
  } catch {
    post = null;
  }

  if (!post) return notFound();

  const { data, content } = post;

  return (
    <main>
      <Container className="pt-10">
        <Card className="p-8 md:p-12">
          <div className="kicker">{String(data.date ?? "")}</div>
          <h1 className="h1 mt-3">{String(data.title ?? slug)}</h1>
          <p className="p mt-4">{String(data.excerpt ?? "")}</p>

          <div className="prose prose-invert max-w-none mt-10">
            <MDXRemote source={content} />
          </div>
        </Card>
      </Container>
    </main>
  );
}
