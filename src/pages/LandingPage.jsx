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
      // TODO: Replace with your API endpoint
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitted(true);
      setEmail('');

      setTimeout(() => {
        window.location.href = '/progress';
      }, 3000);

    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
      <div className="relative font-poppins-med z-10 container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        <Navbar />

        {/* Main Heading with Cursive Font */}
        <h1 className="text-7xl pt-32 md:text-8xl lg:text-8xl font-black text-center mb-8 relative">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl font-pacifico">
            Unveiling Soon!
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl mb-12 leading-relaxed drop-shadow-lg animate-fade-in">
          AI is here to simplify your <span className="text-blue-400 font-semibold">insurance</span> – say goodbye to <span className="text-purple-400 font-semibold">complexity!</span>
        </p>

        {/* Email Form with Enhanced Glow */}
        <div className="w-full max-w-md mb-16 relative group">
          <div className="absolute -inset-1 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative flex flex-col gap-2 bg-black/40 backdrop-blur-2xl p-2 rounded-2xl border border-blue-400/30 shadow-2xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400/50 text-white placeholder-gray-400 transition-all"
              disabled={loading}
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl font-semibold  transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Submitting...' : 'Notify Me'}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-center gap-2">
              <FaTimesCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {submitted && (
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 flex items-center gap-2 animate-bounce">
              <FaCheckCircle className="w-5 h-5" />
              You will be redirected now!
            </div>
          )}

          <p className="text-center text-gray-400 text-sm mt-4">
            Join <span className="text-white font-semibold">10,000+</span> people on the waitlist
          </p>
        </div>

        {/* Platform Features - Compressed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-12">
          {/* Web */}
          <div className="group relative p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-400/20">
                <FaGlobe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web</h3>
              <p className="text-gray-300 text-sm">Access anywhere, anytime through your browser</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="group relative p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-purple-400/20">
                <FaMobile className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mobile</h3>
              <p className="text-gray-300 text-sm">Native apps for iOS and Android devices</p>
            </div>
          </div>

          {/* APIs */}
          <div className="group relative p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-indigo-400/20">
                <FaCode className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">APIs</h3>
              <p className="text-gray-300 text-sm">Powerful APIs for seamless integration</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
      <footer className="relative z-10 py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2025 IAI. All rights reserved.</p>
      </footer>

      {/* Add fonts and animations */}
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