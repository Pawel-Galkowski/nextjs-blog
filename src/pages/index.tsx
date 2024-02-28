import Head from "next/head";

import { HeroSection, PostsSection } from "@/components/sections";
import { getFeaturedPosts } from "@/pages/posts/utils";

const HomePage = ({ posts }: any) => (
  <>
    <Head>
      <title>Pawel' Blog</title>
      <meta
        name="description"
        content="I post about programming and web development."
      />
    </Head>
    <HeroSection />
    <PostsSection posts={posts} />
  </>
);

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
