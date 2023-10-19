"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment, IconButton, Box } from "@mui/material";
import useSearchProd from "../hooks/useSearchProd";
import useDebounce from "../hooks/useDebounce";
import { dispatch, useSelector } from "@/common/redux/store";
import { setSearchText } from "../../../search.slice";
import SearchItem from "./SearchItem";
import Iconify from "@/common/components/Iconify";

export default function SearchBox() {
  const { searchText } = useSelector((state) => state.search);

  const debouncedSearchText = useDebounce<string>(searchText, 500);
  const searchParams: {
    page: number;
    limit: number;
    searchText?: string;
  } = {
    page: 1,
    limit: 20,
  };
  if (debouncedSearchText?.length > 2) {
    searchParams.searchText = debouncedSearchText;
  }

  const { data, fetchNextPage, isFetchingNextPage, isLoading } =
    useSearchProd(searchParams);

  const handleScroll = (event: any) => {
    const listBoxNode = event?.currentTarget;
    const position = listBoxNode?.scrollTop + listBoxNode?.clientHeight;
    if (listBoxNode.scrollHeight - position <= 1) {
      fetchNextPage();
    }
  };
  const options = data?.pages?.map((item) => item?.items).flat() || [];

  return (
    <Autocomplete
      disablePortal
      autoFocus
      options={options}
      getOptionLabel={(option) => option?.productDetails?.[0]?.name || ""}
      sx={{
        width: "100%",
        height: "40px",
        "& .MuiAutocomplete-popper": {
          ":focus": {
            transition: "0",
            transform: "none!important",
          }, // Disable the animation
        },
      }}
      inputValue={searchText}
      onInputChange={(event, newInputValue) => {
        dispatch(setSearchText(newInputValue));
      }}
      loading={isLoading}
      popupIcon={
        <IconButton sx={{ p: 0 }} component="span">
          <Iconify
            icon={"ri:menu-line"}
            height={24}
            width={24}
            color={"primary.main"}
          />
        </IconButton>
      }
      renderInput={(params) => (
        <TextField
          {...params}
          // fullWidth
          placeholder="Tìm kiếm"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#F3F9FB",
              paddingX: "9px",
              paddingY: "0px",
              color: "black",
              "& fieldset": {
                borderColor: "transparent",
                color: "white",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                color: "white",
              },
            },
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <IconButton sx={{ p: 0 }} component="span">
                  <Iconify
                    icon={"majesticons:search-line"}
                    height={18}
                    width={18}
                    color={"primary.main"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, options) => {
        return (
          <li
            {...props}
            style={{ width: "100%", marginTop: "5px" }}
            key={`${props} + ${options?.id}`}
          >
            <SearchItem product={options} />
          </li>
        );
      }}
      ListboxProps={{
        onScroll: handleScroll,
      }}
    />
  );
}
