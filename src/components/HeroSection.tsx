'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-dark-gray via-purple/10 to-neon-blue/10 py-24">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Gaming Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4 text-neon-blue" />
            <span className="text-sm font-medium text-soft-gray">LEVEL 99 DEVELOPER</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl font-light heading-font mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="gradient-text">⚡ Welcome to</span>
            <br />
            <span className="gradient-text">Prathamesh&apos;s</span>
            <br />
            <span className="gradient-text">Gaming Universe</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-soft-gray mb-12 max-w-3xl mx-auto body-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Crafting Digital Experiences with{' '}
            <span className="text-neon-blue font-semibold">Code</span> +{' '}
            <span className="text-electric-pink font-semibold">Creativity</span> 🎮
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-purple text-white font-semibold rounded-full text-lg hover:scale-105 transition-all duration-300 neon-glow"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00FFFF" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
            >
              🚀 Start Journey
            </motion.button>
            
            <motion.button
              className="px-8 py-4 glass-card text-white font-semibold rounded-full text-lg hover:scale-105 transition-all duration-300 soft-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📁 View Projects
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {[
              { label: 'Projects Completed', value: '50+', icon: '🎯' },
              { label: 'Technologies Mastered', value: '15+', icon: '⚡' },
              { label: 'Years of Experience', value: '3+', icon: '🏆' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 text-center soft-glow"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-neon-blue mb-1">{stat.value}</div>
                <div className="text-soft-gray text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-soft-gray hover:text-neon-blue transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
