import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Multimedia from "./page/MultiMedia/Multimedia";
import Sport from "./page/SportNews/Sport";
import Home from "./page/HomeNews/Home";
import Auth from "./page/auth/auth";
import ErrorBoundary from "./components/ErrorBoundary"; // Ensure ErrorBoundary is correctly imported

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/home",
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
]);

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={routes} />
    </ErrorBoundary>
  );
}
