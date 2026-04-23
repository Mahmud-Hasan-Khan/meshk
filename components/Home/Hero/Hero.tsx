// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// // স্লাইড ডেটার টাইপ ডিফাইন
// interface Slide {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
//   buttonText: string;
//   buttonLink: string;
// }

// interface HeroProps {
//   slides: Slide[];
// }

// export default function Hero({ slides = [] }: HeroProps) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // অটো-প্লে লজিক (৭ সেকেন্ড পর পর)
//   useEffect(() => {
//     if (slides.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   if (!slides.length) return null;

//   return (
//     <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-gray-900">

//       {/* ১. লেয়ারিং ট্রিক: পেছনের লেয়ারে সবসময় বর্তমান ইমেজ রাখা যাতে কালো রঙ না দেখা যায় */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={slides[currentSlide].image}
//           alt="background-fallback"
//           fill
//           className="object-cover brightness-[0.2]"
//           unoptimized // ব্যাকগ্রাউন্ড ইমেজ দ্রুত দেখানোর জন্য
//         />
//       </div>

//       <AnimatePresence mode="popLayout" initial={false}>
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="absolute inset-0 z-10"
//         >
//           {/* ইমেজ স্লাইড এবং জুম ইফেক্ট */}
//           <motion.div 
//             initial={{ scale: 1.15 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 8, ease: "easeOut" }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].title}
//               fill
//               priority // SSR পারফরম্যান্সের জন্য
//               className="object-cover"
//               sizes="100vw"
//             />
//           </motion.div>

//           {/* ডার্ক গ্রেডিয়েন্ট ওভারলে */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20" />

//           {/* টেক্সট কন্টেন্ট */}
//           <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex items-center">
//             <div className="max-w-3xl">
//               <motion.span
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="inline-block px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold mb-4 uppercase tracking-widest"
//               >
//                 {slides[currentSlide].subtitle}
//               </motion.span>

//               <motion.h1
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
//               >
//                 {slides[currentSlide].title}
//               </motion.h1>

//               <motion.p
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium"
//               >
//                 {slides[currentSlide].description}
//               </motion.p>

//               <motion.div
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.9 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <Link 
//                   href={slides[currentSlide].buttonLink} 
//                   className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all flex items-center group shadow-xl"
//                 >
//                   {slides[currentSlide].buttonText} 
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>

//                 <Link 
//                   href="/about" 
//                   className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
//                 >
//                   Learn More
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* নেভিগেশন কন্ট্রোলস */}
//       <div className="absolute inset-0 z-40 flex items-center justify-between px-4 pointer-events-none">
//         <button 
//           onClick={prevSlide} 
//           className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-emerald-600 transition-all backdrop-blur-sm border border-white/10"
//         >
//           <ChevronLeft size={28} />
//         </button>
//         <button 
//           onClick={nextSlide} 
//           className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-emerald-600 transition-all backdrop-blur-sm border border-white/10"
//         >
//           <ChevronRight size={28} />
//         </button>
//       </div>

//       {/* স্লাইড ইন্ডিকেটর */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             className={`h-1.5 rounded-full transition-all duration-500 ${
//               currentSlide === i ? "w-10 bg-emerald-500" : "w-3 bg-white/30"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// interface Slide {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
//   buttonText: string;
//   buttonLink: string;
// }

// interface HeroProps {
//   slides: Slide[];
// }

// export default function Hero({ slides = [] }: HeroProps) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     if (slides.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   if (!slides.length) return null;

//   return (
//     <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-gray-900">

//       {/* Background Fallback Layer */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={slides[currentSlide].image}
//           alt="bg-fallback"
//           fill
//           className="object-cover brightness-[0.2]"
//           unoptimized 
//         />
//       </div>

//       <AnimatePresence mode="popLayout" initial={false}>
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="absolute inset-0 z-10"
//         >
//           {/* Animated Background Image */}
//           <motion.div 
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 8, ease: "easeOut" }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].title}
//               fill
//               priority
//               className="object-cover"
//               sizes="100vw"
//             />
//           </motion.div>

