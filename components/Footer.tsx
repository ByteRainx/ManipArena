'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const footerNavigation = {
    main: [
      { name: t.footer.home, href: '/' },
      { name: t.nav.tasks, href: '/tasks' },
      { name: t.nav.leaderboard, href: '/leaderboard' },
      { name: t.nav.submission, href: '/submission' },
      { name: t.footer.rules, href: '/rules' },
    ],
    resources: [
      { name: t.nav.docs, href: '/docs' },
      { name: t.nav.data, href: '/data' },
      { name: t.footer.baselines, href: '/baselines' },
      { name: t.footer.status, href: '/status' },
    ],
    legal: [
      { name: t.footer.privacy, href: '/privacy' },
      { name: t.footer.terms, href: '/privacy' },
      { name: t.footer.contact, href: '/contact' },
    ],
    social: [
      {
        name: 'GitHub',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:grid md:grid-cols-4 md:gap-8">
          <div className="space-y-8 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-blue-600">
              ManipArena
            </Link>
            <p className="text-gray-500 text-sm">
              {t.footer.desc}
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:mt-0 md:col-span-3 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t.footer.platform}</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t.footer.resources}</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t.footer.legal}</h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} ManipArena Organizers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
