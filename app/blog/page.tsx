import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Filippo Guastella",
  description: "Thoughts, essays, and notes on software, building, and life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-8 py-20 md:px-16">
      <p className="mb-4 font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
        Blog
      </p>
      <p className="mb-16 max-w-md font-din text-sm text-[rgba(240,240,250,0.65)]">
        Thoughts, essays, and notes on software, building, and life.
      </p>

      {posts.length === 0 ? (
        <p className="font-din text-sm text-[rgba(240,240,250,0.65)]">No posts yet. Check back soon.</p>
      ) : (
        <div className="divide-y divide-[rgba(240,240,250,0.08)]">
          {posts.map((post) => (
            <article key={post.slug} className="py-10">
              <time className="mb-3 block font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="mb-3 font-din text-xl font-bold tracking-aerospace text-[#f0f0fa] transition-colors group-hover:text-[rgba(240,240,250,0.75)]">
                  {post.title}
                </h2>
              </Link>
              <p className="mb-5 font-din text-sm leading-relaxed text-[rgba(240,240,250,0.65)]">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="font-din text-xs tracking-mission text-[rgba(240,240,250,0.65)] hover:text-[#f0f0fa]"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
