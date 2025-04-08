import { useEffect, useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"
import { TbVideoPlus } from "react-icons/tb"
import { AutoSuggest } from "./ui/Auto-suggest"
import { Button } from "./ui/button"
import { SidebarTrigger } from "./ui/sidebar"

export default function TopNav() {
  const content = [
    {
      title: "Sunset wibes",
      imgUrl: "1.png",
      description: "bla",
      pobDate: new Date(),
      poblished: true,
    },
    {
      title: "Taking it in",
      imgUrl: "2.png",
      description: "bla",
      pobDate: new Date(),
      poblished: true,
    },
    {
      title: "Car ride",
      imgUrl: "3.png",
      description: "bra",
      pobDate: new Date(),
      poblished: false,
    },
    {
      title: "The troubled Trio",
      imgUrl: "4.jpg",
      description: "dla",
      pobDate: new Date(),
      poblished: true,
    },
    {
      title: "Change the cannel, i'm bored",
      imgUrl: "5.png",
      description: "sla",
      pobDate: new Date(),
      poblished: false,
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

    return document.removeEventListener("keydown", handleKeyDown)
  }, [autoSuggestFocus])

  // function handleFocus() {
  //   setAutoSuggestFocus(true)
  // }

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

      <div
        className={`relative flex w-5/12 items-center rounded-full border-2 border-transparent bg-black ${!autoSuggestFocus ? "hover:border-white" : ""}`}
      >
        <AutoSuggest
          content={content}
          focused={autoSuggestFocus}
          setFocused={setAutoSuggestFocus}
          // onBlur={() => setAutoSuggestFocus(false)}
        ></AutoSuggest>

        {/* <HiMagnifyingGlass className="text-off-white-500 absolute left-6" />
        <Input
          onClick={handleFocus}
          onFocus={handleFocus}
          onBlur={() => setInputFocus(false)}
          className={`placeholder-text-center text-off-white-500 placeholder-off-white-300 h-13 rounded-full border-none bg-black pl-20 text-xl placeholder:text-xl ${inputFocus ? "bg-main" : ""}`}
          placeholder="Search across your channel"
          // readOnly={!inputFocus}
        ></Input>

        <Select open={inputFocus}>
          <SelectTrigger className="relative">
            <SelectValue placeholder="Theme" className=""/>
          </SelectTrigger>
          <SelectContent className="z-50 h-40 w-full absolute top-0 right-0">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select> */}
      </div>

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
          src="./yoni.png"
          className="h-12 cursor-pointer rounded-full bg-amber-100"
        />
      </div>
    </div>
  )
}

// esc doesnt work
// click on the mag glass shouldn't unfocus the input
