import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, CheckCircle, Circle, Clock, Star, Target, Book, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  category: 'skill' | 'project' | 'interview' | 'network';
  duration: string;
  resources: number;
  difficulty: 1 | 2 | 3;
}

const milestones: Milestone[] = [
  {
    id: '1',
    title: 'Master JavaScript Fundamentals',
    description: 'Deep dive into ES6+, async programming, and advanced concepts',
    status: 'completed',
    category: 'skill',
    duration: '4 weeks',
    resources: 12,
    difficulty: 2
  },
  {
    id: '2',
    title: 'Build React Portfolio Project',
    description: 'Create a full-featured e-commerce application with modern React patterns',
    status: 'completed',
    category: 'project',
    duration: '6 weeks',
    resources: 8,
    difficulty: 3
  },
  {
    id: '3',
    title: 'Learn System Design Fundamentals',
    description: 'Understand scalability, databases, caching, and distributed systems',
    status: 'current',
    category: 'skill',
    duration: '8 weeks',
    resources: 15,
    difficulty: 3
  },
  {
    id: '4',
    title: 'Practice Technical Interviews',
    description: 'Solve 100+ coding problems and mock interview sessions',
    status: 'current',
    category: 'interview',
    duration: '6 weeks',
    resources: 25,
    difficulty: 2
  },
  {
    id: '5',
    title: 'Build Full-Stack Application',
    description: 'Create a production-ready app with React, Node.js, and MongoDB',
    status: 'upcoming',
    category: 'project',
    duration: '10 weeks',
    resources: 20,
    difficulty: 3
  },
  {
    id: '6',
    title: 'Network with Industry Professionals',
    description: 'Connect with 50+ professionals and attend 5 tech meetups',
    status: 'upcoming',
    category: 'network',
    duration: '12 weeks',
    resources: 10,
    difficulty: 1
  },
  {
    id: '7',
    title: 'Apply to Target Companies',
    description: 'Submit applications to 20 companies including FAANG',
    status: 'upcoming',
    category: 'interview',
    duration: '4 weeks',
    resources: 5,
    difficulty: 2
  },
  {
    id: '8',
    title: 'Ace Final Interviews',
    description: 'Navigate final rounds and negotiate job offers',
    status: 'upcoming',
    category: 'interview',
    duration: '6 weeks',
    resources: 8,
    difficulty: 3
  }
];

const categoryIcons = {
  skill: Book,
  project: Target,
  interview: Users,
  network: Star
};

const categoryColors = {
  skill: 'from-blue-500 to-cyan-500',
  project: 'from-purple-500 to-pink-500',
  interview: 'from-green-500 to-emerald-500',
  network: 'from-orange-500 to-red-500'
};

const Roadmap = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              3D Career Roadmap
            </h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Roadmap Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Journey to
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Senior Software Engineer
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive roadmap with 8 carefully crafted milestones designed to transform you 
            from where you are today to your dream role.
          </p>
          
          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-400">2</div>
              <div className="text-gray-400 text-sm">Completed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-primary-400">2</div>
              <div className="text-gray-400 text-sm">In Progress</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-gray-400">4</div>
              <div className="text-gray-400 text-sm">Upcoming</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-secondary-400">25%</div>
              <div className="text-gray-400 text-sm">Overall Progress</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Roadmap Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Interactive 3D Timeline</h3>
            <p className="text-gray-400 text-sm">Click on any milestone to explore details and resources</p>
          </div>
          
          {/* Simulated 3D Roadmap */}
          <div className="relative">
            {/* Timeline Path */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/30 via-secondary-500/50 to-accent-500/30 transform -translate-y-1/2 rounded-full"></div>
            
            {/* Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {milestones.map((milestone, index) => {
                const IconComponent = categoryIcons[milestone.category];
                return (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => setSelectedMilestone(milestone)}
                    className="relative cursor-pointer"
                  >
                    {/* Milestone Node */}
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full border-4 flex items-center justify-center transition-all ${
                      milestone.status === 'completed' 
                        ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/25' 
                        : milestone.status === 'current'
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 border-primary-400 shadow-lg shadow-primary-500/25 animate-pulse'
                        : 'bg-gray-700 border-gray-600'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <CheckCircle className="h-8 w-8 text-white" />
                      ) : milestone.status === 'current' ? (
                        <Play className="h-8 w-8 text-white" />
                      ) : (
                        <IconComponent className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    
                    {/* Milestone Info */}
                    <div className="text-center">
                      <h4 className="text-white text-sm font-semibold mb-1 line-clamp-2">
                        {milestone.title}
                      </h4>
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        {[...Array(milestone.difficulty)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-400 text-xs">{milestone.duration}</p>
                    </div>
                    
                    {/* Connection Line */}
                    {index < milestones.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Milestone Details */}
        {selectedMilestone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${categoryColors[selectedMilestone.category]} rounded-xl flex items-center justify-center`}>
                  {React.createElement(categoryIcons[selectedMilestone.category], { className: "h-8 w-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedMilestone.title}</h3>
                  <p className="text-gray-400 mb-4">{selectedMilestone.description}</p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-300">{selectedMilestone.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Book className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-300">{selectedMilestone.resources} resources</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(selectedMilestone.difficulty)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-gray-300 ml-1">Difficulty</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h4 className="text-lg font-semibold text-white mb-4">Learning Path</h4>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-semibold text-white mb-2">Week 1-2: Foundation</h5>
                    <p className="text-gray-400 text-sm">Build core understanding and set up development environment</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-semibold text-white mb-2">Week 3-4: Practice</h5>
                    <p className="text-gray-400 text-sm">Hands-on exercises and real-world applications</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h5 className="font-semibold text-white mb-2">Week 5-6: Mastery</h5>
                    <p className="text-gray-400 text-sm">Advanced concepts and portfolio integration</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold"
                  >
                    Start Milestone
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/10 backdrop-blur-sm text-white py-3 rounded-xl font-semibold border border-white/20"
                  >
                    View Resources
                  </motion.button>
                  <Link to="/chat">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/10 backdrop-blur-sm text-white py-3 rounded-xl font-semibold border border-white/20"
                    >
                      Ask AI Coach
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;