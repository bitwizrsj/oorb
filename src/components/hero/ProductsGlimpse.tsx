import React, { useState } from 'react';
import { Brain, Code, Database, Cloud, ArrowRight, Play, Zap, Globe, Shield, BarChart3, DivideIcon as LucideIcon } from 'lucide-react';

type PreviewType = 'code' | 'ui' | 'dashboard' | 'monitoring';

interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: keyof typeof colorClasses;
  features: string[];
  preview: {
    type: PreviewType;
    content: string;
  };
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    button: 'bg-blue-500 hover:bg-blue-600'
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
    button: 'bg-purple-500 hover:bg-purple-600'
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    button: 'bg-emerald-500 hover:bg-emerald-600'
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-200',
    button: 'bg-orange-500 hover:bg-orange-600'
  }
};

const products: Product[] = [
  {
    id: 'ai-platform',
    name: 'OORB AI Platform',
    category: 'AI & Machine Learning',
    tagline: 'Intelligent automation at scale',
    description:
      'Our flagship AI platform that integrates machine learning capabilities into any application with simple APIs.',
    icon: Brain,
    color: 'blue',
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Auto-scaling Infrastructure'
    ],
    preview: {
      type: 'code',
      content: `// OORB AI Platform - Simple Integration
import { OORBClient } from '@oorb/ai-platform';

const client = new OORBClient({
  apiKey: 'your-api-key'
});

// Analyze sentiment in real-time
const result = await client.analyze({
  text: "Building amazing products with OORB!",
  type: 'sentiment'
});

console.log(result.sentiment); // 'positive'
console.log(result.confidence); // 0.95`
    }
  },
  {
    id: 'dev-suite',
    name: 'OORB Dev Suite',
    category: 'Developer Tools',
    tagline: 'Ship faster, code better',
    description:
      'A comprehensive toolkit for developers with UI components, backend services, and deployment tools.',
    icon: Code,
    color: 'purple',
    features: [
      'Component Library',
      'Backend-as-a-Service',
      'CI/CD Pipeline',
      'Real-time Collaboration'
    ],
    preview: {
      type: 'ui',
      content: 'Interactive dashboard showing component library, API endpoints, and deployment status'
    }
  },
  {
    id: 'data-engine',
    name: 'OORB Data Engine',
    category: 'Data Analytics',
    tagline: 'Transform data into insights',
    description:
      'Real-time data processing and analytics engine that scales from startup to enterprise.',
    icon: BarChart3,
    color: 'emerald',
    features: [
      'Real-time Processing',
      'Custom Dashboards',
      'ML-powered Insights',
      'Multi-source Integration'
    ],
    preview: {
      type: 'dashboard',
      content: 'Live analytics dashboard with real-time metrics and visualizations'
    }
  },
  {
    id: 'cloud-infrastructure',
    name: 'OORB Cloud',
    category: 'Infrastructure',
    tagline: 'Scalable, secure, simple',
    description:
      'Enterprise-grade cloud infrastructure that automatically scales with your business needs.',
    icon: Cloud,
    color: 'orange',
    features: [
      'Auto-scaling',
      'Global CDN',
      'Security First',
      '99.9% Uptime SLA'
    ],
    preview: {
      type: 'monitoring',
      content: 'Infrastructure monitoring with real-time metrics and health status'
    }
  }
];

const ProductsGlimpse: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<string>('ai-platform');
  const activeProductData = products.find((p) => p.id === activeProduct)!;
  const colors = colorClasses[activeProductData.color];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Our Products
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight">
            A Glimpse of Our <span className="text-blue-500">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the tools and platforms that power innovation for companies worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {products.map((product) => {
              const Icon = product.icon;
              const isActive = activeProduct === product.id;
              const productColors = colorClasses[product.color];

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`w-full text-left p-4 sm:p-6 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? `bg-white shadow-lg ${productColors.border} border-2`
                      : 'bg-white hover:shadow-md border-2 border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center ${
                        isActive ? productColors.bg : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          isActive ? productColors.text : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-base sm:text-lg ${
                          isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">{product.category}</p>
                      <p
                        className={`text-xs sm:text-sm font-medium ${
                          isActive ? productColors.text : 'text-gray-600'
                        }`}
                      >
                        {product.tagline}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? `${productColors.text} rotate-90`
                          : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                  {activeProductData.name}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  {activeProductData.description}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <button
                    className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 ${colors.button} text-white font-medium rounded-sm transition-colors`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Demo
                  </button>
                  <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 font-medium rounded-sm hover:bg-gray-200 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {activeProductData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${colors.text.replace('text', 'bg')}`}
                      ></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-gray-50">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Live Preview</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                {activeProductData.preview.type === 'code' ? (
                  <div className="bg-gray-900 rounded-sm p-4 sm:p-6 overflow-x-auto">
                    <pre className="text-green-400 text-xs sm:text-sm font-mono leading-relaxed">
                      <code>{activeProductData.preview.content}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="bg-white rounded-sm p-4 sm:p-6 border-2 border-dashed border-gray-200 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 font-medium mb-2">Interactive Demo</p>
                    <p className="text-sm text-gray-500">{activeProductData.preview.content}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Enterprise Ready</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Global Scale</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            <button className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors">
              Explore All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGlimpse;