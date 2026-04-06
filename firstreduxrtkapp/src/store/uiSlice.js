import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    currentPage: 1,
    postsPerPage: 10,
    searchKeyword: '',
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setSearchKeyword(state, action) {
      state.searchKeyword = action.payload
      state.currentPage = 1 // 검색 시 첫 페이지로 초기화
    },
  },
})

export const { setCurrentPage, setSearchKeyword } = uiSlice.actions
export default uiSlice.reducer
