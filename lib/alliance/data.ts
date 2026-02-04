import fs from 'fs';
import path from 'path';
import { AllianceMember } from './types';

const allianceDirectory = path.join(process.cwd(), 'lib/alliance/items');

export function getAllAllianceMembers(): AllianceMember[] {
    // Check if directory exists
    if (!fs.existsSync(allianceDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(allianceDirectory);
    const allMembersData = fileNames.filter(fileName => fileName.endsWith('.json')).map((fileName) => {
        const fullPath = path.join(allianceDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        try {
            const member: AllianceMember = JSON.parse(fileContents);
            // Inject slug from filename if not present in JSON (though types say it is, we can ensure it)
            member.slug = fileName.replace('.json', '');
            return member;
        } catch (e) {
            console.error(`Error parsing ${fileName}:`, e);
            return null;
        }
    });

    return allMembersData.filter((item): item is AllianceMember => item !== null);
}

export async function getAllianceMemberBySlug(slug: string): Promise<AllianceMember | null> {
    const allMembers = getAllAllianceMembers();
    return allMembers.find(member => member.slug === slug) || null;
}
