import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoSplitApi } from "../services/basic";

export const store = configureStore({
  reducer: {
    [todoSplitApi.reducerPath]: todoSplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoSplitApi.middleware),
});

setupListeners(store.dispatch);
