import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import arirang from "../images/arirang.png"; 

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/article" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300",
    isActive
      ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/30"
      : "border-transparent text-gray-300 hover:border-red-600 hover:bg-red-600/10 hover:text-red-600",
  ].join(" ");

const CustomLogo = () => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="relative">
      <img 
        src={arirang}
        alt="Arirang BTS Logo"
        width="64"
        height="64"
        className="transition-all duration-500 group-hover:scale-105 object-contain"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
     
      </span>
    </div>
  </div>
);

const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="relative h-10 w-10 rounded-lg border border-red-600/30 bg-black/50 backdrop-blur flex items-center justify-center md:hidden hover:bg-red-600/20 transition-all duration-300"
    aria-label="Toggle menu"
  >
    <div className="relative w-5 h-5">
      <span
        className={`absolute left-0 top-[3px] h-0.5 w-5 bg-red-600 transition-all duration-300 ${
          isOpen ? "rotate-45 top-2" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 h-0.5 w-5 bg-red-600 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[13px] h-0.5 w-5 bg-red-600 transition-all duration-300 ${
          isOpen ? "-rotate-45 top-2" : ""
        }`}
      />
    </div>
  </button>
);

const MobileNav = ({ isOpen, links, onLinkClick }) => (
  <div
    className={`absolute left-0 right-0 top-full mt-2 border-b border-red-600/20 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-300 overflow-hidden ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <nav className="flex flex-col gap-2 p-4">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          onClick={onLinkClick}
          className={({ isActive }) =>
            [
              "rounded-xl px-5 py-3.5 text-[14px] font-semibold uppercase tracking-[0.15em] transition-all duration-200 text-center",
              isActive
                ? "bg-red-600 text-white shadow-lg"
                : "text-gray-300 hover:bg-red-600/20 hover:text-red-600",
            ].join(" ")
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </div>
);

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "border-b border-red-600/30 bg-black/95 backdrop-blur-xl shadow-lg shadow-red-600/10" 
          : "border-b border-red-600/20 bg-black/90 backdrop-blur-md"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          
          <NavLink to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <CustomLogo />
          </NavLink>

         
          <nav className="hidden items-center gap-3 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

         
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>

 
        <MobileNav isOpen={isMobileMenuOpen} links={links} onLinkClick={closeMobileMenu} />
      </header>

    
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default NavBar;