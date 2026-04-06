import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // 게시글 목록 조회
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post'],
    }),

    // 게시글 단건 조회
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),

    // 댓글 조회
    getCommentsByPostId: builder.query({
      query: (id) => `/posts/${id}/comments`,
    }),

    // 게시글 작성
    // jsonplaceholder는 실제 저장이 안 되므로 onQueryStarted로 캐시 직접 업데이트
    createPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const { data: newPost } = await queryFulfilled
          dispatch(
            postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
              draft.unshift({ ...newPost, id: Date.now() })
            })
          )
        } catch {}
      },
    }),

    // 게시글 수정
    updatePost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: data,
      }),
      async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedPost } = await queryFulfilled
          // 목록 캐시 업데이트
          dispatch(
            postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
              const idx = draft.findIndex((p) => p.id === id)
              if (idx !== -1) draft[idx] = { ...draft[idx], ...updatedPost }
            })
          )
          // 단건 캐시 업데이트
          dispatch(
            postsApi.util.updateQueryData('getPostById', String(id), (draft) => {
              Object.assign(draft, updatedPost)
            })
          )
        } catch {}
      },
    }),

    // 게시글 삭제 (낙관적 업데이트)
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
            return draft.filter((post) => post.id !== id)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetCommentsByPostIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi
