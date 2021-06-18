import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../lib/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {blogPosts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-black-400 shadow rounded-lg p-4 hover:shadow-lg transition duration-100 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold text-2xl">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs mt-1">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
    </div>
  );
}
