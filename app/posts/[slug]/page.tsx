export const revalidate = 60;

import { sanityClient } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

type Post = {
  title: string;
  mainImage?: { asset?: { url?: string } };
  body: any;
};

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type=="post" && slug.current==$slug][0]{
    title, mainImage{asset->{url}}, body
  }`;
  return sanityClient.fetch(query, { slug });
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return (
    <article className="container">
      <h1>{post.title}</h1>
      {post.mainImage?.asset?.url && (
        <div className="hero">
          <img src={post.mainImage.asset.url} alt={post.title} />
        </div>
      )}
      <PortableText value={post.body} />
    </article>
  );
}

