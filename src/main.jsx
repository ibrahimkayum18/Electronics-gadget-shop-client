import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import Route from "./RouterConnector/Route.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>
);
