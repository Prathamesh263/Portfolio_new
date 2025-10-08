'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Trophy, Award } from 'lucide-react'; // Added missing icons

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: 'Event Co-ordinator Team',
      company: 'DevKraft, Dr. D. Y. Patil Institute of Technology',
      period: 'Nov 2023 - Present',
      description:
        'Organized 24-hour city-level hackathon and competitions. Managed tech execution and coordination across departments, gaining valuable leadership and coordination experience.',
      icon: Briefcase,
      type: 'work',
      level: 'Coordinator',
    },
    {
      id: 2,
      title: 'Bachelor of Computer Engineering',
      company: 'Dr. D. Y. Patil Institute of Technology, Pimpri-Chinchwad',
      period: '2026',
      description:
        'Pursuing Computer Engineering with a CGPA of 9.00. Focused on web development, AI integration, and software engineering principles.',
      icon: GraduationCap,
      type: 'education',
      level: 'Graduate',
    },
    {
      id: 3,
      title: 'Diploma - Information Technology',
      company: 'Government Polytechnic Nashik',
      period: '2023',
      description: 'Completed Diploma in Information Technology with 90.63 percentage.',
      icon: GraduationCap,
      type: 'education',
      level: 'Diploma',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Senior':
        return 'from-neon-blue to-purple';
      case 'Mid':
        return 'from-purple to-electric-pink';
      case 'Junior':
        return 'from-electric-pink to-neon-blue';
      case 'Graduate':
        return 'from-neon-blue to-electric-pink';
      default:
        return 'from-neon-blue to-purple';
    }
  };

  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-12 bg-gradient-to-b from-dark-gray to-purple/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light heading-font gradient-text mb-8">
              Experience Timeline
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto body-text">
              A journey through professional growth, achievements, and continuous learning
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Experience Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
                <Briefcase className="w-10 h-10 text-neon-blue" />
                Professional Journey & Education
              </h3>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Timeline Line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-neon-blue to-purple opacity-30" />
                    )}

                    <div className="flex gap-8">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${getLevelColor(
                          exp.level
                        )} flex items-center justify-center`}
                      >
                        <exp.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 glass-card p-8 soft-glow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-2xl font-bold text-white">{exp.title}</h4>
                          <span className="text-neon-blue text-base font-semibold">{exp.period}</span>
                        </div>

                        <p className="text-electric-pink font-semibold text-lg mb-4">{exp.company}</p>
                        <p className="text-soft-gray text-base body-text">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Badge */}
            <motion.div
              className="mt-12 glass-card p-8 text-center soft-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">🎯 Current Focus</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {['Web3', 'AI/ML', 'VR/AR', 'Gaming', 'Performance'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-neon-blue to-purple rounded-full text-white text-lg font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
