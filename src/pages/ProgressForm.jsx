import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Added import for navigation
import { FaEnvelope, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ProgressForm() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const navigate = useNavigate(); // Added for redirect

  // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
  const EMAILJS_SERVICE_ID = 'service_kwmtqx5';
  const EMAILJS_TEMPLATE_ID = 'template_brh6ckn';
  const EMAILJS_PUBLIC_KEY = 'wAv4mMK-TR4dTuhLE';

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Generate a random 6-digit code
  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send verification code via EmailJS
  const handleSendCode = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setSendingCode(true);
    setError('');

    const code = generateCode();
    setGeneratedCode(code);

    const expirationDate = new Date(Date.now() + 10 * 60 * 1000);
    const expirationTime = expirationDate.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });

    try {
      console.log('Sending with config:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY
      });

      const templateParams = {
        to_email: email,
        code: code,
        time: expirationTime,
      };

      console.log('Template params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email sent successfully:', response);
      setCodeSent(true);
      
      setTimeout(() => setCodeSent(false), 5000);

    } catch (err) {
      console.error('EmailJS Error Details:', err);
      console.error('Error text:', err.text);
      console.error('Error status:', err.status);
      setError(`Failed to send code: ${err.text || err.message}`);
    } finally {
      setSendingCode(false);
    }
  };

  // Verify the code entered by user
  const handleSubmit = async () => { // Removed e.preventDefault since not a form submit
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!token || token.trim() === '') {
      setError('Please enter your access token');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (!generatedCode) {
        setError('No verification code found. Please request a new code.');
        setIsLoading(false);
        return;
      }

      // Verify code
      if (token.trim() === generatedCode) {
        // Simulate API delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Success! User verified
        const userData = {
          email: email,
          verified: true,
          accessLevel: 'premium',
          verifiedAt: new Date().toISOString()
        };

        // Redirect to dashboard with userData in state
        navigate('/dashboard', { state: { userData } });
      } else {
        setError('Invalid code. Please check and try again.');
      }
      
    } catch (err) {
      console.error('Verification Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-poppins-med bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gray-800 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 border border-blue-500/30">
              <FaEnvelope className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Access Your Documents
            </h1>
            <p className="text-gray-400 text-sm">We'll send a verification code to your email</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all"
                />
                <button
                  type="button"
                  onClick={handleSendCode}
                  disabled={sendingCode || !email}
                  className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {sendingCode ? (
                    <FaSpinner className="w-5 h-5 animate-spin" />
                  ) : 'Send Code'}
                </button>
              </div>
            </div>

            {codeSent && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 flex items-center gap-2 animate-fade-in">
                <FaCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-400 text-sm">Code sent! Check your inbox.</span>
              </div>
            )}

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Access Code</label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter 6-digit code"
                maxLength={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all text-center text-2xl tracking-widest font-mono"
              />
              <p className="text-gray-500 text-xs mt-2">The code will expire in 10 minutes</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm flex items-start gap-2">
                <FaTimesCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading || !email || !token}
              className="w-full py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <FaSpinner className="w-5 h-5 animate-spin" />
                  Verifying...
                </span>
              ) : 'Access Documents'}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Need help?{' '}
              <a href="mailto:support@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}