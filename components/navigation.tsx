"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Terminal, Cpu, Globe, Lock, Menu, X, Calendar, Handshake, UserCircle, BookOpen, Bot } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/explore", label: "EXPLORE", icon: Globe, code: "NET_02" },
  { href: "/learn", label: "LEARN", icon: BookOpen, code: "EDU_03" },
  { href: "/build", label: "BUILD", icon: Cpu, code: "SYS_04" },
  { href: "/agentic", label: "AGENTIC", icon: Bot, code: "AGT_00" },
  { href: "/docs", label: "DOCS", icon: Lock, code: "MAN_05" },
  { href: "/alliance", label: "ALLIANCE", icon: Handshake, code: "DAO_06" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Status Bar (Decorative) */}
      <div className="fixed top-0 left-0 right-0 z-40 h-8 bg-background/80 backdrop-blur-sm border-b border-white/5 flex items-center justify-between px-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest pointer-events-none select-none">
        <div className="flex gap-4">
          <span className="text-primary animate-pulse">● SYSTEM_ONLINE</span>
          <span>VER: 2.0.4</span>
        </div>
        <div className="flex gap-4">
          <span>SECURE_CONNECTION</span>
          <span>{new Date().toISOString().split('T')[0]}</span>
        </div>
      </div>

      {/* Floating HUD Dock */}
      <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div className="relative group rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 transition-all duration-300 hover:border-primary/30">

          {/* Decorative Corner Brackets */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary/50 rounded-tl-lg" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-primary/50 rounded-tr-lg" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-primary/50 rounded-bl-lg" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary/50 rounded-br-lg" />

          <div className="flex items-center justify-between p-2">

            {/* Logo / Home */}
            <Link href="/" className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-white/5 hover:bg-white/10 text-primary transition-colors border border-white/5">
              <ShieldCheck className="h-6 w-6" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 mx-2 overflow-x-auto no-scrollbar">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 group/link overflow-hidden shrink-0",
                      isActive
                        ? "bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        : "text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                  >
                    <span className="relative z-10 flex flex-col items-center gap-0.5">
                      <span className="font-bold">{item.label}</span>
                      <span className="text-[8px] opacity-50">{item.code}</span>
                    </span>
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary animate-pulse" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Nav Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-12 w-12 text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>

            {/* Auth / Action */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/10 shrink-0">
              <SignedOut>
                <Link href="/join">
                  <Button size="sm" className="hidden sm:flex bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 hover:border-primary font-mono tracking-wider h-10 px-6">
                    [ ACCESS ]
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="absolute bottom-full left-0 right-0 mb-4 p-2 rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-xl md:hidden max-h-[60vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono border border-transparent transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary border-primary/20"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
              <SignedOut>
                <Link href="/join" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full mt-2 bg-primary/20 text-primary border border-primary/50 font-mono">
                    INITIALIZE_ACCESS
                  </Button>
                </Link>
              </SignedOut>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
