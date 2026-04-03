import { LoginLayout, LoginPage } from "@modules/Login";
import { PostsPage } from "@modules/Posts";
import { createBrowserRouter } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";
import { GuestProvider } from "../providers/GuestProvider";

export const router = createBrowserRouter([
  {
    Component: BaseLayout,
    children: [
      {
        path: "/",
        Component: PostsPage,
      },
      {
        Component: GuestProvider,
        children: [
          {
            path: "/login",
            Component: LoginPage,
          },
        ],
      },
    ],
  },
]);
