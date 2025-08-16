'use client';

import ImageCursorTrail from '@/src/components/ui/image-cursortrail';
import MaskedDiv from '@/src/components/ui/masked-div';
import { Play, Award, Clock, Users } from 'lucide-react';

export default function AboutSection() {
  // Video editing related images for cursor trail
  const aboutCursorImages = [
    '/images/cursor-trail/video-editing-setup-small.jpg', // Video editing setup
    '/images/cursor-trail/film-production-small.jpg', // Film production
    '/images/cursor-trail/video-timeline-small.jpg', // Video timeline
    '/images/cursor-trail/studio-setup-small.jpg', // Studio setup
    '/images/cursor-trail/color-grading-small.jpg', // Color grading
    '/images/cursor-trail/video-editing-workspace.jpg', // Video workspace
  ];

  const stats = [
    { icon: Play, number: '500+', label: 'Videos' },
    { icon: Users, number: '150+', label: 'Clients' },
    { icon: Award, number: '5+', label: 'Years' },
    { icon: Clock, number: '24h', label: 'Turnaround' },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Image Cursor Trail - reduced on mobile */}
      <ImageCursorTrail
        items={aboutCursorImages}
        maxNumberOfImages={2}
        distance={20}
        fadeAnimation={true}
        className="absolute inset-0 z-10 hidden sm:block"
        imgClass="w-8 h-8 sm:w-10 sm:h-10"
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-red-400/10 to-purple-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Left side - Video */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
              <MaskedDiv maskType="type-1" size={0.75} className="my-4 sm:my-6">
                <img
                  src="/images/about/profile.jpg"
                  alt="Video Editor Profile"
                  className="cursor-pointer transition-all duration-300 hover:scale-105 w-full h-full object-cover"
                />
              </MaskedDiv>

              {/* Floating video editing elements - adjusted for mobile */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-red-600 rounded-full flex items-center justify-center shadow-lg opacity-90">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Small floating elements - hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute top-8 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="hidden sm:block absolute bottom-16 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-medium">
                About Me
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-red-800 to-purple-800 bg-clip-text text-transparent">
                  Creative Video
                </span>
                <br />
                <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  Editor
                </span>
              </h2>

              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  I&apos;m a passionate video editor with 5+ years of experience transforming raw footage into
                  compelling visual stories. I specialize in creating engaging content for brands,
                  content creators, and filmmakers.
                </p>
                <p>
                  From concept to final cut, I bring creativity and technical expertise to every project,
                  ensuring your story resonates with your audience.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-gray-900 mb-0.5">{stat.number}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
