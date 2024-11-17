import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

    incrementBy5: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { decrement, increment, incrementBy5 } = counterSlice.actions;
