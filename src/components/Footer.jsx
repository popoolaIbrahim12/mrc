import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 border-t border-gray-200">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Brand / Logo */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-[#FD5521]">MCR</h1>
            <p className="text-lg font-medium text-gray-600">Construction</p>
          </div>

          {/* Head Office */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Head Office</h2>
            <address className="not-italic text-base leading-relaxed text-gray-600">
              500 Terry Francine Street<br />
              San Francisco, CA 94158
            </address>
            <p className="text-base text-gray-600">
              123-456-7890<br />
              <a href="mailto:info@mysite.com" className="hover:text-[#FD5521] transition-colors">
                info@mysite.com
              </a>
            </p>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Socials</h2>
            <ul className="space-y-2 text-base text-gray-600">
              <li>
                <a href="#" className="hover:text-[#FD5521] transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FD5521] transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FD5521] transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Inquiries + CTA */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Inquiries</h2>
              <p className="text-base leading-relaxed text-gray-600">
                For any inquiries, questions or commendations,<br className="hidden sm:inline" />
                please call: <strong>123-456-7890</strong>
              </p>
            </div>

            <button className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-[#FD5521] rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#FD5521] focus:ring-offset-2 transition-colors shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-5 text-center md:text-left text-sm text-gray-500">
          © 2035 by MCR Construction. Powered and secured by Wix
        </div>
      </div>
    </footer>
  );
};

export default Footer;