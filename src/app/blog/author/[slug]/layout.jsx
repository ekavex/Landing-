import { authorsData } from '../../../../data/authorsData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = authorsData[slug];

  if (!author) return { title: 'Author Not Found' };

  return {
    title: `${author.name} - Author at Ekavex Digital`,
    description: author.bio,
  };
}

export default function AuthorLayout({ children }) {
  return children;
}
