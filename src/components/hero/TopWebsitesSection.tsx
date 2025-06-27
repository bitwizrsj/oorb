import React, { useState, useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import { projects } from '../../data/projects';
import Card from '../Card';
import './TopWebsitesSection.css'; // Adjust the path as necessary
import Home from '../../Home';

const TopWebsitesSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const websites = [
        {
            id: 1,
            name: "AMBIQ",
            subtitle: "SUPERCHARGING ENDPOINT AI",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop",
            color: "from-blue-900 to-purple-900"
        },
        {
            id: 2,
            name: "OPALINE INTERIORS",
            subtitle: "LUXURY DESIGN STUDIO",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop",
            color: "from-amber-100 to-orange-200"
        },
        {
            id: 3,
            name: "IN GOOD COMPANY",
            subtitle: "CREATIVE AGENCY",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&h=1080&fit=crop",
            color: "from-orange-600 to-red-700"
        },
        {
            id: 4,
            name: "GET MEETING SUMMARIES",
            subtitle: "AI PRODUCTIVITY TOOL",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
            color: "from-gray-900 to-black"
        }
    ];



    return (
        <section
            className=" bg-black"
        >
            {/* Sticky Header - Only within section */}
            <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-white" />
                        <h2 className="text-white font-bold text-lg tracking-wider uppercase">
                            TOP WEBSITES
                        </h2>
                    </div>
                </div>
            </div>

            {/* Dynamic cursor follower */}
            <div
                className="fixed w-3 h-3 bg-white/50 pointer-events-none z-40 transition-transform duration-100 ease-out"
                style={{
                    left: `${mousePosition.x - 6}px`,
                    top: `${mousePosition.y - 6}px`,
                    opacity: 0.4
                }}
            ></div>
<Home />
            
        </section>
    );
};

export default TopWebsitesSection;