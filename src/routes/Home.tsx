import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { cn } from "@/lib/utils"

export function Home() {
  return (
    <div className={cn("p-4 bg-green-600")}>
      <h1 className="text-7xl text-white/70">Home page</h1>
      
      {/* <Dialog>
        <DialogTrigger className="bg-primary cursor-pointer rounded-md p-4 text-white">
          Click me
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </div>
  )
}
