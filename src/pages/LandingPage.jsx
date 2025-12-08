import { useState, useEffect } from 'react';
import { FaGlobe, FaMobile, FaCode, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitted(true);
      setEmail('');

      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
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
      <div className="relative font-poppins-med z-10 h-full flex flex-col">
        <Navbar />

        {/* Content Container - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-8">

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-sm font-semibold text-green-400">Multichannel Experience</span>
            </div>
          </div>
          {/* Platform Features - Compact Icons Only */}
          <div className="flex gap-6 mb-4">
            {/* Web */}
            <div className="group relative">
              <div className="w-16 h-16 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                <FaGlobe className="w-7 h-7 text-blue-400" />
              </div>
              <p className="text-center text-white text-xs mt-2 font-semibold">Web</p>
            </div>

            {/* Mobile */}
            <div className="group relative">
              <div className="w-16 h-16 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                <FaMobile className="w-7 h-7 text-purple-400" />
              </div>
              <p className="text-center text-white text-xs mt-2 font-semibold">Mobile</p>
            </div>

            {/* APIs */}
            <div className="group relative">
              <div className="w-16 h-16 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                <FaCode className="w-7 h-7 text-indigo-400" />
              </div>
              <p className="text-center text-white text-xs mt-2 font-semibold">APIs</p>
            </div>
          </div>

          {/* Multichannel Experience Tag - Right after icons */}


          {/* Main Heading - Smaller */}
          <h1 className="text-4xl md:text-5xl font-black text-center mb-4 leading-[1.2]">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl font-pacifico">
              Unveiling Soon!
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-200 text-center max-w-xl mb-8 leading-relaxed">
            Ai is here to simplify your <span className="text-blue-400 font-semibold">insurance</span> – say goodbye to <span className="text-purple-400 font-semibold">complexity!</span>
          </p>

          {/* Email Form - Compact */}
          <div className="w-full max-w-md mb-8 relative group">
            <div className="relative flex gap-2 bg-black/40 backdrop-blur-2xl p-2 rounded-2xl border border-blue-400/30 shadow-2xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400/50 text-white placeholder-gray-400 transition-all text-sm"
                disabled={loading}
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Submitting...' : 'Notify Me'}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="absolute left-0 right-0 mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                <FaTimesCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <p className="text-center text-gray-400 text-xs mt-3">
              Join <span className="text-white font-semibold">10,000+</span> people on the waitlist
            </p>
          </div>

          {/* Success Toast - Fixed Position */}
          {submitted && (
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
              <div className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl border border-green-400/50 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Success!</p>
                  <p className="text-white/90 text-xs">On board for an Amazing Experience</p>
                </div>
              </div>
            </div>
          )}

          {/* Stats Section - Compact */}
          <div className="flex gap-12 text-center">
            {[
              { num: '10K+', label: 'Waitlist Members' },
              { num: '50+', label: 'Countries' },
              { num: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.num}
                </div>
                <div className="text-gray-300 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes slideDown {
          0% { 
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          100% { 
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}