"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import profileDefault from "@/assets/images/profile.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const pathname = usePathname();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) {
        setIsProfileMenuOpen(false);
      }
      return !prev;
    });
  };

  const handleProfileMenuToggle = () => {
    setIsProfileMenuOpen((prev) => {
      if (!prev) {
        setIsMobileMenuOpen(false);
      }
      return !prev;
    });
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsProfileMenuOpen(false);
      document.getElementById("mobile-dropdown-button").blur();
      document.getElementById("user-menu-button").blur();
    }, 400);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-stone-300 border-b border-stone-200">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left side - Mobile Menu Button */}
          <div className="flex items-center">
            <button
              type="button"
              id="mobile-dropdown-button"
              className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white 
              ${
                isMobileMenuOpen
                  ? "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  : ""
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
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

          {/* Right side - Notifications and Profile */}
          <div className="flex items-center space-x-4 pr-2">
            {isLoggedIn && (
              <Link href="/dashboard/messages" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
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
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-rose-500 rounded-full">
                  2
                </span>
              </Link>
            )}

            <div className="relative">
              <button
                type="button"
                className={`relative flex rounded-full bg-gray-400 text-sm hover:bg-gray-200 
                ${
                  isProfileMenuOpen
                    ? "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    : ""
                }`}
                id="user-menu-button"
                aria-expanded={isProfileMenuOpen}
                aria-haspopup="true"
                onClick={handleProfileMenuToggle}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  src={profileDefault}
                  alt="Profile"
                />
              </button>

              {/* Profile dropdown */}
              {isProfileMenuOpen && (
                <div
                  id="user-menu"
                  className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                  onMouseLeave={handleMouseLeave}
                >
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/dashboard/profile"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/announcements"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Messages
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign Out
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 left-0 bg-gray-950 w-full z-20"
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium 
              ${pathname === "/" ? "bg-gray-900 text-white" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/submission"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium
              ${pathname === "/submission" ? "bg-gray-900 text-white" : ""}`}
            >
              Submit Board Package
            </Link>
            <Link
              href="/dashboard"
              className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium
              ${pathname === "/dashboard" ? "bg-gray-900 text-white" : ""}`}
            >
              Shareholder Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
