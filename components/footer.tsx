import Link from "next/link"
import { ShieldCheck } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Build", href: "/build" },
    { label: "Tools", href: "/tools" },
    { label: "Explore dApps", href: "/dapps" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Developers: [
    { label: "Documentation", href: "/docs" },
    { label: "Resources", href: "/resources" },
    { label: "GitHub", href: "https://github.com" },
    { label: "API Reference", href: "/docs" },
  ],
  Community: [
    { label: "Join", href: "/join" },
    { label: "Forum", href: "https://forum.integritywebs.org" },
    { label: "Discord", href: "https://discord.gg/integritywebs" },
    { label: "Twitter", href: "https://twitter.com/integritywebs" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Alliance", href: "/alliance" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <ShieldCheck className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">IntegrityWeb</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building the future of verifiable applications
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IntegrityWeb. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
