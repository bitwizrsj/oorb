import React from 'react';
import { 
  Shield, 
  Zap, 
  Monitor, 
  Search, 
  Terminal, 
  Activity,
  CheckCircle,
  ArrowRight,
  Network,
  Lock,
  Cpu
} from 'lucide-react';

const PortKillerLanding = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Port Analysis",
      description: "Instantly analyze any network port to check its status, associated processes, and security implications."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Monitor active network ports and their associated processes in real-time with live updates."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Process Management",
      description: "Identify and manage processes using specific ports with advanced filtering and control options."
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Command Integration",
      description: "Execute port management commands directly from the intuitive web interface."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security Insights",
      description: "Get detailed security analysis of open ports and potential vulnerabilities."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "System Performance",
      description: "Track port usage impact on system performance and resource consumption."
    }
  ];

  const benefits = [
    "Streamlined network port management",
    "Enhanced system security monitoring",
    "Simplified process identification",
    "Real-time port status tracking",
    "Intuitive web-based interface",
    "Advanced filtering and search capabilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                  <Network className="w-4 h-4 mr-2" />
                  Network Management Tool
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Port Management
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Console
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Advanced network port analysis and process management solution. 
                  Monitor, analyze, and control network ports with precision and ease.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300">
                  <Monitor className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Port Analysis</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Port Number</span>
                        <span className="text-sm font-mono text-blue-400">8080</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Status</span>
                        <span className="text-sm text-green-400">LISTENING</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Process</span>
                        <span className="text-sm font-mono text-purple-400">node.exe</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-400">24</div>
                        <div className="text-xs text-slate-400">Active Ports</div>
                      </div>
                      <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400">12</div>
                        <div className="text-xs text-slate-400">Processes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Network Management
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive tools designed to give you complete control over your network ports and processes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose Port Management Console?
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Built for system administrators, developers, and security professionals who need 
                  reliable and efficient network port management capabilities.
                </p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">System Overview</h3>
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">CPU Usage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-white">75%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Memory</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-white">50%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Network</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-white">33%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="text-sm text-slate-400 mb-2">Recent Activity</div>
                    <div className="space-y-2">
                      <div className="text-sm text-green-400">✓ Port 3000 analyzed successfully</div>
                      <div className="text-sm text-blue-400">→ Process node.exe identified</div>
                      <div className="text-sm text-yellow-400">⚠ Port 8080 requires attention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Network?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Start managing your network ports with precision and confidence today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Download Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortKillerLanding;