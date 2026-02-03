"use client";

import { useState, useMemo } from "react";
import { ResourceItem } from "@/lib/resources/types";
import { ResourceCard } from "@/components/resources/resource-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search, Terminal, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ResourcesGridProps {
    initialResources: ResourceItem[];
}

const ITEMS_PER_PAGE = 12;

const CATEGORIES = [
    { id: "all", label: "ALL_SYSTEMS" },
    { id: "dapp", label: "DAPPS" },
    { id: "wallet", label: "WALLETS" },
    { id: "agent", label: "AGENTS" },
    { id: "protocol", label: "PROTOCOLS" },
    { id: "sdk", label: "SDK_TOOLS" },
    { id: "project", label: "ECOSYSTEM" },
];

export function ResourcesGrid({ initialResources }: ResourcesGridProps) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter resources based on category and search query
    const filteredResources = useMemo(() => {
        return initialResources.filter((resource) => {
            // 1. Filter by category
            const matchesCategory = activeCategory === "all" || resource.type === activeCategory;

            // 2. Filter by search query
            const query = searchQuery.toLowerCase();
            const matchesSearch =
                resource.name.toLowerCase().includes(query) ||
                resource.description.toLowerCase().includes(query) ||
                resource.tags.some(tag => tag.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });
    }, [initialResources, activeCategory, searchQuery]);

    // Pagination logic
    const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
    const paginatedResources = filteredResources.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Reset page when filters change
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="space-y-8">
            {/* Filters and Search Bar Container */}
            <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between sticky top-4 z-10 bg-black/40 backdrop-blur-md p-2 rounded-lg border border-white/10 shadow-xl">

                {/* Category Tabs - Monospace System Tabs */}
                <div className="flex overflow-x-auto gap-0.5 no-scrollbar w-full lg:w-auto p-1 bg-white/5 rounded border border-white/5">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                            className={`
                                px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all duration-200 border-b-2
                                ${activeCategory === category.id
                                    ? "border-cyan-500 text-cyan-400 bg-cyan-950/20"
                                    : "border-transparent text-muted-foreground hover:text-white hover:bg-white/5"
                                }
                            `}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Search Input - Command Line Style */}
                <div className="relative w-full lg:w-72 group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-cyan-500 transition-colors">
                        <Terminal className="h-3.5 w-3.5" />
                    </div>
                    <Input
                        placeholder="QUERY_DB..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="pl-9 h-10 rounded-md bg-black/50 border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 font-mono text-xs placeholder:text-muted-foreground/50"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-1.5 h-4 bg-cyan-500/50 animate-pulse hidden group-focus-within:block" />
                    </div>
                </div>
            </div>

            {/* Grid of Cards */}
            {paginatedResources.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {paginatedResources.map((resource, idx) => (
                        <ResourceCard key={`${resource.name}-${idx}`} resource={resource} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-32 bg-white/5 rounded-lg border border-dashed border-white/10">
                    <Filter className="w-10 h-10 text-muted-foreground/20 mb-4" />
                    <h3 className="text-lg font-mono text-white/50 mb-1">NO_RESULTS_FOUND</h3>
                    <Button
                        variant="link"
                        onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                        className="text-cyan-500 font-mono text-xs hover:text-cyan-400"
                    >
                        [RESET_FILTERS]
                    </Button>
                </div>
            )}

            {/* Pagination Controls - System Paging */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12 py-4 border-t border-white/5">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="rounded-sm w-8 h-8 border-white/10 bg-black/20 hover:bg-white/10 hover:border-cyan-500/30 text-white"
                    >
                        <ChevronLeft className="h-3 w-3" />
                    </Button>

                    <div className="flex items-center gap-2 px-4 font-mono text-[10px] tracking-widest text-muted-foreground">
                        PAGE <span className="text-cyan-500">[{currentPage.toString().padStart(2, '0')}]</span> OF <span className="text-white">[{totalPages.toString().padStart(2, '0')}]</span>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="rounded-sm w-8 h-8 border-white/10 bg-black/20 hover:bg-white/10 hover:border-cyan-500/30 text-white"
                    >
                        <ChevronRight className="h-3 w-3" />
                    </Button>
                </div>
            )}
        </div>
    );
}
