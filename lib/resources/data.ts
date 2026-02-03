import fs from 'fs';
import path from 'path';
import { ResourceItem } from './types';

const resourcesDirectory = path.join(process.cwd(), 'lib/resources/items');

export function getAllResources(): ResourceItem[] {
    // Check if directory exists
    if (!fs.existsSync(resourcesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(resourcesDirectory);
    const allResourcesData = fileNames.filter(fileName => fileName.endsWith('.json')).map((fileName) => {
        // Read markdown file as string
        const fullPath = path.join(resourcesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse JSON
        try {
            const resource: ResourceItem = JSON.parse(fileContents);
            return resource;
        } catch (e) {
            console.error(`Error parsing ${fileName}:`, e);
            return null;
        }
    });

    // Filter out any failed parses
    return allResourcesData.filter((item): item is ResourceItem => item !== null);
}

export function getResourcesByCategory(category: string): ResourceItem[] {
    const allResources = getAllResources();
    if (category === 'all') return allResources;
    return allResources.filter(resource => resource.type === category);
}
