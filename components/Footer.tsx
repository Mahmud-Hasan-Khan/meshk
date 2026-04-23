import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Heart, Info, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative h-12 w-12">
                <Image src="/logo.jpeg" alt="MESHK Logo" fill className="object-contain" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-[#168a44]">MESHK</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Muslim Education Society Hong Kong aims to provide children with a structured curriculum on Basic Islamic deen and spread Islamic knowledge among the Muslim community in Hong Kong through dawah work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#168a44] mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/curriculum" className="hover:text-emerald-600 transition-colors">Our Curriculum</Link></li>
              <li><Link href="/dawah" className="hover:text-emerald-600 transition-colors">Dawah Work</Link></li>
              <li><Link href="/about" className="hover:text-emerald-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#168a44] mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#168a44] shrink-0" />
                <span>Hong Kong</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#168a44] shrink-0" />
                <span>+852 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#168a44] shrink-0" />
                <span>info@meshk.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 text-center text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Muslim Education Society Hong Kong (MESHK). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
