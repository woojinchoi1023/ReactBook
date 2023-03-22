import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import loggerMiddleware from "../lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import sample from "./sample";
import loading from "./loading";

const logger = createLogger();
const store = configureStore({
  reducer: {
    counter,
    sample,
    loading,
  },
  middleware: [logger, ReduxThunk],
});

export default store;
