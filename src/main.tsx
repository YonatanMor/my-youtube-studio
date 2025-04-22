import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import { App } from "./components/App.tsx"
import TopNav from "./components/Top-nav.tsx"
import { TooltipProvider } from "./components/ui/tooltip.tsx"
import { Home } from "./routes/Home.tsx"
import "./styles/globals.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "/users",
    element: (
      <TooltipProvider >
        <App>
          <TopNav />
        </App>
      </TooltipProvider>
    ),
  },
])

const root = document.getElementById("root")!

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
