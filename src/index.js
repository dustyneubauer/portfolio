import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import About from "./routes/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [{
      path: "/",
      element: <About/>,
      errorElement: <ErrorPage /> 
    },
  ]},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);