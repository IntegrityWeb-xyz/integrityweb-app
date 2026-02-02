// Record Ledger Interface Data
export interface LedgerRecord {
  id: string
  recordType: "transaction" | "credential" | "proof" | "identity" | "contract"
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

export const ledgerRecords: LedgerRecord[] = [
  {
    id: "REC-00001",
    recordType: "transaction",
    timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    blockNumber: 18847291,
    transactionHash: "0xabc123def456789...",
    verificationStatus: "verified",
    merkleRoot: "0x1a2b3c4d5e6f7890...",
    previousHash: "0x9876543210fedcba...",
    dataHash: "0xfedcba0987654321...",
    size: 256,
    creator: "0x1234...5678",
  },
  {
    id: "REC-00002",
    recordType: "credential",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    blockNumber: 18847290,
    transactionHash: "0xdef456789abc123...",
    verificationStatus: "verified",
    merkleRoot: "0x2b3c4d5e6f7890ab...",
    previousHash: "0x1a2b3c4d5e6f7890...",
    dataHash: "0x0987654321fedcba...",
    size: 512,
    creator: "0x2345...6789",
  },
  {
    id: "REC-00003",
    recordType: "proof",
    timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
    blockNumber: 18847289,
    transactionHash: "0x789abc123def456...",
    verificationStatus: "verified",
    merkleRoot: "0x3c4d5e6f7890ab12...",
    previousHash: "0x2b3c4d5e6f7890ab...",
    dataHash: "0x654321fedcba0987...",
    size: 1024,
    creator: "0x3456...7890",
  },
  {
    id: "REC-00004",
    recordType: "identity",
    timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    blockNumber: 18847288,
    transactionHash: "0x123def456789abc...",
    verificationStatus: "verified",
    merkleRoot: "0x4d5e6f7890ab1234...",
    previousHash: "0x3c4d5e6f7890ab12...",
    dataHash: "0x321fedcba0987654...",
    size: 384,
    creator: "0x4567...8901",
  },
  {
    id: "REC-00005",
    recordType: "contract",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    blockNumber: 18847287,
    transactionHash: "0x456789abc123def...",
    verificationStatus: "verified",
    merkleRoot: "0x5e6f7890ab123456...",
    previousHash: "0x4d5e6f7890ab1234...",
    dataHash: "0x1fedcba098765432...",
    size: 2048,
    creator: "0x5678...9012",
  },
  {
    id: "REC-00006",
    recordType: "transaction",
    timestamp: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
    blockNumber: 18847286,
    transactionHash: "0x789abc456def123...",
    verificationStatus: "verified",
    merkleRoot: "0x6f7890ab12345678...",
    previousHash: "0x5e6f7890ab123456...",
    dataHash: "0xedcba09876543210...",
    size: 128,
    creator: "0x6789...0123",
  },
]

export const ledgerStats = {
  totalRecords: 3_291_847,
  recordsToday: 12_847,
  averageBlockTime: 2.4,
  chainLength: 18_847_291,
}
