import { Dispatch, SetStateAction, useMemo, useState } from "react"
import { AiOutlineYoutube } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import { GoPencil } from "react-icons/go"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { MdOutlineInsertChart } from "react-icons/md"
import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

type ContentItem = {
  title: string
  imgUrl: string
  description: string
  pobDate: Date
  poblished: boolean
  length: string
}

export function AutoSuggest({
  content,
  focused,
  setFocused,
}: {
  content: ContentItem[]
  focused: boolean
  setFocused: Dispatch<SetStateAction<boolean>>
}) {
  const [query, setQuery] = useState("")
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return content
      .filter((item) => item.title.toLowerCase().includes(q))
      .slice(0, 5)
  }, [query, content])

  return (
    <div
      className={`relative flex h-14 w-5/12 items-center rounded-full border-2 border-transparent bg-black ${!focused ? "hover:border-white" : "bg-main"}`}
    >
      <HiMagnifyingGlass
        size={28}
        className="text-off-white-500 absolute left-6"
      />
      <div className="ml-16 w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 100)}
          className="placeholder-off-white-300 w-full px-3 pt-0.5 text-xl text-white outline-none placeholder:text-xl"
          placeholder="Search across your channel"
        />

        {/* {1 && ( */}
        {focused && filtered.length > 0 && (
          <ul className="absolute left-0 z-10 mt-8 w-full shadow">
            <li className="bg-main flex h-18 items-center justify-between rounded-t-3xl border-b border-gray-500 px-6">
              <span className="text-lg font-medium text-white">
                Your recent videos
              </span>
              <Button className="rounded-full bg-white/10 text-lg">
                Show all
              </Button>
            </li>
            {filtered.map((item, idx) => (
              <li
                key={idx}
                className="bg-main flex cursor-pointer items-center justify-between border-b border-gray-500 px-6 py-3 last:border-none hover:bg-[#1f1f1f]"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex">
                  <div
                    style={{
                      backgroundImage: `url(${item.imgUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className={`relative h-26 w-40 rounded-lg`}
                  >
                    <div className="absolute right-2 bottom-2 rounded-sm bg-black/80 px-1 py-1 text-sm text-white">
                      {item.length}
                    </div>
                  </div>

                  <div className="relative ml-4 flex flex-col pt-3">
                    <div className="text-white">{item.title}</div>
                    <desc className="pt-1 text-gray-400">
                      {item.description}
                    </desc>
                    {hoveredIdx === idx && (
                      // {1 && (
                      <div className="absolute top-10 bottom-0 left-0 flex w-64 items-end justify-around bg-[#1f1f1f] text-white">
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <GoPencil
                              size={60}
                              className="rounded-full p-3 hover:bg-[#373737]"
                            ></GoPencil>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="m-2 text-sm">
                            <p>Details</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <MdOutlineInsertChart
                              size={60}
                              className="rounded-full p-3 hover:bg-[#373737]"
                            />
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="m-2 text-sm">
                            <p>Analytics</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <BiCommentDetail
                              size={60}
                              className="rounded-full p-3 hover:bg-[#373737]"
                            />
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="m-2 text-sm">
                            <p>Comments</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip delayDuration={200}>
                          <TooltipTrigger asChild>
                            <AiOutlineYoutube
                              size={60}
                              className="rounded-full p-3 hover:bg-[#373737]"
                            />
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="m-2 text-sm">
                            <p>View on YouTube</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex h-26 flex-col pt-3">
                  <div className="text-white">
                    {item.pobDate.toDateString().slice(4, 10) +
                      ", " +
                      item.pobDate.toDateString().slice(11)}
                  </div>
                  <div className="pt-1 text-gray-400">
                    {item.poblished ? "Published" : "Unpublished"}
                  </div>
                </div>
              </li>
            ))}
            <li className="bg-main h-6 rounded-b-3xl"></li>
          </ul>
        )}
      </div>
    </div>
  )
}
