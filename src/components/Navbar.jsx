"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import profileDefault from "@/assets/images/profile.png";
import { signOut } from "next-auth/react";

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
    <nav className="fixed top-0 right-0 left-0 z-50 bg-stone-200">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left side - Mobile Menu Button */}
          <div className="flex items-center">
            <button
              type="button"
              id="mobile-dropdown-button"
              className={`relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-stone-50 
              ${
                isMobileMenuOpen
                  ? "focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-500"
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
            <span className="ml-4 text-lg font-semibold">78 Tenants Corp.</span>
          </div>

          {/* Right side - Notifications and Profile */}
          <div className="flex items-center space-x-4 pr-2">
            {isLoggedIn && (
              <Link href="/dashboard/announcements" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-black hover:bg-stone-50  focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-500"
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
                <div className="absolute top-0 right-0  w-2 h-2 bg-rose-500 rounded-full"></div>
              </Link>
            )}

            <div className="relative">
              <button
                type="button"
                className={`relative flex rounded-full bg-stone-200 text-sm hover:bg-stone-50 
                ${
                  isProfileMenuOpen
                    ? "focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-500"
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
                  className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-neutral-50  py-1 shadow-lg ring-1 ring-stone-50 ring-opacity-5 focus:outline-none"
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
                        className="block px-4 py-2 text-sm text-black"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-black"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Dashboard
                      </Link>
                      {/* <Link
                        href="/dashboard/announcements"
                        className="block px-4 py-2 text-sm text-black"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Announcements
                      </Link> */}
                      <button
                        className="block px-4 py-2 text-sm text-black"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/api/auth/signin"
                      className="block px-4 py-2 text-sm text-black"
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
          className="absolute top-16 left-0 bg-neutral-50 z-20 w-full"
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className={`text-black hover:bg-stone-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium 
              ${pathname === "/" ? "bg-stone-500 text-white" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className={`text-black hover:bg-stone-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium
              ${pathname === "/dashboard" ? "bg-stone-500 text-white" : ""}`}
            >
              Shareholder Dashboard
            </Link>
            <Link
              href="/submission"
              className={`text-black hover:bg-stone-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium
              ${pathname === "/submission" ? "bg-stone-500 text-white" : ""}`}
            >
              Submit Board Package
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
