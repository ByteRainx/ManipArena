import { Download, FileCode, Database, ExternalLink } from 'lucide-react';

export default function DataPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Data & Downloads</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Access our large-scale multi-modal manipulation dataset.
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Dataset Overview</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            The ManipArena dataset contains over 50,000 teleoperated episodes across 40 tasks.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Format</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                 <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">LeRobot</span>
                 Standardized format compatible with Hugging Face LeRobot library.
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Modalities</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                RGB (3 cameras), Depth, Proprioception (Joint positions, velocities), Force/Torque.
              </dd>
            </div>
             <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">License</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                CC-BY-4.0 (Creative Commons Attribution 4.0 International)
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Full Dataset Card */}
        <div className="bg-white rounded-lg shadow px-6 py-8 border border-gray-200">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <Database className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Full Dataset</h3>
            <p className="mt-2 text-sm text-gray-500">
                Complete dataset containing all training and validation episodes for all 40 tasks.
            </p>
            <p className="mt-2 text-xs text-gray-400">Size: ~2.5 TB</p>
            <div className="mt-6">
                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    <Download className="mr-2 h-4 w-4" /> Download
                </a>
            </div>
        </div>

        {/* Sample Data Card */}
        <div className="bg-white rounded-lg shadow px-6 py-8 border border-gray-200">
             <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                <FileCode className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Sample Data</h3>
            <p className="mt-2 text-sm text-gray-500">
                Small subset (10 episodes per task) for quick exploration and pipeline testing.
            </p>
             <p className="mt-2 text-xs text-gray-400">Size: ~50 GB</p>
            <div className="mt-6">
                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                     <Download className="mr-2 h-4 w-4" /> Download
                </a>
            </div>
        </div>

         {/* Simulation Assets Card */}
        <div className="bg-white rounded-lg shadow px-6 py-8 border border-gray-200">
             <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600 mb-4">
                <ExternalLink className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Simulation Assets</h3>
            <p className="mt-2 text-sm text-gray-500">
                URDFs, meshes, and Isaac Gym environments for sim-to-real experiments.
            </p>
             <p className="mt-2 text-xs text-gray-400">Format: USD / URDF</p>
            <div className="mt-6">
                <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                     <Download className="mr-2 h-4 w-4" /> Download
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

