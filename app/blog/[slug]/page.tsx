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
    <div className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900"
      >
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-10">
          <time className="mb-3 block text-xs font-medium uppercase tracking-widest text-slate-400">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-slate prose-sm sm:prose-base max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
