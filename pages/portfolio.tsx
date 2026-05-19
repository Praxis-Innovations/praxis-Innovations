import Layout from '../src/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  website: string;
  cta: string;
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  screenshots?: {
    src: string;
    alt: string;
  }[];
};

const projects: PortfolioProject[] = [
  {
    title: 'EvenX',
    category: 'Mobile Application',
    description:
      'An intuitive expense splitting app that makes sharing costs with friends, roommates, and groups effortless. EvenX simplifies group finances so you can focus on what matters.',
    website: 'https://evenx.io/',
    cta: 'Visit EvenX',
    logo: {
      src: '/evenx-logo.png',
      alt: 'EvenX Logo',
      width: 200,
      height: 200,
    },
  },
  {
    title: 'PlaySequence',
    category: 'Real-Time Multiplayer Game',
    description:
      'A cross-platform Sequence experience with real-time multiplayer, private rooms, bot matches, leaderboards, coin rewards, tournaments, and classic rules validated by an authoritative game server.',
    website: 'https://playsequence.app/',
    cta: 'Visit PlaySequence',
    logo: {
      src: '/playsequence/sequence-logo.png',
      alt: 'PlaySequence Logo',
      width: 260,
      height: 170,
    },
    screenshots: [
      {
        src: '/playsequence/game-board.webp',
        alt: 'PlaySequence game board screen',
      },
      {
        src: '/playsequence/main-menu.webp',
        alt: 'PlaySequence main menu screen',
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <Layout
      title="Our Portfolio - Praxis Innovations"
      description="Explore our work, including EvenX and PlaySequence, and see how we help clients achieve their technology goals."
      keywords="portfolio, projects, software development, web applications, mobile applications, multiplayer games"
    >
      {/* Combined Hero + Project Section */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary-50 to-accent-50 min-h-[calc(100vh-80px)]">
        <div className="container-custom container-padding">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3">
              Our{' '}
              <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Building innovative solutions that make a difference.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {projects.map((project, project_idx) => (
              <div key={project.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="bg-neutral-50 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-200">
                    {project.screenshots ? (
                      <div className="relative h-72 w-full max-w-xs overflow-hidden sm:h-80 sm:max-w-sm">
                        <div className="absolute left-3 top-4 h-[82%] w-[38%] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-xl">
                          <Image
                            src={project.screenshots[0].src}
                            alt={project.screenshots[0].alt}
                            width={768}
                            height={1662}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="absolute right-3 bottom-4 h-[82%] w-[38%] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-xl">
                          <Image
                            src={project.screenshots[1].src}
                            alt={project.screenshots[1].alt}
                            width={768}
                            height={1662}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        {project.logo ? (
                          <div className="absolute left-1/2 top-1/2 w-36 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/95 p-3 shadow-lg sm:w-44 sm:p-4">
                            <Image
                              src={project.logo.src}
                              alt={project.logo.alt}
                              width={project.logo.width}
                              height={project.logo.height}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        ) : null}
                      </div>
                    ) : project.logo ? (
                      <Image
                        src={project.logo.src}
                        alt={project.logo.alt}
                        width={project.logo.width}
                        height={project.logo.height}
                        className="object-contain"
                        priority={project_idx === 0}
                      />
                    ) : null}
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium w-fit mb-4">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                      {project.title}
                    </h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center w-fit"
                    >
                      {project.cta}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom container-padding text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you bring your ideas to life 
            with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium text-sm px-5 py-2.5 sm:text-base sm:px-8 sm:py-3 rounded-lg transition-all duration-300">
              Get in Touch
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium text-sm px-5 py-2.5 sm:text-base sm:px-8 sm:py-3 rounded-lg transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
