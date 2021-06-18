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

      <main>
        <h1>Welcome to My Blog</h1>
      </main>

      <div>
        {blogPosts.map(({ slug, title, date, content }) => (
          <div key={slug}>
            <div>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </div>
            <div>{date}</div>
            <div>{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
