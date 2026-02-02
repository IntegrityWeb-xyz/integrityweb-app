// ApiResponse wrapper
export interface ApiResponse<T> {
    data: T
    error?: string
    status: number
    success: boolean
}

export interface IntegrityMetrics {
    proofsGenerated: number
    integrityScore: number
    networkHashRate: string
    activeNodes: number
    totalRecords: number
    verifiedCredentials: number
    uptimePercentage: number
    lastBlockTime: string
}

export interface ActivityItem {
    id: string
    type: "proof_generated" | "record_created" | "node_joined" | "zk_proof" | "agent_registered" | string
    description: string
    timestamp: string
    status: "completed" | "pending" | "failed"
}

export interface NetworkStats {
    daily: {
        time: string
        proofs: number
        records: number
    }[]
}

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
    coordinates: {
        lat: number
        lng: number
    }
}

export type RecordType = "transaction" | "credential" | "proof" | "identity" | "contract"

export interface LedgerRecord {
    id: string
    recordType: RecordType
    timestamp: string
    blockNumber: number
    transactionHash: string
    verificationStatus: "verified" | "pending"
    merkleRoot: string
    previousHash: string
    dataHash: string
    size: number
    creator: string
}

export type ProofType = "zkSNARK" | "zkSTARK" | "Groth16" | "PLONK"

export interface ValidityProof {
    id: string
    type: ProofType
    status: "verified" | "pending" | "generating"
    createdAt: string
    verifiedAt: string | null
    proofHash: string
    verifierAddress: string
    circuitId: string
    publicInputs: string[]
    gasUsed: number
}

export interface VerifiableCredential {
    id: string
    type: string
    issuer: string
    subject: string
    issuanceDate: string
    expirationDate: string
    status: "active" | "revoked" | "expired"
    claims: Record<string, string | number | boolean>
}
