'use client';

import Link from 'next/link';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';
import { CardSwipe } from '@/src/components/ui/card-swipe';
import ImageCursorTrail from '@/src/components/ui/image-cursortrail';

export default function HeroSection() {
  // Sample images for the card swipe component - video editing portfolio images
  const heroImages = [
    { src: '/images/hero/video-editing-setup.jpg', alt: 'Video Editing Setup' },
    { src: '/images/hero/film-production.jpg', alt: 'Film Production' },
    { src: '/images/hero/video-timeline.jpg', alt: 'Video Timeline' },
    { src: '/images/hero/cinema-camera.jpg', alt: 'Cinema Camera' },
    { src: '/images/hero/color-grading.jpg', alt: 'Color Grading' },
  ];

  // Images for cursor trail - smaller video editing related images
  const cursorTrailImages = [
    '/images/cursor-trail/video-editing-setup-small.jpg',
    '/images/cursor-trail/film-production-small.jpg',
    '/images/cursor-trail/video-timeline-small.jpg',
    '/images/cursor-trail/studio-setup-small.jpg',
    '/images/cursor-trail/color-grading-small.jpg',
    '/images/cursor-trail/video-editing-workspace.jpg',
    '/images/cursor-trail/video-production.jpg',
  ];

  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-br from-slate-50 via-white to-red-50 overflow-hidden">
      {/* Image Cursor Trail - hidden on mobile for performance */}
      <ImageCursorTrail
        items={cursorTrailImages}
        maxNumberOfImages={4}
        distance={15}
        fadeAnimation={true}
        className="absolute inset-0 z-10 hidden lg:block"
        imgClass="w-10 h-10 lg:w-12 lg:h-12"
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10 opacity-30 sm:opacity-50"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] bg-gradient-to-r from-red-400/15 to-purple-400/15 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 lg:pt-16 xl:pt-20 pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-center min-h-[calc(100dvh-8rem)] sm:min-h-[calc(100dvh-6rem)] lg:min-h-[calc(100dvh-4rem)]">
          
          {/* Left side - Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 order-2 lg:order-1 text-center lg:text-left px-2 sm:px-0">
            {/* Main heading */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] xs:leading-[1.1] sm:leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-red-800 to-purple-800 bg-clip-text text-transparent block">
                  Video Editor
                </span>
                <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent block">
                  Portfolio
                </span>
              </h1>

              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                Bringing stories to life through creative video editing.
                <span className="hidden sm:inline"> Professional editing services for content creators, businesses, and filmmakers.</span>
                <span className="sm:hidden block mt-1">Professional editing services for creators and businesses.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 xs:gap-3 sm:gap-4 lg:gap-6 py-2 sm:py-3 lg:py-4 xl:py-6">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/50 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-sm">
                <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">500+ Videos</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/50 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-sm">
                <Zap className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/50 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-sm">
                <Star className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-600 fill-current" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">5-Star Reviews</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 pt-1 sm:pt-2 lg:pt-4 justify-center lg:justify-start max-w-sm xs:max-w-none mx-auto lg:mx-0">
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-purple-600 rounded-lg xs:rounded-xl hover:from-red-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl min-h-[44px] flex-1 xs:flex-none"
              >
                <span className="xs:hidden">Portfolio</span>
                <span className="hidden xs:inline">View Portfolio</span>
                <ArrowRight className="ml-1.5 xs:ml-2 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="group inline-flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-lg xs:rounded-xl hover:border-gray-300 hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg min-h-[44px] flex-1 xs:flex-none">
                <Play className="mr-1.5 xs:mr-2 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="xs:hidden">Demo</span>
                <span className="hidden xs:inline">Watch Reel</span>
              </button>
            </div>
          </div>

          {/* Right side - Card Swipe Component */}
          <div className="relative order-1 lg:order-2 mb-4 sm:mb-6 md:mb-8 lg:mb-0 max-w-[380px] xs:max-w-[420px] sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-xl sm:rounded-2xl md:rounded-3xl blur-lg sm:blur-xl md:blur-2xl"></div>
            <div className="relative transform scale-95 xs:scale-100 sm:scale-105 md:scale-110 lg:scale-100">
              <CardSwipe
                images={heroImages}
                autoplayDelay={3000}
                slideShadows={true}
              />
            </div>

            {/* Floating elements - progressive enhancement */}
            <div className="hidden lg:block absolute -top-3 -right-3 xl:-top-4 xl:-right-4 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 xl:-bottom-8 xl:-left-8 w-20 h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-gradient-to-br from-purple-400 to-red-500 rounded-full opacity-15 animate-pulse delay-1000"></div>

            {/* Mobile-specific subtle decoration */}
            <div className="lg:hidden absolute top-2 right-2 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-pulse"></div>
            <div className="lg:hidden absolute bottom-4 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse delay-500"></div>
          </div>
        </div>


      </div>
    </section>
  );
}
