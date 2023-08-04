import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Cart from "./pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/restaurant/:id",
    element: <Restaurant />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();