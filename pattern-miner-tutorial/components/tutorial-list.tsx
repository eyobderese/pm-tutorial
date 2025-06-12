"use client"

import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tutorial } from "@/lib/tutorials"

interface TutorialListProps {
  tutorials: Tutorial[]
}

export function TutorialList({ tutorials }: TutorialListProps) {
  const pathname = usePathname()

  return (
    <Card
      className="
        w-full sm:w-64 
        max-h-[80vh] p-4 md:border 
        mx-auto sm:mx-0
      "
    >
      <h2 className="text-lg font-semibold mb-3 text-center sm:text-left">
        All Contents
      </h2>
      <ScrollArea className="h-[60vh] pr-2">
        <div className="space-y-2">
          {tutorials.map((tut) => {
            const isActive = pathname === `/tutorials/${tut.slug}`

            return (
              <a
                key={tut.slug}
                href={tut.slug}
                className={`flex items-center py-1 hover:text-foreground transition-colors ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {isActive && (
                  <ChevronRight className="h-3 w-3 mr-1 flex-shrink-0" />
                )}
                <span className={isActive ? "" : "ml-4"}>{tut.title}</span>
              </a>
            )
          })}
        </div>
      </ScrollArea>
    </Card>
  )
}
