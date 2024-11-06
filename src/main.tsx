import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Error, Root, Users, Albums, User, Album } from "./pages"
import { routes } from "./lib/routes"
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 1,
    },
  },
})

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: routes.home,
        element: <Users />,
      },
      {
        path: routes.users.user.template,
        element: <User />,
      },
      {
        path: routes.users.root,
        element: <Users />,
      },
      {
        path: routes.albums.root,
        element: <Albums />,
      },
      {
        path: routes.albums.album.template,
        element: <Album />,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
