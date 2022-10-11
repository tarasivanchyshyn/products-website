import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './reducers/ProductsSlice';
import { productsAPI } from 'services/ProductsService';

const rootReducer = combineReducers({
  productsReducer,
  [productsAPI.reducerPath]: productsAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
