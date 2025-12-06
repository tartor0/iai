import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="font-poppins min-h-screen relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full text-blue-400 text-sm font-medium mb-8 border border-blue-400/30 shadow-lg shadow-blue-500/20 animate-bounce">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Launching Soon
            </div>
            
            {/* Main Heading with Glow Effect */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                Coming Soon
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent blur-3xl opacity-40 animate-pulse">
                Coming Soon
              </div>
            </h1>
            
            {/* Animated Subheading */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg">
              Something <span className="text-blue-400 font-semibold">extraordinary</span> is on the horizon. 
              Join the waitlist and be part of the <span className="text-purple-400 font-semibold">revolution</span>.
            </p>
            
            {/* Email Signup with Enhanced Glow */}
            <div className="max-w-md mx-auto mb-20 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              <div className="relative flex flex-col sm:flex-row gap-3 bg-black/40 backdrop-blur-2xl p-2 rounded-full border border-blue-400/30 shadow-2xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-transparent border-none focus:outline-none text-white placeholder-gray-400"
                />
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/60 transition-all transform hover:scale-105 active:scale-95"
                >
                  Notify Me
                </button>
              </div>
              {submitted && (
                <p className="mt-4 text-blue-400 font-medium animate-bounce drop-shadow-lg">Thanks! We'll notify you soon! ✨</p>
              )}
            </div>
            
            {/* Animated Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '🚀', title: 'Lightning Fast', desc: 'Built for speed and performance', delay: '0s' },
                { icon: '✨', title: 'Next-Gen Tech', desc: 'Powered by cutting-edge AI', delay: '0.2s' },
                { icon: '💎', title: 'Premium Access', desc: 'Exclusive early bird perks', delay: '0.4s' }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="group relative p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 border border-blue-400/20">
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated Stats Section */}
        <div className="py-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: '10K+', label: 'Waitlist Members' },
              { num: '50+', label: 'Countries' },
              { num: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {stat.num}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-white/10">
          <p>© 2025 IAI. All rights reserved.</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}