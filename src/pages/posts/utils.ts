import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostDataProps {
  isFeatured?: boolean;
  date: Date;
  content: string;
  slug: string;
}

const postsDirectory = path.join(process.cwd(), "src/posts");

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier: string): PostDataProps => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    ...data,
    slug: postSlug,
    content,
    date: data?.date
  };
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = () =>
  getAllPosts().filter((post) => post.isFeatured);
