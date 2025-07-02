import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Map, FileText, Mic, Calendar, Globe, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'GPT-4o Chat Coach',
    description: 'Conversational interface for goal setting, resume advice, and real-time feedback with empathetic AI guidance.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Map,
    title: '3D Career Roadmap',
    description: 'Interactive Three.js journey through key learning and career checkpoints with animated milestones.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: FileText,
    title: 'AI Resume Analyzer',
    description: 'Detects gaps and suggests improvements using semantic intelligence and industry best practices.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Mic,
    title: 'Mock Interview Simulator',
    description: 'Audio-based interviews with AI-generated role-specific questions and real-time feedback.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Calendar,
    title: 'Weekly AI Check-ins',
    description: 'GPT-4o adapts your plan based on real-life progress, motivation, and changing circumstances.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Globe,
    title: 'Custom Domains',
    description: 'Get your personalized domain like yugank.jobgpt.ai to showcase your public profile and roadmap.',
    gradient: 'from-teal-500 to-blue-500'
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'Comprehensive dashboards with progress stats, skill development tracking, and achievement metrics.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Firebase-authenticated accounts with enterprise-grade security and complete data privacy.',
    gradient: 'from-gray-500 to-slate-500'
  }
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Accelerate Your Career
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            JobGPT combines cutting-edge AI technology with intuitive design to create 
            the most comprehensive career planning platform ever built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;