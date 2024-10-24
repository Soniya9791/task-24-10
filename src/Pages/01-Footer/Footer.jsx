import React from "react"

export default function Footer() {
  return (
    <>
      {/*    <!-- Component: Three Columns Footer --> */}
      <footer className="w-full text-slate-500">
        {/*      <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-slate-200 -violet-400">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-product-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-3"
                >
                  Product
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Customers
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Why us?
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-about-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-3"
                >
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Leadership
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-4"
                aria-labelledby="footer-get-in-touch-3"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-3"
                >
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Support
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Partners
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                     className="transition-colors duration-300 hover:text-violet-400 focus:text-violet-400"
                    >
                      Join research
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Three Columns Footer --> */}
    </>
  )
}
