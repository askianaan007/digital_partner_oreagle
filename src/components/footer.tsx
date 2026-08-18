import { Mail, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Manage", href: "#what-we-manage" },
  { label: "Performance Model", href: "#performance-model" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0b0c0f]/80 backdrop-blur-2xl py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <a href="#top" className="inline-block group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_lanscape.png"
                alt="OREAGLE"
                className="h-20 sm:h-22 w-auto brightness-0 invert opacity-100 transition-transform group-hover:scale-105"
              />
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Performance-Based Digital Growth Partner
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-muted">
              <a
                href="mailto:atomycoders@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                atomycoders@gmail.com
              </a>
              <a
                href="tel:+94754353543"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone className="size-4" />
                +94 754 353 543
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 sm:justify-self-end">
            <h3 className="text-sm font-medium">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} OREAGLE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
