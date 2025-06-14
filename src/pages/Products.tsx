import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Innovative software solutions designed for the modern enterprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-purple mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="cosmic-button">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 cosmic-gradient">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="orbit-card p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-purple mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.featured ? 'cosmic-button' : 'border border-purple text-purple hover:bg-purple hover:text-white transition-colors rounded-full py-3 px-6'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const products = [
  {
    title: "OORB Analytics",
    description: "Advanced analytics platform with AI-powered insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "API integration"
    ]
  },
  {
    title: "OORB Cloud Manager",
    description: "Unified cloud infrastructure management solution",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
    features: [
      "Multi-cloud support",
      "Cost optimization",
      "Security monitoring",
      "Automated scaling"
    ]
  },
  {
    title: "OORB Security Suite",
    description: "Enterprise-grade security and compliance platform",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3",
    features: [
      "Threat detection",
      "Compliance automation",
      "Identity management",
      "Security analytics"
    ]
  }
];

const pricingPlans = [
  {
    title: "Starter",
    price: "99",
    features: [
      "5 team members",
      "Basic analytics",
      "24/7 support",
      "API access"
    ],
    featured: false
  },
  {
    title: "Professional",
    price: "299",
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "Priority support",
      "Custom integrations"
    ],
    featured: true
  },
  {
    title: "Enterprise",
    price: "999",
    features: [
      "Unlimited everything",
      "Custom solutions",
      "Dedicated support",
      "On-premise option"
    ],
    featured: false
  }
];

export default Products;