import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Play, CreditCard, Video, Shield, AlertTriangle, ChevronDown, ChevronUp, Mail } from 'lucide-react';

interface HelpCenterProps {
  onBack: () => void;
  onContact: () => void;
}

const HelpCenter: React.FC<HelpCenterProps> = ({ onBack, onContact }) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@snaplicant.com?subject=Help Center Question';
  };

  const faqSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Play className="w-6 h-6 text-blue-400" />,
      faqs: [
        {
          id: 'what-is-snaplicant',
          question: 'What is Snaplicant?',
          answer: 'Snaplicant is a video-first job application platform that helps job seekers create professional video introductions to showcase their personality, skills, and experience beyond traditional resumes. Employers can discover and connect with candidates through these dynamic video profiles.'
        },
        {
          id: 'create-video-resume',
          question: 'How do I create a video resume?',
          answer: 'Creating your video resume is simple: 1) Sign up and choose your plan, 2) Select a professional template that matches your industry, 3) Use our AI script generator for guidance, 4) Record your introduction using your webcam or phone, 5) Review and share your video profile with employers.'
        },
        {
          id: 'download-anything',
          question: 'Do I need to download anything?',
          answer: 'No downloads required! Snaplicant works entirely in your web browser. You just need a device with a camera (computer, phone, or tablet) and an internet connection to record and share your video introductions.'
        }
      ]
    },
    {
      id: 'pricing-plans',
      title: 'Pricing & Plans',
      icon: <CreditCard className="w-6 h-6 text-purple-400" />,
      faqs: [
        {
          id: 'free-plan-included',
          question: "What's included in the Free Plan?",
          answer: 'The Free Plan includes: 1 basic video profile, AI script generator (5 prompts), access to 2 standard templates, basic video quality, standard sharing options, and email support. Perfect for getting started and testing the platform.'
        },
        {
          id: 'paid-plan-benefits',
          question: 'What are the benefits of the Paid Plan?',
          answer: 'The Paid Plan ($10/month) includes: unlimited video profiles, unlimited AI script prompts, all premium templates, AI resume analysis & insights, custom branding, HD video quality, advanced sharing & analytics, "Featured Candidate" badge, priority support, and PDF export options.'
        },
        {
          id: 'upgrade-cancel',
          question: 'How do I upgrade or cancel?',
          answer: 'You can upgrade or cancel anytime from your account dashboard. Go to Settings > Subscription to manage your plan. Upgrades take effect immediately, and cancellations will remain active until the end of your current billing period. No cancellation fees.'
        }
      ]
    },
    {
      id: 'templates-recording',
      title: 'Templates & Recording',
      icon: <Video className="w-6 h-6 text-indigo-400" />,
      faqs: [
        {
          id: 'choose-template',
          question: 'How do I choose a background template?',
          answer: 'After selecting your plan, you\'ll see our template gallery. Choose based on your industry: Corporate Professional for business roles, Creative Studio for design positions, Tech Hub for technology jobs, etc. Free users get 2 templates, Paid users get access to all premium options.'
        },
        {
          id: 'templates-customizable',
          question: 'Are templates customizable?',
          answer: 'Paid plan users can customize templates with personal branding, color adjustments, and style modifications. Free plan users can use templates as-is. All templates are professionally designed to look great across different industries and roles.'
        },
        {
          id: 'recording-tips',
          question: 'Tips for recording a great video',
          answer: 'For best results: 1) Find good lighting (face a window or use soft lighting), 2) Ensure quiet environment with minimal background noise, 3) Look directly at the camera, 4) Speak clearly and at a moderate pace, 5) Keep it concise (60-90 seconds), 6) Practice your key points beforehand, 7) Use our AI coaching for real-time feedback.'
        }
      ]
    },
    {
      id: 'privacy-security',
      title: 'Privacy & Security',
      icon: <Shield className="w-6 h-6 text-green-400" />,
      faqs: [
        {
          id: 'who-sees-video',
          question: 'Who can see my video?',
          answer: 'You have complete control over your video visibility. You can share via private URLs with specific employers, make your profile discoverable in our employer database (optional), or keep it completely private. You can also set expiration dates for shared links and track who has viewed your profile.'
        },
        {
          id: 'information-secure',
          question: 'Is my personal information secure?',
          answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest. We\'re GDPR compliant and follow industry-standard security practices. We never sell your personal information, and you can control what information is visible to employers.'
        },
        {
          id: 'delete-data',
          question: 'Can I delete my data?',
          answer: 'Absolutely. You can delete your account and all associated data anytime from your account settings. This includes your videos, resume data, and personal information. The deletion is permanent and cannot be undone. You can also selectively delete individual videos or information.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      faqs: [
        {
          id: 'video-wont-upload',
          question: "My video won't upload — what should I do?",
          answer: 'Try these steps: 1) Check your internet connection, 2) Ensure your video file is under 10MB, 3) Try a different browser (Chrome or Firefox work best), 4) Clear your browser cache and cookies, 5) Disable browser extensions temporarily, 6) Try recording a shorter video. If issues persist, contact our support team.'
        },
        {
          id: 'no-audio-preview',
          question: "I can't hear audio in my preview",
          answer: 'Check these common issues: 1) Ensure your browser has microphone permissions enabled, 2) Check your device\'s audio settings and microphone levels, 3) Try refreshing the page, 4) Test your microphone in other applications, 5) Make sure you\'re not muted in the browser tab. If problems continue, try a different browser.'
        },
        {
          id: 'site-wont-load',
          question: "The site won't load correctly on my browser",
          answer: 'For best performance, use updated versions of Chrome, Firefox, Safari, or Edge. Try: 1) Clearing browser cache and cookies, 2) Disabling ad blockers temporarily, 3) Checking if JavaScript is enabled, 4) Trying an incognito/private browsing window, 5) Restarting your browser. Mobile users should ensure they have a stable internet connection.'
        }
      ]
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
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Have questions about how Snaplicant works? Find quick answers below to help you get started, troubleshoot issues, or understand your account options.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section) => (
            <div key={section.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
              </div>
              
              <div className="divide-y divide-white/10">
                {section.faqs.map((faq) => (
                  <div key={faq.id}>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                      {openFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-white/60 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === faq.id && (
                      <div className="px-6 pb-4">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              If you couldn't find your answer above, feel free to reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onContact}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
              <button
                onClick={handleEmailClick}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Email Us Directly
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Or email us at{' '}
              <button
                onClick={handleEmailClick}
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                hello@snaplicant.com
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;