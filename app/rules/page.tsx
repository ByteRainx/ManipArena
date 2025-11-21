import { Shield, AlertTriangle, Gavel, FileCheck } from 'lucide-react';

export default function RulesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Rules & Policies</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Ensuring a fair and safe competition for everyone.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="ml-3 text-xl font-bold text-gray-900">Fair Play</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>No Human-in-the-loop:</strong> All submitted agents must run fully autonomously. Remote control is strictly prohibited.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>External Data:</strong> Use of external datasets is allowed but must be declared in the method card.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Pre-trained Models:</strong> Using foundation models (e.g., CLIP, LLaMA) is permitted.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           <div className="flex items-center mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="ml-3 text-xl font-bold text-gray-900">Safety Limits</h3>
          </div>
           <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Velocity Caps:</strong> End-effector velocity must not exceed 0.5 m/s.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Force Limits:</strong> Interaction forces greater than 50N will trigger an emergency stop.</span>
            </li>
             <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Workspace:</strong> Agents must respect the defined workspace boundaries.</span>
            </li>
          </ul>
        </div>

         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           <div className="flex items-center mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Gavel className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="ml-3 text-xl font-bold text-gray-900">Code of Conduct</h3>
          </div>
           <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Respect the intellectual property of other teams.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Do not attempt to hack or exploit the evaluation infrastructure.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Organizers reserve the right to disqualify teams violating these rules.</span>
            </li>
          </ul>
        </div>

         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           <div className="flex items-center mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileCheck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="ml-3 text-xl font-bold text-gray-900">IP & Licensing</h3>
          </div>
           <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Participants retain ownership of their code.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>By submitting, you grant ManipArena a non-exclusive license to evaluate your agent and display results.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

