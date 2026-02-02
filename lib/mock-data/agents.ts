// Agent Identity Management Data
export type IdentityType = "human" | "ai_agent" | "organization" | "device"

export interface AgentIdentity {
  id: string
  did: string
  type: IdentityType
  name: string
  publicKey: string
  createdAt: string
  lastActive: string
  status: "active" | "suspended" | "pending"
  trustScore: number
  verifiedCredentials: number
  transactionsCount: number
  capabilities: string[]
  metadata: Record<string, string | number | boolean>
}

export const agentIdentities: AgentIdentity[] = [
  {
    id: "agent-001",
    did: "did:integrity:human-alice-001",
    type: "human",
    name: "Alice Johnson",
    publicKey: "0x04a1b2c3d4e5f6789...",
    createdAt: "2024-01-15T10:30:00Z",
    lastActive: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    status: "active",
    trustScore: 98,
    verifiedCredentials: 12,
    transactionsCount: 847,
    capabilities: ["sign", "verify", "delegate"],
    metadata: {
      kycVerified: true,
      jurisdiction: "US",
      tier: "premium",
    },
  },
  {
    id: "agent-002",
    did: "did:integrity:ai-agent-x47",
    type: "ai_agent",
    name: "Agent X-47",
    publicKey: "0x04b2c3d4e5f6789a0...",
    createdAt: "2024-02-20T14:00:00Z",
    lastActive: new Date(Date.now() - 1000 * 60 * 1).toISOString(),
    status: "active",
    trustScore: 95,
    verifiedCredentials: 8,
    transactionsCount: 12847,
    capabilities: ["analyze", "verify", "report", "automate"],
    metadata: {
      modelVersion: "v4.2",
      purpose: "compliance_monitoring",
      maxTransactionsPerDay: 10000,
    },
  },
  {
    id: "agent-003",
    did: "did:integrity:org-acme-corp",
    type: "organization",
    name: "Acme Corporation",
    publicKey: "0x04c3d4e5f6789a0b1...",
    createdAt: "2024-01-10T09:00:00Z",
    lastActive: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    status: "active",
    trustScore: 99,
    verifiedCredentials: 24,
    transactionsCount: 48291,
    capabilities: ["sign", "verify", "delegate", "issue_credentials"],
    metadata: {
      industry: "technology",
      employees: 5000,
      verified: true,
    },
  },
  {
    id: "agent-004",
    did: "did:integrity:ai-agent-sentinel",
    type: "ai_agent",
    name: "Sentinel Bot",
    publicKey: "0x04d4e5f6789a0b1c2...",
    createdAt: "2024-03-01T12:00:00Z",
    lastActive: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    status: "active",
    trustScore: 92,
    verifiedCredentials: 5,
    transactionsCount: 8472,
    capabilities: ["monitor", "alert", "verify"],
    metadata: {
      modelVersion: "v3.8",
      purpose: "security_monitoring",
      alertThreshold: 0.85,
    },
  },
  {
    id: "agent-005",
    did: "did:integrity:device-iot-001",
    type: "device",
    name: "IoT Sensor Array #001",
    publicKey: "0x04e5f6789a0b1c2d3...",
    createdAt: "2024-02-15T08:00:00Z",
    lastActive: new Date(Date.now() - 1000 * 10).toISOString(),
    status: "active",
    trustScore: 88,
    verifiedCredentials: 3,
    transactionsCount: 284736,
    capabilities: ["report", "sign"],
    metadata: {
      deviceType: "environmental_sensor",
      location: "warehouse_a",
      dataFrequency: "1min",
    },
  },
]

export const identityStats = {
  totalIdentities: 847_291,
  humanWallets: 512_847,
  aiAgents: 284_736,
  organizations: 42_891,
  devices: 6_817,
  averageTrustScore: 94.2,
}
