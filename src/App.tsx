import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Multimedia from "./page/MultiMedia/Multimedia";
import Sport from "./page/SportNews/Sport";
import Home from "./page/HomeNews/Home";
import Auth from "./page/auth/auth";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/multimedia",
    element: <Multimedia />,
  },
  {
    path: "/sport",
    element: <Sport />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
