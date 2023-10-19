import Image from "@/common/components/Image";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  srcIcon: string;
  title: string;
  path: string;
};

export const ItemIconNavbar = ({ srcIcon, title, path }: Props) => {
  const pathname = usePathname();
  const { t } = useTranslation("common");

  return (
    <Link href={path} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: "77px",
          height: "46px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <IconButton sx={{ m: 0, padding: 0 }}>
          <Image
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src={srcIcon}
          />
        </IconButton>
        <div
          style={{
            position: "relative",
            fontWeight: "600",
            textAlign: "center",
            textOverflow: "ellipsis",
            overflow: "hidden",
            lineHeight: "10px",
            whiteSpace: "nowrap",
            color:
              path.length > 1
                ? pathname.includes(path?.substring(1, path.length))
                  ? "#1F8A70"
                  : "#98A1B3"
                : pathname === path
                ? "#1F8A70"
                : "#98A1B3",
          }}
        >
          {t(title)}
        </div>
      </Box>
    </Link>
  );
};
