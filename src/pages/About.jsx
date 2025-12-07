import { FaRobot, FaChartLine, FaBolt, FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen font-poppins-med bg-slate-950">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About IAI
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Building the future of intelligent automation
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                At IAI, we're on a mission to revolutionize how businesses leverage artificial intelligence. 
                We believe in creating powerful, accessible tools that empower teams to work smarter, not harder.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We're developing cutting-edge AI solutions that integrate seamlessly into your workflow. 
                Our platform combines the latest in machine learning, natural language processing, and automation 
                to deliver results that matter.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaRobot className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">AI Automation</h3>
                    <p className="text-slate-400 text-sm">Streamline repetitive tasks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Smart Analytics</h3>
                    <p className="text-slate-400 text-sm">Data-driven insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBolt className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Real-time Processing</h3>
                    <p className="text-slate-400 text-sm">Instant results</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaLock className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Enterprise Security</h3>
                    <p className="text-slate-400 text-sm">Your data is safe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                  <p className="text-slate-300">We constantly push the boundaries of what's possible with AI technology.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">User-Centric Design</h3>
                  <p className="text-slate-300">Every feature is built with the end user in mind.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
                  <p className="text-slate-300">We believe in open communication and ethical AI practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2025 IAI. All rights reserved.</p>
      </footer>
    </div>
  );
}