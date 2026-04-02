import { RouterProvider } from "react-router";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NotificationList } from "@modules/Notifications";

export const RootProvider = () => {
  return (
    <Provider store={store}>
      <main>
        <RouterProvider router={router} />
      </main>
      <NotificationList />
    </Provider>
  );
};
