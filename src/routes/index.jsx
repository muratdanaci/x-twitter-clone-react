import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/home";
import Explore from "~/pages/explore";
import Notifications from "~/pages/notifications";
import NotFound from "~/pages/not-found";
import MainLayout from "~/layouts/main";
import Messages from "~/pages/messages";
import Lists from "~/pages/lists";
import Communities from "~/pages/communities";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path:"messages",
        element: <Messages />,
      },
      {
        path: "lists",
        element: <Lists />
      },
      {
        path: "communities",
        element: <Communities />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
