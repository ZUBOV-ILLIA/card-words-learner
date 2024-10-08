import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import Words from "./routes/words.tsx";
import ErrorPage from "./error-page.tsx";
// import MainPage from "./components/MainPage.tsx";
import Practice from "./routes/practice.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          // element: <MainPage />,
          element: <Words />,
        },
        {
          path: "words",
          element: <Words />,
        },
        {
          path: "practice",
          element: <Practice />,
        },
        {
          path: "user",
          element: <div className="text-white">user settings</div>,
        },
      ],
    },
  ],
  { basename: "/card-words-learner" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
