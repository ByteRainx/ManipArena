import { Filter, Download } from 'lucide-react';

const leaderboardData = [
  { rank: 1, team: 'RoboBrain', method: 'UniAgent-V2', score: 85.4, generalization: 82.1, tasks: 40, date: '2025-11-15' },
  { rank: 2, team: 'DeepLab', method: 'SkillTransformer', score: 83.2, generalization: 79.5, tasks: 40, date: '2025-11-14' },
  { rank: 3, team: 'OpenBot', method: 'OpenVLA-Base', score: 78.9, generalization: 75.3, tasks: 38, date: '2025-11-10' },
  { rank: 4, team: 'AI_Alliance', method: 'ManipGPT', score: 76.5, generalization: 72.0, tasks: 40, date: '2025-11-12' },
  { rank: 5, team: 'Uni_Research', method: 'ActionDiff', score: 74.1, generalization: 68.9, tasks: 40, date: '2025-11-08' },
];

export default function LeaderboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
          <p className="mt-2 text-sm text-gray-700">
            Current rankings for the ManipArena benchmark. Updated daily.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex space-x-3">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          >
            <Filter className="mr-2 h-4 w-4 text-gray-500" />
            Filters
          </button>
           <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          >
            <Download className="mr-2 h-4 w-4 text-gray-500" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Rank
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Team
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Method
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Overall Score
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Gen. Score
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Tasks Completed
                    </th>
                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {leaderboardData.map((entry) => (
                    <tr key={entry.rank}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {entry.rank}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{entry.team}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {entry.method}
                          </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-gray-900">{entry.score}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{entry.generalization}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{entry.tasks}/40</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{entry.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