//           {/* Overlay - Mobile optimized gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent z-20" />

//           {/* Text Content - Mobile First Padding & Alignment */}
//           <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex items-end pb-24 md:items-center md:pb-0">
//             <div className="max-w-3xl w-full">
//               <motion.span
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] md:text-xs font-bold mb-3 md:mb-4 uppercase tracking-widest"
//               >
//                 {slides[currentSlide].subtitle}
//               </motion.span>

//               <motion.h1
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl"
//               >
//                 {slides[currentSlide].title}
//               </motion.h1>

//               <motion.p
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="text-sm md:text-xl text-gray-200 mb-6 md:mb-10 max-w-2xl font-medium line-clamp-3 md:line-clamp-none"
//               >
//                 {slides[currentSlide].description}
//               </motion.p>

//               <motion.div
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.9 }}
//                 className="flex flex-col sm:flex-row gap-3 md:gap-4"
//               >
//                 <Link 
//                   href={slides[currentSlide].buttonLink} 
//                   className="px-6 py-3 md:px-8 md:py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl md:rounded-2xl transition-all flex items-center justify-center group shadow-xl text-sm md:text-base"
//                 >
//                   {slides[currentSlide].buttonText} 
//                   <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>

//                 <Link 
//                   href="/about" 
//                   className="px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl md:rounded-2xl hover:bg-white/20 transition-all text-center text-sm md:text-base"
//                 >
//                   Learn More
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Controls - Hidden on small mobile to avoid clutter */}
//       <div className="absolute inset-0 z-40 hidden sm:flex items-center justify-between px-4 pointer-events-none">
//         <button 
//           onClick={prevSlide} 
//           className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/20 text-white hover:bg-emerald-600 transition-all backdrop-blur-sm border border-white/10"
//         >
//           <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
//         </button>
//         <button 
//           onClick={nextSlide} 
//           className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/20 text-white hover:bg-emerald-600 transition-all backdrop-blur-sm border border-white/10"
//         >
//           <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
//         </button>
//       </div>

//       {/* Slide Indicators - Bigger touch area for mobile */}
//       <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-2 md:gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
//               currentSlide === i ? "w-8 md:w-12 bg-emerald-500" : "w-2 md:w-3 bg-white/30"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// interface Slide {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
//   buttonText: string;
//   buttonLink: string;
// }

// interface HeroProps {
//   slides: Slide[];
// }

// export default function Hero({ slides = [] }: HeroProps) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     if (slides.length <= 1) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   if (!slides.length) return null;

//   return (
//     <section className="relative w-full h-[90dvh] overflow-hidden bg-black">

//       {/* Background Fallback Layer */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={slides[currentSlide].image}
//           alt="bg-fallback"
//           fill
//           className="object-cover brightness-[0.2]"
//           unoptimized 
//         />
//       </div>

//       <AnimatePresence mode="popLayout" initial={false}>
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="absolute inset-0 z-10"
//         >
//           {/* Animated Background Image */}
//           <motion.div 
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 8, ease: "easeOut" }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={slides[currentSlide].image}
//               alt={slides[currentSlide].title}
//               fill
//               priority
//               className="object-cover"
//               sizes="100vw"
//             />
//           </motion.div>

//           {/* Overlay - Bottom focused for Mobile Text legibility */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent z-20" />

//           {/* Content Wrapper */}
//           <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex items-center md:items-center">
//             <div className="max-w-3xl w-full mt-10 md:mt-0">
//               {/* Subtitle */}
//               <motion.span
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] md:text-xs font-bold mb-3 md:mb-4 uppercase tracking-widest"
//               >
//                 {slides[currentSlide].subtitle}
//               </motion.span>

//               {/* Title */}
//               <motion.h1
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-[1.1] drop-shadow-2xl"
//               >
//                 {slides[currentSlide].title}
//               </motion.h1>

