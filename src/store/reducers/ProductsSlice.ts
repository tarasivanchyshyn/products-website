import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'models/IProduct';

interface ProductsState {
  products: IProduct[];
  searchValue: string;
  searchCategory: string;
  choosedFarm: string;
  choosedBrands: string[];
}

const initialState: ProductsState = {
  products: [],
  searchValue: '',
  searchCategory: '',
  choosedFarm: '',
  choosedBrands: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    searchCategory: (state, action: PayloadAction<string>) => {
      state.searchCategory = action.payload;
    },
    chooseFarm: (state, action: PayloadAction<string>) => {
      state.choosedFarm = action.payload;
    },
    chooseBrands: (state, action: PayloadAction<string>) => {
      if (state.choosedBrands.includes(action.payload)) {
        state.choosedBrands = state.choosedBrands.filter(
          (el) => el !== action.payload
        );
      } else {
        state.choosedBrands.push(action.payload);
      }
    }
  }
});

export const productsActions = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
