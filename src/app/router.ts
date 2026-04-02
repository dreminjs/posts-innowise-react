import { LoginLayout, LoginPage } from "@modules/Login";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
]);
