// Zero-Knowledge Shield Settings Data
export interface PrivacySetting {
  id: string
  category: string
  field: string
  currentVisibility: "public" | "selective" | "private"
  allowedViewers: string[]
  zkProofAvailable: boolean
  lastModified: string
}

export const privacySettings: PrivacySetting[] = [
  {
    id: "ps-001",
    category: "Identity",
    field: "Full Name",
    currentVisibility: "selective",
    allowedViewers: ["verified_partners", "compliance_agents"],
    zkProofAvailable: true,
    lastModified: "2024-03-01T10:00:00Z",
  },
  {
    id: "ps-002",
    category: "Identity",
    field: "Date of Birth",
    currentVisibility: "private",
    allowedViewers: [],
    zkProofAvailable: true,
    lastModified: "2024-02-15T14:30:00Z",
  },
  {
    id: "ps-003",
    category: "Financial",
    field: "Account Balance",
    currentVisibility: "private",
    allowedViewers: [],
    zkProofAvailable: true,
    lastModified: "2024-03-10T09:00:00Z",
  },
  {
    id: "ps-004",
    category: "Financial",
    field: "Transaction History",
    currentVisibility: "selective",
    allowedViewers: ["auditors"],
    zkProofAvailable: true,
    lastModified: "2024-03-05T16:00:00Z",
  },
  {
    id: "ps-005",
    category: "Credentials",
    field: "Professional Certifications",
    currentVisibility: "public",
    allowedViewers: ["*"],
    zkProofAvailable: false,
    lastModified: "2024-01-20T11:00:00Z",
  },
  {
    id: "ps-006",
    category: "Credentials",
    field: "KYC Status",
    currentVisibility: "selective",
    allowedViewers: ["financial_institutions"],
    zkProofAvailable: true,
    lastModified: "2024-03-08T13:00:00Z",
  },
  {
    id: "ps-007",
    category: "Location",
    field: "Country of Residence",
    currentVisibility: "selective",
    allowedViewers: ["compliance_agents"],
    zkProofAvailable: true,
    lastModified: "2024-02-28T10:00:00Z",
  },
  {
    id: "ps-008",
    category: "Location",
    field: "Precise Location",
    currentVisibility: "private",
    allowedViewers: [],
    zkProofAvailable: false,
    lastModified: "2024-03-01T10:00:00Z",
  },
]

export interface ZKProofTemplate {
  id: string
  name: string
  description: string
  inputFields: string[]
  outputClaim: string
  circuitComplexity: "low" | "medium" | "high"
  estimatedGas: number
  usageCount: number
}

export const zkProofTemplates: ZKProofTemplate[] = [
  {
    id: "zkt-001",
    name: "Age Verification",
    description: "Prove you are over a certain age without revealing your exact date of birth",
    inputFields: ["date_of_birth", "minimum_age"],
    outputClaim: "age_meets_requirement",
    circuitComplexity: "low",
    estimatedGas: 150000,
    usageCount: 284736,
  },
  {
    id: "zkt-002",
    name: "Balance Threshold",
    description: "Prove your balance exceeds a threshold without revealing the exact amount",
    inputFields: ["account_balance", "minimum_threshold"],
    outputClaim: "balance_sufficient",
    circuitComplexity: "medium",
    estimatedGas: 250000,
    usageCount: 127483,
  },
  {
    id: "zkt-003",
    name: "Credential Ownership",
    description: "Prove you hold a specific credential without revealing its contents",
    inputFields: ["credential_hash", "issuer_signature"],
    outputClaim: "credential_valid",
    circuitComplexity: "medium",
    estimatedGas: 280000,
    usageCount: 98472,
  },
  {
    id: "zkt-004",
    name: "Geographic Compliance",
    description: "Prove you are in a compliant jurisdiction without revealing exact location",
    inputFields: ["country_code", "allowed_jurisdictions"],
    outputClaim: "jurisdiction_compliant",
    circuitComplexity: "low",
    estimatedGas: 120000,
    usageCount: 67291,
  },
  {
    id: "zkt-005",
    name: "Identity Membership",
    description: "Prove membership in a group without revealing which specific identity",
    inputFields: ["identity_commitment", "merkle_proof", "group_root"],
    outputClaim: "is_group_member",
    circuitComplexity: "high",
    estimatedGas: 450000,
    usageCount: 42847,
  },
]

export const zkShieldStats = {
  proofsGenerated: 847_291,
  dataFieldsProtected: 24,
  selectiveDisclosures: 12_847,
  averageProofTime: "1.2s",
  privacyScore: 94,
}
