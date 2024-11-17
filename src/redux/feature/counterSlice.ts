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
  reducers: {},
});
