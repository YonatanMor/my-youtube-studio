import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Content",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Analytics",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Community",
    url: "#",
    icon: Search,
  },
  {
    title: "Subtitles",
    url: "#",
    icon: Settings,
  },
  {
    title: "Copyright",
    url: "#",
    icon: Settings,
  },
  {
    title: "Earn",
    url: "#",
    icon: Settings,
  },
  {
    title: "Customization",
    url: "#",
    icon: Settings,
  },
  {
    title: "Audio Library",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="text-white">
      <SidebarHeader className="overflow-hidden bg-main">
        header
      </SidebarHeader>
      <SidebarContent className="bg-main">
        <SidebarGroup className="">
          <SidebarGroupLabel className="text-3xl text-white">GroupLabel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-2">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-62 w-62" style={{width:32, height:32}}/>
                      <span className="text-xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
