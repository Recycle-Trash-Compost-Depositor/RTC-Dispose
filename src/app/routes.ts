import { createBrowserRouter, redirect } from "react-router";
import Layout from "./Layout";
import RecyclingPage from "./pages/RecyclingPage";
import TrashPage from "./pages/TrashPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        loader: () => redirect("/recycling"),
      },
      {
        path: "recycling",
        Component: RecyclingPage,
      },
      {
        path: "trash",
        Component: TrashPage,
      },
    ],
  },
]);
