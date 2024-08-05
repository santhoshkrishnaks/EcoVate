import { useState } from "react";
import logo from "../../assets/logo.png";
import { SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const EcoNav = ({
  searchTerm,
  setSearchTerm,
  onSearchChange,
  onSearchSubmit,
}) => {
  const { isSignedIn } = useAuth();
  const login = isSignedIn;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [inputWidth, setInputWidth] = useState("w-12");

  const handleFocus = () => setInputWidth("w-32 sm:w-48");
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setInputWidth("w-1");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProductMenu = () => {
    setProductMenuOpen(!productMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission if within a form
      onSearchChange(searchTerm); // Trigger search with the current term
    }
  };

  return (
    <header className="bg-green-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 lg:-ml-10 ">
            <span className="sr-only">Your Company</span>
            <img className="h-[68px] w-auto" src={logo} alt="" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <UserButton />
            <svg
              className="h-6 w-6 ml-2 "
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to={{ pathname: "/home", hash: "#connect" }}
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            EcoConnect
          </Link>
          <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
            EcoFund
          </a>
          <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
            EcoCorp
          </a>
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900"
              aria-expanded={productMenuOpen}
              onClick={toggleProductMenu}
            >
              Products
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {productMenuOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {["EcoVision", "EcoCalc"].map((item) => (
                    <div
                      key={item}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <svg
                          className={`h-6 w-6 text-gray-600 group-hover:text-indigo-600`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          {/* Placeholder for different icons */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                          />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900 text-lg"
                        >
                          {item}
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-600">
                          Description for {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Contact sales
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {login ? (
            <UserButton />
          ) : (
            <span className="text-lg font-semibold leading-6 text-gray-900">
              <SignInButton>Log in </SignInButton>
              <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-lg">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Company
                  </a>
                </div>
                {isSignedIn ? (
                  <div></div>
                ) : (
                  <div className="py-6">
                    <span className="-mx-3 block rounded-lg py-2.5 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                      Log in
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default EcoNav;
