import Image from 'next/image';
import { FC } from 'react';

interface SolutionProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    width: string;
    className: string;
  }[];
}

const getAnimationClass = (index: number): string => {
  if (index === 0) return 'animate-fade-in';
  if (index === 1) return 'animate-fade-in-delay-1';
  return 'animate-fade-in-delay-2';
};

export function Solution({
  title,
  description,
  images,
}: SolutionProps): JSX.Element {
  return (
    <div className="hover:border-gray-375 group flex select-none flex-col overflow-hidden rounded-sm border border-gray-200 bg-white">
      <div className="flex aspect-[389/282] justify-center pt-6 transition-all duration-300 ease-in-out md:grayscale md:group-hover:grayscale-0">
        <div className="relative w-[80%]">
          {images.map((image, index) => (
            <Image
              key={image.alt}
              className={`absolute ${image.className} opacity-0 ${getAnimationClass(index)}`}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              style={{ width: image.width }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="px-6 pb-6">
        <h3 className="line-clamp-1 break-all text-xl font-bold leading-8 text-black">
          {title}
        </h3>
        <p className="line-clamp-4 min-h-[5.25rem] text-sm leading-[1.313rem] text-gray-500 lg:min-h-[unset]">
          {description}
        </p>
      </div>
    </div>
  );
}
