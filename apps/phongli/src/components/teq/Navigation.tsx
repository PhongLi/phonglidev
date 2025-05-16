import clsx from 'clsx';

import ContactButton from './ContactButton';
import { NavItems } from './NavItems';
import TeqLogo from './TeqLogo';

function Navigation() {
  return (
    <header className={clsx('fixed left-0 right-0 top-0 z-[1000] w-full')}>
      <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <TeqLogo />
        </div>

        {/* Nav Links */}
        <NavItems />

        {/* Contact Us Button */}
        <ContactButton />
      </div>
    </header>
  );
}

export default Navigation;
