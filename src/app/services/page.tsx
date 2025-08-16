'use client';

import { Video, Scissors, Palette, Music, Zap, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing with seamless cuts, transitions, and storytelling",
      features: ["Multi-camera editing", "Color correction", "Audio synchronization", "Motion graphics"],
      price: "Starting at $50/hour",
      popular: false
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Transform your footage with professional color grading and visual enhancement",
      features: ["Cinematic color grading", "Mood enhancement", "Skin tone correction", "Creative looks"],
      price: "Starting at $75/hour",
      popular: true
    },
    {
      icon: Music,
      title: "Audio Post-Production",
      description: "Complete audio editing, mixing, and sound design for your videos",
      features: ["Audio cleanup", "Sound mixing", "Background music", "Voice enhancement"],
      price: "Starting at $40/hour",
      popular: false
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description: "Eye-catching animations and motion graphics to elevate your content",
      features: ["Logo animations", "Text animations", "Infographics", "Visual effects"],
      price: "Starting at $100/hour",
      popular: false
    },
    {
      icon: Scissors,
      title: "Short Form Content",
      description: "Optimized editing for social media platforms and short-form content",
      features: ["Instagram Reels", "TikTok videos", "YouTube Shorts", "Social media optimization"],
      price: "Starting at $30/video",
      popular: true
    },
    {
      icon: Clock,
      title: "Rush Delivery",
      description: "Fast turnaround for urgent projects without compromising quality",
      features: ["24-hour delivery", "Priority support", "Real-time updates", "Quality guarantee"],
      price: "2x standard rate",
      popular: false
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "$299",
      duration: "per project",
      description: "Perfect for simple video editing needs",
      features: [
        "Up to 5 minutes final video",
        "Basic color correction",
        "Simple transitions",
        "Background music",
        "2 rounds of revisions",
        "HD 1080p export"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      duration: "per project",
      description: "Ideal for business and marketing content",
      features: [
        "Up to 10 minutes final video",
        "Advanced color grading",
        "Custom transitions",
        "Motion graphics",
        "Audio enhancement",
        "4 rounds of revisions",
        "4K export available"
      ],
      cta: "Choose Professional",
      popular: true
    },
    {
      name: "Premium",
      price: "$999",
      duration: "per project",
      description: "Complete video production solution",
      features: [
        "Up to 20 minutes final video",
        "Cinematic color grading",
        "Custom animations",
        "Advanced motion graphics",
        "Professional audio mixing",
        "Unlimited revisions",
        "4K export + source files"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Video Editing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional video editing services to bring your vision to life. From simple cuts to complex motion graphics, 
            I deliver high-quality results that engage your audience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-red-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-lg font-bold text-red-600 mb-4">{service.price}</div>
                
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-red-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Packages Section */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Project Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-red-500 scale-105' : 'hover:scale-105'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-1">{pkg.price}</div>
                  <div className="text-gray-500">{pkg.duration}</div>
                  <p className="text-gray-600 mt-4">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
