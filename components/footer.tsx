"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    community: [
      { name: t.footer.links.aboutUs, href: "#about" },
      { name: t.footer.links.amenities, href: "#amenities" },
      { name: t.footer.links.livingOptions, href: "#living" },
      { name: t.footer.links.virtualTour, href: "#" },
    ],
    resources: [
      { name: t.footer.links.faq, href: "#" },
      { name: t.footer.links.blog, href: "#" },
      { name: t.footer.links.careers, href: "#" },
      { name: t.footer.links.events, href: "#" },
    ],
    legal: [
      { name: t.footer.links.privacyPolicy, href: "#" },
      { name: t.footer.links.termsOfService, href: "#" },
      { name: t.footer.links.accessibility, href: "#" },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold">
              Golden Oaks
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {t.footer.community}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {t.footer.resources}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                {t.footer.legal}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
