import Footer from '@/components/Footer';
import QuickAccess from '@/components/QuickAccess';
import Shortcuts from '@/components/Shortcuts';
import Navigation from '@/components/teq/Navigation';
import Toaster from '@/components/Toaster';

import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <QuickAccess />
      <Shortcuts />
      <Navigation />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
