export interface QuoteItem {
    text: string;
    author: string;
    handle: string;
    date: string;
    url?: string; // Link to original source/tweet
    verified: boolean;
}
