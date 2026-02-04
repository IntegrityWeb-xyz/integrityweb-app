export interface QuoteItem {
    text: string;
    author: string;
    handle: string;
    avatar: string; // URL to avatar image
    date: string;
    url?: string; // Link to original source/tweet
    verified: boolean;
}
