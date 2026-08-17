import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Payin Gateway', path: '/payin' },
    { name: 'Payout Disbursements', path: '/payout' },
    { name: 'BBPS Utility System', path: '/bbps' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Support', path: '/contact' },
  ];

  const legal = [
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Refund Policy', path: '/refund' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group">
              <img
                src="/logo.png"
                alt="Magic Pay Solution Logo"
                className="h-14 w-auto rounded object-contain transition-all duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Magic Pay Solution provides next-generation banking and payment infrastructure. Empowering enterprises with ultra-fast payins, automated bulk payouts, and robust BBPS utility integrations.
            </p>
            <div className="inline-flex items-center space-x-2.5 text-white bg-slate-900/80 border border-slate-800 rounded-lg px-3.5 py-2.5 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-accent-emerald flex-shrink-0" />
              <span className="text-xs font-medium text-slate-300">
                PCI-DSS & RBI Compliant Payment Security
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-royal-400 flex-shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-slate-400">
                  <strong className="text-slate-300 block font-semibold">Marbow Eduro Private Limited</strong>
                  Plot No. 136, Venkateshwar Nagar,<br />
                  Quthbullapur, Medchal-Malkajgiri,<br />
                  Telangana - 500055
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-royal-400 flex-shrink-0" />
                <a href="mailto:support@magicpaysolution.com" className="text-xs hover:text-white transition-colors">
                  support@magicpaysolution.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-royal-400 flex-shrink-0" />
                <a href="tel:+918498901997" className="text-xs hover:text-white transition-colors">
                  +91 8498901997
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Marbow Eduro Private Limited. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <Link to="/refund" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
