import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
};

export function getBlogSlugs() {
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): BlogPost[] {
  const files = getBlogSlugs();
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const full = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(full);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
        tags: (data.tags as string[] | undefined) ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const full = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(full);
  return { data, content };
}
