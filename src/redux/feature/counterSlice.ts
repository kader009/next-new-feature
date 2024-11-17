import { createSlice } from '@reduxjs/toolkit';

interface Count {
  count: number;
}

const initialState: Count = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export default counterSlice.reducer;

export const { decrement, increment } = counterSlice.actions;
