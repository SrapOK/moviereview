import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import MainPage from "pages/HomePage"
import RootLayout from "pages/RootLayout"
import Film from "pages/Film"
import ErrorPage from "pages/ErrorPage"

import { FILM_PAGE, HOME_PAGE } from "./paths"

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      errorElement: <ErrorPage />,
      children: [
        {
          path: HOME_PAGE,
          Component: MainPage
        },
        { path: FILM_PAGE + ":id", Component: Film }
      ]
    }
  ],
  { basename: import.meta.env.BASE_URL }
)

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
