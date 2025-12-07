import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="font-poppins min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              About IAI
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Building the future of intelligent automation
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <div className="bg-black/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                At IAI, we're on a mission to revolutionize how businesses leverage artificial intelligence. 
                We believe in creating powerful, accessible tools that empower teams to work smarter, not harder.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We're developing cutting-edge AI solutions that integrate seamlessly into your workflow. 
                Our platform combines the latest in machine learning, natural language processing, and automation 
                to deliver results that matter.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h3 className="text-white font-semibold">AI Automation</h3>
                    <p className="text-gray-400 text-sm">Streamline repetitive tasks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h3 className="text-white font-semibold">Smart Analytics</h3>
                    <p className="text-gray-400 text-sm">Data-driven insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="text-white font-semibold">Real-time Processing</h3>
                    <p className="text-gray-400 text-sm">Instant results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h3 className="text-white font-semibold">Enterprise Security</h3>
                    <p className="text-gray-400 text-sm">Your data is safe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Innovation First</h3>
                  <p className="text-gray-300">We constantly push the boundaries of what's possible with AI technology.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">User-Centric Design</h3>
                  <p className="text-gray-300">Every feature is built with the end user in mind.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">Transparency</h3>
                  <p className="text-gray-300">We believe in open communication and ethical AI practices.</p>
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







