'use client';

import { CardCarousel } from '@/src/components/ui/card-carousel';
import { Play, ExternalLink, Calendar, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export default function ProjectSection() {
  // Project images for the carousel
  const projectImages = [
    {
      src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=400&fit=crop&crop=center",
      alt: "Corporate Brand Video - Professional company showcase"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop&crop=center",
      alt: "Product Launch Campaign - Dynamic product reveal"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop&crop=center",
      alt: "Wedding Highlight Reel - Emotional wedding story"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop&crop=center",
      alt: "Music Video - Creative visual effects"
    },
    {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=400&fit=crop&crop=center",
      alt: "Documentary Short - Community heroes story"
    },
    {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=400&fit=crop&crop=center",
      alt: "Social Media Campaign - Brand awareness videos"
    }
  ];

  const featuredProjects = [
    {
      title: "Corporate Brand Video",
      description: "A dynamic brand video showcasing company values and culture with professional cinematography",
      category: "Corporate",
      duration: "2:30",
      year: "2024",
      awards: ["Best Corporate Video", "Creative Excellence"],
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop"
    },
    {
      title: "Product Launch Campaign",
      description: "High-energy product reveal with motion graphics and stunning visual effects",
      category: "Commercial",
      duration: "1:45",
      year: "2024",
      awards: ["Marketing Excellence", "Visual Effects Award"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "Wedding Highlight Reel",
      description: "Emotional wedding story capturing perfect moments with cinematic storytelling",
      category: "Wedding",
      duration: "3:15",
      year: "2024",
      awards: ["Best Wedding Video", "Emotional Impact"],
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop"
    }
  ];



  return (
    <section id="portfolio" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-red-400/10 to-purple-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Card Carousel */}
        <div className="mb-12 lg:mb-16">
          <CardCarousel
            images={projectImages}
            autoplayDelay={3000}
            showPagination={true}
            showNavigation={true}
          />
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-12 lg:mb-20">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Featured Work
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recent Highlights
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our latest award-winning projects that showcase creativity,
              technical excellence, and compelling storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                href="/portfolio"
                className="group relative block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Main Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-2xl">
                      <Play className="w-10 h-10 text-white fill-white" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm flex items-center gap-2 font-medium shadow-lg">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {project.category}
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    {/* Year */}
                    <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
                      {project.title}
                    </h4>

                    {/* Awards - Minimal Icons */}
                    <div className="flex gap-2">
                      {project.awards.map((award, idx) => (
                        <div
                          key={idx}
                          className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 p-2 rounded-full"
                          title={award}
                        >
                          <Award className="w-4 h-4 text-yellow-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12 lg:mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg group"
            >
              <span>Explore All Projects</span>
              <div className="bg-red-100 p-2 rounded-full group-hover:bg-red-200 transition-colors">
                <ExternalLink className="w-4 h-4 text-red-600" />
              </div>
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
}
