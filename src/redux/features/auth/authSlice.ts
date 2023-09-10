import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}

const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const bookCatalogSlice = createSlice({
  name: 'bookCatalog',
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleState, setPriceRange } = bookCatalogSlice.actions;

export default bookCatalogSlice.reducer;
