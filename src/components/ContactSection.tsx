'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Rocket
} from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! 🚀');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Prathamesh263/',
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/prathamesh-satbhai-2a813a246',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:prathameshsatbhai007@gmail.com',
      color: 'hover:text-neon-blue',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prathameshsatbhai007@gmail.com',
      color: 'text-neon-blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9403616594',
      color: 'text-purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      color: 'text-electric-pink',
    },
  ];

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

  return (
    <section id="contact" className="py-24 px-8 md:px-12 bg-gradient-to-b from-dark-gray to-purple/20">
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
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto body-text">
              Ready to collaborate on your next big project? Let&apos;s create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-10 soft-glow h-full">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-neon-blue" />
                  Send Transmission
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-soft-gray text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-dark-gray/50 border border-neon-blue/30 rounded-lg text-white placeholder-soft-gray focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-soft-gray text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-dark-gray/50 border border-neon-blue/30 rounded-lg text-white placeholder-soft-gray focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-soft-gray text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-gray/50 border border-neon-blue/30 rounded-lg text-white placeholder-soft-gray focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      placeholder="What&apos;s this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-soft-gray text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="w-full px-6 py-4 bg-dark-gray/50 border border-neon-blue/30 rounded-lg text-white placeholder-soft-gray focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 text-lg resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-10 py-6 bg-gradient-to-r from-neon-blue to-purple text-white font-semibold rounded-lg text-xl hover:scale-105 transition-all duration-300 neon-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner w-5 h-5" />
                        Sending Transmission...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Transmission
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="space-y-10">
              {/* Contact Information */}
              <div className="glass-card p-10 soft-glow">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Rocket className="w-8 h-8 text-electric-pink" />
                  Get In Touch
                </h3>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-6 p-6 rounded-lg bg-dark-gray/30 hover:bg-dark-gray/50 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${info.color.split('-')[1]} to-${info.color.split('-')[1]}/20 flex items-center justify-center`}>
                        <info.icon className={`w-8 h-8 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-soft-gray text-base">{info.label}</p>
                        <p className="text-white font-semibold text-lg">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-10 soft-glow">
                <h3 className="text-3xl font-bold text-white mb-8">Connect With Me</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 rounded-lg bg-dark-gray/30 hover:bg-dark-gray/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className={`w-8 h-8 text-soft-gray group-hover:${social.color} transition-colors duration-300`} />
                      <span className="text-white font-medium text-lg group-hover:text-neon-blue transition-colors duration-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card p-10 text-center soft-glow">
                <h3 className="text-2xl font-bold text-white mb-6">Response Time</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-dark-gray/20">
                    <span className="text-soft-gray text-lg">Email Response</span>
                    <span className="text-neon-blue font-semibold text-lg">Within 24h</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-dark-gray/20">
                    <span className="text-soft-gray text-lg">Project Discussion</span>
                    <span className="text-purple font-semibold text-lg">Same Day</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-dark-gray/20">
                    <span className="text-soft-gray text-lg">Urgent Matters</span>
                    <span className="text-electric-pink font-semibold text-lg">ASAP</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
