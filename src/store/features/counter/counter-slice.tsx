import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  count: number;
};

const initialState: initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 2;
    },
    incrementCustom: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      if (state.count !== 0) state.count -= 2;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
