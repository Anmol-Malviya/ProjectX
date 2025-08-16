"use client"

import React from "react"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/src/components/ui/badge"
import ImageCursorTrail from "@/src/components/ui/image-cursortrail"

const images = [
  "/images/cursor-trail/video-editing-setup-small.jpg",
  "/images/cursor-trail/film-production-small.jpg",
  "/images/cursor-trail/video-timeline-small.jpg",
  "/images/cursor-trail/studio-setup-small.jpg",
  "/images/cursor-trail/color-grading-small.jpg",
  "/images/cursor-trail/video-editing-workspace.jpg",
  "/images/cursor-trail/video-production.jpg",
]

export function CursorTrailDemo() {
  return (
    <section className="mx-auto w-[90vw] max-w-none rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm md:items-start md:gap-4 md:rounded-b-[20px] md:rounded-t-[40px]">
        <ImageCursorTrail
          items={images}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-32 w-24 sm:h-40 h-32"
          className="w-full rounded-3xl min-h-[60px] md:min-h-[75px]"
        >
          <article className="relative z-50 flex flex-col items-center justify-center py-8 md:py-12">
            <Badge
              variant="outline"
              className="mb-3 rounded-[14px] border border-black/10 bg-white text-base md:left-6"
            >
              <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
              Component Preview
            </Badge>
            <h1 className="max-w-2xl text-center text-4xl md:text-5xl font-semibold tracking-tight">
              Images That Follow the Cursor Cooool Right
            </h1>
          </article>
        </ImageCursorTrail>
      </div>
    </section>
  )
}
