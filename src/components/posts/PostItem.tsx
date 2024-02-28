import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

const PostItem: React.FC<{ post: any }> = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = useMemo(() => `/images/posts/${slug}/${image}`, [slug, image])
  const linkPath = useMemo(() => `/posts/${slug}`, [slug])

  return (
    <Box sx={postStyles}>
      <Link href={linkPath}>
        <Box sx={imageStyles}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </Box>
        <Box sx={contentStyles}>
          <Typography variant="h3">{title}</Typography>
          <time>{formattedDate}</time>
          <Typography variant="body1">{excerpt}</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default PostItem;

const postStyles = {
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
  backgroundColor: 'var(--color-grey-800)',
  textAlign: 'center',
  '& a': {
    color: 'var(--color-grey-100)',
  }
}

const imageStyles = {
  width: '100%',
  maxHeight: '20rem',
  overflow: 'hidden',
  '& img': {
    objectFit: 'cover',
  }
}

const contentStyles = {
  padding: 'var(--size-4)',
  '& h3': {
    margin: 'var(--size-2) 0',
    fontSize: 'var(--size-6)',
  },
  '& time': {
    fontStyle: 'italic',
    color: 'var(--color-grey-300)',
  },
  '& p': {
    lineHeight: 'var(--size-6)'
  }
}

