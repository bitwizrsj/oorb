import React, { useState } from 'react';
import { Brain, Code, BarChart3, Cloud, Play, ArrowRight, Check, Star } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('ai-platform');

  const products = [
    {
      id: 'ai-platform',
      name: 'OORB AI Platform',
      tagline: 'Intelligent automation at scale',
      description: 'Our flagship AI platform that integrates machine learning capabilities into any application with simple APIs.',
      icon: Brain,
      color: 'blue',
      price: 'Starting at $99/month',
      features: [
        'Natural Language Processing',
        'Computer Vision APIs',
        'Predictive Analytics',
        'Auto-scaling Infrastructure',
        'Real-time Processing',
        '99.9% Uptime SLA'
      ],
      benefits: [
        'Reduce development time by 60%',
        'Scale to millions of requests',
        'Enterprise-grade security',
        '24/7 technical support'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      id: 'dev-suite',
      name: 'OORB Dev Suite',
      tagline: 'Ship faster, code better',
      description: 'A comprehensive toolkit for developers with UI components, backend services, and deployment tools.',
      icon: Code,
      color: 'purple',
      price: 'Starting at $49/month',
      features: [
        'Component Library (React, Vue, Angular)',
        'Backend-as-a-Service',
        'CI/CD Pipeline Integration',
        'Real-time Collaboration Tools',
        'Code Quality Analytics',
        'Automated Testing Suite'
      ],
      benefits: [
        'Accelerate development by 40%',
        'Maintain consistent code quality',
        'Seamless team collaboration',
        'Integrated deployment pipeline'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    {
      id: 'data-engine',
      name: 'OORB Data Engine',
      tagline: 'Transform data into insights',
      description: 'Real-time data processing and analytics engine that scales from startup to enterprise.',
      icon: BarChart3,
      color: 'emerald',
      price: 'Starting at $199/month',
      features: [
        'Real-time Data Processing',
        'Custom Dashboard Builder',
        'ML-powered Insights',
        'Multi-source Integration',
        'Advanced Visualization',
        'Automated Reporting'
      ],
      benefits: [
        'Process billions of events daily',
        'Get insights in real-time',
        'Connect any data source',
        'Automated anomaly detection'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 'cloud-infrastructure',
      name: 'OORB Cloud',
      tagline: 'Scalable, secure, simple',
      description: 'Enterprise-grade cloud infrastructure that automatically scales with your business needs.',
      icon: Cloud,
      color: 'orange',
      price: 'Pay as you scale',
      features: [
        'Auto-scaling Infrastructure',
        'Global CDN Network',
        'Advanced Security Features',
        'Load Balancing',
        'Database Management',
        'Monitoring & Alerts'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Global edge locations',
        'Enterprise security compliance',
        'Cost optimization tools'
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    }
  ];

  const activeProduct = products.find(p => p.id === activeTab)!;
  const IconComponent = activeProduct.icon;

  const colorClasses = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    orange: 'text-orange-600 bg-orange-50 border-orange-200'
  };

  const bgColorDots: Record<string, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  emerald: 'bg-emerald-500',
  orange: 'bg-orange-500',
};


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Our <span className="text-blue-500">Products</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Powerful tools and platforms designed to accelerate your development process and scale your business.
            </p>
          </div>

          {/* Product Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-sm font-medium transition-all duration-200 ${
                    activeTab === product.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{product.name}</span>
                  <span className="sm:hidden">{product.name.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Product Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
<div className={`w-2 h-2 rounded-full ${bgColorDots[activeProduct.color]}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                    {activeProduct.name}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    {activeProduct.tagline}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {activeProduct.description}
              </p>

              <div className="mb-8">
                <div className="text-2xl font-semibold text-gray-900 mb-4">
                  {activeProduct.price}
                </div>
                <div className="flex space-x-4">
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-200">
                    <Play className="w-4 h-4 mr-2" />
                    Try Free Demo
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-sm hover:bg-gray-50 transition-colors duration-200">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {activeProduct.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-sm p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">4.9/5</span>
                  <span className="text-gray-600 text-sm">rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-gray-50 rounded-xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
              Features & Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full bg-${activeProduct.color}-500`}></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Products Overview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Complete <span className="text-blue-500">Product Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Everything you need to build, deploy, and scale modern applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
<div className={`w-2 h-2 rounded-full ${bgColorDots[activeProduct.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="text-lg font-semibold text-gray-900 mb-4">
                    {product.price}
                  </div>
                  <button
                    onClick={() => setActiveTab(product.id)}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of developers and companies already building with OORB products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-blue-50 transition-colors duration-200">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;