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
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
        Blog
      </h1>
      <p className="mb-12 text-slate-500">
        Thoughts, essays, and notes on software, building, and life.
      </p>

      {posts.length === 0 ? (
        <p className="text-slate-400">No posts yet. Check back soon.</p>
      ) : (
        <div className="divide-y divide-slate-100">
          {posts.map((post) => (
            <article key={post.slug} className="py-8">
              <time className="mb-2 block text-xs font-medium uppercase tracking-widest text-slate-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <h2 className="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-600">
                  {post.title}
                </h2>
              </Link>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
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
