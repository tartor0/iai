import { useState, useEffect } from 'react';
import { FaRobot, FaChartLine, FaBolt, FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
              <h1 className="text-5xl font-pacifico md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                About Insurance + AI
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
                Building the future of intelligent automation
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-2xl border border-blue-400/30 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  At IAI, we're on a mission to revolutionize how businesses leverage artificial intelligence. 
                  We believe in creating powerful, accessible tools that empower teams to work smarter, not harder.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-2xl border border-blue-400/30 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We're developing cutting-edge AI solutions that integrate seamlessly into your workflow. 
                  Our platform combines the latest in machine learning, natural language processing, and automation 
                  to deliver results that matter.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                      <FaRobot className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">AI Automation</h3>
                      <p className="text-gray-400 text-sm">Streamline repetitive tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-400/30">
                      <FaChartLine className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Smart Analytics</h3>
                      <p className="text-gray-400 text-sm">Data-driven insights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-yellow-400/30">
                      <FaBolt className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Real-time Processing</h3>
                      <p className="text-gray-400 text-sm">Instant results</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-green-400/50 transition-all">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-400/30">
                      <FaLock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Enterprise Security</h3>
                      <p className="text-gray-400 text-sm">Your data is safe</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-2xl border border-blue-400/30 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6 bg-white/5 py-4 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                    <p className="text-gray-300">We constantly push the boundaries of what's possible with AI technology.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6 bg-white/5 py-4 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">User-Centric Design</h3>
                    <p className="text-gray-300">Every feature is built with the end user in mind.</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-6 bg-white/5 py-4 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
                    <p className="text-gray-300">We believe in open communication and ethical AI practices.</p>
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