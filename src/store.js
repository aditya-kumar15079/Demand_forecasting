import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducer/filterslice"; //it is the default export form filterslice, we can name it anything.

export const store = configureStore({
  reducer: {
    forecastData: filterReducer,
  },
});
