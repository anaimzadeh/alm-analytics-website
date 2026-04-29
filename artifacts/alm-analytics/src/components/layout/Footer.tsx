import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/past-performance", label: "Past Performance" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-lg tracking-tight text-foreground">
              ALM Analytics
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Data systems that actually get used.
            </p>
            <a href="mailto:hello@almanalytics.net" className="inline-block mt-6 text-sm font-medium text-primary hover:underline">
              hello@almanalytics.net
            </a>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted-foreground">© {currentYear} ALM Analytics</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">All rights reserved.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
