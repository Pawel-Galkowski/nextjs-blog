import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./PostHeader";
import { useMemo } from "react";
import { Box, SxProps, Theme } from "@mui/material";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ post }: { post: any }) => {
  const { slug, image, title, content } = post;
  const imagePath = useMemo(
    () => `/images/posts/${slug}/${image}`,
    [slug, image]
  );

  const customRenderers = {
    paragraph(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <Box sx={imageStyles}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </Box>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(alto: any) {
      console.log(alto);
      const { className, children } = alto;
      return (
        <SyntaxHighlighter style={dark} language={className.split("-")[1]}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <Box sx={contentStyles}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </Box>
  );
};

export default PostContent;

const contentStyles: SxProps<Theme> = (theme) => ({
  width: "95%",
  maxWidth: "60rem",
  margin: "var(--size-8) auto",
  fontSize: "var(--size-5)",
  lineHeight: "var(--size-8)",
  backgroundColor: "var(--color-grey-100)",
  borderRadius: "6px",
  padding: "var(--size-4)",
  "& p": {
    color: "var(--color-grey-800)",
  },
  [theme.breakpoints.up("md")]: {
    padding: "var(--size-8)",
  },
});

const imageStyles = {
  margin: "var(--size-4) auto",
  width: "100%",
  maxWidth: "600px",
};
