'use client';

import { Play, ExternalLink, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Corporate Brand Video",
      description: "A dynamic brand video showcasing company values and culture",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      duration: "2:30",
      category: "Corporate",
      date: "2024-01",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      description: "High-energy product reveal with motion graphics and animations",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      duration: "1:45",
      category: "Commercial",
      date: "2024-02",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Wedding Highlight Reel",
      description: "Emotional wedding story capturing the perfect moments",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop",
      duration: "3:15",
      category: "Wedding",
      date: "2024-03",
      videoUrl: "#"
    },
    {
      id: 4,
      title: "Music Video",
      description: "Creative music video with artistic visual effects",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      duration: "4:20",
      category: "Music",
      date: "2024-04",
      videoUrl: "#"
    },
    {
      id: 5,
      title: "Documentary Short",
      description: "Compelling documentary about local community heroes",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
      duration: "8:45",
      category: "Documentary",
      date: "2024-05",
      videoUrl: "#"
    },
    {
      id: 6,
      title: "Social Media Campaign",
      description: "Series of engaging social media videos for brand awareness",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      duration: "0:30",
      category: "Social Media",
      date: "2024-06",
      videoUrl: "#"
    }
  ];

  const categories = ["All", "Corporate", "Commercial", "Wedding", "Music", "Documentary", "Social Media"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            My Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Explore my collection of video editing projects spanning various industries and styles.
            Each project tells a unique story through creative visual storytelling.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 bg-white border border-gray-200 text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600 touch-target"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white/30 transition-colors touch-target">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.videoUrl}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
