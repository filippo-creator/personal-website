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
    <div className="px-8 py-16 md:px-16">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1 font-sans text-sm text-[#9b9a97] hover:text-[#37352f]"
      >
        ← Back to Blog
      </Link>

      <article className="max-w-2xl">
        <header className="mb-10">
          <time className="mb-3 block font-sans text-xs text-[#9b9a97]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="font-sans text-3xl font-bold text-[#37352f]">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-sm sm:prose-base max-w-none prose-headings:font-sans prose-headings:font-semibold prose-headings:text-[#37352f] prose-a:text-[#37352f] prose-p:text-[#9b9a97] prose-p:font-sans prose-li:text-[#9b9a97] prose-li:font-sans">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
