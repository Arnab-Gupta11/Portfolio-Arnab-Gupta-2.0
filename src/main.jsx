import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarsCanvas from "./components/StarBackground/StarBackground.jsx";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <div className="relative z-0">
        <RouterProvider router={router} />
      </div>

    </>
  </React.StrictMode>
);
