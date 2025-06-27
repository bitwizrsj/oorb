import React, { useState } from 'react';
import { Brain, Code, Rocket, ArrowRight, Globe, Smartphone, ShoppingCart, Cloud } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('website');

  const mainServices = [
    {
      icon: Brain,
      title: 'AI-Integrated Platforms',
      description: 'Intelligent automation and machine learning capabilities built for scale.'
    },
    {
      icon: Code,
      title: 'Developer-Friendly Services',
      description: 'From frontend UI libraries to backend-free tools that reduce dev effort.'
    },
    {
      icon: Rocket,
      title: 'Product-First Innovation',
      description: 'Product-driven solutions designed to scale and serve real-world needs.'
    }
  ];

  const detailedServices = [
    {
      id: 'website',
      name: 'Website Development',
      icon: Globe,
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'CMS Integration']
    },
    {
      id: 'app',
      name: 'App Development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'Offline Support']
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Solutions',
      icon: ShoppingCart,
      description: 'Complete e-commerce platforms with payment integration and analytics.',
      features: ['Payment Gateway', 'Inventory Management', 'Analytics Dashboard', 'Multi-vendor Support']
    },
    {
      id: 'saas',
      name: 'SaaS Solutions',
      icon: Cloud,
      description: 'Scalable Software-as-a-Service platforms with subscription management.',
      features: ['Multi-tenant Architecture', 'Subscription Billing', 'API Management', 'Cloud Infrastructure']
    }
  ];

  return (
    <div className="bg-white">
      {/* Main Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-gray-500 text-sm font-medium mb-4 tracking-wide">
            Innovation • Development • Impact
          </p>
          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-tight">
              What <span className="text-blue-500">We</span> Do.
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              From AI-powered platforms to developer-friendly services — OORB is where innovation meets impact.
            </p>
          </div>
        </div>

        {/* Services Grid - Highlighted Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index} 
                className="group relative bg-gray-100 border border-gray-200  p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Services Section - Dark Theme */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium mb-6">
                  Save up to 30% on your Tech Stack
                </div>
                <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 tracking-tight">
                  Comprehensive Development Services
                </h2>
                <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                  From concept to deployment, we deliver end-to-end solutions that scale with your business needs and drive growth.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Enterprise-grade architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable and maintainable code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Modern development practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Continuous integration & deployment</span>
                </div>
              </div>

              <button className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium  hover:bg-blue-600 transition-colors duration-200">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Right Side - Service Cards */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {detailedServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="relative cursor-pointer transition-all duration-300 group"
                  >
                    <div className="relative h-full w-full  overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="h-full p-6 flex flex-col justify-between">
                        <div>
                          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <button className="self-start px-4 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;