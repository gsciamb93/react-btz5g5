import React from "react";
import "./style.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Book } from "./Book";
import { Somma } from "./Somma";
import { reducerSomma } from "./redux/reducer";

const store = configureStore({
  reducer: reducerSomma
});

// store.dispatch({ type: "bla" });

export default function App() {
  return (
    <Provider store={store}>
      <Book nome="Goleman" />
      <Book nome="Freud" />
      <hr />
      <Somma />
    </Provider>
  );
}
