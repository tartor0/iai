import { useState, useEffect } from 'react';
import { MdEmail, MdChat, MdPublic } from 'react-icons/md';
import { IoSend } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-900/70 to-black/90" />
      
      {/* Animated Overlay Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '10%',
            right: '10%',
            animationDelay: '1s',
            transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '50%',
            left: '50%',
            animationDelay: '2s',
            transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative font-poppins-med z-10">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl font-pacifico">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-black/40 backdrop-blur-2xl border border-blue-400/30 p-6 rounded-2xl hover:border-blue-400/50 transition-all shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-400/30">
                      <MdEmail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-400 text-sm">iai@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-2xl border border-blue-400/30 p-6 rounded-2xl hover:border-purple-400/50 transition-all shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-400/30">
                      <MdChat className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Live Chat</h3>
                      <p className="text-gray-400 text-sm">Available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-2xl border border-blue-400/30 p-6 rounded-2xl hover:border-green-400/50 transition-all shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-400/30">
                      <MdPublic className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Location</h3>
                      <p className="text-gray-400 text-sm">Global Team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-black/40 backdrop-blur-2xl border border-blue-400/30 p-8 rounded-2xl shadow-2xl">
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
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 text-green-400">
                        <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Message sent! We'll get back to you soon.</span>
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      className="w-full py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <IoSend className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="relative z-10 py-8 text-center text-gray-400 border-t border-white/10">
          <p>© 2025 IAI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}