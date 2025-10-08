'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'PrepWise - AI Powered Mock Interview Platform',
      description: 'Built a full-stack web app that simulates AI-driven interviews using Gemini and Vapi voice API. Implemented real-time voice interaction with speech-to-text and text-to-speech functionality.',
      image: '/api/placeholder/400/300',
      tags: ['React.js', 'Node.js', 'Express.js', 'Gemini API', 'Vapi', 'TailwindCSS'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Splitr - Group Expense Sharing App',
      description: 'Developed a web app for simplifying group expense sharing with real-time balance calculations and transaction history per group. Features include friend invites, expense breakdown, and debt settlement tracking.',
      image: '/api/placeholder/400/300',
      tags: ['MERN Stack', 'Express.js', 'React.js', 'Node.js', 'MongoDB', 'Firebase Auth'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Placement Management System',
      description: 'Created an admin panel for managing placement offers and registrations with role-based access control. Implemented real-time tracking and a centralized database system.',
      image: '/api/placeholder/400/300',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-24 px-8 md:px-12 bg-gradient-to-b from-purple/5 to-dark-gray">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16"></div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light heading-font gradient-text mb-8">
              Project Arsenal
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto body-text">
              A collection of innovative projects that showcase the fusion of creativity and technology
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-neon-blue to-purple text-white neon-glow'
                    : 'glass-card text-soft-gray hover:text-white hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card overflow-hidden h-full soft-glow">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-purple/20 flex items-center justify-center">
                      <Play className="w-16 h-16 text-neon-blue opacity-50" />
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-electric-pink to-purple rounded-full text-white text-sm font-semibold">
                        ⭐ Featured
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        <motion.a
                          href={project.liveUrl}
                          className="p-2 bg-neon-blue rounded-full text-white hover:scale-110 transition-transform"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          className="p-2 bg-white/20 rounded-full text-white hover:scale-110 transition-transform"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-soft-gray text-base mb-6 body-text">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-2 bg-dark-gray/50 text-neon-blue text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-4 glass-card text-white font-semibold rounded-full text-lg hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
