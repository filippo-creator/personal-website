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
    <div className="px-8 py-16 md:px-16">
      <h2 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-[#9b9a97]">
        Blog
      </h2>
      <p className="mb-12 max-w-md font-sans text-sm text-[#9b9a97]">
        Thoughts, essays, and notes on software, building, and life.
      </p>

      {posts.length === 0 ? (
        <p className="font-sans text-sm text-[#9b9a97]">No posts yet. Check back soon.</p>
      ) : (
        <div className="divide-y divide-[#e9e8e4]">
          {posts.map((post) => (
            <article key={post.slug} className="py-8">
              <time className="mb-2 block font-sans text-xs text-[#9b9a97]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="mb-2 font-sans text-lg font-semibold text-[#37352f] transition-colors group-hover:text-[#9b9a97]">
                  {post.title}
                </h2>
              </Link>
              <p className="mb-4 font-sans text-sm leading-relaxed text-[#9b9a97]">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="font-sans text-sm text-[#9b9a97] hover:text-[#37352f]"
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
