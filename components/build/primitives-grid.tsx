"use client"

import { useState, useMemo } from "react"
import { Box, ShieldCheck, Database, Fingerprint, Cpu, MessageSquare, Landmark, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { PrimitiveItem } from "@/lib/primitives/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const getIconForType = (type: PrimitiveItem['type']) => {
    switch (type) {
        case 'IDENTITY': return Fingerprint;
        case 'STORAGE': return Database;
        case 'COMPUTE': return Cpu;
        case 'MESSAGING': return MessageSquare;
        case 'GOVERNANCE': return Landmark;
        default: return Box;
    }
}

interface PrimitivesGridProps {
    items: PrimitiveItem[];
}

const ITEMS_PER_PAGE = 9;

export function PrimitivesGrid({ items }: PrimitivesGridProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [filterType, setFilterType] = useState<string>("ALL")
    const [currentPage, setCurrentPage] = useState(1)

    const filteredItems = useMemo(() => {
        return items.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = filterType === "ALL" || item.type === filterType;
            return matchesSearch && matchesType;
        });
    }, [items, searchQuery, filterType]);

    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredItems, currentPage]);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const handleFilterChange = (type: string) => {
        setFilterType(type);
        setCurrentPage(1); // Reset to first page
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    }

    const categories = ["ALL", "IDENTITY", "STORAGE", "COMPUTE", "MESSAGING", "GOVERNANCE"];

    return (
        <section className="mb-24">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                    <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                        // VERIFIED_PRIMITIVES
                    </h2>
                    <div className="font-mono text-xs text-cyan-500 bg-cyan-950/20 px-2 py-1 rounded">
                        TOTAL_INDEXED: {filteredItems.length}
                    </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-64">
                        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                            <Search className="h-4 w-4" />
                        </div>
                        <Input
                            placeholder="Search primitives..."
                            className="pl-9 bg-zinc-950/50 border-white/10 focus:border-cyan-500/50 transition-colors"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        className={`px-3 py-1.5 rounded text-xs font-mono transition-colors border ${filterType === category
                                ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                                : "bg-zinc-900/50 text-muted-foreground border-white/5 hover:border-white/10 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedItems.map((item, i) => {
                    const Icon = getIconForType(item.type);

                    return (
                        <div
                            key={i}
                            className="group relative p-6 bg-zinc-950/30 backdrop-blur-lg border border-white/5 rounded-lg hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                <Icon className="w-12 h-12 text-cyan-500/20" />
                            </div>

                            <div className="mb-4 p-3 bg-zinc-900/50 rounded-lg w-fit border border-white/5 group-hover:border-white/10">
                                <Icon className="w-5 h-5 text-cyan-400" />
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                                    {item.name}
                                </h3>
                                {item.status && (
                                    <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border ${item.status === 'STABLE' ? 'border-green-500/30 text-green-500' :
                                        item.status === 'BETA' ? 'border-amber-500/30 text-amber-500' :
                                            'border-zinc-500/30 text-zinc-500'
                                        }`}>
                                        {item.status}
                                    </span>
                                )}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3">
                                {item.description}
                            </p>

                            <div className="mb-6 space-y-2">
                                {item.features.slice(0, 3).map((feature, j) => (
                                    <div key={j} className="flex items-center gap-2">
                                        <ShieldCheck className="w-3 h-3 text-cyan-500/70" />
                                        <span className="text-xs font-mono text-white/70">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                <code className="text-[10px] font-mono text-cyan-500/80 bg-cyan-950/20 px-2 py-1 rounded truncate max-w-full">
                                    {item.installCommand}
                                </code>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
                        </div>
                    )
                })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="bg-zinc-950 border-white/10 hover:bg-zinc-900"
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                    </Button>
                    <span className="text-sm font-mono text-muted-foreground">
                        Page <span className="text-white">{currentPage}</span> of <span className="text-white">{totalPages}</span>
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="bg-zinc-950 border-white/10 hover:bg-zinc-900"
                    >
                        Next
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            )}
        </section>
    )
}
