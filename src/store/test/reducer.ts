// Libraries
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface State {
  number: number;
}

const Reducer = createSlice({
  name: 'Test',
  initialState: {
    number: 1,
  },
  reducers: {
    fetchData: (state, action) => ({
      number: action.payload,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.Test,
    }),
  },
});

export const { fetchData } = Reducer.actions;
export default Reducer.reducer;
