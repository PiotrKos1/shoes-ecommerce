import { createSlice } from "@reduxjs/toolkit";
import { fetchShop } from '../store'

interface shopState {
  data: string[],
  isLoading: boolean,
  error: string | null
}

const initialState: shopState = {
  data: [],
  isLoading: false,
  error: ""
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
      extraReducers(builder) {
        builder.addCase(fetchShop.pending, (state, action) => {
          state.isLoading = true;
      });
        builder.addCase(fetchShop.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
    });
        builder.addCase(fetchShop.rejected, (state, action) => {
        state.isLoading = false
        state.error = null
    });

    }
  })

export const shopReducer = shopSlice.reducer