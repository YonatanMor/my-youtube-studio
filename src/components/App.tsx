import { AppSidebar } from "./App-sidebar"
import TopNav from "./Top-nav"
import { SidebarProvider } from "./ui/sidebar"

export function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-main">
      <SidebarProvider className="flex-col">
        <TopNav />
        <div className="flex">
          <AppSidebar />
          {/* <main className="bg-[#606060]"> */}
            {/* <h1 className="p-4 text-7xl">App</h1> */}
            {children}
          {/* </main> */}
        </div>
      </SidebarProvider>
    </div>
  )
}
