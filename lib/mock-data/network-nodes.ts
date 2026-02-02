// Network Resilience Map Data
export interface NetworkNode {
  id: string
  name: string
  region: string
  country: string
  status: "online" | "syncing" | "offline"
  latency: number
  uptime: number
  peersConnected: number
  blocksProcessed: number
  lastSeen: string
  coordinates: { lat: number; lng: number }
}

export const networkNodes: NetworkNode[] = [
  {
    id: "node-001",
    name: "US-East-Primary",
    region: "North America",
    country: "United States",
    status: "online",
    latency: 12,
    uptime: 99.99,
    peersConnected: 847,
    blocksProcessed: 18847291,
    lastSeen: new Date().toISOString(),
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "node-002",
    name: "EU-West-Primary",
    region: "Europe",
    country: "Germany",
    status: "online",
    latency: 24,
    uptime: 99.97,
    peersConnected: 623,
    blocksProcessed: 18847290,
    lastSeen: new Date().toISOString(),
    coordinates: { lat: 52.52, lng: 13.405 },
  },
  {
    id: "node-003",
    name: "APAC-Singapore",
    region: "Asia Pacific",
    country: "Singapore",
    status: "online",
    latency: 45,
    uptime: 99.95,
    peersConnected: 512,
    blocksProcessed: 18847289,
    lastSeen: new Date().toISOString(),
    coordinates: { lat: 1.3521, lng: 103.8198 },
  },
  {
    id: "node-004",
    name: "EU-North-Backup",
    region: "Europe",
    country: "Sweden",
    status: "syncing",
    latency: 38,
    uptime: 98.5,
    peersConnected: 284,
    blocksProcessed: 18847285,
    lastSeen: new Date(Date.now() - 1000 * 30).toISOString(),
    coordinates: { lat: 59.3293, lng: 18.0686 },
  },
  {
    id: "node-005",
    name: "US-West-Secondary",
    region: "North America",
    country: "United States",
    status: "online",
    latency: 18,
    uptime: 99.98,
    peersConnected: 734,
    blocksProcessed: 18847291,
    lastSeen: new Date().toISOString(),
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: "node-006",
    name: "APAC-Tokyo",
    region: "Asia Pacific",
    country: "Japan",
    status: "online",
    latency: 52,
    uptime: 99.94,
    peersConnected: 489,
    blocksProcessed: 18847288,
    lastSeen: new Date().toISOString(),
    coordinates: { lat: 35.6762, lng: 139.6503 },
  },
  {
    id: "node-007",
    name: "SA-Brazil",
    region: "South America",
    country: "Brazil",
    status: "online",
    latency: 67,
    uptime: 99.89,
    peersConnected: 234,
    blocksProcessed: 18847287,
    lastSeen: new Date().toISOString(),
    coordinates: { lat: -23.5505, lng: -46.6333 },
  },
  {
    id: "node-008",
    name: "AF-South",
    region: "Africa",
    country: "South Africa",
    status: "online",
    latency: 89,
    uptime: 99.75,
    peersConnected: 156,
    blocksProcessed: 18847285,
    lastSeen: new Date().toISOString(),
    coordinates: { lat: -33.9249, lng: 18.4241 },
  },
]

export const networkHealth = {
  totalNodes: 12_847,
  onlineNodes: 12_798,
  syncingNodes: 42,
  offlineNodes: 7,
  averageLatency: 34,
  totalPeers: 284_736,
  networkHashRate: "847.3 TH/s",
  consensusHealth: 99.97,
}

export const regionDistribution = [
  { region: "North America", nodes: 4892, percentage: 38 },
  { region: "Europe", nodes: 3847, percentage: 30 },
  { region: "Asia Pacific", nodes: 2847, percentage: 22 },
  { region: "South America", nodes: 847, percentage: 7 },
  { region: "Africa", nodes: 414, percentage: 3 },
]
