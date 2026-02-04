import fs from 'fs';
import path from 'path';
import { NetworkNode } from './types';

const nodesDirectory = path.join(process.cwd(), 'lib/nodes/items');

export function getAllNodes(): NetworkNode[] {
    // Check if directory exists
    if (!fs.existsSync(nodesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(nodesDirectory);
    const allNodesData = fileNames.filter(fileName => fileName.endsWith('.json')).map((fileName) => {
        const fullPath = path.join(nodesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        try {
            const node: NetworkNode = JSON.parse(fileContents);
            // Inject slug from filename if not present in JSON
            node.slug = fileName.replace('.json', '');
            return node;
        } catch (e) {
            console.error(`Error parsing ${fileName}:`, e);
            return null;
        }
    });

    return allNodesData.filter((item): item is NetworkNode => item !== null);
}

export async function getNodeBySlug(slug: string): Promise<NetworkNode | null> {
    const allNodes = getAllNodes();
    return allNodes.find(node => node.slug === slug) || null;
}
