export type EventStatus = "REGISTRATION_OPEN" | "LIMITED_CAPACITY" | "EARLY_ACCESS" | "SOLD_OUT" | "COMPLETED";

export interface EventItem {
    slug: string;
    type: string;
    title: string;
    date: string;
    time: string;
    format: "ONLINE_UPLINK" | "IN_REAL_LIFE" | "HYBRID_RELAY";
    location: string;
    description: string;
    attendees: string;
    iconName: "Video" | "Users" | "Calendar" | "Zap";
    status: EventStatus;
    color: string;
    content?: string; // For markdown content
}
