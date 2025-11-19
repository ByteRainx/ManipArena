import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

const systemStatus = [
  { name: 'Submission API', status: 'operational' },
  { name: 'Evaluation Queue', status: 'busy' },
  { name: 'Robot Farm (Cluster A)', status: 'operational' },
  { name: 'Robot Farm (Cluster B)', status: 'maintenance' },
  { name: 'Website & Leaderboard', status: 'operational' },
];

const queueStats = {
  active_jobs: 12,
  queued_jobs: 45,
  avg_wait_time: '4h 15m',
};

export default function StatusPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">System Status</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Real-time status of the ManipArena evaluation infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Component Status */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Component Status</h3>
          </div>
          <div className="border-t border-gray-200">
             <ul className="divide-y divide-gray-200">
                {systemStatus.map((item) => (
                  <li key={item.name} className="px-4 py-4 sm:px-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    <div className="flex items-center">
                        {item.status === 'operational' && (
                            <>
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-sm text-green-600 capitalize">Operational</span>
                            </>
                        )}
                        {item.status === 'busy' && (
                            <>
                                <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                                <span className="text-sm text-yellow-600 capitalize">High Load</span>
                            </>
                        )}
                        {item.status === 'maintenance' && (
                            <>
                                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                                <span className="text-sm text-red-600 capitalize">Maintenance</span>
                            </>
                        )}
                    </div>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {/* Queue Stats */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Evaluation Queue</h3>
          </div>
          <div className="border-t border-gray-200 p-6">
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Jobs</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{queueStats.active_jobs}</dd>
                </div>
                <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Queued</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{queueStats.queued_jobs}</dd>
                </div>
                <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Est. Wait</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900 tracking-tight text-sm">{queueStats.avg_wait_time}</dd>
                </div>
            </dl>
            <div className="mt-6">
                <div className="rounded-md bg-blue-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <Clock className="h-5 w-5 text-blue-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800">Queue Update</h3>
                            <div className="mt-2 text-sm text-blue-700">
                                <p>Due to high volume, evaluation times may be longer than usual. We are adding more capacity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

