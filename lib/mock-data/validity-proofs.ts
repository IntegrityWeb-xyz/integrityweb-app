// Validity Proofs Explorer Data
export interface ValidityProof {
  id: string
  type: "zkSNARK" | "zkSTARK" | "Groth16" | "PLONK"
  status: "verified" | "pending" | "generating"
  createdAt: string
  verifiedAt: string | null
  proofHash: string
  verifierAddress: string
  circuitId: string
  publicInputs: string[]
  gasUsed: number
}

export const validityProofs: ValidityProof[] = [
  {
    id: "VP-001",
    type: "zkSNARK",
    status: "verified",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    verifiedAt: new Date(Date.now() - 1000 * 60 * 28).toISOString(),
    proofHash: "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b",
    verifierAddress: "0x1234...5678",
    circuitId: "circuit-age-verification",
    publicInputs: ["over_18", "jurisdiction_us"],
    gasUsed: 284736,
  },
  {
    id: "VP-002",
    type: "Groth16",
    status: "verified",
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    verifiedAt: new Date(Date.now() - 1000 * 60 * 43).toISOString(),
    proofHash: "0x8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c",
    verifierAddress: "0x2345...6789",
    circuitId: "circuit-balance-check",
    publicInputs: ["balance_sufficient", "account_active"],
    gasUsed: 312847,
  },
  {
    id: "VP-003",
    type: "PLONK",
    status: "pending",
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    verifiedAt: null,
    proofHash: "0x9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d",
    verifierAddress: "0x3456...7890",
    circuitId: "circuit-identity-proof",
    publicInputs: ["identity_valid"],
    gasUsed: 0,
  },
  {
    id: "VP-004",
    type: "zkSTARK",
    status: "verified",
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    verifiedAt: new Date(Date.now() - 1000 * 60 * 118).toISOString(),
    proofHash: "0x0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e",
    verifierAddress: "0x4567...8901",
    circuitId: "circuit-compliance-check",
    publicInputs: ["kyc_passed", "aml_cleared"],
    gasUsed: 428193,
  },
  {
    id: "VP-005",
    type: "zkSNARK",
    status: "generating",
    createdAt: new Date(Date.now() - 1000 * 60 * 1).toISOString(),
    verifiedAt: null,
    proofHash: "",
    verifierAddress: "0x5678...9012",
    circuitId: "circuit-credential-verify",
    publicInputs: [],
    gasUsed: 0,
  },
]

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

export const verifiableCredentials: VerifiableCredential[] = [
  {
    id: "VC-2847",
    type: "IdentityCredential",
    issuer: "did:integrity:issuer-001",
    subject: "did:integrity:user-alice",
    issuanceDate: "2024-01-15T10:30:00Z",
    expirationDate: "2025-01-15T10:30:00Z",
    status: "active",
    claims: {
      name: "Alice Johnson",
      verified: true,
      level: "premium",
    },
  },
  {
    id: "VC-2848",
    type: "ComplianceCredential",
    issuer: "did:integrity:issuer-002",
    subject: "did:integrity:org-acme",
    issuanceDate: "2024-02-20T14:00:00Z",
    expirationDate: "2025-02-20T14:00:00Z",
    status: "active",
    claims: {
      kycCompleted: true,
      amlCleared: true,
      jurisdiction: "US",
    },
  },
  {
    id: "VC-2849",
    type: "AgentCredential",
    issuer: "did:integrity:issuer-001",
    subject: "did:integrity:agent-x47",
    issuanceDate: "2024-03-10T09:00:00Z",
    expirationDate: "2024-09-10T09:00:00Z",
    status: "expired",
    claims: {
      agentType: "AI",
      capabilities: "analysis",
      trustScore: 98,
    },
  },
]
