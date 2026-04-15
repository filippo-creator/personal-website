import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Filippo Guastella`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="px-8 py-20 md:px-16">
      <Link
        href="/blog"
        className="mb-12 inline-flex items-center gap-1 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)] hover:text-[#f0f0fa]"
      >
        ← Back to Blog
      </Link>

      <article className="max-w-2xl">
        <header className="mb-12">
          <time className="mb-4 block font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="font-din text-4xl font-bold tracking-aerospace text-[#f0f0fa]">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:font-din prose-headings:tracking-aerospace prose-headings:font-bold prose-a:text-[#f0f0fa] prose-p:text-[rgba(240,240,250,0.65)] prose-p:font-din prose-li:text-[rgba(240,240,250,0.65)] prose-li:font-din">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
