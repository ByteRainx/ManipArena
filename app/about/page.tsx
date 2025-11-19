import { Target, BarChart, Layers, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">About ManipArena</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Cross-Task Generalization in the Real World
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
             A benchmark designed to push the boundaries of robotic manipulation by focusing on what matters most: generalization.
          </p>
        </div>

        <div className="mt-20">
             <div className="grid grid-cols-1 gap-y-16 gap-x-12 lg:grid-cols-2">
                 <div>
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
                        Background & Motivation
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        While robot learning has seen tremendous progress, most benchmarks are either restricted to simulation or limited to a few simple tasks. 
                        ManipArena bridges this gap by providing a large-scale, real-world platform for evaluating 
                        <span className="font-bold text-gray-900"> Vision-Language-Action (VLA)</span> models.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                        Our goal is to rigorously measure a model's ability to adapt to new objects, scenes, and task variations without fine-tuning.
                    </p>
                 </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
                        Key Differentiators
                    </h3>
                    <dl className="mt-6 space-y-6">
                        <div className="flex">
                            <Target className="flex-shrink-0 h-6 w-6 text-blue-600" />
                            <div className="ml-3">
                                <dt className="text-lg leading-6 font-medium text-gray-900">Remote Real-Robot Evaluation</dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    No hardware required. Submit your code, and we run it on our physical robot farm.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <Layers className="flex-shrink-0 h-6 w-6 text-blue-600" />
                            <div className="ml-3">
                                <dt className="text-lg leading-6 font-medium text-gray-900">6 Levels of Generalization</dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Evaluated across In-domain, Visual, Physical, Semantic, Task, and Long-horizon variations.
                                </dd>
                            </div>
                        </div>
                    </dl>
                 </div>
             </div>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Generalization Tiers</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'L1: In-Domain', desc: 'Same setup as training data. Tests memorization & precision.' },
                    { title: 'L2: Visual', desc: 'New lighting, background colors, and distractors.' },
                    { title: 'L3: Physical', desc: 'New object instances (geometry, size, friction).' },
                    { title: 'L4: Semantic', desc: 'Instructions with new phrasing or synonyms.' },
                    { title: 'L5: Task', desc: 'Novel combinations of known sub-skills.' },
                    { title: 'L6: Long-Horizon', desc: 'Multi-stage tasks requiring state tracking.' },
                ].map((tier) => (
                    <div key={tier.title} className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-semibold text-blue-600">{tier.title}</h4>
                        <p className="mt-2 text-gray-600">{tier.desc}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
}

