// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// interface Slide {
//     title: string;
//     subtitle: string;
//     description: string;
//     image: string;
//     buttonText: string;
//     buttonLink: string;
// }

// export default function Hero({ slides = [] }: { slides: Slide[] }) {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         if (slides.length <= 1) return;
//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 7000);
//         return () => clearInterval(interval);
//     }, [slides.length]);

//     const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//     const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//     if (!slides.length) return null;

//     return (
//         <section className="relative w-full h-[90dvh] overflow-hidden bg-black">

//             {/* Background Fallback */}
//             <div className="absolute inset-0 z-0">
//                 <Image
//                     src={slides[currentSlide].image}
//                     alt="bg-fallback"
//                     fill
//                     className="object-cover brightness-[0.3]"
//                     unoptimized
//                 />
//             </div>

//             <AnimatePresence mode="popLayout" initial={false}>
//                 <motion.div
//                     key={currentSlide}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 1.2, ease: "easeInOut" }}
//                     className="absolute inset-0 z-10"
//                 >
//                     {/* Zooming Image */}
//                     <motion.div
//                         initial={{ scale: 1.1 }}
//                         animate={{ scale: 1 }}
//                         transition={{ duration: 8, ease: "easeOut" }}
//                         className="absolute inset-0"
//                     >
//                         <Image
//                             src={slides[currentSlide].image}
//                             alt={slides[currentSlide].title}
//                             fill
//                             priority
//                             className="object-cover"
//                             sizes="100vw"
//                         />
//                     </motion.div>

//                     {/* Overlay - Adjusted for better mobile contrast */}
//                     <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/80 md:to-transparent z-20" />

//                     {/* Content Wrapper - FIXED ALIGNMENT */}
//                     <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex items-center md:items-center">
//                         <div className="max-w-3xl w-full">

//                             {/* Subtitle Tag */}
//                             <motion.span
//                                 initial={{ y: 20, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.3, duration: 0.8 }}
//                                 className="inline-block px-4 py-1.5 rounded-lg bg-[#00A86B] text-white text-[11px] md:text-xs font-bold mb-4 uppercase tracking-wider"
//                             >
//                                 {slides[currentSlide].subtitle}
//                             </motion.span>

//                             {/* Title - Optimized sizes */}
//                             <motion.h1
//                                 initial={{ y: 30, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.5, duration: 0.8 }}
//                                 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.2] tracking-tight drop-shadow-xl"
//                             >
//                                 {slides[currentSlide].title}
//                             </motion.h1>

//                             {/* Description - Better spacing */}
//                             <motion.p
//                                 initial={{ y: 30, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.7, duration: 0.8 }}
//                                 className="text-base md:text-xl text-gray-100 mb-8 md:mb-10 max-w-2xl font-normal leading-relaxed opacity-90"
//                             >
//                                 {slides[currentSlide].description}
//                             </motion.p>

//                             {/* Buttons - Mobile Row, No full width */}
//                             <motion.div
//                                 initial={{ y: 30, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 0.9 }}
//                                 className="flex flex-row flex-wrap gap-3 md:gap-5 items-center"
//                             >
//                                 <Link
//                                     href={slides[currentSlide].buttonLink}
//                                     className="w-fit px-6 py-3.5 md:px-8 md:py-4 bg-[#00A86B] hover:bg-[#008f5a] text-white font-bold rounded-2xl transition-all flex items-center justify-center group shadow-lg text-sm md:text-base"
//                                 >
//                                     {slides[currentSlide].buttonText}
//                                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
//                                 </Link>

//                                 <Link
//                                     href="/about"
//                                     className="w-fit px-6 py-3.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-sm md:text-base"
//                                 >
//                                     Learn More
//                                 </Link>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Desktop Navigation */}
//             <div className="absolute inset-0 z-40 hidden md:flex items-center justify-between px-6 pointer-events-none">
//                 <button onClick={prevSlide} className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-[#00A86B] transition-all"><ChevronLeft size={32} /></button>
//                 <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-[#00A86B] transition-all"><ChevronRight size={32} /></button>
//             </div>

//             {/* Indicators */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
//                 {slides.map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => setCurrentSlide(i)}
//                         className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? "w-10 bg-[#00A86B]" : "w-4 bg-white/30"
//                             }`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export default function Hero({ slides = [] }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  // ✅ Hydration mismatch রোধ করার জন্য mounted চেক
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Auto slide টাইমার
  useEffect(() => {
    if (!mounted || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [mounted, slides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (!slides || slides.length === 0) return null;

  return (
    <section className="relative w-full h-[90dvh] overflow-hidden bg-black">
      
      {/* 1️⃣ Static Background (SSR এর জন্য, যাতে শুরুতে সাদা না দেখায়) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slides[currentSlide].image}
          alt="hero-bg"
          fill
          priority={currentSlide === 0} // প্রথম স্লাইডের জন্য প্রায়োরিটি
          className="object-cover brightness-[0.3]"
          sizes="100vw"
        />
      </div>

      {/* 2️⃣ Animated Layers (শুধু মাউন্ট হওয়ার পর কাজ করবে) */}
      <AnimatePresence mode="popLayout" initial={false}>
        {mounted && (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            {/* 🎥 Zooming Animation */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>

            {/* 🎭 Optimized Overlay */}
            <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/90 md:to-transparent z-20" />

            {/* 📝 Content Wrapper */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl w-full">
                
                {/* Subtitle with slide-up animation */}
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-block px-4 py-1.5 rounded-lg bg-[#00A86B] text-white text-[11px] md:text-xs font-bold mb-4 uppercase tracking-wider"
                >
                  {slides[currentSlide].subtitle}
                </motion.span>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex gap-4 flex-wrap items-center"
                >
                  <Link
                    href={slides[currentSlide].buttonLink}
                    className="px-8 py-4 bg-[#00A86B] hover:bg-[#008f5a] text-white font-bold rounded-2xl transition-all flex items-center group shadow-lg"
                  >
                    {slides[currentSlide].buttonText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/about"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3️⃣ Navigation & Indicators (UI elements) */}
      <div className="absolute inset-0 z-40 hidden md:flex items-center justify-between px-6 pointer-events-none">
        <button onClick={prevSlide} className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-[#00A86B] transition-all">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-[#00A86B] transition-all">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === i ? "w-10 bg-[#00A86B]" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}