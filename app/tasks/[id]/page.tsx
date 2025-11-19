import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tasks } from '../../data/tasks';
import { ArrowLeft, Download, Play, FileText, AlertTriangle } from 'lucide-react';

interface TaskDetailProps {
  params: {
    id: string;
  };
}

// This would normally fetch data from an API or database
function getTask(id: string) {
  return tasks.find((t) => t.id === id);
}

export function generateStaticParams() {
  return tasks.map((task) => ({
    id: task.id,
  }));
}

export default function TaskDetailPage({ params }: TaskDetailProps) {
  const task = getTask(params.id);

  if (!task) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/tasks" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Tasks
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{task.title}</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                ID: <span className="font-mono">{task.id}</span> • Type: {task.type} • Difficulty: {task.difficulty}
            </p>
          </div>
          <div className="flex space-x-3">
             <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                <Download className="mr-2 h-4 w-4" />
                Download Data
             </button>
             <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                <Play className="mr-2 h-4 w-4" />
                View SOP
             </button>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">{task.description}</dd>
            </div>
            
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Success Criteria</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Object placed within target zone (±2cm)</li>
                  <li>Orientation aligned within ±15°</li>
                  <li>No collisions with obstacles</li>
                </ul>
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Metrics</dt>
              <dd className="mt-1 text-sm text-gray-900">
                 <ul className="list-disc pl-5 space-y-1">
                  <li>Success Rate (SR)</li>
                  <li>Completion Time</li>
                  <li>Path Length Efficiency</li>
                </ul>
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Object Distribution (Train)</dt>
              <dd className="mt-1 text-sm text-gray-900">
                 <p>Cups: Red, Blue, White (Ceramic)</p>
              </dd>
            </div>

             <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Object Distribution (Test)</dt>
              <dd className="mt-1 text-sm text-gray-900">
                 <p>Cups: Black, Transparent (Plastic, Glass)</p>
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Workspace</dt>
              <dd className="mt-1 text-sm text-gray-900 bg-gray-50 p-4 rounded-md font-mono text-xs">
                Table Size: 120x80 cm<br/>
                Start Zone: Top-Left 30x30 cm<br/>
                Forbidden Zone: Table Edge 5 cm
              </dd>
            </div>
            
            <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500 mb-2">Resources</dt>
                <dd className="text-sm text-gray-900">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                                <FileText className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span className="ml-2 flex-1 w-0 truncate">SOP_cups_triangle_v1.pdf</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Download</a>
                            </div>
                        </li>
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                                <FileText className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span className="ml-2 flex-1 w-0 truncate">diversity_config.json</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Download</a>
                            </div>
                        </li>
                    </ul>
                </dd>
            </div>

             <div className="sm:col-span-2">
                <div className="rounded-md bg-yellow-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">Common Pitfalls</h3>
                        <div className="mt-2 text-sm text-yellow-700">
                            <p>
                             Reflective surfaces on the cups can cause depth estimation errors. Ensure your vision pipeline is robust to specular highlights.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
}

