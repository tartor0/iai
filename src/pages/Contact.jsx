import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call when client provides endpoint
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-poppins min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-black/30 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">📧</span>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400 text-sm">hello@iai.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">💬</span>
                  <div>
                    <h3 className="text-white font-semibold">Live Chat</h3>
                    <p className="text-gray-400 text-sm">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">🌍</span>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-400 text-sm">Global Team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-black/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      rows="6"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  {submitted && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400">
                      ✓ Message sent! We'll get back to you soon.
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2025 IAI. All rights reserved.</p>
      </footer>
    </div>
  );
}