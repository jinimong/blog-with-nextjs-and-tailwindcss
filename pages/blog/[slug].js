import { format, parseISO } from 'date-fns';
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
        <div className="border-b-2 border-gray-200 mb-4">
          <h2 className="text-4xl mb-4">{title}</h2>
          <div className="text-gray-600 text-md">
            {format(parseISO(date), 'MMMM do, uuu')}
          </div>
        </div>
        <div className="">{content}</div>
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
