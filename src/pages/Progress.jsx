import { useState, useEffect } from 'react';

export default function Progress() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Form fields
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);

  // Pre-fill email if user came from landing page
  useEffect(() => {
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || email.trim() === '') {
      setError('Email is required!');
      return;
    }
    
    if (!token || token.trim() === '') {
      setError('Token is required!');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // TODO: Replace with client's API when provided
      // const response = await fetch('https://your-client-api.com/api/verify-progress', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, token })
      // });
      // const data = await response.json();

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful response
      const mockData = {
        email: email,
        status: 'verified',
        position: 67,
        joinedDate: '2025-12-06',
        notifications: true
      };

      setUserData(mockData);
      setIsAuthenticated(true);
      
      // Save auth state
      localStorage.setItem('progress_auth', JSON.stringify({ email, token }));
      
    } catch (err) {
      console.error('Error:', err);
      setError('Invalid email or token. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setToken('');
    localStorage.removeItem('progress_auth');
    localStorage.removeItem('user_email');
  };

 // If authenticated, show dashboard
  if (isAuthenticated && userData) {
    return (
      <div className="min-h-screen font-poppins-med bg-slate-950 text-white">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 p-6">
          <div className="mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3"></div>
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          
          <nav className="space-y-2">
            <div className="px-4 py-2 bg-slate-800 rounded-lg text-white font-medium">Overview</div>
          </nav>

          <button
            onClick={handleLogout}
            className="absolute bottom-6 left-6 right-6 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm"
          >
            Sign Out
          </button>
        </div>

        {/* Main Content */}
        <div className="ml-64 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Welcome back</h1>
            <p className="text-slate-400">{userData.email}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wide">Position</span>
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl font-bold mb-1">#{userData.position}</div>
              <p className="text-slate-400 text-sm">of 10,000+ members</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wide">Joined</span>
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">
                {new Date(userData.joinedDate).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <p className="text-slate-400 text-sm">Member since</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wide">Status</span>
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">Verified</div>
              <p className="text-slate-400 text-sm">Ready for launch</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Launch Timeline */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-6">Launch Timeline</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <p className="font-medium mb-1">Registration Complete</p>
                    <p className="text-slate-400 text-sm">You've successfully joined the waitlist</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-0.5 h-full bg-slate-800 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <p className="font-medium mb-1">Final Preparations</p>
                    <p className="text-slate-400 text-sm">We're getting everything ready for launch</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-slate-400">Launch Day</p>
                    <p className="text-slate-500 text-sm">You'll be notified when we go live</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email Updates</p>
                      <p className="text-xs text-slate-400">Stay informed</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    userData.notifications 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {userData.notifications ? 'On' : 'Off'}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Refer & Earn</h3>
                <p className="text-blue-100 text-sm mb-4">Move up the waitlist by inviting friends</p>
                <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Share Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If not authenticated, show login form
  return (
    <div className="min-h-screen font-poppins-med bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-800 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-xl mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-4xl font-black bg-white bg-clip-text text-transparent mb-2">
              Check Your Progress
            </h1>
            <p className="text-gray-400 text-sm">Enter your email and token to view your waitlist status</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Access Token</label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter your token"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all"
                required
              />
              <p className="text-gray-500 text-xs mt-2">Check your email for your access token</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Verifying...' : 'View My Progress'}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Don't have a token?{' '}
              <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign up for the waitlist
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}