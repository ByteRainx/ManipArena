import { Github, BarChart2 } from 'lucide-react';

const baselines = [
  {
    name: 'OpenVLA-Base',
    type: 'VLA (Transformer)',
    performance: 'High',
    description: 'A strong baseline based on OpenVLA fine-tuned on the ManipArena training set.',
    link: '#',
  },
  {
    name: 'Diffusion Policy',
    type: 'Imitation Learning',
    performance: 'Medium',
    description: 'Standard conditional diffusion policy with ResNet-50 vision encoders.',
    link: '#',
  },
  {
    name: 'ACT (Action Chunking Transformer)',
    type: 'Imitation Learning',
    performance: 'Medium',
    description: 'Transformer-based policy predicting action chunks.',
    link: '#',
  },
  {
    name: 'Octo-Small',
    type: 'VLA (Transformer)',
    performance: 'High',
    description: 'Lightweight VLA model suitable for faster inference.',
    link: '#',
  },
];

export default function BaselinesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Baselines & Resources</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Start your development with our provided baseline implementations.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {baselines.map((baseline) => (
          <div key={baseline.name} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{baseline.name}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      baseline.performance === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                      {baseline.performance} Perf
                  </span>
              </div>
              <p className="mt-1 text-sm text-gray-500 mb-4">
                Type: <span className="font-medium">{baseline.type}</span>
              </p>
              <p className="text-sm text-gray-600 mb-6">
                {baseline.description}
              </p>
              <div className="flex space-x-3">
                 <a href={baseline.link} className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                    <Github className="mr-2 h-4 w-4 text-gray-500" />
                    View Code
                 </a>
                 <a href={baseline.link} className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    See Results
                 </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Need Help?</h3>
        <p className="mt-4 text-gray-600">
          Check out our tutorials or join the community discussion.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                Read Tutorials
            </button>
             <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100">
                Join Discord
            </button>
        </div>
      </div>
    </div>
  );
}

