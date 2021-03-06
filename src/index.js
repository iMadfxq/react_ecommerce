import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories.context";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./contexts/cart.context";

import { store } from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);

//any component in which we want to use routing should be wrapped by the BrowserRouter

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
