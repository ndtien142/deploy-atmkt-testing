"use client";

import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "next/navigation";
import Filter from "../Filter";
import ListAllCategoryProduct from "./ListAllCategory";

const AllCategoryContainer = () => {
  const { id } = useParams();

  return (
    <Grid
      container
      spacing={2}
      pt={"50px"}
      pb={"50px"}
      paddingX={{ xs: "16px", sm: "100px" }}
      height={"100%"}
    >
      <Filter />
      <ListAllCategoryProduct />
    </Grid>
  );
};

export default AllCategoryContainer;
