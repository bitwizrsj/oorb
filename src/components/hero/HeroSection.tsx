import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import orb from "../../asset/e204f5f4-4db0-475e-ab72-e65a26bd4be2_removalai_preview.png"

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-16" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center w-full">
            {/* Left Content */}
            <div className="order-2 lg:order-1 animate-fade-in-up">
              {/* Eyebrow Text */}
              <p className="text-sm font-medium text-gray-600 mb-4 sm:mb-6 tracking-wide opacity-0 animate-fade-in delay-300">
                Innovation • Development • Impact
              </p>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4 sm:mb-6 tracking-tight opacity-0 animate-fade-in delay-500">
                Building{' '}
                <span className="text-blue-600">Tools</span>{' '}
                for Tomorrow.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed font-medium max-w-xl opacity-0 animate-fade-in delay-700">
                From AI-powered platforms to developer-friendly services — OORB is where innovation meets impact.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4 opacity-0 animate-fade-in delay-1000">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shadow-sm">
                    Explore our products
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  
                  <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 font-semibold text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                    Join our mission
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                {/* Secondary Action */}
                <div className="pt-2">
                  <button className="group inline-flex items-center text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
                    <Play className="w-4 h-4 mr-2" />
                    Start building with OORB
                    <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl w-full">
                <img 
                  src={orb}
                  alt="Global Innovation Network"
                  className="w-full h-auto opacity-90 drop-shadow-lg"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3e%3cdefs%3e%3cradialGradient id='grad1' cx='50%25' cy='50%25' r='50%25'%3e%3cstop offset='0%25' style='stop-color:%2393c5fd;stop-opacity:0.3' /%3e%3cstop offset='100%25' style='stop-color:%2360a5fa;stop-opacity:0.1' /%3e%3c/radialGradient%3e%3c/defs%3e%3ccircle cx='200' cy='200' r='180' fill='url(%23grad1)' stroke='%2393c5fd' stroke-width='2' stroke-dasharray='10,5' opacity='0.6'/%3e%3ccircle cx='200' cy='200' r='140' fill='none' stroke='%2360a5fa' stroke-width='1' stroke-dasharray='5,3' opacity='0.4'/%3e%3ccircle cx='200' cy='200' r='100' fill='none' stroke='%2393c5fd' stroke-width='1' opacity='0.3'/%3e%3ccircle cx='200' cy='200' r='8' fill='%232563eb' opacity='0.8'/%3e%3ccircle cx='120' cy='150' r='4' fill='%2393c5fd' opacity='0.6'/%3e%3ccircle cx='280' cy='120' r='4' fill='%2360a5fa' opacity='0.6'/%3e%3ccircle cx='320' cy='250' r='4' fill='%2393c5fd' opacity='0.6'/%3e%3ccircle cx='80' cy='280' r='4' fill='%2360a5fa' opacity='0.6'/%3e%3cline x1='200' y1='200' x2='120' y2='150' stroke='%2393c5fd' stroke-width='1' opacity='0.3'/%3e%3cline x1='200' y1='200' x2='280' y2='120' stroke='%2360a5fa' stroke-width='1' opacity='0.3'/%3e%3cline x1='200' y1='200' x2='320' y2='250' stroke='%2393c5fd' stroke-width='1' opacity='0.3'/%3e%3cline x1='200' y1='200' x2='80' y2='280' stroke='%2360a5fa' stroke-width='1' opacity='0.3'/%3e%3c/svg%3e")`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '300px'
                  }}
                />
                
                {/* Subtle floating elements */}
                <div className="absolute top-1/4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-1/3 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-4 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-blue-300 rounded-full opacity-30 animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(37, 99, 235, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(37, 99, 235, 0.5), 0 0 30px rgba(37, 99, 235, 0.3);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-1500 {
          animation-delay: 1500ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;