//               {/* Description */}
//               <motion.p
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.7, duration: 0.8 }}
//                 className="text-sm md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl font-medium line-clamp-3 md:line-clamp-none"
//               >
//                 {slides[currentSlide].description}
//               </motion.p>

//               {/* Buttons Container - Updated for non-full-width on mobile */}
//               <motion.div
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.9 }}
//                 className="flex flex-row flex-wrap gap-3 md:gap-4 items-center"
//               >
//                 <Link 
//                   href={slides[currentSlide].buttonLink} 
//                   className="w-fit px-6 py-3 md:px-8 md:py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl md:rounded-2xl transition-all flex items-center justify-center group shadow-xl text-sm md:text-base"
//                 >
//                   {slides[currentSlide].buttonText} 
//                   <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>

//                 <Link 
//                   href="/about" 
//                   className="w-fit px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl md:rounded-2xl hover:bg-white/20 transition-all text-sm md:text-base whitespace-nowrap"
//                 >
//                   Learn More
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows (Desktop Only) */}
//       <div className="absolute inset-0 z-40 hidden md:flex items-center justify-between px-6 pointer-events-none">
//         <button 
//           onClick={prevSlide} 
//           className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-emerald-600 transition-all backdrop-blur-sm border border-white/10"
//         >
//           <ChevronLeft className="h-8 w-8" />
//         </button>
//         <button 
//           onClick={nextSlide} 
//           className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-emerald-600 transition-all backdrop-blur-sm border border-white/10"
//         >
//           <ChevronRight className="h-8 w-8" />
//         </button>
//       </div>

//       {/* Modern Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ${
//               currentSlide === i ? "w-8 md:w-12 bg-emerald-500" : "w-3 md:w-4 bg-white/20"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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

    useEffect(() => {
        if (slides.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    if (!slides.length) return null;

    return (
        <section className="relative w-full h-[90dvh] overflow-hidden bg-black">

            {/* Background Fallback */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={slides[currentSlide].image}
                    alt="bg-fallback"
                    fill
                    className="object-cover brightness-[0.3]"
                    unoptimized
                />
            </div>

            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-10"
                >
                    {/* Zooming Image */}
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
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                    </motion.div>

                    {/* Overlay - Adjusted for better mobile contrast */}
                    <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/80 md:to-transparent z-20" />

                    {/* Content Wrapper - FIXED ALIGNMENT */}
                    <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex items-center md:items-center">
                        <div className="max-w-3xl w-full">

                            {/* Subtitle Tag */}
                            <motion.span
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="inline-block px-4 py-1.5 rounded-lg bg-[#00A86B] text-white text-[11px] md:text-xs font-bold mb-4 uppercase tracking-wider"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.span>

                            {/* Title - Optimized sizes */}
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.2] tracking-tight drop-shadow-xl"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>

                            {/* Description - Better spacing */}
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="text-base md:text-xl text-gray-100 mb-8 md:mb-10 max-w-2xl font-normal leading-relaxed opacity-90"
                            >
                                {slides[currentSlide].description}
                            </motion.p>

                            {/* Buttons - Mobile Row, No full width */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="flex flex-row flex-wrap gap-3 md:gap-5 items-center"
                            >
                                <Link
                                    href={slides[currentSlide].buttonLink}
                                    className="w-fit px-6 py-3.5 md:px-8 md:py-4 bg-[#00A86B] hover:bg-[#008f5a] text-white font-bold rounded-2xl transition-all flex items-center justify-center group shadow-lg text-sm md:text-base"
                                >
                                    {slides[currentSlide].buttonText}
                                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    href="/about"
                                    className="w-fit px-6 py-3.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-sm md:text-base"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Desktop Navigation */}
            <div className="absolute inset-0 z-40 hidden md:flex items-center justify-between px-6 pointer-events-none">
                <button onClick={prevSlide} className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-[#00A86B] transition-all"><ChevronLeft size={32} /></button>
                <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full bg-black/20 text-white hover:bg-[#00A86B] transition-all"><ChevronRight size={32} /></button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? "w-10 bg-[#00A86B]" : "w-4 bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}