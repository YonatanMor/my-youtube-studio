import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import { App } from "./components/App.tsx"
import TopNav from "./components/Top-nav.tsx"
import { SidebarProvider } from "./components/ui/sidebar.tsx"
import { Home } from "./routes/Home.tsx"
import "./styles/globals.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home/>
      </App>
    ),
  },
  {
    path: "/users",
    element: (
      <App>
        <TopNav />
      </App>
    ),
  },
])

const root = document.getElementById("root")!

createRoot(root).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
