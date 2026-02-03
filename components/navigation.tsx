"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Globe, BookOpen, Cpu, Bot, Lock, Handshake, Menu, X, ChevronRight, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const navItems = [
  { href: "/explore", label: "EXPLORE", icon: Globe, code: "01", desc: "Discover the network" },
  { href: "/learn", label: "LEARN", icon: BookOpen, code: "02", desc: "Knowledge matrix" },
  { href: "/build", label: "BUILD", icon: Cpu, code: "03", desc: "Create & deploy" },
  { href: "/agentic", label: "AGENTIC", icon: Bot, code: "04", desc: "Autonomous agents" },
  { href: "/docs", label: "DOCS", icon: Lock, code: "05", desc: "Protocol specs" },
  { href: "/alliance", label: "ALLIANCE", icon: Handshake, code: "06", desc: "Join the DAO" },
]

export function Navigation() {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
      <div className="fixed top-0 left-0 right-0 z-40 h-6 bg-black/70 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-3 font-mono pointer-events-none select-none">
        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em]">
          <span className="text-cyan-400 animate-pulse">◆</span>
          <span className="text-cyan-500/70">INTEGRITY_WEB</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="text-emerald-400/60 hidden sm:inline">VERIFIED</span>
        </div>
        <div className="flex items-center gap-3 text-[9px] uppercase tracking-wider text-white/40">
          <span className="hidden sm:inline">NODE::ACTIVE</span>
          <span className="text-cyan-500/50">{new Date().toISOString().split('T')[0]}</span>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 bottom-0 z-[70] w-72 bg-black/95 backdrop-blur-2xl border-r border-white/10 transform transition-transform duration-300 ease-out md:hidden flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Animated Border Gradient */}
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-slate-500/50 to-transparent opacity-50" />

        {/* Sidebar Header */}
        <div className="h-14 border-b border-white/5 flex items-center justify-between px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/0 via-slate-900/50 to-slate-900/0 animate-shimmer pointer-events-none" />


          <div className="flex items-center gap-2 relative z-10">
            <div className="relative w-5 h-5">
              <Image
                src="/icon.svg"
                alt="Integrity Web Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">INTEGRITY WEB</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-white/60 relative z-10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 px-3 py-3 rounded-lg font-mono transition-all group overflow-hidden",
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] rounded-r bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                )}

                <span className="text-[9px] text-cyan-600/70 w-4 relative z-10">{item.code}</span>
                <item.icon className="h-4 w-4 shrink-0 relative z-10" />
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="text-[11px] uppercase tracking-widest">{item.label}</div>
                  <div className="text-[9px] text-white/30 truncate">{item.desc}</div>
                </div>
                <ChevronRight className={cn(
                  "h-3 w-3 opacity-0 transition-opacity relative z-10",
                  isActive ? "opacity-100" : "group-hover:opacity-50"
                )} />
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/5 relative">
          <SignedOut>
            <Link href="/join" onClick={() => setSidebarOpen(false)}>
              <Button className="w-full h-11 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 font-mono text-[11px] uppercase tracking-widest relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]" />
                <Zap className="h-4 w-4 mr-2" />
                CONNECT
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
              <UserButton afterSignOutUrl="/" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-white/80 uppercase">CONNECTED</span>
                <span className="font-mono text-[8px] text-cyan-500/50">SECURE_LINK</span>
              </div>
            </div>
          </SignedIn>
        </div>
      </aside>

      {/* Bottom Navigation Bar */}
      <header className="fixed bottom-4 left-4 right-4 z-50 flex justify-center pointer-events-none">
        <div className="w-full max-w-5xl bg-slate-950/50 backdrop-blur-2xl border border-white/10 group/nav rounded-2xl overflow-hidden shadow-2xl pointer-events-auto">
          {/* Subtle animated border gradient */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent opacity-50 group-hover/nav:opacity-100 transition-opacity" />
          <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-1/2 animate-[shimmer_3s_infinite]" />

          <div className="flex items-stretch">
            {/* Mobile: Logo + Spacer + Start + Connect */}
            <div className="flex md:hidden items-center flex-1 pr-1">
              {/* Logo */}
              <Link
                href="/"
                className={cn(
                  "flex items-center justify-center w-14 h-14 border-r border-white/5 transition-colors",
                  pathname === "/"
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-white/40 hover:text-cyan-400"
                )}
              >
                <div className="relative w-6 h-6">
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

              {/* Start Button (Menu) */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2 px-4 h-14 text-white/60 hover:text-cyan-400 transition-colors border-l border-white/5 hover:bg-white/5 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-500/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="font-mono text-[10px] uppercase tracking-widest">Start</span>
                <Menu className="h-4 w-4" />
              </button>

              {/* Connect Button */}
              <SignedOut>
                <Link href="/join" className="flex items-center gap-2 px-4 h-14 text-cyan-400 border-l border-white/5 hover:bg-cyan-500/5 transition-colors group relative overflow-hidden">
                  <span className="font-mono text-[10px]">CONNECT</span>
                  <Zap className="h-4 w-4" />
                </Link>
              </SignedOut>
              <SignedIn>
                <div className="px-4 h-14 flex items-center border-l border-white/5">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>

            {/* Desktop: Full Nav */}
            <div className="hidden md:flex items-stretch w-full justify-between bg-slate-900/30 backdrop-blur-2xl">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-2 px-6 py-3 border-r border-white/5 transition-colors hover:bg-white/5",
                  pathname === "/"
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-white/60 hover:text-cyan-400"
                )}
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/icon.svg"
                    alt="Home"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest">HOME</span>
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
                        "relative flex items-center gap-2 px-6 py-3 font-mono text-[10px] uppercase tracking-widest border-x border-white/0 hover:border-white/5 transition-all group",
                        isActive
                          ? "bg-cyan-500/5 text-cyan-400"
                          : "text-white/50 hover:text-cyan-400 hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      )}
                      <span className="text-[8px] text-cyan-600/40 group-hover:text-cyan-500/60 transition-colors">{item.code}</span>
                      <item.icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </nav>

              {/* Auth */}
              <div className="flex items-center border-l border-white/5 bg-black/20">
                <SignedOut>
                  <Link href="/join" className="flex items-center gap-2 px-2 py-3 text-cyan-400 hover:bg-cyan-500/10 transition-colors">

                    <span className="font-mono text-[10px]">CONNECT</span>
                    <Zap className="h-4 w-4 pr-2" />
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="px-5 py-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>

          {/* Status line */}
          <div className="h-4 bg-black/50 border-t border-white/5 flex items-center justify-between px-4 font-mono text-[6px] uppercase tracking-widest text-cyan-500/30">
            <span>PROOF_REPLACES_TRUST</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 H-1 rounded-full bg-emerald-500/70 animate-pulse" />
              ZK_VERIFIED
            </span>
          </div>
        </div>
      </header>
    </>
  )
}
