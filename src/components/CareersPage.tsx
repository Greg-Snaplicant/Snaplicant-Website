import React from 'react';
import { ArrowLeft, Briefcase, Mail, Rocket, Users, Code, Palette } from 'lucide-react';

interface CareersPageProps {
  onBack: () => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ onBack }) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@snaplicant.com?subject=Interest in Joining Snaplicant&body=Hi Snaplicant team,%0D%0A%0D%0AI\'m interested in potential opportunities at Snaplicant. Here\'s a bit about me:%0D%0A%0D%0AName: %0D%0ARole of Interest: %0D%0AExperience: %0D%0A%0D%0ALooking forward to hearing from you!';
  };

  const roles = [
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "Developers",
      description: "Full-stack, frontend, backend, and mobile developers"
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      title: "Designers",
      description: "UI/UX designers and visual design specialists"
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Content Creators",
      description: "Marketing, copywriting, and content strategy experts"
    }
  ];

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

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Careers at Snaplicant
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We're building the future of hiring — and always open to meeting passionate people.
          </p>
        </div>

        {/* Message Section */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Join Our Mission</h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Although we're not actively hiring right now, Snaplicant is growing. If you're a developer, designer, or content creator passionate about reshaping the future of job applications, we'd love to hear from you!
            </p>
            
            {/* Roles We're Interested In */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {roles.map((role, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="flex justify-center mb-4">
                    {role.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                  <p className="text-white/70 text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We'd love to learn more about you and keep you in mind for future opportunities.
            </p>
            <button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
            >
              <Mail className="w-5 h-5" />
              <span>Send Us Your Info</span>
            </button>
            <p className="text-white/60 text-sm mt-4">
              This will open your email client with a pre-filled message
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">What We Value</h3>
            <div className="flex flex-wrap justify-center gap-4 text-white/70">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Innovation</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Collaboration</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Impact</span>
              <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;