"use client";

import { TextScroll } from "@/src/components/ui/text-scroll";

export function TextScrollDemo() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-950/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10 opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-400/10 via-purple-400/10 to-orange-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced scrolling text with attractive colors */}
          <div>
            {/* Single scrolling text - subtle and elegant */}
            <TextScroll
              className="font-display text-center text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide bg-gradient-to-r from-purple-400 via-red-400 to-pink-400 bg-clip-text text-transparent opacity-70"
              text="Video Editing • Animation • Post Production • "
              default_velocity={-3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
