import Link from 'next/link';
import { tasks, TaskType } from '../data/tasks';
import { Badge } from 'lucide-react'; // We'll just use simple badges for now

export default function TasksPage() {
  // Group tasks by type for better organization or just list them
  // For now, a simple grid
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Task Library</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Explore the 40+ manipulation tasks available in the benchmark.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <Link key={task.id} href={`/tasks/${task.id}`} className="group">
            <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 h-48 w-full bg-gray-200 flex items-center justify-center">
                 {/* Placeholder for task image */}
                 <span className="text-gray-400 text-lg">Image: {task.title}</span>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                      <p className={`text-sm font-medium px-2.5 py-0.5 rounded-full 
                        ${task.type === 'simple' ? 'bg-green-100 text-green-800' : 
                          task.type === 'long_horizon_mobile' ? 'bg-purple-100 text-purple-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {task.type.replace(/_/g, ' ')}
                      </p>
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${task.difficulty === 'Easy' ? 'bg-gray-100 text-gray-800' :
                          task.difficulty === 'Medium' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'}`}>
                        {task.difficulty}
                      </span>
                  </div>
                  
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {task.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {task.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                   <div className="flex flex-wrap gap-2">
                     {task.tags.map(tag => (
                         <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                             {tag}
                         </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

