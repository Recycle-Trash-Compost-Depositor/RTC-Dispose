import { createHashRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import RecyclingPage from "./pages/RecyclingPage";
import CompostPage from "./pages/CompostPage";
import TrashPage from "./pages/TrashPage";
import BenefitsPage from "./pages/BenefitsPage";
import AboutPage from "./pages/AboutPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "recycling", Component: RecyclingPage },
      { path: "compost", Component: CompostPage },
      { path: "trash", Component: TrashPage },
      { path: "benefits", Component: BenefitsPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);
