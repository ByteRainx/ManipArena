'use client';

import { Code, Cpu, Database, Globe, Layout, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      name: t.features.f1,
      description: t.features.f1_desc,
      icon: Cpu,
    },
    {
      name: t.features.f2,
      description: t.features.f2_desc,
      icon: Layout,
    },
    {
      name: t.features.f3,
      description: t.features.f3_desc,
      icon: Database,
    },
    {
      name: t.features.f4,
      description: t.features.f4_desc,
      icon: Globe,
    },
    {
      name: t.features.f5,
      description: t.features.f5_desc,
      icon: Shield,
    },
    {
      name: t.features.f6,
      description: t.features.f6_desc,
      icon: Code,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">{t.features.title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t.features.heading}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t.features.subheading}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
