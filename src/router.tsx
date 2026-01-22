import { createBrowserRouter } from "react-router";
import { RootLayout } from "./__root";
import { HomePage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
