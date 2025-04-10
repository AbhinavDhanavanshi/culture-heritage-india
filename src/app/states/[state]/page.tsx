import { notFound } from 'next/navigation';

const stateData: Record<string, { name: string; description: string }> = {
  'west-bengal': {
    name: 'West Bengal',
    description: 'Rich in literary and artistic heritage, known for Rabindra Sangeet, Durga Puja, and terracotta temples.',
  },
  'kerala': {
    name: 'Kerala',
    description: 'Known for Kathakali, backwaters, Ayurveda, and vibrant classical music and dance traditions.',
  },
  'rajasthan': {
    name: 'Rajasthan',
    description: 'Famous for folk music, Ghoomar dance, majestic forts, and colorful festivals.',
  },
};

export default function StatePage({ params }: { params: { state: string } }) {
  const state = stateData[params.state];

  if (!state) return notFound();

  return (
    <div className="max-w-3xl mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold text-sky-400 mb-4">{state.name}</h1>
      <p className="text-lg text-gray-300">{state.description}</p>
    </div>
  );
}
