"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Globe, BookOpen, Cpu, Bot, Lock, Menu, X, ChevronRight, Zap, Network, Home, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const navItems = [
  { href: "/explore", label: "EXPLORE", icon: Globe, code: "01", desc: "Discover the network" },
  { href: "/learn", label: "LEARN", icon: BookOpen, code: "02", desc: "Knowledge matrix" },
  { href: "/build", label: "BUILD", icon: Cpu, code: "03", desc: "Create & deploy" },
  { href: "/agentic", label: "AGENTIC", icon: Bot, code: "04", desc: "Autonomous agents" },
  { href: "/docs", label: "DOCS", icon: Lock, code: "05", desc: "Protocol specs" },
  { href: "/nexus", label: "NEXUS", icon: Network, code: "06", desc: "Network State" },
]

export function Navigation() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll for subtle visual feedback
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <>
      {/* Top Status Bar - HUD Style */}
      <div className="top-0 left-0 right-0 z-40 h-7 bg-black/40 backdrop-blur-2xl border-b border-cyan-500/10 flex items-center justify-between px-4 font-mono pointer-events-none select-none">
        <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.25em]">
          <span className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="text-cyan-400/90 font-medium">
            INTEGRITY_WEB
          </span>

        </div>
        <div className="flex items-center gap-4 text-[9px] uppercase tracking-wider text-white/50">
          <span className="text-green-500">XYZ</span>
          <span className="text-cyan-400/60 tabular-nums">{new Date().toISOString().split('T')[0]}</span>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md md:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 bottom-0 z-[70] w-80 bg-gradient-to-b from-zinc-950 to-black backdrop-blur-2xl border-r border-white/10 transform transition-all duration-400 ease-out md:hidden flex flex-col shadow-2xl shadow-cyan-500/5",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Animated Border Gradient */}
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-cyan-500/20 via-zinc-500/30 to-cyan-500/20" />

        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Sidebar Header */}
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-5 relative overflow-hidden bg-black/50">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="flex items-center gap-3 relative z-10">
            <div className="relative w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Image
                src="/icon.svg"
                alt="Integrity Web Logo"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/90 font-medium">INTEGRITY WEB</span>
              <span className="font-mono text-[8px] text-cyan-500/50 uppercase tracking-wider">PROTOCOL v1.0</span>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white relative z-10 transition-all duration-200 hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto">
          {/* Home Link */}
          <Link
            href="/"
            className={cn(
              "relative flex items-center gap-3 px-4 py-3.5 rounded-xl font-mono transition-all duration-200 group overflow-hidden",
              pathname === "/"
                ? "bg-gradient-to-r from-cyan-500/15 to-cyan-500/5 text-cyan-400 shadow-lg shadow-cyan-500/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            {pathname === "/" && (
              <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
            )}
            <Home className="h-4 w-4 shrink-0 relative z-10" />
            <span className="text-[11px] uppercase tracking-widest font-medium relative z-10">HOME</span>
          </Link>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />

          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 px-4 py-3.5 rounded-xl font-mono transition-all duration-200 group overflow-hidden",
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/15 to-cyan-500/5 text-cyan-400 shadow-lg shadow-cyan-500/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {/* Hover gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                )}

                <span className="text-[9px] text-cyan-500/50 w-5 relative z-10 font-medium">{item.code}</span>
                <item.icon className="h-4 w-4 shrink-0 relative z-10" />
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="text-[11px] uppercase tracking-widest font-medium">{item.label}</div>
                  <div className="text-[9px] text-white/30 truncate mt-0.5">{item.desc}</div>
                </div>
                <ChevronRight className={cn(
                  "h-3.5 w-3.5 transition-all duration-200 relative z-10",
                  isActive ? "opacity-100 text-cyan-400" : "opacity-0 group-hover:opacity-50 group-hover:translate-x-1"
                )} />
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-5 border-t border-white/5 relative bg-black/30">
          <SignedOut>
            <Link href="/join" onClick={() => setSidebarOpen(false)}>
              <Button className="w-full h-12 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/30 hover:to-cyan-600/30 text-cyan-400 border border-cyan-500/30 font-mono text-[11px] uppercase tracking-widest relative overflow-hidden group rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Zap className="h-4 w-4 mr-2" />
                CONNECT TO NETWORK
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5">
              <UserButton afterSignOutUrl="/" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-white/80 uppercase font-medium">CONNECTED</span>
                <span className="font-mono text-[8px] text-cyan-500/60">SECURE_LINK::ACTIVE</span>
              </div>
            </div>
          </SignedIn>
        </div>
      </aside>

      {/* Bottom Navigation Bar - Full Width */}
      <header className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "translate-y-0" : "translate-y-0"
      )}>
        {/* Main Navigation Container */}
        <div className="w-full bg-gradient-to-t from-black via-zinc-950/98 to-zinc-950/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* Animated top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" />

          <div className="flex items-stretch">
            {/* Mobile: Compact Navigation */}
            <div className="flex md:hidden items-center w-full">
              {/* Logo */}
              <Link
                href="/"
                className={cn(
                  "flex items-center justify-center w-16 h-16 border-r border-white/5 transition-all duration-200",
                  pathname === "/"
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-white/40 hover:text-cyan-400 hover:bg-white/5"
                )}
              >
                <div className="relative w-7 h-7">
                  <Image
                    src="/icon.svg"
                    alt="Start"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2 px-5 h-16 text-white/60 hover:text-cyan-400 transition-all duration-200 border-l border-white/5 hover:bg-white/5 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Menu className="h-5 w-5" />
                <span className="font-mono text-[9px] uppercase tracking-wider hidden xs:inline">MENU</span>
              </button>

              {/* Connect Button */}
              <SignedOut>
                <Link href="/join" className="flex items-center gap-2 px-5 h-16 text-cyan-400 border-l border-white/5 hover:bg-cyan-500/10 transition-all duration-200 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-medium">CONNECT</span>
                  <Zap className="h-4 w-4" />
                </Link>
              </SignedOut>
              <SignedIn>
                <div className="px-5 h-16 flex items-center border-l border-white/5 bg-white/5">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>

            {/* Desktop: Full Navigation */}
            <div className="hidden md:flex items-stretch w-full">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-3 px-6 py-4 border-r border-white/5 transition-all duration-200 group relative overflow-hidden",
                  pathname === "/"
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-white/60 hover:text-cyan-400 hover:bg-white/5"
                )}
              >
                {pathname === "/" && (
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                )}
                <div className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-200">
                  <Image
                    src="/icon.svg"
                    alt="Start"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest font-medium">Start</span>
              </Link>

              {/* Nav Items - Centered */}
              <nav className="flex-1 flex justify-center items-stretch">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative flex items-center gap-2.5 px-5 lg:px-6 py-4 font-mono text-[10px] uppercase tracking-widest transition-all duration-200 group",
                        isActive
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-white/50 hover:text-cyan-400 hover:bg-white/5"
                      )}
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                      )}

                      <span className="text-[8px] text-cyan-600/50 group-hover:text-cyan-500/70 transition-colors font-medium">{item.code}</span>
                      <item.icon className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>

              {/* Auth Section */}
              <div className="flex items-center border-l border-white/5 bg-black/30">
                <SignedOut>
                  <Link href="/join" className="flex items-center gap-3 px-6 py-4 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-medium">CONNECT</span>
                    <Zap className="h-4 w-4 group-hover:animate-pulse" />
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="px-6 py-3 flex items-center gap-3">
                    <UserButton afterSignOutUrl="/" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-white/60 uppercase">VERIFIED</span>
                    </div>
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="h-5 bg-black/60 border-t border-white/5 flex items-center justify-between px-6 font-mono text-[8px] uppercase tracking-[0.2em]">
            <span className="text-cyan-500/40">PROOF_REPLACES_TRUST</span>
            <div className="flex items-center gap-4">
              <span className="text-white/30 hidden sm:inline">LATENCY::2ms</span>
              <span className="flex items-center gap-2 text-emerald-400/60">
                <span className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                ZK_VERIFIED
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
