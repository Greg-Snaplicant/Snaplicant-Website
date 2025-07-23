import React, { useState } from 'react';
import { ArrowLeft, Check, Star, Sparkles, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

interface ModernPricingPageProps {
  onBack: () => void;
  onSelectPlan: (plan: string) => void;
}

const ModernPricingPage: React.FC<ModernPricingPageProps> = ({ onBack, onSelectPlan }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel or upgrade from your dashboard."
    },
    {
      question: "Is the Free plan really free?",
      answer: "Yes. You can explore all key features without paying."
    },
    {
      question: "Do I need a credit card to start?",
      answer: "No card required to start the Free plan."
    }
  ];

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '1 basic video profile',
        'AI script generator (5 prompts)',
        'Access to 2 standard templates',
        'Basic video quality',
        'Standard sharing options',
        'Email support',
        'No resume analysis'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
      popular: false
    },
    {
      id: 'paid',
      name: 'Paid',
      price: '$10',
      period: '/month',
      description: 'Everything you need to stand out',
      features: [
        'Unlimited video profiles',
        'Unlimited AI script prompts',
        'Access to all premium templates',
        'AI resume analysis & insights',
        'Custom branding & video styles',
        'Voiceover guidance & coaching',
        'HD video quality',
        'Advanced sharing & analytics',
        '"Featured Candidate" badge',
        'Priority support',
        'Export as PDF'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Start for free, upgrade when you're ready. No hidden fees.
          </p>
          
          {/* Free Trial Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-300 mb-12">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">14-day free trial on all paid plans</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:bg-white/10 ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500/30 scale-105' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {plan.popular ? (
                    <Sparkles className="w-8 h-8 text-purple-400" />
                  ) : (
                    <Star className="w-8 h-8 text-blue-400" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60 ml-2 text-xl">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/80">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-white/80 mb-6">
              Join thousands of professionals who've transformed their job search
            </p>
            <button
              onClick={() => onSelectPlan('paid')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernPricingPage;