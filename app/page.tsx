'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Heart, Users, GraduationCap,
  ArrowRight, ShieldCheck, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import Hero from '@/components/Home/Hero/Hero';

export default function Home() {

  const slides = [
    {
      title: "Empowering the Next Generation",
      subtitle: "Serving the HK Muslim Community",
      description: "Structured Islamic curriculum for children in Hong Kong, focusing on faith, character, and community values.",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f", // Users can replace these with actual image paths
      buttonText: "Explore Curriculum",
      buttonLink: "/curriculum"
    },
    {
      title: "Rooted in Faith, Growing in Wisdom",
      subtitle: "Islamic Education for Kids",
      description: "From Aqaid to Adab, we provide a holistic learning experience for Muslim children in a modern multicultural city.",
      image: "https://images.unsplash.com/photo-1590273089302-ebbc53986b6e?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText: "Our Subjects",
      buttonLink: "/curriculum"
    },
    {
      title: "Spreading the Light of Deen",
      subtitle: "Dawah & Outreach in HK",
      description: "Active community engagement to share the beauty of Islam with peace, wisdom, and good instruction.",
      image: "https://images.unsplash.com/photo-1528862973381-9bc5ad6d4227?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText: "Support Our Work",
      buttonLink: "/dawah"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const subjects = [
    { title: 'Aqaid', description: 'Understanding the fundamentals of Islamic faith.', icon: ShieldCheck, color: 'text-emerald-600' },
    { title: 'Fiqh', description: 'Learning the practical rules of Islamic jurisprudence.', icon: BookOpen, color: 'text-emerald-600' },
    { title: 'Sirah', description: 'The life and teachings of Prophet Muhammad (PBUH).', icon: Star, color: 'text-amber-600' },
    { title: 'Ahadith', description: 'Studying the noble sayings of the Prophet (PBUH).', icon: GraduationCap, color: 'text-emerald-600' },
    { title: 'Akhlaq', description: 'Developing noble character and Islamic ethics.', icon: Heart, color: 'text-amber-600' },
    { title: 'Adab', description: 'Practicing Islamic manners and etiquette.', icon: Users, color: 'text-emerald-600' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <Hero slides={slides} />

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Our Purpose</h2>
            <div className="h-1.5 w-20 bg-[#168a44] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  &quot;Muslim Education Society Hong Kong (MESHK) is dedicated to providing a comprehensive Islamic education tailored for children living in a multicultural environment.&quot;
                </p>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed">
                We bridge the gap between traditional knowledge and modern living, ensuring our children grow up with a strong identity and sound understanding of their deen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#168a44] p-3 rounded-2xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-700">Child-Centric</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#168a44] p-3 rounded-2xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-700">Community Focused</span>
                </div>
              </div>
            </div>
            <div className="bg-[#168a44] rounded-[2.5rem] p-1 gap-1 grid grid-cols-2 shadow-2xl shadow-emerald-200 overflow-hidden">
              <div className="aspect-square bg-emerald-600/20 backdrop-blur-sm flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-white/50" />
              </div>
              <div className="aspect-square bg-white flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-[#168a44]" />
              </div>
              <div className="aspect-square bg-white flex items-center justify-center">
                <ShieldCheck className="h-16 w-16 text-[#168a44]" />
              </div>
              <div className="aspect-square bg-emerald-600/20 backdrop-blur-sm flex items-center justify-center">
                <Users className="h-16 w-16 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Core Curriculum</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Our structured program covers the essential pillars of Islamic knowledge for a well-rounded foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <div key={subject.title} className="group bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300">
                <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#168a44] transition-colors duration-300">
                  <subject.icon className={`h-8 w-8 ${subject.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{subject.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-medium">{subject.description}</p>
                <Link href={`/curriculum/${subject.title.toLowerCase()}`} className="text-[#168a44] font-bold flex items-center group-hover:underline">
                  View Syllabus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dawah Section CTA */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto bg-[#168a44] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-200">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-8 h-full">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-white"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/30">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Spreading the Message <br />in Hong Kong</h2>
            <p className="text-xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Beyond education, MESHK is committed to dawah work within the local community. We organize events, workshops, and provide resources to help everyone understand the beauty of Islam.
            </p>
            <Link href="/dawah" className="px-12 py-5 bg-white text-[#168a44] hover:bg-emerald-50 font-black rounded-2xl transition-all shadow-xl inline-block text-lg">
              Support Our Dawah Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}