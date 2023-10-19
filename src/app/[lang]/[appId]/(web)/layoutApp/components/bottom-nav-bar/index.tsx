import { Stack } from "@mui/material";
import React from "react";
import { ItemIconNavbar } from "./components/ItemIconNavBar";
import { BOTTOM_NAV_BAR_ITEM } from "./constants";

const BottomNavBar = () => {
  return (
    <Stack
      sx={{
        minHeight: "75px",
        width: "100%",
        bottom: 0,
        position: "fixed",
        alignSelf: "center",
        zIndex: 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden",
        boxShadow: "0px -7px 30px rgba(0, 0, 0, 0.05)",
        borderRadius: "24px 24px 0px 0px",
      }}
      display={{ xs: "flex", md: "none" }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          fontSize: "8px",
          color: "#98a1b3",
          backgroundColor: "white",
          alignItems: "flex-start",
          paddingTop: "10px",
          borderRadius: "24px 24px 0px 0px",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
            // padding: '16px 0px 0px 0px',
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {BOTTOM_NAV_BAR_ITEM?.map((item, index) => {
            return (
              <ItemIconNavbar
                path={item.path}
                srcIcon={item.src}
                title={item.name}
                key={index}
              />
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BottomNavBar;
