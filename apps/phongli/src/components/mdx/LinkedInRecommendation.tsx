import clsx from 'clsx';
import Image from 'next/image';

import { LinkedlnColorIcon } from '@/components/Icons';

interface Recommendation {
  avatar?: string; // Optional link to avatar image
  author: string;
  role: string;
  date: string;
  feedback: string;
}

interface LinkedInRecommendationProps {
  recommendations: Recommendation[];
}

export default function LinkedInRecommendation({
  recommendations,
}: LinkedInRecommendationProps) {
  return (
    <div className={clsx('min-h-screen bg-gray-50 py-10', 'dark:bg-slate-900')}>
      <div
        className={clsx(
          'mx-auto max-w-4xl space-y-6 rounded-lg bg-white p-8 shadow-lg',
          'dark:bg-slate-800'
        )}
      >
        <div className={clsx('flex flex-row items-center gap-4')}>
          <LinkedlnColorIcon className={clsx('h-12 w-12')} />
          <h2
            className={clsx(
              'text-xl font-semibold text-gray-800',
              'dark:text-white'
            )}
          >
            Recommendations
          </h2>
        </div>
        {recommendations.map((rec) => (
          <div
            key={rec.author + rec.date}
            className={clsx(
              'rounded-lg border border-gray-300 bg-gray-100 p-6 shadow-sm',
              'dark:border-slate-700 dark:bg-slate-800'
            )}
          >
            <div className="flex items-center gap-4">
              {rec.avatar ? (
                <Image
                  className={clsx(
                    'h-12 w-12 rounded-full border border-gray-300 object-cover dark:border-slate-700'
                  )}
                  alt={`${rec.author}'s avatar`}
                  src={rec.avatar}
                  width={48}
                  height={48}
                  unoptimized
                  priority
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-slate-600" />
              )}
              <div>
                <div
                  className={clsx(
                    'text-sm font-semibold text-blue-700',
                    'dark:text-blue-400'
                  )}
                >
                  {rec.author}
                </div>
                <div className="text-xs text-gray-500 dark:text-slate-400">
                  {rec.role}
                </div>
              </div>
            </div>
            <div
              className={clsx('mt-2 text-xs text-gray-400 dark:text-slate-500')}
            >
              {rec.date}
            </div>
            <div
              className={clsx('mt-4 text-sm text-gray-700 dark:text-slate-300')}
            >
              {rec.feedback}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
