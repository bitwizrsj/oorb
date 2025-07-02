import React, { useState } from 'react';
import { Globe, Smartphone, ShoppingCart, Cloud, ArrowRight, Check, Play } from 'lucide-react';

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState('websites');

  const solutions = [
    {
      id: 'websites',
      name: 'Website Development',
      tagline: 'Modern, responsive, performant',
      description: 'Custom websites built with cutting-edge technologies, optimized for performance and user experience.',
      icon: Globe,
      color: 'blue',
      timeline: '2-6 weeks',
      startingPrice: '$5,000',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'CMS Integration',
        'Analytics Setup',
        'Security Implementation'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      benefits: [
        'Increase conversion rates by up to 40%',
        'Improve search rankings',
        'Mobile-first approach',
        'Lightning-fast loading times'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      caseStudy: {
        client: 'TechFlow Inc',
        result: '300% increase in organic traffic',
        metric: '2.5s average load time'
      }
    },
    {
      id: 'apps',
      name: 'App Development',
      tagline: 'Native performance, cross-platform reach',
      description: 'Mobile applications for iOS and Android with native performance and seamless user experience.',
      icon: Smartphone,
      color: 'purple',
      timeline: '3-8 weeks',
      startingPrice: '$15,000',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'Push Notifications',
        'Offline Support',
        'App Store Optimization',
        'Analytics Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      benefits: [
        'Reach both iOS and Android users',
        'Reduce development costs by 50%',
        'Faster time to market',
        'Consistent user experience'
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      caseStudy: {
        client: 'HealthTech Solutions',
        result: '1M+ downloads in first year',
        metric: '4.8★ app store rating'
      }
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Solutions',
      tagline: 'Sell more, manage less',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
      icon: ShoppingCart,
      color: 'emerald',
      timeline: '4-10 weeks',
      startingPrice: '$10,000',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Management',
        'Analytics Dashboard',
        'Multi-vendor Support'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'AWS'],
      benefits: [
        'Increase sales by up to 60%',
        'Automate order processing',
        'Real-time inventory tracking',
        'Comprehensive analytics'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      caseStudy: {
        client: 'Fashion Forward',
        result: '250% revenue increase',
        metric: '15% conversion rate'
      }
    },
    {
      id: 'saas',
      name: 'SaaS Solutions',
      tagline: 'Scale without limits',
      description: 'Scalable Software-as-a-Service platforms with subscription management and multi-tenant architecture.',
      icon: Cloud,
      color: 'orange',
      timeline: '6-16 weeks',
      startingPrice: '$25,000',
      features: [
        'Multi-tenant Architecture',
        'Subscription Billing',
        'User Management',
        'API Development',
        'Cloud Infrastructure',
        'Security Compliance'
      ],
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      benefits: [
        'Recurring revenue model',
        'Automatic scaling',
        'Enterprise-grade security',
        'Global deployment'
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      caseStudy: {
        client: 'DataVision Pro',
        result: '$2M ARR in 18 months',
        metric: '99.9% uptime achieved'
      }
    }
  ];

  const activeSol = solutions.find(s => s.id === activeSolution)!;
  const IconComponent = activeSol.icon;

  const colorClasses = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    orange: 'text-orange-600 bg-orange-50 border-orange-200'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Our <span className="text-blue-500">Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              End-to-end development services that transform your ideas into successful digital products.
            </p>
          </div>

          {/* Solution Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(solution.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-sm font-medium transition-all duration-200 ${
                    activeSolution === solution.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{solution.name}</span>
                  <span className="sm:hidden">{solution.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Solution Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorClasses[activeSol.color]}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                    {activeSol.name}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    {activeSol.tagline}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {activeSol.description}
              </p>

              {/* Pricing & Timeline */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Starting Price</div>
                  <div className="text-2xl font-semibold text-gray-900">{activeSol.startingPrice}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Timeline</div>
                  <div className="text-2xl font-semibold text-gray-900">{activeSol.timeline}</div>
                </div>
              </div>

              <div className="flex space-x-4 mb-8">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-200">
                  <Play className="w-4 h-4 mr-2" />
                  View Portfolio
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-sm hover:bg-gray-50 transition-colors duration-200">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {activeSol.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solution Image & Case Study */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={activeSol.image}
                  alt={activeSol.name}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              
              {/* Case Study Card */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Story</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Client: </span>
                    <span className="font-medium text-gray-900">{activeSol.caseStudy.client}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Result: </span>
                    <span className="font-medium text-green-600">{activeSol.caseStudy.result}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Key Metric: </span>
                    <span className="font-medium text-blue-600">{activeSol.caseStudy.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Technologies */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What's Included
              </h3>
              <div className="space-y-4">
                {activeSol.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-${activeSol.color}-500`}></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {activeSol.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-white text-gray-700 font-medium rounded-lg text-sm border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Our <span className="text-blue-500">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Building with agile methodology' },
              { step: '04', title: 'Launch', description: 'Deployment and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your requirements and create a custom solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-blue-50 transition-colors duration-200">
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-blue-600 transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;