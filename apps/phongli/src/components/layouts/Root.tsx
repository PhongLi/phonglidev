import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import {
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from 'next/font/google';
import { PropsWithChildren, useEffect } from 'react';

const jetbrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

function Root({ children }: PropsWithChildren) {
  useEffect(() => {
    document.documentElement.classList.add(
      jetbrainsMono.variable,
      plusJakartaSans.variable
    );
  }, []);

  return (
    <div
      id="__root"
      className={clsx([jetbrainsMono.variable, plusJakartaSans.variable])}
    >
      {children}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default Root;
