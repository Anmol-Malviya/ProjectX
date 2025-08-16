"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/src/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  title?: string
  subtitle?: string
  showHeader?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  title = "Project Showcase",
  subtitle = "Seamless project carousel animation.",
  showHeader = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 30px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 250px;
  }

  @media (min-width: 640px) {
    .swiper-slide {
      width: 300px;
    }
    .swiper {
      padding-bottom: 50px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #dc2626;
  }

  @media (max-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
  `
  return (
    <section className="w-full space-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl rounded-[16px] sm:rounded-[24px] border border-black/5 p-1 sm:p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[16px] sm:rounded-[24px] border border-black/5 bg-white/50 backdrop-blur-sm p-1 sm:p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px]">
          {showHeader && (
            <>
              <Badge
                variant="outline"
                className="absolute left-3 top-4 sm:left-4 sm:top-6 rounded-[12px] sm:rounded-[14px] border border-red-200 bg-red-50 text-red-700 text-sm sm:text-base md:left-6"
              >
                <SparklesIcon className="fill-red-200 stroke-1 text-red-600 w-3 h-3 sm:w-4 sm:h-4" />{" "}
                Featured Projects
              </Badge>
              <div className="flex flex-col justify-center pb-2 pl-3 pt-12 sm:pl-4 sm:pt-14 md:items-center">
                <div className="flex gap-2">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl opacity-85 font-bold tracking-tight bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">{subtitle}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                breakpoints={{
                  640: {
                    spaceBetween: 50,
                  },
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      <Image
                        src={image.src}
                        width={400}
                        height={300}
                        className="size-full rounded-xl sm:rounded-xl object-cover hover:scale-105 transition-transform duration-300"
                        alt={image.alt}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-3 sm:p-4">
                        <p className="text-white text-xs sm:text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
