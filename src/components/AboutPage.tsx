import React from 'react';
import { ArrowLeft, Users, Target, Eye, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onChoosePlan: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, onChoosePlan }) => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Title & Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Snaplicant
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Snaplicant is transforming the job application process. Our platform helps job seekers create personalized video introductions while giving employers a clearer, more human view of their potential hires — beyond just a resume.
          </p>
        </div>

        {/* Why We Built This Section */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Why We Built Snaplicant</h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              Too many great candidates are overlooked by automated systems. Snaplicant brings personality, potential, and presence back into hiring. We make it easy for job seekers to be seen — not just scanned.
            </p>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Looking Ahead</h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              We believe in creating hiring experiences that are efficient, fair, and human-first. With Snaplicant, we're building a more inclusive hiring future.
            </p>
          </div>
        </div>

        {/* Team Values Section (Additional visual element) */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Human-First</h3>
              <p className="text-white/70 text-sm">
                Every feature we build puts people at the center of the hiring process.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Inclusive</h3>
              <p className="text-white/70 text-sm">
                We're committed to making hiring more accessible and fair for everyone.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Transparent</h3>
              <p className="text-white/70 text-sm">
                Clear processes and honest communication guide everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to stand out?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of professionals who've transformed their job search with Snaplicant
            </p>
            <button
              onClick={onChoosePlan}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Choose a Plan</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;