import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'models/IProduct';

import { allCategories, productsOnPage } from '@constants';

interface ProductsState {
  products: IProduct[];
  searchValue: string;
  searchCategory: string;
  choosedBrands: string[];
  choosedRatings: number[];
  choosedPrice: number[];
  sortOption: string[];
  currentPage: number;
  productsPerPage: number;
}

const initialState: ProductsState = {
  products: [],
  searchValue: '',
  searchCategory: allCategories,
  choosedBrands: [],
  choosedRatings: [],
  choosedPrice: [],
  sortOption: [],
  currentPage: 0,
  productsPerPage: productsOnPage
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
    }
  }
});

export const productsActions = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
