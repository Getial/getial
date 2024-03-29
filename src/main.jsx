import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorScreen from "./screens/ErrorScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import DetailProjectScreen, {
  loader as projectLoader,
} from "./screens/DetailProjectScreen.jsx";
import "./styles/index.css";
import { LangProvider } from "./context/LangContext.jsx";

const router = createBrowserRouter([
  {
    path: "/getial/",
    element: <HomeScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/getial/detailProject/:projectId",
    element: <DetailProjectScreen />,
    loader: projectLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  </React.StrictMode>
);
