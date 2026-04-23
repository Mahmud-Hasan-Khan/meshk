import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-emerald-50/20 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Contact Us</h1>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            Have questions about our curriculum or dawah programs? Reach out to us, and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-emerald-100">
            <h2 className="text-2xl font-bold text-emerald-900 mb-8 flex items-center">
              <MessageSquare className="mr-3 text-emerald-600" /> Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50/30" placeholder="Ahmad Ali" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-emerald-900 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50/30" placeholder="ahmad@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50/30">
                  <option>Admission Inquiry</option>
                  <option>Dawah Partnership</option>
                  <option>General Question</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-emerald-900 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50/30" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center">
                Send Message <Send className="ml-3 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-4 rounded-2xl mr-6">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">Hong Kong, SAR</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-4 rounded-2xl mr-6">
                    <Phone className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">+852 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-4 rounded-2xl mr-6">
                    <Mail className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@meshk.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900 text-amber-50 p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <ul className="space-y-3 text-emerald-100">
                <li className="flex justify-between"><span>Monday - Friday:</span> <span className="font-bold">9:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span className="font-bold">10:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span className="font-bold text-amber-400 uppercase">Class Day</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
