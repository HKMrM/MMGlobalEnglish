/*
 * DESIGN: Warm Academic — Frosted glass sticky navbar
 * Forest green brand, gold accents, Cormorant Garamond wordmark
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programmes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/about-michael", label: "Mr. Michael" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto md:h-auto py-3 md:py-4">
          {/* Wordmark */}
          <Link href="/" className="flex items-center leading-tight group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663678391153/meqJRzWDVfsRVyBGvtAawS/mm-global-english-logo-large-2z6LMhia9M8ZUs84Mf92RB.webp"
              alt="MM Global English"
              className="h-24 md:h-32 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-600 tracking-wide transition-colors duration-200 relative group ${
                  location === link.href
                    ? "text-forest font-semibold"
                    : "text-charcoal hover:text-forest"
                }`}
                style={{
                  color: location === link.href ? "#0F5A8F" : "#1A2332",
                }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-200 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ backgroundColor: "#2E9FD8" }}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded text-sm font-semibold font-body transition-all duration-200 hover:shadow-md active:scale-95"
              style={{
                backgroundColor: "#0F5A8F",
                color: "#F8FBFF",
              }}
            >
              Enquire Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: "#0F5A8F" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#F8FBFF" }}
      >
        <nav className="px-4 py-4 flex flex-col gap-1 border-t" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-3 rounded font-body text-sm font-medium transition-colors duration-150 ${
                location === link.href ? "font-semibold" : ""
              }`}
              style={{
                color: location === link.href ? "#0F5A8F" : "#1A2332",
                backgroundColor: location === link.href ? "rgba(27,67,50,0.06)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-4 py-3 rounded text-sm font-semibold font-body text-center"
            style={{ backgroundColor: "#0F5A8F", color: "#F8FBFF" }}
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
