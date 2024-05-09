import { api } from '@/redux/api/apiSlice';

const bookCatalogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: `/bookCatalog/create-bookCatalog`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['allData'],
    }),
    createWishList: builder.mutation({
      query: (data) => ({
        url: `/wishList/create-wishList`,
        method: 'POST',
        body: data,
      }),
    }),
    createCurrentlyReading: builder.mutation({
      query: (data) => ({
        url: `/currentReading/create-currentlyReading`,
        method: 'POST',
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: (searchTerm) => `/bookCatalog?searchTerm=${searchTerm}`,
      providesTags: ['allData'],
    }),
    getAllBooks: builder.query({
      query: () => `/bookCatalog/all-books`,
      providesTags: ['allData'],
    }),
    getSingleBook: builder.query({
      query: (id) => `/bookCatalog/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bookCatalog/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bookCatalog/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['allData'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/bookCatalog/${id}`,
        method: 'DELETE',
      }),
    }),
    searchTerm: builder.query({
      query: ({ page, title, genre, publicationYear, searchTerm }) =>
        `/bookCatalog?page=${page}&searchTerm=${searchTerm}&title=${title}&genre=${genre}&publicationYear=${publicationYear}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostCommentMutation,
  useDeleteBookMutation,
  useCreateBookMutation,
  useEditBookMutation,
  useSearchTermQuery,
  useCreateCurrentlyReadingMutation,
  useCreateWishListMutation,
  useGetAllBooksQuery,
} = bookCatalogApi;
