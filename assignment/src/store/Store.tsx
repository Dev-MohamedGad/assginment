import { configureStore } from "@reduxjs/toolkit";

import filmReducer from "./filmSlice";

const store = configureStore({
  reducer: {
    films: filmReducer,
  },
});

export default store;
