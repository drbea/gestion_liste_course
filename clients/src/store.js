import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './api/api'

export const Store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(Store.dispatch)