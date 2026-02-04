import fs from 'fs';
import path from 'path';
import { EventItem } from './types';

const eventsDirectory = path.join(process.cwd(), 'lib/events/items');

export async function getAllEvents(): Promise<EventItem[]> {
    // Check if directory exists
    if (!fs.existsSync(eventsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(eventsDirectory);
    const allEventsData = fileNames.filter(fileName => fileName.endsWith('.json')).map((fileName) => {
        const fullPath = path.join(eventsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        try {
            const event: EventItem = JSON.parse(fileContents);
            return event;
        } catch (e) {
            console.error(`Error parsing ${fileName}:`, e);
            return null;
        }
    });

    // Filter out any failed parses and sort by date (assuming ISO or sortable string format, or just order)
    // For now we just return them. Ideally we sort them by date.
    return allEventsData.filter((item): item is EventItem => item !== null);
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
    const allEvents = await getAllEvents();
    return allEvents.find(event => event.slug === slug) || null;
}
