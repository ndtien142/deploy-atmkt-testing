"use client";

import { Grid } from "@mui/material";
import React from "react";
import Filter from "./Filter";
import ListProduct from "./ListProduct";
import { useParams } from "next/navigation";
import useTranslation from "next-translate/useTranslation";

const CategoryContainer = () => {
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
      <ListProduct categoryId={parseInt(id?.toString())}/>
    </Grid>
  );
};

export default CategoryContainer;
