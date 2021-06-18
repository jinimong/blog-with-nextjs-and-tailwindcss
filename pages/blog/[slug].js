import Head from 'next/head';
import { blogPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{content}</p>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = blogPosts.find((post) => post.slug === slug);
  return {
    props: { ...post },
  };
}
