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
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-4 text-[48px] font-bold leading-none tracking-[-1.5px] text-[rgba(0,0,0,0.95)]">
          Blog
        </h1>
        <p className="mb-16 max-w-md text-[20px] font-semibold leading-[1.40] tracking-[-0.125px] text-[#615d59]">
          Thoughts, essays, and notes on software, building, and life.
        </p>

        {posts.length === 0 ? (
          <p className="text-[16px] text-[#615d59]">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[12px] bg-white p-6 shadow-notion-card transition-shadow hover:shadow-notion-deep"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <time className="mb-3 block text-[12px] font-medium tracking-[0.125px] text-[#a39e98]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="mb-2 text-[22px] font-bold leading-[1.27] tracking-[-0.25px] text-[rgba(0,0,0,0.95)] transition-colors group-hover:text-[#0075de]">
                    {post.title}
                  </h2>
                </Link>
                <p className="mb-5 text-[16px] leading-[1.5] text-[#615d59]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[15px] font-semibold text-[#0075de] transition-colors hover:text-[#005bab]"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
