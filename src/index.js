import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const buttons = [];
for (let i = 65; i < 91; i++) {
  buttons.push({ name: String.fromCharCode(i) });
}

export const btnSlice = createSlice({
  name: "btnSlice",
  initialState: {
    value: buttons.map((button) => ({ name: button.name, count: 0 })),
  },
  reducers: {
    addData: (state, action) => {
      // console.log("hello", action.payload);
      const { name, count } = action.payload;
      const tempData = state.value.find((button) => button.name == name);
      tempData.count = tempData.count + 1;
    },
  },
});

export const store = configureStore({
  reducer: {
    [btnSlice.name]: btnSlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals.
