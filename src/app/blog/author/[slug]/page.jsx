import { notFound } from 'next/navigation';
import { authorsData } from '../../../../data/authorsData';
import { blogPosts } from '../../../../data/blogData';
import AuthorPageClient from '../../../../components/blog/AuthorPageClient';

export async function generateStaticParams() {
  return Object.keys(authorsData).map((slug) => ({ slug }));
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = authorsData[slug];

  if (!author) notFound();

  const posts = blogPosts.filter((p) => p.authorSlug === slug);

  return <AuthorPageClient author={author} posts={posts} />;
}
