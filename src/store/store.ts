import { configureStore } from "@reduxjs/toolkit"

import filterSlice from "./slices/Filter"
import filmsSlice from "./slices/Films"

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    films: filmsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
