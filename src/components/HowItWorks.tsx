import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Brain, Map, Target, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Start the Conversation',
    description: 'Begin with a voice or text-based chat where JobGPT learns about your background, passions, and career goals.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI Analysis & Planning',
    description: 'GPT-4o analyzes your profile, identifies skill gaps, and creates a personalized career strategy.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Map,
    title: 'Generate 3D Roadmap',
    description: 'Watch as your custom career timeline comes to life with interactive milestones and learning paths.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Execute & Track',
    description: 'Follow your roadmap with curated resources, progress tracking, and adaptive AI feedback.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: TrendingUp,
    title: 'Achieve Success',
    description: 'Land your dream job with confidence, backed by data-driven preparation and AI guidance.',
    color: 'from-indigo-500 to-purple-500'
  }
];

const HowItWorks = () => {
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
              How JobGPT
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Transforms Your Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From confusion to clarity in five intelligent steps. Our AI-powered process 
            adapts to your unique situation and goals.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/20 via-secondary-500/40 to-primary-500/20 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-8 text-gray-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have already discovered their path to success with JobGPT's intelligent guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;