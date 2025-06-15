import React from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cutting-edge digital solutions tailored for your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-[300px] object-cover rounded-lg border"
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-6`}>
                  <div className="flex items-center gap-4">
                    <div className="text-purple w-8 h-8">
                      <solution.icon />
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {solution.subFeatures.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={ { opacity: 0, x: -10 } }
                        animate={ { opacity: 1, x: 0 } }
                        transition={ { delay: i * 0.1 } }
                        className="orbit-card p-4 bg-white/5"
                      >
                        <h4 className="font-bold mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-300">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={ { opacity: 0, scale: 0.95 } }
                animate={ { opacity: 1, scale: 1 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
                className="orbit-card overflow-hidden"
              >
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple">{study.result}</span>
                    <button className="text-sm hover:text-purple transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const solutions = [
  {
    title: "Digital Transformation",
    description: "Modernize your business with end-to-end digital transformation solutions that drive growth and efficiency.",
    image: "https://cdn.midjourney.com/c5e49ccc-4c13-4688-961f-de779e64f10c/grid_0.png",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    subFeatures: [
      {
        title: "Process Automation",
        description: "Streamline operations with intelligent automation solutions"
      },
      {
        title: "Legacy Modernization",
        description: "Transform legacy systems into modern digital platforms"
      },
      {
        title: "Digital Workflows",
        description: "Implement efficient digital processes and workflows"
      },
      {
        title: "Change Management",
        description: "Expert guidance through digital transformation"
      }
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Scale your infrastructure with modern cloud architecture and services that ensure reliability and performance.",
    image: "https://cdn.midjourney.com/a89cf0c8-5713-4e0b-9df8-53c8f7c3502d/grid_0.png",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    subFeatures: [
      {
        title: "Cloud Migration",
        description: "Seamless transition to cloud infrastructure"
      },
      {
        title: "Multi-Cloud Strategy",
        description: "Optimize across multiple cloud platforms"
      },
      {
        title: "Cloud Security",
        description: "Advanced security measures for cloud systems"
      },
      {
        title: "Performance Optimization",
        description: "Maximize cloud resource efficiency"
      }
    ]
  },
  {
    title: "AI & Analytics",
    description: "Harness the power of artificial intelligence and advanced analytics to drive data-informed decisions.",
    image: "https://cdn.midjourney.com/e8b42c16-c5a4-4b76-9af0-b6e43c0c3496/grid_0.png",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    subFeatures: [
      {
        title: "Machine Learning",
        description: "Custom ML models for business insights"
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven forecasting and analysis"
      },
      {
        title: "Computer Vision",
        description: "Advanced image and video analysis"
      },
      {
        title: "NLP Solutions",
        description: "Natural language processing applications"
      }
    ]
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions and proactive threat management.",
    image: "https://cdn.midjourney.com/12345678-1234-5678-1234-567812345678/grid_0.png",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    subFeatures: [
      {
        title: "Threat Detection",
        description: "Real-time monitoring and threat response"
      },
      {
        title: "Security Audits",
        description: "Comprehensive security assessments"
      },
      {
        title: "Compliance",
        description: "Industry standard compliance management"
      },
      {
        title: "Identity Management",
        description: "Advanced access control solutions"
      }
    ]
  }
];

const caseStudies = [
  {
    title: "Global Retail Chain",
    description: "Digital transformation for 1000+ stores worldwide",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3",
    result: "40% increase in efficiency"
  },
  {
    title: "Healthcare Provider",
    description: "AI-powered patient care system implementation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    result: "60% faster diagnostics"
  },
  {
    title: "Financial Institution",
    description: "Cloud migration and security implementation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
    result: "99.99% uptime achieved"
  }
];

export default Solutions;