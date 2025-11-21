import Link from 'next/link';
import { Book, FileText, HelpCircle, AlertOctagon } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <nav className="space-y-1 sticky top-24">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Documentation</h3>
            {[
              { name: 'Quick Start', href: '#quick-start' },
              { name: 'Data Specifications', href: '#specs' },
              { name: 'Submission API', href: '#api' },
              { name: 'Troubleshooting', href: '#troubleshooting' },
              { name: 'FAQ', href: '#faq' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-green-600"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 prose prose-blue max-w-none">
          <div id="quick-start">
             <h1 className="text-3xl font-bold text-gray-900 mb-6">Documentation Center</h1>
             <div className="bg-green-50 border-l-4 border-blue-500 p-4 mb-8">
                <h4 className="text-green-700 font-bold flex items-center">
                    <Book className="h-5 w-5 mr-2"/> Quick Start Guide
                </h4>
                <p className="text-green-700 mt-2">
                    Get your first submission running in under 10 minutes.
                </p>
                <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                    View Tutorial
                </button>
             </div>
          </div>

          <section id="specs" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Specifications</h2>
            <p className="text-gray-600 mb-4">
                We follow the <code className="bg-gray-100 px-1 rounded">LeRobot</code> data format. Each dataset split consists of:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li><strong>observation/image_*:</strong> RGB images (H264 encoded in MP4)</li>
                <li><strong>observation/state:</strong> Joint positions (rad) and velocities (rad/s)</li>
                <li><strong>action:</strong> Target joint positions or end-effector pose delta</li>
                <li><strong>timestamp:</strong> Global timestamp in seconds</li>
            </ul>
          </section>

          <section id="api" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation I/O Protocol</h2>
            <p className="text-gray-600 mb-4">
                Your container must expose an executable at <code className="bg-gray-100 px-1 rounded">/app/entry.sh</code>.
                The evaluation harness communicates via standard I/O streams (stdin/stdout) or a local socket.
            </p>
            <div className="bg-gray-800 rounded-md p-4 text-white font-mono text-sm">
                # Example I/O Loop<br/>
                while True:<br/>
                &nbsp;&nbsp;obs = receive_observation()<br/>
                &nbsp;&nbsp;action = model.predict(obs)<br/>
                &nbsp;&nbsp;send_action(action)
            </div>
          </section>

          <section id="troubleshooting" className="mb-16">
             <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertOctagon className="h-6 w-6 text-red-500 mr-2"/> Troubleshooting
             </h2>
             <div className="space-y-4">
                <details className="group border border-gray-200 rounded-md open:ring-1 open:ring-blue-500">
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <span className="font-medium text-gray-900">Error Code 101: Connection Timeout</span>
                    </summary>
                    <div className="p-4 text-gray-600 border-t border-gray-200">
                        Your agent failed to send a control command within the 100ms control cycle limit. Optimize your inference speed.
                    </div>
                </details>
                <details className="group border border-gray-200 rounded-md">
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100">
                         <span className="font-medium text-gray-900">Container fails to start</span>
                    </summary>
                    <div className="p-4 text-gray-600 border-t border-gray-200">
                        Ensure your <code className="bg-gray-100 px-1 rounded">ENTRYPOINT</code> is executable and dependencies are installed. Check standard error logs.
                    </div>
                </details>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}

