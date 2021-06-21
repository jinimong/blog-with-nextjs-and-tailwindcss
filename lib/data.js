import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(contentDirectory);
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {
      data: { title, date },
      content,
    } = matter(fileContents);
    return {
      slug,
      title,
      date: date.toISOString(),
      content,
    };
  });
  return allPosts;
}
