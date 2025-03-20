import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <div className="relative z-0">
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </>
  </React.StrictMode>
);
