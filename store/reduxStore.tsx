import { Token } from "@/utils";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    auth: (state, action) => {
      state.token = action.payload as string;
    },
  },
});
// config the store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// export default the store
export default store;

// export the action
export const authAction = authSlice.actions;
