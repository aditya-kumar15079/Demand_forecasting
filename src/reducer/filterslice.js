import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const filterSlice = createSlice({
  name: "forecastData",
  initialState,
  reducers: {
    saveForecastData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveForecastData } = filterSlice.actions;

export default filterSlice.reducer;
