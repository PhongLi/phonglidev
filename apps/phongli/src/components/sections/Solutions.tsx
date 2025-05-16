import { Solution } from '../atoms/Solution';

export function Solutions() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Solution
        title="Frontend"
        description="Frontend Team creates intuitive, dynamic user experiences & delightful interfaces using state-of-the-art technologies like ReactJS, VueJS, etc"
        images={[
          {
            src: '/assets/images/window-react.webp',
            alt: 'window-react',
            width: '71.8%',
            className: 'right-0',
          },
          {
            src: '/assets/images/window-vue.webp',
            alt: 'window-vue',
            width: '51.6%',
            className: 'top-[24.36%] left-[14.11%] backdrop-blur-[2px]',
          },
          {
            src: '/assets/images/window-tailwind.webp',
            alt: 'window-tailwind',
            width: '42.9%',
            className: 'top-[48.33%] backdrop-blur-[2px]',
          },
        ]}
      />

      <Solution
        title="Bridge System Engineer"
        description="Bridge System Engineer (BrSE) team bridges tech and business, fostering seamless cross-team communication for successful project delivery"
        images={[
          {
            src: '/assets/images/bridge-system-1.webp',
            alt: 'bridge-system-main',
            width: '80%',
            className: 'right-0',
          },
          {
            src: '/assets/images/bridge-system-2.webp',
            alt: 'bridge-system-secondary',
            width: '60%',
            className: 'top-[30%] left-[10%] backdrop-blur-[2px]',
          },
        ]}
      />
    </div>
  );
}
