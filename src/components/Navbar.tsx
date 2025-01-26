import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type NavbarItem = {
  id: number;
  value: string;
  href: string;
  className?: string;
  hide?: boolean;
  order?: number;
  isActive?: boolean;
};

const navbarItems: Readonly<NavbarItem[]> = [
  { id: 1, value: "About", href: "/about", order: 1 },
  { id: 2, value: "Experience", href: "/experience", order: 2 },
  { id: 3, value: "Projects", href: "/projects", order: 3 },
  { id: 4, value: "Skills", href: "/skills", order: 4 },
  { id: 6, value: "Contact", href: "/contact", order: 6 },
];

type NavbarItemProps = {
  value: string;
  href: string;
  className?: string;
};

function NavbarBrand({ value }: Readonly<{ value: string }>) {
  return <div className="flex-shrink-0 text-2xl font-semibold">{value}</div>;
}

function NavbarItem({ value, href, className }: Readonly<NavbarItemProps>) {
  return (
    <a
      href={href}
      className={twMerge(
        "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
        className
      )}
    >
      {value}
    </a>
  );
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between w-full">
            {/* Navbar Brand (left side) */}
            <NavbarBrand value="Adarsh Choudhary" />

            {/* Navbar Items (right side) */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navbarItems
                  .filter((item) => item.hide !== true)
                  .map((item) => (
                    <NavbarItem
                      key={item.id}
                      value={item.value}
                      href={item.href}
                      className={item.className}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navbarItems
            .filter((item) => item.hide !== true)
            .map((item) => (
              <NavbarItem
                key={item.id}
                value={item.value}
                href={item.href}
                className={twMerge(item.className, "block")}
              />
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
