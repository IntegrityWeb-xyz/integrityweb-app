// Integrity Metrics Dashboard Data
export const integrityMetrics = {
  proofsGenerated: 1_847_293,
  integrityScore: 99.97,
  networkHashRate: "847.3 TH/s",
  activeNodes: 12_847,
  totalRecords: 3_291_847,
  verifiedCredentials: 847_291,
  uptimePercentage: 99.99,
  lastBlockTime: "2.4s",
}

export const recentActivity = [
  {
    id: "act-001",
    type: "proof_generated",
    description: "Validity proof generated for credential VC-2847",
    timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    status: "completed",
  },
  {
    id: "act-002",
    type: "record_created",
    description: "New immutable record added to ledger",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    status: "completed",
  },
  {
    id: "act-003",
    type: "node_joined",
    description: "New node joined the network from EU-West",
    timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
    status: "completed",
  },
  {
    id: "act-004",
    type: "zk_proof",
    description: "Zero-knowledge proof verified",
    timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    status: "completed",
  },
  {
    id: "act-005",
    type: "agent_registered",
    description: "AI Agent registered with key AG-8847",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    status: "completed",
  },
]

export const networkStats = {
  daily: [
    { time: "00:00", proofs: 4200, records: 1800 },
    { time: "04:00", proofs: 3800, records: 1600 },
    { time: "08:00", proofs: 5200, records: 2400 },
    { time: "12:00", proofs: 6800, records: 3200 },
    { time: "16:00", proofs: 7200, records: 3600 },
    { time: "20:00", proofs: 5800, records: 2800 },
  ],
}
