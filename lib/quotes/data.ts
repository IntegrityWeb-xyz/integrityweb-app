import fs from 'fs';
import path from 'path';
import { QuoteItem } from './types';

const quotesDirectory = path.join(process.cwd(), 'lib/quotes/items');

export function getAllQuotes(): QuoteItem[] {
    // Check if directory exists
    if (!fs.existsSync(quotesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(quotesDirectory);
    const allQuotes = fileNames.filter(fileName => fileName.endsWith('.json')).map((fileName) => {
        const fullPath = path.join(quotesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        try {
            return JSON.parse(fileContents) as QuoteItem;
        } catch (e) {
            console.error(`Error parsing quote ${fileName}:`, e);
            return null;
        }
    });

    // Filter nulls and return
    return allQuotes.filter((item): item is QuoteItem => item !== null);
}
