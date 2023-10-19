import { ReactElement } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  BreadcrumbsProps,
  Breadcrumbs as MUIBreadcrumbs,
  Link as MUILink,
} from "@mui/material";

type TLink = {
  href?: string;
  name: string;
  icon?: ReactElement;
};

export interface Props extends BreadcrumbsProps {
  links: TLink[];
  activeLast?: boolean;
}

export default function Breadcrumbs({
  links,
  activeLast = false,
  ...other
}: Props) {
  const currentLink = links[links.length - 1].name;

  const listDefault = links?.map((link) => (
    <LinkItem key={link.name} link={link} currentLink={currentLink} />
  ));

  const listActiveLast = links?.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} currentLink={currentLink} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: 600,
            color: "primary.main",
          }}
          component="span"
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs
      separator={
        <Box
          component="span"
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "text.disabled",
          }}
        />
      }
      {...other}
    >
      {activeLast ? listActiveLast : listDefault}
    </MUIBreadcrumbs>
  );
}

type LinkItemProps = {
  link: TLink;
  currentLink: string;
};

function LinkItem({ link, currentLink }: LinkItemProps) {
  const { href, name, icon } = link;
  return (
    <Link href={href || "#"} style={{ textDecoration: "none" }}>
      <MUILink
        variant="body2"
        sx={{
          lineHeight: "22px",
          display: "flex",
          alignItems: "center",
          "& > div": { display: "inherit" },
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: 600,
          color: "#000",
        }}
        component="span"
      >
        {icon && (
          <Box sx={{ mr: 1, "& svg": { width: 20, height: 20 } }}>{icon}</Box>
        )}
        {name}
      </MUILink>
    </Link>
  );
}
