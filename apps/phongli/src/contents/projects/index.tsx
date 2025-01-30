import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { WebsiteIcon } from '@/components/Icons';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';

interface ProjectsContentsProps {
  title: string;
  caption: string;
  description: string;
  projects: Array<ProjectProps>;
}

type ProjectProps = {
  title: string;
  displayUrl: string;
  description: string;
  href: string;
  github?: string;
  image: string;
};

const proProjects: Array<ProjectProps> = [
  {
    title: 'Wichart.vn',
    displayUrl: 'wichart.vn',
    description:
      'Wichart.vn is a platform that allows content-creators, influencers, services providers to sell 1-on-1 sessions to their fans.',
    href: 'https://wichart.vn',
    image: '/assets/images/projects/wichartvn.png',
  },
  {
    title: 'wiresearch.vn',
    displayUrl: 'wiresearch.vn',
    description:
      "Conduct market research, prepare macro analysis reports, currency, commodities, industries, and businesses based on WiGrou's financial database. The various sectors of the economy are at your fingertips",
    href: 'https://wiresearch.vn/',
    image: '/assets/images/projects/wiresearchvn.png',
  },
];

const petProjects: Array<ProjectProps> = [
  {
    title: 'MUI Tiptap Playground',
    displayUrl: 'mui-tiptap-playground.vercel.app/',
    description:
      'mui-tiptap-playgrouund: A customizable Material UI styled WYSIWYG rich text editor, using Tiptap.',
    href: 'https://mui-tiptap-playground.vercel.app/',
    image: '/assets/images/projects/tiptap-playground.png',
  },
  {
    title: 'Lofico',
    displayUrl: 'lofi.io.vn',
    description: 'Lifo Chill - Craft your focus environment',
    href: 'https://lofi.io.vn/',
    image: '/assets/images/projects/lofico.png',
  },
];

function ProjectsContents({
  title,
  caption,
  description,
  projects,
}: ProjectsContentsProps) {
  return (
    <>
      <SectionTitle title={title} caption={caption} description={description} />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('w-full')}>
            <div
              className={clsx(
                'grid grid-cols-1 md:grid-cols-2',
                'w-full gap-12 py-12'
              )}
            >
              {projects.map((project) => (
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <WebsiteIcon className="h-4 w-4" />,
                      title: project.displayUrl || 'about:blank',
                      url: project.href || '#',
                      isActive: true,
                    },
                  ]}
                >
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="relative h-full w-full bg-orange-500"
                  >
                    <div
                      className={clsx('relative h-[200px] w-full lg:h-[300px]')}
                    >
                      {project.image && (
                        <Image
                          src={project.image}
                          className="transition duration-300 hover:scale-105"
                          alt={project.title || 'about:blank'}
                          style={{
                            objectFit: 'cover',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                          }}
                          fill
                        />
                      )}
                    </div>
                  </Link>
                </AppWindow>
              ))}
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

function MyProjects() {
  return (
    <>
      <ProjectsContents
        title="WiGroup's Core Solutions"
        caption="Professional projects"
        description="Below are the two core products where I played a major role in development and maintenance during my time at WiGroup JSC"
        projects={proProjects}
      />
      <ProjectsContents
        title="Pet projects"
        caption=""
        description="I do some pet projects in my free time. It helps me learn new tech and experiment on building things."
        projects={petProjects}
      />
    </>
  );
}

export default MyProjects;
