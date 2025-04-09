import { Dispatch, SetStateAction, useMemo, useState } from "react"
import { Button } from "./button"

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
  //   const [focused, setFocused] = useState(false)

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return content
      .filter((item) => item.title.toLowerCase().includes(q))
      .slice(0, 5)
  }, [query, content])

  return (
    <div className="ml-16 w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 100)}
        className="placeholder-off-white-300 w-full px-3 pt-0.5 outline-none placeholder:text-xl"
        placeholder="Search across your channel"
      />

      {1 && (
        // {focused && filtered.length > 0 && (

        <ul className="absolute left-0 mt-8 z-10 w-full shadow">
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
              className="bg-main flex cursor-pointer items-center justify-between border-b border-gray-500 px-6 py-3 last:border-none hover:bg-gray-800"
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
                  <div className="absolute right-2 bottom-2 rounded-sm bg-black/80 text-white px-1 text-sm py-1">
                    {item.length}
                  </div>
                </div>
                <div className="ml-4 flex flex-col pt-3">
                  <div className="text-white">{item.title}</div>
                  <desc className="pt-1 text-gray-400">{item.description}</desc>
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
  )
}
