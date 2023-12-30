import { configureStore } from '@reduxjs/toolkit'
import { shopReducer } from './slices/shopSlice'

export const store = configureStore({
  reducer: {
    shop: shopReducer
  },
})

export * from '../thunks/fetchShop'
export * from '../thunks/fetchShoppingCart'
export * from '../thunks/addToShoppingCart'
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch