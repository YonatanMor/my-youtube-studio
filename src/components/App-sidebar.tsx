import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useState } from "react"
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs"
import { FaCopyright, FaDollarSign, FaRegCopyright } from "react-icons/fa"
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi"
import {
  IoHomeOutline,
  IoHomeSharp,
  IoMusicalNotesOutline,
  IoMusicalNotesSharp,
} from "react-icons/io5"
import { MdAnalytics, MdOutlineAnalytics } from "react-icons/md"
import {
  PiMagicWandFill,
  PiMagicWandLight,
  PiSubtitlesFill,
  PiSubtitlesLight,
} from "react-icons/pi"
import { TbCurrencyDollar } from "react-icons/tb"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: IoHomeOutline,
    iconSelected: IoHomeSharp,
  },
  {
    title: "Content",
    url: "#",
    icon: BsCollectionPlay,
    iconSelected: BsCollectionPlayFill,
  },
  {
    title: "Analytics",
    url: "#",
    icon: MdOutlineAnalytics,
    iconSelected: MdAnalytics,
  },
  {
    title: "Community",
    url: "#",
    icon: HiOutlineUserGroup,
    iconSelected: HiUserGroup,
  },
  {
    title: "Subtitles",
    url: "#",
    icon: PiSubtitlesLight,
    iconSelected: PiSubtitlesFill,
  },
  {
    title: "Copyright",
    url: "#",
    icon: FaRegCopyright,
    iconSelected: FaCopyright,
  },
  {
    title: "Earn",
    url: "#",
    icon: TbCurrencyDollar,
    iconSelected: FaDollarSign,
  },
  {
    title: "Customization",
    url: "#",
    icon: PiMagicWandLight,
    iconSelected: PiMagicWandFill,
  },
  {
    title: "Audio Library",
    url: "#",
    icon: IoMusicalNotesOutline,
    iconSelected: IoMusicalNotesSharp,
  },
]

export function AppSidebar() {
  const [current, setCurrent] = useState<string>("Dashboard")

  return (
    <Sidebar collapsible="icon" className="text-white">
      <SidebarHeader className="bg-main">
        <span className="overflow-hidden text-center text-lg font-medium">
          Your channel
        </span>
        <span className="overflow-hidden text-center">Yonatan Mor</span>
      </SidebarHeader>
      <SidebarContent className="bg-main">
        <SidebarGroup>
          {/* <SidebarGroupLabel className="text-3xl text-white">
            GroupLabel
          </SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  onClick={() => setCurrent(item.title)}
                  data-active={current === item.title}
                  key={item.title}
                  className={`cursor-pointer rounded-xl py-4 data-[active=true]:bg-[#1f1f1f] `}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="px-4">
                      {current === item.title ? (
                        <item.iconSelected
                          style={{
                            width: 32,
                            height: 32,
                          }}
                        />
                      ) : (
                        <item.icon
                          style={{
                            width: 32,
                            height: 32,
                          }}
                        />
                      )}
                      <span className="text-xl pl-4">{item.title}</span>
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
