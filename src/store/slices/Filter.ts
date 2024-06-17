import {
  PayloadAction,
  createSlice
} from "@reduxjs/toolkit"

export type SortType = "imdbRating" | "Year"
export type SortOrder = "asc" | "desc"

interface InitialState {
  query: string
  sortType: SortType
  sortOrder: SortOrder
  page: number
}

const initialState: InitialState = {
  query: "Star Wars",
  sortType: "imdbRating",
  sortOrder: "desc",
  page: 1
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setSortType: (
      state,
      action: PayloadAction<SortType>
    ) => {
      state.sortType = action.payload
    },
    setSortOrder: (
      state,
      action: PayloadAction<SortOrder>
    ) => {
      state.sortOrder = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  },
  selectors: {
    selectQuery: state => {
      return state.query
    },
    selectSortType: state => {
      return state.sortType
    },
    selectSortOrder: state => {
      return state.sortOrder
    },
    selectPage: state => {
      return state.page
    }
  }
})

export const {
  setQuery,
  setSortType,
  setSortOrder,
  setPage
} = filterSlice.actions
export const {
  selectQuery,
  selectSortType,
  selectSortOrder,
  selectPage
} = filterSlice.selectors

export default filterSlice.reducer
