import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Target, TrendingUp, Calendar, Award, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
              Career Dashboard
            </h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Welcome back, Alex!</h2>
              <p className="text-gray-400">Ready to continue your journey to becoming a Senior Software Engineer?</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary-400">73%</div>
              <div className="text-gray-400 text-sm">Overall Progress</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-secondary-400">12</div>
              <div className="text-gray-400 text-sm">Milestones Completed</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl font-bold text-accent-400">8</div>
              <div className="text-gray-400 text-sm">Days Until Next Goal</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary-400" />
                <span>Current Goals</span>
              </h3>
              <Link to="/roadmap" className="text-primary-400 hover:text-primary-300 text-sm">View Full Roadmap</Link>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-primary-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Complete React Advanced Patterns Course</h4>
                  <span className="text-xs bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full">In Progress</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">Master advanced React patterns including render props, compound components, and custom hooks.</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>65% Complete</span>
                  <span>Due: March 15</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-secondary-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Build Portfolio Project: Task Management App</h4>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">Next Up</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">Create a full-stack task management application using React, Node.js, and MongoDB.</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-400 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Not Started</span>
                  <span>Due: April 1</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Practice System Design Interviews</h4>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Completed</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">Complete 10 system design practice sessions with AI feedback.</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>100% Complete</span>
                  <span>Completed: March 5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* AI Coach */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary-400" />
                <span>AI Coach</span>
              </h3>
              <p className="text-gray-400 text-sm mb-4">Get personalized guidance and motivation from your AI career coach.</p>
              <Link to="/chat">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold"
                >
                  Start Conversation
                </motion.button>
              </Link>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent-400" />
                <span>Recent Achievements</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">System Design Master</div>
                    <div className="text-gray-400 text-xs">Completed all practice sessions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Consistency Champion</div>
                    <div className="text-gray-400 text-xs">7-day learning streak</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Goal Crusher</div>
                    <div className="text-gray-400 text-xs">Completed 3 milestones this month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-secondary-400" />
                <span>Upcoming</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-medium">AI Check-in</div>
                    <div className="text-gray-400 text-xs">Weekly progress review</div>
                  </div>
                  <div className="text-secondary-400 text-xs">Tomorrow</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-medium">Mock Interview</div>
                    <div className="text-gray-400 text-xs">Senior SWE behavioral</div>
                  </div>
                  <div className="text-secondary-400 text-xs">March 12</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-medium">Goal Deadline</div>
                    <div className="text-gray-400 text-xs">React course completion</div>
                  </div>
                  <div className="text-secondary-400 text-xs">March 15</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;