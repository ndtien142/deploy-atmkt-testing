import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

type Props = {
  links: {
    name: string;
    href?: string;
  }[];
};
export default function BreadCrumbs(props: Props) {
  const { links } = props;
  return (
    <Breadcrumbs
      separator="·"
      sx={{ fontWeight: "700 !important" }}
      aria-label="breadcrumb"
    >
      {links?.map((item, index) => (
        <Link
          underline="hover"
          key={index}
          color={!item?.href ? "primary" : "inherit"}
          href={item?.href}
        >
          {item?.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
