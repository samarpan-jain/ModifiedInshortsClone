import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LayoutPage from "./Pages/Layout_page";
import NewsPage from "./Pages/News_page";
import SearchPage from "./Pages/Search_News_page";

function AllRoutes() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LayoutPage />,
        children: [
          {
            path: "/",
            element: <Navigate to="/general" />
          },
          {
            path: "/:category",
            element: <NewsPage />
          },
          {
            path: "/general",
            element: <NewsPage />
          },
          {
            path: "/search",
            element: <SearchPage />
          },
        ]
      },
      {
        path: '/*',
        element: <Navigate to="/general" />
      }
    ]);

  return <RouterProvider router={router} />;
}

export default AllRoutes