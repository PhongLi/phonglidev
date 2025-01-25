import clsx from 'clsx';

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons';

import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import Quote from '@/contents/index/Quote';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-300 p-3.5',
                'dark:bg-amber-900'
              )}
            >
              <SparklesIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Professional ethics/Naive"
          desc="I believe it makes me happy on the journey without any regret"
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-pink-300 p-3.5',
                'dark:bg-pink-900'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Freedom"
          desc="I think all the way road to freedom. So I want to have freedom and everyone around me can feel its value"
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-300 p-3.5',
                'dark:bg-sky-900'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Value"
          desc="I prefer value it created instead of its flashy"
        />
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('lg:-mt-16 lg:mb-24')}>
        <FeaturedCardSection />
      </div>
      <div className={clsx('mt-20')}>
        <QuoteSection />
      </div>
    </>
  );
}

export default IndexContents;
