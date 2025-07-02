import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'JobGPT transformed my career transition from marketing to tech. The 3D roadmap made complex learning paths feel achievable, and the AI coach kept me motivated through every milestone.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager at Meta',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The mock interview feature was a game-changer. JobGPT\'s AI understood exactly what Meta was looking for and helped me prepare with precision. Landed my dream PM role!',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'UX Designer at Airbnb',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'As a recent graduate, I was completely lost about my career path. JobGPT\'s conversational approach helped me discover my passion for UX design and guided me every step of the way.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Data Scientist at Netflix',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The AI resume analyzer caught gaps I never noticed. JobGPT\'s personalized learning recommendations helped me build the exact skills Netflix was looking for.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Director at Spotify',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The weekly AI check-ins kept me accountable and motivated. JobGPT adapted my plan when life got in the way, making career growth feel sustainable and achievable.',
    rating: 5
  },
  {
    name: 'Alex Johnson',
    role: 'Startup Founder',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'JobGPT didn\'t just help me find a job—it helped me discover my entrepreneurial path. The 3D roadmap visualized my journey from employee to founder beautifully.',
    rating: 5
  }
];

const Testimonials = () => {
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
              Success Stories from
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              JobGPT Alumni
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real people, real transformations. See how JobGPT has helped professionals 
            across industries achieve their career dreams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-6 w-6 text-primary-400 mb-2" />
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold ml-3">4.9/5 from 10,000+ users</span>
            </div>
            <p className="text-gray-400 text-lg">
              Join the community of successful professionals who transformed their careers with JobGPT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;