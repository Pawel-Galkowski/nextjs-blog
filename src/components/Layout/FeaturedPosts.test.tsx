/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import FeaturedPosts, { featuredPostsTestID } from "./FeaturedPosts";
import { PostDataProps } from "@/pages/posts/utils";

describe("Featured posts section", () => {
  const mockedData = [
    {
      isFeatured: true,
      date: new Date(Date.now()),
      content: "Example content",
      slug: "example slug",
    },
  ];
  it("should render component", () => {
    render(<FeaturedPosts posts={mockedData} />);
    expect(screen.getByTestId(featuredPostsTestID)).toBeInTheDocument();
  });

  it("should not render component when featured posts not found", () => {
    render(<FeaturedPosts posts={undefined} />);
    expect(screen.queryByTestId(featuredPostsTestID)).not.toBeInTheDocument();
  });
});
