import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  openInNewTab?: boolean;
  isFullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, href, openInNewTab, isFullWidth = false, ...props },
    ref
  ) => {
    const baseStyles = clsx(
      'inline-flex items-center justify-center font-medium transition-colors',
      'bg-[#1E1E1E] text-white hover:bg-black px-6 py-3',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      isFullWidth && 'w-full',
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={baseStyles}
          target={openInNewTab ? '_blank' : undefined}
          rel={openInNewTab ? 'noopener noreferrer' : undefined}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} type="button" className={baseStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
