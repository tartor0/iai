import { useState, useEffect } from 'react';
import { FaGlobe, FaMobile, FaCode, FaCheckCircle, FaTimesCircle, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [location, setLocation] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState(null);

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
    'Wisconsin', 'Wyoming'
  ];

  const countries = [
    { name: 'United States', states: usStates, flag: '🇺🇸' },
    { name: 'Canada', states: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'], flag: '🇨🇦' },
    { name: 'Nigeria', states: ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'], flag: '🇳🇬' },
    { name: 'United Kingdom', states: [], flag: '🇬🇧' },
    { name: 'Australia', states: [], flag: '🇦🇺' },
    { name: 'Germany', states: [], flag: '🇩🇪' },
    { name: 'France', states: [], flag: '🇫🇷' },
    { name: 'Japan', states: [], flag: '🇯🇵' },
    { name: 'India', states: [], flag: '🇮🇳' },
    { name: 'Brazil', states: [], flag: '🇧🇷' },
    { name: 'Mexico', states: [], flag: '🇲🇽' },
    { name: 'Spain', states: [], flag: '🇪🇸' },
    { name: 'Italy', states: [], flag: '🇮🇹' },
    { name: 'Netherlands', states: [], flag: '🇳🇱' },
    { name: 'South Korea', states: [], flag: '🇰🇷' },
    { name: 'Singapore', states: [], flag: '🇸🇬' }
  ];
  
  const fullText = 'Unveiling Soon!';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 150 : 150;
    const pauseTime = 3000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
      } else if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-900/70 to-black/90" />

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

      <div className="relative font-poppins-med z-10 h-full flex flex-col">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-4 -mt-8 overflow-y-auto sm:overflow-y-visible">

          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-xs sm:text-sm font-semibold text-green-400">Multi-channel Experience</span>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="group relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                <FaGlobe className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <p className="text-center text-white text-[10px] sm:text-xs mt-1 sm:mt-2 font-semibold">Web</p>
            </div>

            <div className="group relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                <FaMobile className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400" />
              </div>
              <p className="text-center text-white text-[10px] sm:text-xs mt-1 sm:mt-2 font-semibold">Mobile</p>
            </div>

            <div className="group relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                <FaCode className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-400" />
              </div>
              <p className="text-center text-white text-[10px] sm:text-xs mt-1 sm:mt-2 font-semibold">APIs</p>
            </div>
          </div>

          <h1 className="text-6xl sm:text-6xl md:text-6xl font-black text-center mb-3 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-pacifico" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))' }}>
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 text-center max-w-xl mb-4 sm:mb-6 leading-relaxed px-4">
            Ai is here to simplify your <span className="text-blue-400 font-semibold">insurance</span> – say goodbye to <span className="text-purple-400 font-semibold">complexity!</span>
          </p>

          <div className="w-full max-w-md mb-3 sm:mb-6 relative px-4">
            <div className="hidden sm:block">
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
            </div>

            <div className="block sm:hidden">
              <div className="bg-black/40 backdrop-blur-2xl p-3 rounded-2xl border border-blue-400/30 shadow-2xl space-y-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-400/50 text-white placeholder-gray-400 transition-all text-sm"
                  disabled={loading}
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl font-semibold text-sm transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? 'Submitting...' : 'Notify Me'}
                </button>
              </div>
            </div>

            {error && (
              <div className="absolute left-4 right-4 mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                <FaTimesCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <p className="text-center text-gray-400 text-xs mt-2 sm:mt-3">
              Join <span className="text-white font-semibold">10,000+</span> people on the waitlist
            </p>
          </div>

          {submitted && (
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-slideDown px-4 max-w-sm w-full">
              <div className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl border border-green-400/50 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs sm:text-sm">Success!</p>
                  <p className="text-white/90 text-[10px] sm:text-xs">On board for an Amazing Experience</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-6 sm:gap-12 text-center">
            <div className="group">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-gray-300 text-[10px] sm:text-xs">Waitlist Members</div>
            </div>

            {/* Redesigned Location Dropdown */}
            <div className="group relative">
              <div 
                className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-1 cursor-pointer group-hover:scale-110 transition-transform duration-300" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                10+
              </div>
              <div 
                className="text-gray-300 text-[10px] sm:text-xs cursor-pointer flex items-center justify-center gap-1" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FaMapMarkerAlt className="w-2 h-2" />
                Countries
              </div>
              
              {showDropdown && (
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 z-50">
                  <div className="bg-gray-800 backdrop-blur-2xl rounded-2xl border border-blue-400/20 shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-blue-400/20">
                      <p className="text-white font-semibold text-sm flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-400" />
                        Available Locations
                      </p>
                    </div>
                    
                    {/* Scrollable Content */}
                    <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
                      {countries.map((country, i) => (
                        <div key={i}>
                          <div
                            onClick={() => {
                              if (country.states.length === 0) {
                                setLocation(country.name);
                                setShowDropdown(false);
                              } else {
                                setExpandedCountry(expandedCountry === country.name ? null : country.name);
                              }
                            }}
                            className={`px-4 py-3 text-white text-sm hover:bg-gray-700 cursor-pointer transition-all flex justify-between items-center group/item ${
                              expandedCountry === country.name ? 'bg-blue-500/10' : ''
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{country.flag}</span>
                              <span className="font-medium">{country.name}</span>
                            </div>
                            {country.states.length > 0 && (
                              <div className={`w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center transition-transform ${
                                expandedCountry === country.name ? 'rotate-180' : ''
                              }`}>
                                <span className="text-blue-400 text-xs">▼</span>
                              </div>
                            )}
                          </div>
                          
                          {expandedCountry === country.name && country.states.length > 0 && (
                            <div className="bg-black/30 border-t border-b border-blue-400/10">
                              <div className="max-h-40 overflow-y-auto">
                                {country.states.map((state, j) => (
                                  <div
                                    key={j}
                                    onClick={() => {
                                      setLocation(`${state}, ${country.name}`);
                                      setShowDropdown(false);
                                      setExpandedCountry(null);
                                    }}
                                    className="pl-12 pr-4 py-2.5 text-gray-300 text-xs hover:bg-blue-500/20 hover:text-white cursor-pointer transition-all flex items-center gap-2 group/state"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50 group-hover/state:bg-blue-400"></div>
                                    {state}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="group">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-300 text-[10px] sm:text-xs">Support</div>
            </div>
          </div>
        </div>  
      </div>

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
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.5s step-end infinite;
        }
        
        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
}