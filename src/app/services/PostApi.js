import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const urlApi = "http://localhost:3400/posts";

export const postApi = createApi({
  reducerPath: "meknes",

  baseQuery: fetchBaseQuery({ baseUrl: urlApi }),
  keepUnusedDataFor: 60, // call api after 60 second
  refetchOnReconnect: true, // refetch on reconect
  refetchOnFocus: true,

  tagTypes: ["Posts"],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/",
      transformResponse(baseQueryReturnValue, meta, arg) {
        // console.log(baseQueryReturnValue, meta, arg);
        return baseQueryReturnValue
          .map((item) => ({ ...item, title: "easy " + item.title }))
          .sort((a, b) => b.id - a.id);
      },
      providesTags: (result) =>
        result
          ? // every element in cache with id
            [
              ...result.map(({ id }) => ({ type: "Posts", id })),

              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "PostsMy", id: "LIST" }],
    }),

    getPostId: builder.query({
      query: (id) => `/${id}`,
      keepUnusedDataFor: 120,
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: urlApi,
        method: "POST",
        body: body,
      }),
      invalidatesTags: [
        {
          type: "Posts",
          id: "LIST",
        },
      ],
    }),
    deletePost: builder.mutation({
      query: (idPost) => ({
        url: `/${idPost}`,
        method: "DELETE",
      }),

      invalidatesTags: (result, error, id) => {
        // console.log(result, error, id);
        return [
          {
            type: "Posts",
            id,
          },
        ];
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostIdQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = postApi;
