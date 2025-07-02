import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "CTO",
            company: "TechFlow Inc",
            content: "OORB's AI platform transformed our development process. We reduced deployment time by 60% and improved our product quality significantly. The team's expertise is unmatched.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Founder & CEO",
            company: "InnovateLab",
            content: "Working with OORB was a game-changer. Their developer-friendly tools and comprehensive support helped us scale from startup to enterprise level seamlessly.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Emily Watson",
            role: "Head of Engineering",
            company: "DataVision",
            content: "The OORB Data Engine revolutionized how we handle analytics. Real-time insights and ML-powered recommendations have boosted our decision-making capabilities tremendously.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "David Kim",
            role: "VP of Technology",
            company: "CloudScale",
            content: "OORB's cloud infrastructure solutions provided us with the scalability we needed. Their 99.9% uptime guarantee isn't just a promise – it's a reality we experience daily.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                        <Star className="w-4 h-4 mr-2" />
                        Client Success Stories
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight">
                        What Our <span className="text-blue-500">Clients</span> Say
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Trusted by industry leaders worldwide, OORB delivers exceptional results that drive business growth.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-100" />
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                                "{testimonials[currentIndex].content}"
                            </blockquote>

                            <div className="flex items-center">
                                <img
                                    src={testimonials[currentIndex].avatar}
                                    alt={testimonials[currentIndex].name}
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 group"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 group"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2">4.9/5</div>
                        <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2">100+</div>
                        <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2">500+</div>
                        <div className="text-sm sm:text-base text-gray-600">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2">24/7</div>
                        <div className="text-sm sm:text-base text-gray-600">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;