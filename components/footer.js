import * as React from "react"
import Image from "next/image"

const footerNavigation = {
  styleguide: [
    { name: "Featured Artists", href: "#" },
    { name: "Get Featured", href: "#" },
    { name: "Design Ideas", href: "#" },
    { name: "How Tos and Tips", href: "#" },
    { name: "Promotions", href: "#" },
    { name: "Trending Designs", href: "#" },
  ],
  policies: [
    { name: "Payment policy", href: "#" },
    { name: "Shipping policy", href: "#" },
    { name: "Refunds/Returns", href: "#" },
    { name: "Terms of service", href: "#" },
    { name: "Your privacy", href: "#" },
  ],
  customerService: [
    { name: "1-800-356-8904", href: "#" },
    { name: "Hours: 8am - 5pm ET", href: "#" },
    { name: "info@stickylife.com", href: "#" },
    { name: "7868 US-70 Bus Suite D Clayton, NC 27520 USA", href: "#" },
    { name: "About StickyLife", href: "#" },
  ],
}

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
            {/* Image section */}
            <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
              <Image
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1648487162/sticky-foot_z0zkqz.png"
                alt=""
                className="h-8 w-auto"
                width={33}
                height={32}
              />
            </div>

            {/* Sitemap sections */}
            <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
              <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <h3 className="text-sm font-bold text-black">Style Guide</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.styleguide.map(item => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-cyan-900 hover:text-orange-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black">Help</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.policies.map(item => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-cyan-900 hover:text-orange-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black">
                  Customer Service
                </h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.customerService.map(item => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-cyan-900 hover:text-orange-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
              <h3 className="text-lg font-lg italic text-red-800">
                Sign up for StickyLife`&apos;`s newsletter!
              </h3>
              <p className="mt-6 text-sm text-cyan-900">
                The latest deals and savings, sent to your inbox monthly. You’ll
                also be entered into our monthly FREE promo giveaway.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-cyan-900 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-purple-400"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-semibold text-black hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div className="py-10">
                <Image
                  src="https://res.cloudinary.com/gravital-digital/image/upload/v1648501873/firefox_KWNzb3dfqo_yytmdi.png"
                  alt=""
                  className="w-auto"
                  width={369}
                  height={212}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-10 text-center">
          <p className="text-sm text-black">
            All Content Copyright © 2009-2022 stickylife.com Use of this web
            site constitutes acceptance of the Terms of Service and Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
