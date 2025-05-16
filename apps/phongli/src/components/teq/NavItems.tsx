import clsx from 'clsx';
import { useRouter } from 'next/router';

type NavItemProps = {
  href: string;
  children: string;
  active?: boolean;
};

export function NavItem({ href, children, active = false }: NavItemProps) {
  return (
    <li className="relative h-fit">
      <a
        href={href}
        className={clsx(
          'group relative font-medium text-gray-500',
          'hover:text-gray-800',
          active ? 'font-bold text-gray-800' : '',
          'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-black',
          active
            ? 'after:w-full'
            : 'after:w-0 after:transition-all hover:after:w-full'
        )}
      >
        <span
          className="inline-block whitespace-nowrap text-center"
          data-text={children}
        >
          {children}
        </span>
      </a>
    </li>
  );
}

export function NavItems() {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <nav>
      <ul className="flex items-center space-x-8">
        <NavItem href="/" active={isActive('/')}>
          HOME
        </NavItem>
        <NavItem href="/about-us" active={isActive('/about-us')}>
          ABOUT US
        </NavItem>
        <NavItem href="/careers" active={isActive('/careers')}>
          CAREERS
        </NavItem>
        <NavItem href="/news" active={isActive('/news')}>
          NEWS
        </NavItem>
        <NavItem href="/gallery" active={isActive('/gallery')}>
          GALLERY
        </NavItem>
      </ul>
    </nav>
  );
}
