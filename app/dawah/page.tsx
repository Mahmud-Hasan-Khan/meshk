import { Heart, Users, Globe, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DawahPage() {
  const activities = [
    { title: 'Community Outreach', description: 'Visiting local mosques and community centers to spread Islamic awareness.', icon: Globe },
    { title: 'Educational Workshops', description: 'Specialized seminars for parents and young adults about Islam in HK.', icon: Users },
    { title: 'Resource Distribution', description: 'Free Islamic literature, translations, and guides for the public.', icon: BookOpen },
    { title: 'Interfaith Dialogues', description: 'Building bridges with other communities in Hong Kong.', icon: Heart },
  ];

  return (
    <div className="bg-emerald-50/20 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Dawah in Hong Kong</h1>
          <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
            MESHK is committed to spreading the message of Islam through peace, education, and community service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-emerald-100 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Vision for Dawah</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In a diverse city like Hong Kong, it is essential to present Islam in a way that is clear, compassionate, and relevant to the modern context. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We focus on removing misconceptions and highlighting the universal values of compassion, justice, and faith.
            </p>
            <Link href="/contact" className="text-amber-600 font-bold hover:text-amber-700 flex items-center transition-colors">
              Get involved in our outreach program <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-emerald-900 text-amber-50 p-8 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-all">
                <activity.icon className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="text-emerald-100/80 text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-emerald-200 text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 italic">&quot;Invite to the way of your Lord with wisdom and good instruction...&quot;</h2>
          <p className="text-gray-500 mb-0 font-medium tracking-wide">— Surah An-Nahl 16:125</p>
        </div>
      </div>
    </div>
  );
}
