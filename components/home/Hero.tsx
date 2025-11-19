'use client';

import Link from 'next/link';
import { Play } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">ManipArena</span>{' '}
                <span className="block text-blue-600 xl:inline">{t.hero.title_suffix}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {t.hero.subtitle} <br className="hidden md:block"/>
                {t.hero.subtitle_2}
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/registration"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg"
                  >
                    {t.hero.cta_register}
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/docs"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg"
                  >
                    {t.hero.cta_quickstart}
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                   <Link
                    href="/submission"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg"
                  >
                    {t.hero.cta_submit}
                  </Link>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                 <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">{t.hero.stat_tasks}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{t.hero.stat_tasks_val}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">{t.hero.stat_eval}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{t.hero.stat_eval_val}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">{t.hero.stat_data}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{t.hero.stat_data_val}</dd>
                    </div>
                    <div className="sm:col-span-1">
                       <dt className="text-sm font-medium text-gray-500">{t.hero.stat_gen}</dt>
                       <dd className="mt-1 text-sm text-gray-900">{t.hero.stat_gen_val}</dd>
                    </div>
                 </dl>
              </div>

            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
        {/* Placeholder for a hero image or video */}
        <div className="text-center text-gray-400">
           <Play className="h-24 w-24 mx-auto mb-4 opacity-50" />
           <p>Demo Video Placeholder</p>
        </div>
      </div>
    </div>
  );
}
