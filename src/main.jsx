import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { router } from "./Routes/index.jsx";
import { RouterProvider } from "react-router-dom";
//for alert slides
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);