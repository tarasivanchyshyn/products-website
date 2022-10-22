import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProduct } from 'models/IProduct';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://633eccda83f50e9ba3b89507.mockapi.io'
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: '/products'
      })
    })
  })
});
