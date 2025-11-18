import { createBrowserRouter } from "react-router-dom";
import Intro from "@/pages/intro/Intro";
import Login from "@/pages/login/Login";
import MainLayout from "./layout/MainLayout";
import Dashboard from "@/pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Intro />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
