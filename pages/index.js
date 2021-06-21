import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {posts.map((post) => (
          <BlogListItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

function BlogListItem({ slug, title, date }) {
  return (
    <div className="border border-black-400 shadow rounded-lg p-4 hover:shadow-lg transition duration-100 ease-in">
      <div>
        <Link href={`/posts/${slug}`}>
          <a className="font-bold text-2xl">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs mt-1">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
    </div>
  );
}
