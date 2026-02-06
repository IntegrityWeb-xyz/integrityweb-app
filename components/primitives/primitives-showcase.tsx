"use client"

import { useState, useMemo } from "react"
import { PrimitiveItem } from "@/lib/primitives/types"
import { Shield, Cpu, Network, Database, Search, ChevronLeft, ChevronRight, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PrimitivesShowcaseProps {
    primitives: PrimitiveItem[]
}

const ITEMS_PER_PAGE = 9;

export function PrimitivesShowcase({ primitives }: PrimitivesShowcaseProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState<string>("ALL")
    const [currentPage, setCurrentPage] = useState(1)

    // Helper to get icon based on type or name
    const getIcon = (item: PrimitiveItem) => {
        if (item.type === "IDENTITY") return <Shield className="w-5 h-5 text-cyan-400" />;
        if (item.type === "COMPUTE") return <Cpu className="w-5 h-5 text-emerald-400" />;
        if (item.type === "MESSAGING") return <Network className="w-5 h-5 text-purple-400" />;
        return <Database className="w-5 h-5 text-zinc-400" />;
    }

    // Filter and Search Logic
    const filteredPrimitives = useMemo(() => {
        return primitives.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = activeFilter === "ALL" || item.type === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [primitives, searchQuery, activeFilter]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredPrimitives.length / ITEMS_PER_PAGE);
    const paginatedPrimitives = filteredPrimitives.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset page on filter change
    useMemo(() => {
        setCurrentPage(1);
    }, [searchQuery, activeFilter]);

    const filters = ["ALL", "IDENTITY", "COMPUTE", "STORAGE", "MESSAGING", "GOVERNANCE"];

    return (
        <div className="space-y-8">
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-900/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">

                {/* Search */}
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search primitives..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 bg-black/40 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-cyan-500/50"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    )}
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 justify-center md:justify-end">
                    <Filter className="w-4 h-4 text-muted-foreground mr-2 hidden md:block" />
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`
                                text-[10px] uppercase font-mono tracking-widest px-3 py-1.5 rounded-full transition-all border
                                ${activeFilter === filter
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-muted-foreground border-transparent hover:border-white/20 hover:text-white"}
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            {paginatedPrimitives.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paginatedPrimitives.map((item) => (
                        <div key={item.name} className="bg-zinc-900/50 border border-white/5 p-4 rounded-lg hover:border-cyan-500/30 transition-colors group">
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-black border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                                        {getIcon(item)}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-mono font-bold text-sm">{item.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.type}</span>
                                            {item.status === 'EXPERIMENTAL' && <span className="text-[9px] px-1 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">EXP</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'STABLE' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                            </div>

                            <p className="text-xs text-muted-foreground leading-relaxed pl-[3.25rem] line-clamp-2 min-h-[2.5rem]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
                    <p className="text-muted-foreground">No primitives found matching your criteria.</p>
                    <Button
                        variant="link"
                        onClick={() => { setSearchQuery(""); setActiveFilter("ALL"); }}
                        className="text-cyan-400 mt-2"
                    >
                        Clear filters
                    </Button>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="text-xs text-muted-foreground">
                        Showing <span className="text-white">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> - <span className="text-white">{Math.min(currentPage * ITEMS_PER_PAGE, filteredPrimitives.length)}</span> of <span className="text-white">{filteredPrimitives.length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent border-white/10"
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <div className="text-xs font-mono px-4">
                            PAGE {currentPage} / {totalPages}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent border-white/10"
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
