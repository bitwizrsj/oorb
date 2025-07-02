import React from 'react';
import { ArrowRight, Users, Rocket, Heart, Award } from 'lucide-react';

const JoinSection: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Join a Growing Community',
      description: 'Connect with like-minded innovators and industry leaders'
    },
    {
      icon: Rocket,
      title: 'Access Cutting-Edge Tools',
      description: 'Get early access to our latest AI-powered platforms and services'
    },
    {
      icon: Heart,
      title: 'Make a Real Impact',
      description: 'Be part of building solutions that transform businesses worldwide'
    },
    {
      icon: Award,
      title: 'Grow Your Career',
      description: 'Develop your skills with mentorship and learning opportunities'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dots-grid"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Join Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight">
            Ready to Shape the <span className="text-blue-200">Future</span>?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Whether you're a developer, designer, entrepreneur, or innovator, there's a place for you at OORB.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6">
              Multiple Ways to Get Involved
            </h3>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed">
              From career opportunities to partnership programs, find the perfect way to join our mission.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                View Open Positions
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              
              <button className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-blue-600 transition-all duration-200">
                Become a Partner
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Additional Options */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
              <p className="text-blue-100 mb-4 sm:mb-6">
                Not ready to commit? Start with these options:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm sm:text-base">
                <button className="text-white hover:text-blue-200 transition-colors duration-200 underline underline-offset-4">
                  Join Our Newsletter
                </button>
                <button className="text-white hover:text-blue-200 transition-colors duration-200 underline underline-offset-4">
                  Follow on Social Media
                </button>
                <button className="text-white hover:text-blue-200 transition-colors duration-200 underline underline-offset-4">
                  Attend Our Events
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">50+</div>
            <div className="text-sm sm:text-base text-blue-200">Team Members</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">15+</div>
            <div className="text-sm sm:text-base text-blue-200">Countries</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">100%</div>
            <div className="text-sm sm:text-base text-blue-200">Remote Friendly</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">24/7</div>
            <div className="text-sm sm:text-base text-blue-200">Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;