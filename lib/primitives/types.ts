export interface PrimitiveStats {
    downloads?: string;
    stars?: string;
    dependents?: string;
}

export interface PrimitiveItem {
    name: string;
    slug: string;
    type: "IDENTITY" | "STORAGE" | "COMPUTE" | "MESSAGING" | "GOVERNANCE";
    status: "STABLE" | "BETA" | "EXPERIMENTAL";
    description: string;
    version: string;
    docsUrl?: string;
    repoUrl?: string;
    features: string[];
    stats: PrimitiveStats;
    installCommand: string;
}
