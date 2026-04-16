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
      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-1 text-[15px] font-medium text-[#615d59] transition-colors hover:text-[rgba(0,0,0,0.95)]"
        >
          ← Back to Blog
        </Link>

        <article className="max-w-2xl">
          <header className="mb-10">
            <time className="mb-3 block text-[12px] font-medium tracking-[0.125px] text-[#a39e98]">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-sm sm:prose-base max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[rgba(0,0,0,0.95)] prose-a:text-[#0075de] prose-a:no-underline hover:prose-a:underline prose-p:text-[#615d59] prose-p:font-sans prose-li:text-[#615d59] prose-li:font-sans">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}
