import fs from 'fs';
import path from 'path';
import { PrimitiveItem } from './types';

const primitivesDirectory = path.join(process.cwd(), 'lib/primitives/items');

export function getAllPrimitives(): PrimitiveItem[] {
    // Check if directory exists
    if (!fs.existsSync(primitivesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(primitivesDirectory);
    const allPrimitivesData = fileNames.filter(fileName => fileName.endsWith('.json')).map((fileName) => {
        const fullPath = path.join(primitivesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        try {
            const primitive: PrimitiveItem = JSON.parse(fileContents);
            // Inject slug from filename if not present
            primitive.slug = fileName.replace('.json', '');
            return primitive;
        } catch (e) {
            console.error(`Error parsing ${fileName}:`, e);
            return null;
        }
    });

    return allPrimitivesData.filter((item): item is PrimitiveItem => item !== null);
}

export async function getPrimitiveBySlug(slug: string): Promise<PrimitiveItem | null> {
    const allPrimitives = getAllPrimitives();
    return allPrimitives.find(primitive => primitive.slug === slug) || null;
}
