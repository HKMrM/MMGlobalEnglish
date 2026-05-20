/*
 * DESIGN: Warm Academic — Forest green footer with gold accents
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A3A5C", color: "#F8FBFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="font-display text-2xl font-semibold" style={{ color: "#F8FBFF" }}>
                Us English
              </div>
              <div className="font-accent text-sm" style={{ color: "#2E9FD8" }}>
                Hong Kong
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(253,246,236,0.7)" }}>
              Guiding students from confident expression to critical thought — from primary school through to the global stage.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: "#2E9FD8" }}>
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/programs", label: "Programmes" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact & Enquiry" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm transition-colors duration-150 hover:text-gold"
                    style={{ color: "rgba(253,246,236,0.75)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4" style={{ color: "#2E9FD8" }}>
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "#2E9FD8" }} />
                <a
                  href="mailto:HKMr.Michael@gmail.com"
                  className="font-body text-sm transition-colors hover:text-gold"
                  style={{ color: "rgba(253,246,236,0.75)" }}
                >
                  HKMr.Michael@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "#2E9FD8" }} />
                <a
                  href="tel:+85298765432"
                  className="font-body text-sm transition-colors hover:text-gold"
                  style={{ color: "rgba(253,246,236,0.75)" }}
                >
                  +852 5418 5811
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#2E9FD8" }} />
                <span className="font-body text-sm" style={{ color: "rgba(253,246,236,0.75)" }}>
                  Hong Kong Island &amp; Kowloon
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
        >
          <p className="font-body text-xs" style={{ color: "rgba(253,246,236,0.45)" }}>
            © {new Date().getFullYear()} Us English HK. All rights reserved.
          </p>
          <p className="font-accent text-sm" style={{ color: "rgba(201,168,76,0.6)" }}>
            Find your voice. Shape your world.
          </p>
        </div>
      </div>
    </footer>
  );
}
