import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 100,
      suffix: '+',
      label: 'Companies trust us',
      description: 'Globally'
    },
    {
      number: 25,
      suffix: '',
      label: 'AI-powered tools',
      description: 'Built and deployed'
    },
    {
      number: 50,
      suffix: 'K+',
      label: 'API calls',
      description: 'Processed monthly'
    },
    {
      number: 99.9,
      suffix: '%',
      label: 'Uptime guarantee',
      description: 'Enterprise-grade reliability'
    }
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
            We've analyzed the data and have compelling
          </h2>
          <p className="text-3xl sm:text-4xl font-light text-gray-500">
            statistics to share.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, isVisible, delay }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        animateNumber();
        setHasAnimated(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, delay]);

  const animateNumber = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = stat.number / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newValue = Math.min(stepValue * currentStep, stat.number);
      
      // Handle decimal numbers
      if (stat.number % 1 !== 0) {
        setCurrentNumber(parseFloat(newValue.toFixed(1)));
      } else {
        setCurrentNumber(Math.floor(newValue));
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setCurrentNumber(stat.number);
      }
    }, stepDuration);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  const displayNumber = stat.suffix === 'M+' ? formatNumber(currentNumber * 1000000) : currentNumber;

  return (
    <div className="text-center group">
      {/* Main Number */}
      <div className="mb-4">
        <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight">
          {stat.suffix === '$' && '$'}
          {stat.suffix === 'M+' ? displayNumber : currentNumber}
          {stat.suffix && stat.suffix !== '$' && stat.suffix !== 'M+' && stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-gray-900">
          {stat.label}
        </h3>
        <p className="text-gray-500 text-sm">
          {stat.description}
        </p>
      </div>

      {/* Subtle indicator line */}
      <div className="mt-6 mx-auto w-12 h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default StatsSection;