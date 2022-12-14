import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allCategories, productsOnPage } from '@constants';

interface ProductsState {
  searchValue: string;
  searchCategory: string;
  choosedBrands: string[];
  choosedRatings: number[];
  choosedPrice: number[];
  sortOption: string[];
  currentPage: number;
  productsPerPage: number;
  activePages: number[];
  cartItemsCount: number;
}

const initialState: ProductsState = {
  searchValue: '',
  searchCategory: allCategories,
  choosedBrands: [],
  choosedRatings: [],
  choosedPrice: [],
  sortOption: [],
  currentPage: 0,
  productsPerPage: productsOnPage,
  activePages: [0],
  cartItemsCount: 0
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    searchCategory: (state, action: PayloadAction<string>) => {
      state.searchCategory === action.payload
        ? (state.searchCategory = allCategories)
        : (state.searchCategory = action.payload);
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.searchCategory = action.payload;
    },
    chooseBrands: (state, action: PayloadAction<string>) => {
      if (!action.payload) {
        state.choosedBrands = [];
        return;
      }
      if (state.choosedBrands.includes(action.payload)) {
        state.choosedBrands = state.choosedBrands.filter(
          (el) => el !== action.payload
        );
      } else {
        state.choosedBrands.push(action.payload);
      }
    },
    chooseRatings: (state, action: PayloadAction<number>) => {
      if (!action.payload) {
        state.choosedRatings = [];
        return;
      }
      if (state.choosedRatings.includes(action.payload)) {
        state.choosedRatings = state.choosedRatings.filter(
          (el) => el !== action.payload
        );
      } else {
        state.choosedRatings.push(action.payload);
      }
    },
    choosePrice: (state, action: PayloadAction<number[]>) => {
      if (!action.payload) {
        state.choosedPrice = [];
        return;
      }
      state.choosedPrice = action.payload;
    },
    resetFilters: (state) => {
      state.searchCategory = allCategories;
      state.choosedBrands = [];
      state.choosedRatings = [];
      state.choosedPrice = [];
    },
    sortProducts: (state, action: PayloadAction<string[]>) => {
      state.sortOption = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setProductsPerPage: (state, action: PayloadAction<number>) => {
      state.productsPerPage = action.payload;
    },
    setActivePages: (state, action: PayloadAction<number[]>) => {
      state.activePages = action.payload;
    }
  }
});

export const productsActions = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
