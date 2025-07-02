import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Mic, MicOff, Brain, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI career coach. I'm here to help you navigate your career journey with personalized guidance. What would you like to discuss today? Are you looking to switch careers, advance in your current role, or explore new opportunities?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "That's a great question! Based on what you've shared, I can see you're really thinking strategically about your career. Let me help you break this down into actionable steps. First, let's identify your core strengths and the specific skills you want to develop. What industry or role are you most excited about exploring?",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // In a real app, this would integrate with speech recognition
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">AI Career Coach</h1>
                <p className="text-xs text-gray-400">Powered by GPT-4o</p>
              </div>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-3xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-secondary-500 to-accent-500' 
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Brain className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-secondary-500/20 to-accent-500/20 border border-secondary-500/30'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10'
                  }`}>
                    <p className="text-white leading-relaxed">{message.content}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about your career journey..."
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleListening}
                  className={`p-2 rounded-full transition-colors ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </motion.button>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </motion.button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button className="text-xs text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full">
              Career Change Advice
            </button>
            <button className="text-xs text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full">
              Resume Review
            </button>
            <button className="text-xs text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full">
              Interview Prep
            </button>
            <button className="text-xs text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full">
              Skill Development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;