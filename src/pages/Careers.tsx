import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Globe, ArrowRight, Search } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: 'Professional development budget, conference attendance, and mentorship programs'
    },
    {
      icon: Globe,
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and home office setup allowance'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Inclusive environment, team retreats, and collaborative workspace'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120K - $180K',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: ['5+ years experience', 'React/Node.js expertise', 'Cloud platforms (AWS/GCP)', 'Agile methodology'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$140K - $200K',
      description: 'Develop and deploy machine learning models for our AI platform, working with large-scale data processing.',
      requirements: ['PhD/MS in ML/AI', 'Python/TensorFlow', 'MLOps experience', 'Research background'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Product Designer',
      department: 'Design',
      location: 'London, UK / Remote',
      type: 'Full-time',
      salary: '£60K - £90K',
      description: 'Create intuitive user experiences for our suite of developer tools and AI-powered platforms.',
      requirements: ['4+ years UX/UI design', 'Figma proficiency', 'Design systems', 'User research'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130K - $170K',
      description: 'Build and maintain our cloud infrastructure, ensuring scalability and reliability of our services.',
      requirements: ['Kubernetes/Docker', 'AWS/GCP expertise', 'CI/CD pipelines', 'Infrastructure as Code'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80K - $120K',
      description: 'Lead our digital marketing efforts, focusing on developer community engagement and product marketing.',
      requirements: ['B2B SaaS marketing', 'Content strategy', 'Developer marketing', 'Analytics tools'],
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$60K - $80K + Commission',
      description: 'Generate and qualify leads for our enterprise sales team, focusing on technical decision makers.',
      requirements: ['1-2 years SDR experience', 'Technical aptitude', 'CRM proficiency', 'Communication skills'],
      posted: '4 days ago'
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Marketing', 'Sales'];

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Join Our <span className="text-blue-500">Mission</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Help us build the future of technology. We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">15+</div>
              <div className="text-sm sm:text-base text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-600">Remote Friendly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">4.9★</div>
              <div className="text-sm sm:text-base text-gray-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Why Work at <span className="text-blue-500">OORB</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We believe in creating an environment where our team can do their best work and grow their careers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Open <span className="text-blue-500">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Find your next opportunity and join a team that's building the future of technology.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-sm font-medium transition-colors duration-200 ${
                    selectedDepartment === dept
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {job.department}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-8">
                    <div className="text-sm text-gray-500 lg:text-right">
                      Posted {job.posted}
                    </div>
                    <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-200">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or check back later for new opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At OORB, we believe that great products come from great teams. We foster an environment of collaboration, innovation, and continuous learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation First</h4>
                    <p className="text-gray-600">We encourage experimentation and creative problem-solving.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Inclusive Environment</h4>
                    <p className="text-gray-600">Diversity of thought and background makes us stronger.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Work-Life Balance</h4>
                    <p className="text-gray-600">We support flexible work arrangements and personal growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-sm p-6 shadow-lg">
                <div className="text-2xl font-semibold text-blue-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Employee Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-blue-50 transition-colors duration-200">
              Send Your Resume
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn More About OORB
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;