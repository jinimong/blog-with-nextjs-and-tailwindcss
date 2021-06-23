import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllPosts } from '../../lib/data';

function Blog({ title, date, content }) {
  console.log(title, date, content);
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
        <div>{content}</div>
      </main>
    </div>
  );
}

export default function BlogPage({ source }) {
  return (
    <div className="prose mx-auto">
      <MDXRemote {...source} components={{ Blog }} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getAllPosts().find((post) => post.slug === slug);
  const mdxSource = await serialize(post.content);
  return {
    props: { ...post, source: mdxSource },
  };
}
