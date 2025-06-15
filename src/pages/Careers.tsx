import React from 'react';
import { motion } from 'framer-motion';

// Type for benefit icon component
type IconProps = React.SVGProps<SVGSVGElement>;

const Careers: React.FC = () => {
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the future of digital innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 cosmic-gradient">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join OORB?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="orbit-card p-6"
              >
                <benefit.icon className="w-12 h-12 text-purple mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="orbit-card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 text-sm bg-purple bg-opacity-20 rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 text-sm bg-purple bg-opacity-20 rounded-full">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 text-sm bg-purple bg-opacity-20 rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <ul className="list-disc list-inside text-gray-300 mb-4">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="cosmic-button mt-4 md:mt-0">Apply Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 cosmic-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Life at OORB</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cultureImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="orbit-card overflow-hidden aspect-square"
              >
                <img
                  src={image}
                  alt="Life at OORB"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// BENEFITS DATA WITH PROPER TYPING
const benefits: {
  title: string;
  description: string;
  icon: (props: IconProps) => JSX.Element;
}[] = [
  {
    title: "Innovation Culture",
    description: "Work on cutting-edge technologies and shape the future",
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Growth & Learning",
    description: "Continuous learning opportunities and career development",
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Work-Life Balance",
    description: "Flexible schedules and remote work options",
    icon: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// OPEN POSITIONS
const positions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced Full Stack Developer to join our core team.",
    requirements: [
      "5+ years of experience with modern web technologies",
      "Strong knowledge of React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure/GCP)",
    ],
  },
  {
    title: "AI/ML Engineer",
    department: "Research & Development",
    location: "Hybrid",
    type: "Full-time",
    description: "Join our AI team to develop cutting-edge machine learning solutions.",
    requirements: [
      "MS/PhD in Computer Science or related field",
      "Experience with TensorFlow or PyTorch",
      "Strong background in mathematics and statistics",
    ],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create exceptional user experiences for our digital products.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio showcasing UX/UI work",
      "Experience with design systems and tools",
    ],
  },
];

// CULTURE IMAGES
const cultureImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3",
];

export default Careers;
