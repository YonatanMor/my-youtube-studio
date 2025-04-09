import { useEffect, useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"
import { TbVideoPlus } from "react-icons/tb"
import { AutoSuggest } from "./ui/Auto-suggest"
import { Button } from "./ui/button"
import { SidebarTrigger } from "./ui/sidebar"

export default function TopNav() {
  const content = [
    {
      title: "Clicker attack",
      imgUrl: "1.png",
      description: "bla",
      pobDate: new Date(2024, 9, 6, 11, 52, 5),
      poblished: true,
      length: "3:57",
    },
    {
      title: "Taking it all in",
      imgUrl: "2.png",
      description: "bla",
      pobDate: new Date(2023, 0, 1, 18, 35, 0),
      poblished: true,
      length: "4:13",
    },
    {
      title: "Car ride",
      imgUrl: "3.png",
      description: "bra",
      pobDate: new Date(2019, 10, 3, 16, 3, 0),
      poblished: false,
      length: "6:22",
    },
    {
      title: "Walking the earth",
      imgUrl: "4.jpg",
      description: "dla",
      pobDate: new Date(2021, 2, 18, 10, 20, 2),
      poblished: true,
      length: "5:43",
    },
    {
      title: "Change the cannel, i'm bored",
      imgUrl: "5.png",
      description: "sla",
      pobDate: new Date(),
      poblished: false,
      length: "2:35",
    },
  ]

  const [autoSuggestFocus, setAutoSuggestFocus] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("esc")
      if (e.key === "Escape") {
        setAutoSuggestFocus(false)
      }
    }

    if (autoSuggestFocus) {
      document.addEventListener("keydown", handleKeyDown)
    }

    console.log(autoSuggestFocus)
    return document.removeEventListener("keydown", handleKeyDown)
  }, [autoSuggestFocus])

  return (
    <div className="bg-main z-20 flex items-center justify-between p-2 shadow-md">
      <div
        onClick={() => setAutoSuggestFocus(false)}
        className={`absolute inset-0 bg-black/70 transition-opacity duration-150 ease-in-out ${1 ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        // className={`absolute inset-0 bg-black/70 transition-opacity duration-150 ease-in-out ${autoSuggestFocus ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <div className="flex items-center">
        <SidebarTrigger className="h-20 w-20 cursor-pointer" />
        <img
          src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_v2_darkmode.svg"
          className="h-8 cursor-pointer px-4"
        ></img>
      </div>

      <AutoSuggest
        content={content}
        focused={autoSuggestFocus}
        setFocused={setAutoSuggestFocus}
        // onBlur={() => setAutoSuggestFocus(false)}
      ></AutoSuggest>

      <div className="flex items-center gap-4 px-4">
        <BsQuestionCircle
          color="cursor-pointer"
          size={28}
          style={{ cursor: "pointer", color: "white" }}
        />
        <Button className="text-off-white-500 mx-4 h-12 cursor-pointer rounded-full border border-[#7D7C7C] bg-transparent text-lg hover:bg-[#FFFFFF1A]">
          <TbVideoPlus style={{ width: "32px", height: "32px" }} />
          Create
        </Button>
        <img
          src="./profile pic.png"
          className="h-12 cursor-pointer rounded-full bg-amber-100"
        />
      </div>
    </div>
  )
}

// esc doesnt work
// click on the mag glass shouldn't unfocus the input
