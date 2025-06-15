import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bulb from "../icons/bulb.png"
import cloud from "../icons/cloud.png";
import mind from "../icons/mind.png";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
{/* Hero Section */}
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
  
  {/* Animated background blobs */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
  </div>

  {/* Grid Overlay */}
<div className="absolute inset-0 bg-dots-grid opacity-30"></div>

  {/* Main Content */}
  <section className="relative z-10 pt-32 pb-16 px-4">
    <div className="max-w-7xl mx-auto text-center transition-all duration-1000"
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(2rem)" }}
    >
      {/* Availability Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 group hover:bg-white/10 transition-all duration-300">
        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
          Available for new projects
        </span>
      </div>

      {/* Headings */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
        <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Transform Your
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          Digital Vision
        </span>
        <br />
        <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Into Reality
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        We craft innovative digital solutions that propel businesses into the future with cutting-edge technology and seamless user experiences.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center">
            Get Started
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </button>

        <button className="group px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
          <div className="flex items-center">
            View Our Work
            <svg className="w-5 h-5 ml-2 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </button>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
          <div className="text-gray-300">Projects Delivered</div>
        </div>
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">99%</div>
          <div className="text-gray-300">Client Satisfaction</div>
        </div>
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
          <div className="text-gray-300">Support Available</div>
        </div>
      </div>
    </div>
  </section>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</div>


      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">Our Core Services</h2>
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover rounded-lg "
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-6`}>
                  <div className="flex items-center gap-4">
  <div className="w-8 h-8 flex-shrink-0">
    <img
      src={service.icon}
      alt={`${service.title} icon`}
      className="w-full h-full object-contain"
    />
  </div>
  <h3 className="text-2xl font-bold">{service.title}</h3>
</div>

                  <p className="text-gray-300">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.subServices.map((subService, i) => (
                      <motion.div
                        key={i}
                        initial={ { opacity: 0, x: -10 } }
                        animate={ { opacity: 1, x: 0 } }
                        transition={ { delay: i * 0.1 } }
                        className="orbit-card p-4"
                      >
                        <h4 className="font-bold mb-2">{subService.title}</h4>
                        <p className="text-sm text-gray-300">{subService.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 cosmic-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={ { opacity: 0, scale: 0.95 } }
                animate={ { opacity: 1, scale: 1 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
                className="orbit-card overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <button className="cosmic-button">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
          >
            <h2 className="text-3xl font-bold mb-6 glow-text">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's transform your ideas into reality together
            </p>
            <button className="cosmic-button">Contact Us</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions that drive growth and innovation.",
    image: "https://img.freepik.com/premium-vector/digital-transformation-digitization-business-processes-technology-concept-virtual-screen_127544-3348.jpg?uid=R147516762&ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740",
    icon: bulb,
    subServices: [
      {
        title: "Web Development",
        description: "Custom websites and web applications with modern technologies"
      },
      {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications"
      },
      {
        title: "E-Commerce",
        description: "Online store development with advanced features"
      },
      {
        title: "Digital Strategy",
        description: "Strategic planning for digital transformation"
      }
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Scale your infrastructure with modern cloud architecture and services.",
    image: "https://img.freepik.com/free-photo/cloud-storage-background-business-network-design_53876-160252.jpg?uid=R147516762&ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740",
    icon: cloud,
    subServices: [
      {
        title: "Cloud Migration",
        description: "Seamless transition to cloud infrastructure"
      },
      {
        title: "DevOps",
        description: "Automated deployment and continuous integration"
      },
      {
        title: "Cloud Security",
        description: "Advanced security measures for cloud systems"
      },
      {
        title: "Managed Services",
        description: "24/7 monitoring and maintenance"
      }
    ]
  },
  {
    title: "AI Integration",
    description: "Harness the power of artificial intelligence and machine learning for your business.",
    image: "https://img.freepik.com/premium-photo/chat-with-ai-artificial-intelligence-young-businessman-chatting-with-smart-ai_184421-3270.jpg?uid=R147516762&ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740",
    icon: mind,
    subServices: [
      {
        title: "Machine Learning",
        description: "Custom ML models for business insights"
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis solutions"
      },
      {
        title: "NLP",
        description: "Natural language processing applications"
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven forecasting and analysis"
      }
    ]
  }
];

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "150+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" }
];

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Revolutionary analytics platform using artificial intelligence",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3"
  },
  {
    title: "Smart City Infrastructure",
    description: "Integrated IoT solution for modern urban management",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3"
  }
];

export default Home;