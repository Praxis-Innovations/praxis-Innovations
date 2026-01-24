import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <Image
                  src="/icons/praxis-icon-64.png"
                  alt="Praxis Innovations logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold">Praxis Innovations</span>
              </div>
              <p className="text-neutral-300 mb-6 max-w-md mx-auto md:mx-0">
                We build modern software for ambitious companies. Transforming ideas into powerful digital solutions that drive growth and innovation.
              </p>
              <a
                href="mailto:info.praxisinnovations@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                info.praxisinnovations@gmail.com
              </a>
            </div>

            {/* Navigation Links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 flex flex-col items-center md:items-end">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 py-6 container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              &copy; {currentYear} Praxis Innovations Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
