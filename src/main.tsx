import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import Words from "./routes/words.tsx";
import ErrorPage from "./error-page.tsx";
import MainPage from "./components/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "words",
        element: <Words />,
      },
      {
        path: "practice",
        element: <div className="text-white">practice</div>,
      },
      {
        path: "user",
        element: <div className="text-white">user</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
