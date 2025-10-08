'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Gamepad2, Palette, Zap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code, color: 'neon-blue' },
    { name: 'UI/UX Design', level: 85, icon: Palette, color: 'purple' },
    { name: 'Game Development', level: 75, icon: Gamepad2, color: 'electric-pink' },
    { name: 'Performance Optimization', level: 90, icon: Zap, color: 'neon-blue' },
  ];

  return (
    <section id="about" className="py-24 px-8 md:px-12 bg-gradient-to-b from-dark-gray to-purple/5">
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
              About the Developer
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto body-text">
              Passionate about creating immersive digital experiences that blend technology with creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Avatar and Profile */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                {/* Avatar Container */}
                <motion.div
                  className="relative w-64 h-64 mx-auto lg:mx-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing Border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-purple to-electric-pink p-1">
                    <div className="w-full h-full rounded-full bg-dark-gray flex items-center justify-center">
                      {/* Avatar Placeholder - Replace with actual image */}
                      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-neon-blue/20 to-purple/20 flex items-center justify-center">
                        <span className="text-6xl">👨‍💻</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rank Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-electric-pink to-purple rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-white font-bold text-lg">99</span>
                  </motion.div>
                </motion.div>

                {/* Profile Info */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">Prathamesh Satbhai</h3>
                  <p className="text-neon-blue text-lg font-semibold">Computer Engineering Student & Full-Stack Developer</p>
                        <p className="text-soft-gray body-text">
                          A dedicated Computer Engineering student at Dr. D.Y Patil Institute of Technology with a CGPA of 9.00. 
                          Passionate about building innovative web applications and exploring AI technologies. 
                          Experienced in developing full-stack applications with a focus on user experience and modern technologies.
                        </p>
                </div>
              </div>
            </motion.div>

            {/* Skills and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 soft-glow">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-neon-blue" />
                  Power Levels
                </h4>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <skill.icon className={`w-5 h-5 text-${skill.color}`} />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-soft-gray text-sm">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-dark-gray rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/50 rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gaming Stats */}
              <motion.div
                className="glass-card p-8 soft-glow"
                variants={itemVariants}
              >
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Gamepad2 className="w-6 h-6 text-electric-pink" />
                  Gaming Achievements
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Code Commits', value: '2,500+', icon: '💻' },
                    { label: 'Projects Shipped', value: '50+', icon: '🚀' },
                    { label: 'Cups of Coffee', value: '1,000+', icon: '☕' },
                    { label: 'Bugs Squashed', value: '500+', icon: '🐛' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 rounded-lg bg-dark-gray/50"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 255, 0.1)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-neon-blue font-bold text-lg">{stat.value}</div>
                      <div className="text-soft-gray text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
