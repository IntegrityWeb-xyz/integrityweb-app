export interface TeamInfo {
    founded: string;
    anonymous: boolean;
}

export interface ResourceLinks {
    website?: string;
    careers?: string;
    twitter?: string;
    telegram?: string;
    discord?: string;
    github?: string;
    youtube?: string;
    medium?: string;
    mirror?: string;
}

export interface ResourceMedia {
    logoUrl: string;
    bannerUrl: string;
    previewUrl?: string;
    gallery?: string[];
}

export interface ResourceItem {
    name: string;
    description: string;
    type: "dapp" | "wallet" | "app" | "sdk" | "project" | "agent" | "protocol";
    short_description: string;
    tags: string[];
    contracts: string[];
    sepoliaContracts: string[];
    audits: string[];
    verified: boolean;
    dotm: boolean; // Dapp of the Month?
    links: ResourceLinks;
    twitterName?: string;
    teamInfo: TeamInfo;
    tokens: string[];
    media: ResourceMedia;
    slug: string;
}
