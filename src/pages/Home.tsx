import React from 'react';
import { motion } from 'framer-motion';
import bulb from "../icons/bulb.png"
import cloud from "../icons/cloud.png";
import mind from "../icons/mind.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Transform Your Digital Vision Into Reality
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We craft innovative digital solutions that propel businesses into the future
            </p>
            <button className="cosmic-button">Get Started</button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">Our Core Services</h2>
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover rounded-lg shadow-glow"
                  />
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-6`}>
                  <div className="flex items-center gap-4">
  <div className="w-8 h-8 flex-shrink-0">
    <img
      src={service.icon}
      alt={`${service.title} icon`}
      className="w-full h-full object-contain"
    />
  </div>
  <h3 className="text-2xl font-bold">{service.title}</h3>
</div>

                  <p className="text-gray-300">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.subServices.map((subService, i) => (
                      <motion.div
                        key={i}
                        initial={ { opacity: 0, x: -10 } }
                        animate={ { opacity: 1, x: 0 } }
                        transition={ { delay: i * 0.1 } }
                        className="orbit-card p-4"
                      >
                        <h4 className="font-bold mb-2">{subService.title}</h4>
                        <p className="text-sm text-gray-300">{subService.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 cosmic-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={ { opacity: 0, scale: 0.95 } }
                animate={ { opacity: 1, scale: 1 } }
                transition={ { duration: 0.5, delay: index * 0.1 } }
                className="orbit-card overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <button className="cosmic-button">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
          >
            <h2 className="text-3xl font-bold mb-6 glow-text">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's transform your ideas into reality together
            </p>
            <button className="cosmic-button">Contact Us</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions that drive growth and innovation.",
    image: "https://img.freepik.com/premium-vector/digital-transformation-digitization-business-processes-technology-concept-virtual-screen_127544-3348.jpg?uid=R147516762&ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740",
    icon: bulb,
    subServices: [
      {
        title: "Web Development",
        description: "Custom websites and web applications with modern technologies"
      },
      {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications"
      },
      {
        title: "E-Commerce",
        description: "Online store development with advanced features"
      },
      {
        title: "Digital Strategy",
        description: "Strategic planning for digital transformation"
      }
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Scale your infrastructure with modern cloud architecture and services.",
    image: "https://img.freepik.com/free-photo/cloud-storage-background-business-network-design_53876-160252.jpg?uid=R147516762&ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740",
    icon: cloud,
    subServices: [
      {
        title: "Cloud Migration",
        description: "Seamless transition to cloud infrastructure"
      },
      {
        title: "DevOps",
        description: "Automated deployment and continuous integration"
      },
      {
        title: "Cloud Security",
        description: "Advanced security measures for cloud systems"
      },
      {
        title: "Managed Services",
        description: "24/7 monitoring and maintenance"
      }
    ]
  },
  {
    title: "AI Integration",
    description: "Harness the power of artificial intelligence and machine learning for your business.",
    image: "https://img.freepik.com/premium-photo/chat-with-ai-artificial-intelligence-young-businessman-chatting-with-smart-ai_184421-3270.jpg?uid=R147516762&ga=GA1.1.1722708618.1746429974&semt=ais_hybrid&w=740",
    icon: mind,
    subServices: [
      {
        title: "Machine Learning",
        description: "Custom ML models for business insights"
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis solutions"
      },
      {
        title: "NLP",
        description: "Natural language processing applications"
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven forecasting and analysis"
      }
    ]
  }
];

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "150+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" }
];

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Revolutionary analytics platform using artificial intelligence",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3"
  },
  {
    title: "Smart City Infrastructure",
    description: "Integrated IoT solution for modern urban management",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3"
  }
];

export default Home;