import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-catalog-drab.vercel.app/api/v1',
    prepareHeaders(headers) {
      const token = localStorage.getItem('accessToken');

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ['allData'],
  endpoints: () => ({}),
});
