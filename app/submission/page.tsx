import { UploadCloud, Code, Server, ShieldCheck } from 'lucide-react';

export default function SubmissionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Submission Pipeline</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We use a container-based submission system to ensure reproducibility and security.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column: Instructions */}
        <div className="space-y-8">
           <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Submission Process</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Follow these steps to submit your agent.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <Code className="mr-2 h-5 w-5 text-blue-500"/> 1. Prepare
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Package your code into a Docker container. Ensure it meets the <a href="/docs" className="text-blue-600 hover:underline">specification</a>.
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <UploadCloud className="mr-2 h-5 w-5 text-blue-500"/> 2. Upload
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Push your image to our registry or provide a public link (e.g., Docker Hub, GHCR).
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                   <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <Server className="mr-2 h-5 w-5 text-blue-500"/> 3. Evaluate
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Your container will be queued for execution on real robots. You can monitor progress in the <a href="/status" className="text-blue-600 hover:underline">Status dashboard</a>.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Review the <a href="/rules" className="font-medium underline text-yellow-700 hover:text-yellow-600">Security Policy</a> before submitting. 
                  Network access is disabled during evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Submission Form */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">New Submission</h3>
            <form className="mt-5 space-y-6">
              <div>
                <label htmlFor="team-name" className="block text-sm font-medium text-gray-700">
                  Team Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="team-name"
                    id="team-name"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="e.g. RoboLab"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="image-url" className="block text-sm font-medium text-gray-700">
                  Docker Image URL
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="ghcr.io/username/repo:tag"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="method-desc" className="block text-sm font-medium text-gray-700">
                  Method Description (Brief)
                </label>
                <div className="mt-1">
                  <textarea
                    id="method-desc"
                    name="method-desc"
                    rows={3}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Briefly describe your approach (e.g. 'Behavior Cloning with ResNet50 backbone')"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the <a href="/privacy" className="text-blue-600 hover:underline">Terms & Conditions</a>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit for Evaluation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

