export interface NodeStats {
    latency?: string;
    uptime?: string;
    tvl?: string;
    proposals?: number;
}

export interface NetworkNode {
    name: string;
    slug: string;
    type: string; // e.g., "L2_SCALING", "CORE_ENG"
    status: string; // e.g., "VALIDATING", "SYNCED"
    color: string; // tailwind color class e.g., "text-cyan-400"
    description: string;
    founded: string;
    website?: string;
    twitter?: string;
    github?: string;
    stats: NodeStats;
    logoUrl?: string; // Optional custom logo
}
