import { Link } from 'react-router-dom';
import { RiGlobalLine, RiShareLine, RiLinkM, RiMailLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Careers', path: '#' },
  ],
  Services: [
    { label: 'Web Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
    { label: 'AI Systems', path: '/services' },
    { label: 'UI/UX Design', path: '/services' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
    { label: 'FAQ', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Code Crafters</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Building the digital backbone of tomorrow's industry leaders through precision engineering and creative excellence.
            </p>
            <div className="flex items-center gap-3">
              {[RiGlobalLine, RiShareLine, RiLinkM].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-secondary transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="code.crafters.schools.team@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <RiMailLine size={14} /> code.crafters.schools.team@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <RiPhoneLine size={14} /> +20 01275884187 -  01119055745
            </span>
            <span className="flex items-center gap-2">
              <RiMapPinLine size={14} />Street 90, First Settlement,Suite 12,New Cairo city, Cairo Governorate 
            </span>
          </div>
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Code Crafters. Engineered for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
