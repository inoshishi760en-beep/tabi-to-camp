export const revalidate = 60;

import Link from 'next/link';
import { sanityClient } from '@/lib/sanity.client';

type Post = {
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset?: { url?: string } };
  _createdAt: string;
};

async function getPosts(): Promise<Post[]> {
  const query = `*[_type=="post" && defined(slug.current)]
                 | order(_createdAt desc)
                 {title, slug, excerpt, mainImage{asset->{url}}, _createdAt}`;
  return sanityClient.fetch(query);
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <main className="container">
      <h1>Camp Blog</h1>
      <ul className="grid">
        {posts.map((p) => (
          <li key={p.slug.current} className="card">
            <Link href={`/posts/${p.slug.current}`}>
              {p.mainImage?.asset?.url && (
                <div className="thumb">
                  <img src={p.mainImage.asset.url} alt={p.title} />
                </div>
              )}
              <h2>{p.title}</h2>
              {p.excerpt && <p className="excerpt">{p.excerpt}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

