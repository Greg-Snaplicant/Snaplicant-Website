import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProductPageProps {
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onBack }) => {
  return (
    <div className="bg-gradient-to-b from-[#10002b] to-[#240046] text-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-center">Explore What Snaplicant Offers</h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Snaplicant transforms traditional resumes into dynamic, AI-enhanced video introductions. Whether you're a job seeker or an employer, our platform helps you stand out, streamline hiring, and make stronger matches — faster.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🎥 Video Introductions</h2>
          <p className="text-md mb-4">
            Job seekers can record short, professional video clips to introduce themselves, showcase their personalities, and explain what sets them apart. No need for expensive editing software — Snaplicant guides you step-by-step.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Record and re-record until you're happy with the result</li>
            <li>Receive AI feedback on tone, clarity, and delivery</li>
            <li>Instantly share your video with employers via a secure link</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🤖 AI-Powered Coaching</h2>
          <p className="text-md mb-4">
            Nervous about presenting on camera? Our built-in AI coach gives real-time feedback and suggestions to help you speak with confidence. Improve your presence, tone, and structure with every take.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personalized tips for improvement</li>
            <li>Real-time emotion and speech analysis</li>
            <li>Confidence builder for interviews and beyond</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📂 Resume & Profile Integration</h2>
          <p className="text-md mb-4">
            Upload your resume and Snaplicant will auto-extract key skills, experience, and achievements to display alongside your video — creating a complete, interactive candidate profile for hiring managers.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🎯 Employer Dashboard</h2>
          <p className="text-md mb-4">
            Employers can browse, filter, and engage with candidates quickly using Snaplicant's easy-to-navigate dashboard. Watch intros, scan resumes, and instantly identify strong fits.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Advanced filtering by role, skills, or soft traits</li>
            <li>Save and track top candidates in your dashboard</li>
            <li>Share internal notes with your hiring team</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🔐 Secure & Private</h2>
          <p className="text-md">
            All videos and resumes are stored securely. You control who can view your content and for how long. We prioritize privacy, data encryption, and user trust.
          </p>
        </section>

        <div className="text-center mt-20">
          <button
            onClick={onBack}
            className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;