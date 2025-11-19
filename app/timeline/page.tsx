import { Timeline } from '@/components/home/Timeline';

export default function TimelinePage() {
  return (
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Challenge Timeline</h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Key dates for the ManipArena 2025 competition.
            </p>
        </div>
        <Timeline />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                <div className="ml-3">
                    <p className="text-sm text-blue-700">
                    All deadlines are at 11:59 PM AOE (Anywhere on Earth).
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

