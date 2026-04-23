import { BookOpen, ShieldCheck, Star, GraduationCap, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CurriculumPage() {
  const subjects = [
    { title: 'Aqaid', description: 'Understanding the fundamentals of Islamic faith, including the pillars of Iman.', icon: ShieldCheck, color: 'text-[#168a44]' },
    { title: 'Fiqh', description: 'Practical rules of Islamic jurisprudence: Taharah, Salah, Sawm, Zakat, and Hajj.', icon: BookOpen, color: 'text-[#168a44]' },
    { title: 'Sirah', description: 'The life and teachings of Prophet Muhammad (PBUH) from birth to the final message.', icon: Star, color: 'text-amber-600' },
    { title: 'Ahadith', description: 'Studying selected sayings of the Prophet (PBUH) relevant to daily life.', icon: GraduationCap, color: 'text-[#168a44]' },
    { title: 'Tarikh', description: 'Islamic History: The Rashidun Caliphs and the spread of Islam.', icon: Users, color: 'text-amber-600' },
    { title: 'Akhlaq', description: 'Developing noble character, honesty, patience, and Islamic ethics.', icon: Heart, color: 'text-[#168a44]' },
    { title: 'Adab', description: 'Islamic manners and etiquette in social and personal life.', icon: Users, color: 'text-amber-600' },
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Our Curriculum</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            A comprehensive and structured approach to Basic Islamic Deen, designed specifically for children in the Hong Kong context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div key={subject.title} className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-8">
                <div className="bg-emerald-50 p-4 rounded-2xl mr-5 group-hover:bg-[#168a44] transition-colors duration-300">
                  <subject.icon className={`h-8 w-8 ${subject.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{subject.title}</h3>
              </div>
              <p className="text-gray-500 mb-10 flex-grow leading-relaxed font-medium">
                {subject.description}
              </p>
              <Link 
                href={`/curriculum/${subject.title.toLowerCase()}`} 
                className="inline-flex items-center text-[#168a44] font-bold hover:underline transition-all"
              >
                Detailed Syllabus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#168a44] rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl shadow-emerald-200 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="flex flex-wrap gap-4 p-4">
                {[...Array(20)].map((_, i) => (
                    <BookOpen key={i} className="h-12 w-12" />
                ))}
             </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-6 tracking-tighter">Ready to Enroll Your Child?</h2>
            <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto font-medium">
                Join our weekend classes and provide your child with a solid foundation in Islamic knowledge and character.
            </p>
            <Link href="/contact" className="bg-white text-[#168a44] px-12 py-5 rounded-2xl font-black hover:bg-emerald-50 transition-all inline-block shadow-xl text-lg">
                Get Admission Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
