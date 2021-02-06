import React from "react";
import { Link } from "gatsby";
import { Box } from "@redesign-system/react-ui/Box";
import { Typography } from "@redesign-system/react-ui/Typography";

import { PostItemProps } from "./types.postItem";

export function PostItem<Props extends PostItemProps>({
  className = "",
  slug,
  excerpt,
  title,
  date,
  ...propsRest
}: Props): JSX.Element {
  const classNames = `PostItem ${className}`;
  const image = {
    src: "https://via.placeholder.com/760x422",
    alt: "placehoder",
  };

  return (
    <Box className={classNames} {...propsRest}>
      <Link to={slug}>
        <img src={image.src} width="760px" height="422px" alt={image.alt} />
        <Box
          pt={4}
          px={5}
          mq={{ md: { min: { paddingLeft: 0, paddingRight: 0 } } }}
        >
          <h2>{title}</h2>
          <Typography color="#fff" fs={1}>
            {formatDate(date)}
          </Typography>
          <Typography color="#fff" mt={6} mb={9}>
            {excerpt}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

function formatDate(string: string): string {
  const d = new Date(string);

  const day = d.getDate();
  const year = d.getFullYear();
  const month = d.toLocaleString("default", { month: "long" });
  return `${day} ${month},${year}`;
}
