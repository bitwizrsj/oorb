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
import img1 from "../../asset/port-killer.png"; // Adjust the path as necessary

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

            <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-lg text-gray-600 font-inter">Smart port manager, built for developers</h1>
                <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                    No More Busy Ports. Just 
                    <span className="relative inline-flex sm:inline">
                        <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                        <span className="relative"> Clean Starts </span>
                    </span>
                </p>

                <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
  <a
    href="/Port-Killer-Setup-1.0.0.exe"  // ✅ make sure this file exists in your /public folder
    download
    title="Download Port Manager"
    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-sm font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    role="button"
  >
    Download Now
  </a>

  <a
    href="https://youtu.be/LX7QNCJyWgc"
    title=""
    className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-sm font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
    role="button"
  >
    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    Watch free demo
  </a>
</div>


                <p className="mt-8 text-base text-gray-500 font-inter">Completely free · No credit card required</p>
            </div>
        </div>

        <div className="pb-12 bg-white">
            <div className="relative">
                <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                <div className="relative mx-auto">
                    <div className="lg:max-w-6xl lg:mx-auto">
                        <img className="transform scale-110" src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

            {/* <section className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-white"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid lg:grid-row-2 gap-12 items-center mt-10">
                        <div className="space-y-8 flex flex-col justify-center items-center">
                            <div className="space-y-4 flex flex-col justify-center items-center">
                                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                                    <Network className="w-4 h-4 mr-2" />
                                    Network Management Tool
                                </div>
                                <h1 className="text-5xl lg:text-6xl text-center font-bold text-black leading-tight">
                                    Port Management
                                    <span className="block bg-clip-text text-blue-600">
                                        Console
                                    </span>
                                </h1>
                                <p className=" text-slate-900 max-w-3xl leading-relaxed text-center">
                                    Advanced network port analysis and process management solution.
                                    Monitor, analyze, and control network ports with precision and ease.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Download Now
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="inline-flex items-center px-8 py-4 text-black hover:bg-gray-50 font-semibold rounded-sm border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:scale-105">
                                    <Monitor className="w-5 h-5 mr-2" />
                                    View Demo
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-sm blur-3xl"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-sm p-8 shadow-2xl">
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
            </section> */}

            

            {/* Features Section */}

            <div className="min-h-screen bg-gray-50 py-16 px-4" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "36px" }}>
            Features
          </h1>
          <p className="text-gray-500 leading-relaxed" style={{ fontSize: "16px", color: "#6b7280", lineHeight: "1.4" }}>
            Monitor, analyze, and manage your network ports with precision — all from an intuitive and secure interface.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {index === 1 && (
                <div
                  className="absolute inset-0 rounded-2xl blur-lg opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 25%, #ffecd2 50%, #fcb69f 75%, #c2e9fb 100%)",
                    transform: "scale(1.02)",
                    zIndex: 0
                  }}
                ></div>
              )}

              <div
                className="relative bg-white rounded-2xl shadow-sm p-6 flex items-center gap-5"
                style={{ zIndex: 1 }}
              >
                <div className="flex-shrink-0 text-white bg-gray-900 rounded-lg w-10 h-10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium" style={{ fontSize: "17px", fontFamily: "Inter, sans-serif" }}>
                    {feature.title}
                  </p>
                  <p className="text-gray-500 mt-1" style={{ fontSize: "15px", fontFamily: "Inter, sans-serif" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

            {/* Benefits Section */}
            {/* Benefits Section - Light Theme */}
<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Text Content */}
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Port Management Console?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Built for system administrators, developers, and security professionals who need
            reliable and efficient network port management capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-2xl blur-3xl"></div>
        <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">System Overview</h3>
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">CPU Usage</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-800">75%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Memory</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-800">50%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Network</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-800">33%</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-2">Recent Activity</div>
              <div className="space-y-2">
                <div className="text-sm text-green-600">✓ Port 3000 analyzed successfully</div>
                <div className="text-sm text-blue-600">→ Process node.exe identified</div>
                <div className="text-sm text-yellow-600">⚠ Port 8080 requires attention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-slate-950 mb-6">
                        Ready to Take Control of Your Network?
                    </h2>
                    <p className="text-xl text-slate-900 mb-10">
                        Start managing your network ports with precision and confidence today.
                    </p>

                    <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
  <a
    href="/Port-Killer-Setup-1.0.0.exe"  // ✅ make sure this file exists in your /public folder
    download
    title="Download Port Manager"
    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-sm font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    role="button"
  >
    Download Now
  </a>

  <a
    href="https://youtu.be/LX7QNCJyWgc"
    title=""
    className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-sm font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
    role="button"
  >
    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    Watch free demo
  </a>
</div>
                </div>
            </section>
        </div>
    );
};

export default PortKillerLanding;