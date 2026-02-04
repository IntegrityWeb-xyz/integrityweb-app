import fs from 'fs';
import path from 'path';
import { VideoItem } from './types';

const videosDirectory = path.join(process.cwd(), 'lib/videos/items');

export function getAllVideos(): VideoItem[] {
    // Check if directory exists
    if (!fs.existsSync(videosDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(videosDirectory);
    const allVideos = fileNames.filter(fileName => fileName.endsWith('.json')).map((fileName) => {
        const fullPath = path.join(videosDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        try {
            const video: VideoItem = JSON.parse(fileContents);
            // Ensure slug matches filename if not provided (though json should have it)
            video.slug = fileName.replace('.json', '');
            return video;
        } catch (e) {
            console.error(`Error parsing video ${fileName}:`, e);
            return null;
        }
    });

    // Filter nulls and sort by date descending (newest first)
    return allVideos
        .filter((item): item is VideoItem => item !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getVideoBySlug(slug: string): VideoItem | null {
    try {
        const fullPath = path.join(videosDirectory, `${slug}.json`);
        if (!fs.existsSync(fullPath)) {
            return null;
        }
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const video: VideoItem = JSON.parse(fileContents);
        video.slug = slug;
        return video;
    } catch (e) {
        return null;
    }
}
