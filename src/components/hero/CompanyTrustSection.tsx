import React, { useEffect, useState, useRef } from 'react';

interface Company {
  name: string;
  type: 'signature' | 'kobe' | 'terra' | 'tokyo' | 'hues' | 'hitech';
}

const CompanyTrustSection: React.FC = () => {
  const [fillProgress, setFillProgress] = useState([0, 0, 0]);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [visibleLogos, setVisibleLogos] = useState<Set<number>>(new Set());

  const lines = [
    'More than 100 companies',
    'internationally',
    'place their trust in us.'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!textContainerRef.current) return;

      const rect = textContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8;
      const distanceFromTop = triggerPoint - rect.top;

      const perLineDistance = 150;

      const updatedProgress = lines.map((_, index) => {
        const lineOffset = index * perLineDistance;
        const progress = Math.min(
          100,
          Math.max(0, ((distanceFromTop - lineOffset) / perLineDistance) * 100)
        );
        return Math.round(progress);
      });

      setFillProgress(updatedProgress);

      logoRefs.current.forEach((logoRef, index) => {
        if (logoRef) {
          const logoRect = logoRef.getBoundingClientRect();
          if (logoRect.top < window.innerHeight * 0.85 && logoRect.bottom > 0) {
            setVisibleLogos(prev => new Set([...prev, index]));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companies: Company[] = [
    { name: 'theo', type: 'signature' },
    { name: 'KOBE', type: 'kobe' },
    { name: 'Terra', type: 'terra' },
    { name: 'Tokyo', type: 'tokyo' },
    { name: 'hues', type: 'hues' },
    { name: 'Hitech', type: 'hitech' }
  ];

  const renderAnimatedLine = (text: string, fillPercent: number, key: number) => (
    <div
      key={key}
      className="text-base lg:text-2xl font-normal tracking-tight mb-2 text-transparent"
      style={{
        backgroundImage: `linear-gradient(to right, #000 ${fillPercent}%, #9ca3af ${fillPercent}%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transition: 'background-image 0.3s ease-out'
      }}
    >
      {text}
    </div>
  );

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div ref={textContainerRef} className="flex flex-col">
            {lines.map((line, i) => renderAnimatedLine(line, fillProgress[i], i))}
          </div>

          {/* Right: Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div
                key={company.name}
                ref={el => (logoRefs.current[index] = el)}
                className={`bg-gray-100 px-6 py-5 rounded-md shadow-sm flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-1 ${
                  visibleLogos.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visibleLogos.has(index) ? `${index * 100}ms` : '0ms',
                }}
              >
                <CompanyLogo company={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface CompanyLogoProps {
  company: Company;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ company }) => {
  const { name, type } = company;

  const logoStyles: Record<Company['type'], string> = {
    signature: 'font-mono text-2xl text-gray-800 italic -rotate-2',
    kobe: 'text-2xl font-bold text-gray-800 flex items-center gap-2',
    terra: 'text-2xl font-semibold text-gray-800 flex items-center gap-2',
    tokyo: 'text-2xl font-medium text-gray-800 flex items-center gap-2',
    hues: 'text-2xl font-semibold text-gray-800 italic flex items-center gap-2',
    hitech: 'text-2xl font-semibold text-gray-800 flex items-center gap-2',
  };

  const renderIcon = (): React.ReactNode => {
    switch (type) {
      case 'kobe':
        return <span className="text-lg">市</span>;
      case 'terra':
        return <div className="w-4 h-4 bg-gray-800 rounded-sm" />;
      case 'tokyo':
        return <div className="w-2.5 h-2.5 bg-black rounded-full" />;
      case 'hues':
        return <div className="w-4 h-4 bg-gray-800 rounded-full" />;
      case 'hitech':
        return <div className="w-4 h-4 bg-gray-800 rounded-sm" />;
      default:
        return null;
    }
  };

  return (
    <div className={logoStyles[type]}>
      {renderIcon()}
      <span>{name}</span>
    </div>
  );
};

export default CompanyTrustSection;
