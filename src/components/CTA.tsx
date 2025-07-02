import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full px-4 py-2">
              <Sparkles className="h-5 w-5 text-primary-400" />
              <span className="text-primary-300 font-medium">Limited Time: Free Beta Access</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Your Dream Career
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Starts Today
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't let another day pass wondering "what if." JobGPT is ready to transform 
            your career confusion into a clear, actionable path to success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Link to="/chat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center space-x-3 hover:shadow-2xl hover:shadow-primary-500/25 transition-all"
              >
                <Zap className="h-6 w-6" />
                <span>Start Free Conversation</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/roadmap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg flex items-center space-x-3 border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>View Demo Roadmap</span>
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">10,000+</div>
              <div className="text-gray-400 text-sm">Careers Transformed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">30 Days</div>
              <div className="text-gray-400 text-sm">Average Time to Offer</div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mt-8"
        >
          No credit card required • Free forever plan available • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;