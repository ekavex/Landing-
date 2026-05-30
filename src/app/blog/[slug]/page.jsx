import { readFile } from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { blogPosts } from '../../../data/blogData';
import { authorsData } from '../../../data/authorsData';
import MDXComponents from '../../../components/blog/MDXComponents';
import PostHero from '../../../components/blog/PostHero';
import ReadingProgress from '../../../components/blog/ReadingProgress';
import TableOfContents from '../../../components/blog/TableOfContents';
import AuthorBio from '../../../components/blog/AuthorBio';
import RelatedPosts from '../../../components/blog/RelatedPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const author = authorsData[post.authorSlug];
  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);

  const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);
  let source;
  try {
    source = await readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Person',
      name: author?.name ?? post.author,
    },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Ekavex Digital',
      url: 'https://ekavex-demo.vercel.app',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ekavex-demo.vercel.app/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <ReadingProgress />
      <PostHero post={post} author={author} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Article column */}
          <div className="lg:col-span-7">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-10">
              <TableOfContents toc={post.toc} mobile />
            </div>

            <article className="max-w-[68ch]">
              <MDXRemote source={source} components={MDXComponents} />
            </article>

            <AuthorBio author={author} />
          </div>

          {/* Sticky sidebar TOC — desktop only */}
          <aside className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <TableOfContents toc={post.toc} />
          </aside>
        </div>

        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
}
