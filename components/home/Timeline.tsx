'use client';

import { Calendar, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export function Timeline() {
  const { t } = useLanguage();

  const steps = [
    {
      name: t.timeline.t1,
      description: t.timeline.t1_desc,
      date: 'Oct 1, 2025',
      status: 'upcoming',
      icon: Calendar,
    },
    {
      name: t.timeline.t2,
      description: t.timeline.t2_desc,
      date: 'Nov 1, 2025',
      status: 'upcoming',
      icon: Clock,
    },
    {
      name: t.timeline.t3,
      description: t.timeline.t3_desc,
      date: 'Dec 15, 2025',
      status: 'upcoming',
      icon: CheckCircle,
    },
    {
      name: t.timeline.t4,
      description: t.timeline.t4_desc,
      date: 'Jan 10, 2026',
      status: 'upcoming',
      icon: Calendar,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">{t.timeline.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t.timeline.heading}
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-between">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="bg-gray-50 px-4 text-center">
                <span className="relative z-0 inline-flex shadow-sm rounded-full bg-white p-2 border border-gray-300">
                   <step.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </span>
                <div className="mt-2">
                    <p className="text-lg font-medium text-gray-900">{step.date}</p>
                    <p className="text-sm text-gray-500">{step.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* Mobile View Vertical Timeline */}
        <div className="mt-10 max-w-lg mx-auto md:hidden">
            <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
                {steps.map((step, stepIdx) => (
                <li key={step.name} className="relative pb-10">
                    {stepIdx !== steps.length - 1 ? (
                    <div
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                    />
                    ) : null}
                    <div className="relative flex items-start">
                    <span className="h-9 flex items-center" aria-hidden="true">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-blue-600 rounded-full">
                        <step.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                        </span>
                    </span>
                    <div className="ml-4 min-w-0 flex-1">
                        <span className="text-sm font-medium text-blue-600 tracking-wide">{step.date}</span>
                        <h4 className="text-lg font-medium text-gray-900">{step.name}</h4>
                        <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                    </div>
                    </div>
                </li>
                ))}
            </ol>
            </nav>
        </div>
      </div>
    </div>
  );
}
