import { RootState } from "@/common/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateProps = {
  page: number;
  pageCategoryFilter: number;
  filterParam: {
    categoryId: any[];
    minPrice?: number;
    maxPrice?: number;
    sortType?: string;
    sortField?: string;
  };
  hasMore: boolean;
  dataCategory: { value: number; label: string }[];
};

const initialState: StateProps = {
  page: 1,
  pageCategoryFilter: 1,
  filterParam: {
    categoryId: [],
    minPrice: 0,
    maxPrice: 0,
    sortType: "",
    sortField: "",
  },
  hasMore: false,
  dataCategory: [],
};

export const categorySlice = createSlice({
  name: "categoryRoot",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageCategoryFilter: (state, action: PayloadAction<number>) => {
      state.pageCategoryFilter = action.payload;
    },
    setFilterParam: (
      state,
      action: PayloadAction<StateProps["filterParam"]>
    ) => {
      state.filterParam = action.payload;
      state.page = 1;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    setDataCategory: (
      state,
      action: PayloadAction<StateProps["dataCategory"]>
    ) => {
      state.dataCategory = action.payload;
    },
  },
});

export const {
  setPageNumber,
  setFilterParam,
  setHasMore,
  setPageCategoryFilter,
  setDataCategory,
} = categorySlice.actions;

export const pageCategorySelector = (state: RootState) =>
  state.categoryRoot.page;

export default categorySlice.reducer;
