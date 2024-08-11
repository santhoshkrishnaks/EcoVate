import { useState } from "react";
import logo from "../../assets/logo.png";
import { useAuth,UserButton,SignInButton } from "@clerk/clerk-react";
import {Link} from "react-router-dom"
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
    <header className="bg-green-100 sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 ">
            <img className="h-[50px] sm:h-[68px] w-auto" src={logo} alt="" />
          </Link>
        </div>

        <div className="flex lg:hidden items-center justify-between mr-2 gap-3">
          {/* Mobilemenu */}

          {/* searchbar */}
          <div className="relative ml-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="   Search..."
              className={`bg-green-100 h-8 px-4 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out ${inputWidth} border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <svg
                className="h-4 w-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>

          <UserButton />

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>

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
            to="/Ecoconnect"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            EcoConnect
          </Link>
          <Link
            to="/Ecofund"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            EcoFund
          </Link>
          <Link
            to="/Ecocorp"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            EcoCorp
          </Link>
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900"
              aria-expanded={productMenuOpen}
              onClick={toggleProductMenu}
            >
              Services
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
              <div className="absolute -left-8 top-full z-10 mt-3 w-44 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {[
                    {
                      name: "EcoVision",
                      path: "/Ecovision",
                    },
                    {
                      name: "EcoCalc",
                      path: "/Ecocalc",
                    },
                  ].map((item) => (
                    <div
                      key={item.path}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link
                          to={item.path}
                          className="block font-semibold text-gray-900 text-lg"
                        >
                          {item.name}
                          <span className="absolute inset-0"></span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative ml-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="   Search..."
              className={`bg-green-100 h-8 px-4 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out ${inputWidth} border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-500`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <svg
                className="h-4 w-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
        {/* <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="    Search by hashtag..."
              className={`bg-green-100 h-8 px-4 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out ${inputWidth} border border-gray-300 shadow-md focus:ring-2 focus:ring-green-500`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <svg
                className="h-4 w-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div> */}
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
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </Link>
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
                  <Link
                    to="/Ecoconnect"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoConnect
                  </Link>
                  <Link
                    to="/Ecofund"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Ecofund
                  </Link>
                  <Link
                    to="/Ecocorp"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoCorp
                  </Link>
                  <Link
                    to="/Ecovision"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoVision
                  </Link>
                  <Link
                    to="/Ecocalc"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoCorp
                  </Link>
                </div>
                <div className="py-6">
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
        </div>
      )}
    </header>
  );
};

export default EcoNav;
