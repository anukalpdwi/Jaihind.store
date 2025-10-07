import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Award, Star } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Premium Army Uniforms',
    subtitle: 'Authentic & High Quality',
    description: 'Complete uniform sets for Indian Army personnel. Made with precision and pride.',
    image: '/bg3.png',
    cta: 'Shop Army Uniforms',
    ctaLink: '/products?category=army-uniforms'
  },
  {
    id: 2,
    title: 'NCC Cadet Essentials',
    subtitle: 'Complete Uniform Sets',
    description: 'Everything NCC cadets need - from uniforms to accessories. Regulation compliant.',
    image: 'g1.jpeg',
    cta: 'Browse NCC Collection',
    ctaLink: '/products?category=ncc-uniforms'
  },
  {
    id: 3,
    title: 'Police Gear & Uniforms',
    subtitle: 'Professional Equipment',
    description: 'Trusted by law enforcement. Quality police uniforms and tactical gear.',
    image: 'https://qmstore.in/wp-content/uploads/2024/10/3-2.png.webp',
    cta: 'Explore Police Gear',
    ctaLink: '/products?category=police-uniforms'
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[5000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white space-y-6 animate-slideUp">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 font-semibold ml-2">Trusted by Thousands</span>
              </div>

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-bold">
                <Award className="h-4 w-4" />
                <span>{slide.subtitle}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-200">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={slide.ctaLink}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-2xl"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>{slide.cta}</span>
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all border-2 border-white"
                >
                  View All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all transform hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all transform hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
