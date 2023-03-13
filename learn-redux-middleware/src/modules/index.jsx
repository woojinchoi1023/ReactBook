import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import loggerMiddleware from "../lib/loggerMiddleware";
const store = configureStore({
  reducer: {
    counter,
  },
  middleware: [loggerMiddleware],
});

export default store;
