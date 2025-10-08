'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Gamepad2, 
  Palette, 
  Smartphone, 
  Zap,
  Cloud,
  Shield,
  Cpu,
  Globe
} from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'neon-blue',
      skills: [
        { name: 'HTML/CSS/JavaScript', level: 90, experience: '2+ years' },
        { name: 'React.js', level: 85, experience: '1+ year' },
        { name: 'TailwindCSS', level: 85, experience: '1+ year' },
        { name: 'UI/UX Design', level: 80, experience: '1+ year' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'Node.js', level: 85, experience: '1+ year' },
        { name: 'Express.js', level: 80, experience: '1+ year' },
        { name: 'MongoDB', level: 80, experience: '1+ year' },
        { name: 'MySQL', level: 75, experience: '1+ year' },
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'electric-pink',
      skills: [
        { name: 'C++', level: 85, experience: '2+ years' },
        { name: 'Java', level: 80, experience: '1+ year' },
        { name: 'JavaScript', level: 85, experience: '2+ years' },
        { name: 'SQL', level: 75, experience: '1+ year' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Palette,
      color: 'neon-blue',
      skills: [
        { name: 'Communication', level: 90, experience: '2+ years' },
        { name: 'Teamwork', level: 85, experience: '2+ years' },
        { name: 'Problem Solving', level: 85, experience: '2+ years' },
        { name: 'Leadership', level: 80, experience: '1+ year' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Smartphone,
      color: 'purple',
      skills: [
        { name: 'Git/GitHub', level: 85, experience: '2+ years' },
        { name: 'VS Code', level: 90, experience: '2+ years' },
        { name: 'Firebase Auth', level: 80, experience: '1+ year' },
        { name: 'Responsive Design', level: 85, experience: '1+ year' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Cloud,
      color: 'electric-pink',
      skills: [
        { name: 'Gemini API', level: 80, experience: '1+ year' },
        { name: 'Vapi Voice API', level: 75, experience: '1+ year' },
        { name: 'GPT Integration', level: 80, experience: '1+ year' },
        { name: 'Speech-to-Text', level: 75, experience: '1+ year' },
      ]
    }
  ];

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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'neon-blue':
        return {
          bg: 'from-neon-blue to-neon-blue/50',
          text: 'text-neon-blue',
          border: 'border-neon-blue',
          glow: 'shadow-neon-blue/50'
        };
      case 'purple':
        return {
          bg: 'from-purple to-purple/50',
          text: 'text-purple',
          border: 'border-purple',
          glow: 'shadow-purple/50'
        };
      case 'electric-pink':
        return {
          bg: 'from-electric-pink to-electric-pink/50',
          text: 'text-electric-pink',
          border: 'border-electric-pink',
          glow: 'shadow-electric-pink/50'
        };
      default:
        return {
          bg: 'from-neon-blue to-neon-blue/50',
          text: 'text-neon-blue',
          border: 'border-neon-blue',
          glow: 'shadow-neon-blue/50'
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-8 md:px-12 bg-gradient-to-b from-purple/10 to-dark-gray">
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
              Skill Arsenal
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto body-text">
              Power levels and expertise across various technologies and domains
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              
              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="glass-card p-8 hover:scale-105 transition-transform duration-300 soft-glow h-full"
                  whileHover={{ y: -10 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center`}>
                      <category.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium text-base">{skill.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-soft-gray text-sm">{skill.experience}</span>
                            <span className={`text-sm font-bold ${colors.text}`}>{skill.level}%</span>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-dark-gray rounded-full h-3 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${colors.bg} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-neon-blue" />
              Additional Expertise
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Web3', icon: Globe, level: 60 },
                { name: 'AI/ML', icon: Cpu, level: 55 },
                { name: 'Security', icon: Shield, level: 70 },
                { name: 'Performance', icon: Zap, level: 85 },
                { name: 'Testing', icon: Shield, level: 75 },
                { name: 'SEO', icon: Globe, level: 80 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 soft-glow"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <skill.icon className="w-10 h-10 text-neon-blue mx-auto mb-3" />
                  <div className="text-white font-semibold text-base mb-2">{skill.name}</div>
                  <div className="text-soft-gray text-sm">{skill.level}%</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

              {/* Specialized Skills */}
              <motion.div
                variants={itemVariants}
                className="mt-20 glass-card p-10 text-center soft-glow"
              >
                <h3 className="text-3xl font-bold text-white mb-8">🚀 Specialized Expertise</h3>
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                  <span className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-lg font-semibold soft-glow">
                    GenAI Integration
                  </span>
                  <span className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-lg font-semibold soft-glow">
                    Docker & Containerization
                  </span>
                </div>
                <p className="text-soft-gray text-lg body-text">
                  Advanced expertise in AI integration and containerized deployment strategies
                </p>
              </motion.div>

              {/* Learning Goals */}
              <motion.div
                variants={itemVariants}
                className="mt-12 glass-card p-10 text-center soft-glow"
              >
                <h3 className="text-3xl font-bold text-white mb-6">🎯 Currently Learning</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {['Rust', 'WebAssembly', 'Machine Learning', 'Blockchain', 'AR/VR'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-gradient-to-r from-electric-pink to-purple rounded-full text-white text-lg font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
