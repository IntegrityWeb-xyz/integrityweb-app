"use client"

import { useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { agentIdentities, identityStats } from "@/lib/mock-data"
import type { IdentityType } from "@/lib/mock-data/agents"
import {
  Users,
  Bot,
  Building2,
  Cpu,
  Search,
  Plus,
  Eye,
  Shield,
  Key,
  Activity,
  Award,
  Copy,
} from "lucide-react"
import { cn } from "@/lib/utils"

const identityTypeConfig: Record<IdentityType, { label: string; icon: typeof Users; className: string }> = {
  human: { label: "Human Wallet", icon: Users, className: "bg-chart-1/10 text-chart-1 border-chart-1/30" },
  ai_agent: { label: "AI Agent", icon: Bot, className: "bg-chart-2/10 text-chart-2 border-chart-2/30" },
  organization: { label: "Organization", icon: Building2, className: "bg-chart-3/10 text-chart-3 border-chart-3/30" },
  device: { label: "Device", icon: Cpu, className: "bg-chart-4/10 text-chart-4 border-chart-4/30" },
}

const statusConfig = {
  active: { label: "Active", className: "bg-chart-4/10 text-chart-4 border-chart-4/30" },
  suspended: { label: "Suspended", className: "bg-destructive/10 text-destructive border-destructive/30" },
  pending: { label: "Pending", className: "bg-chart-5/10 text-chart-5 border-chart-5/30" },
}

function formatTimeAgo(timestamp: string): string {
  const now = new Date()
  const date = new Date(timestamp)
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

  if (diffInMinutes < 1) return "Just now"
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
  return `${Math.floor(diffInMinutes / 1440)}d ago`
}

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [selectedAgent, setSelectedAgent] = useState<typeof agentIdentities[0] | null>(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const filteredAgents = agentIdentities.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.did.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || agent.type === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-transparent">


      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">Agent Identity Management</h1>
            <p className="mt-2 text-muted-foreground">
              Equal rights for Humans, AI Agents, and future intelligences. Universality of Intelligences.
            </p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Identity
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Identity</DialogTitle>
                <DialogDescription>
                  Register a new identity on the Integrity Web network.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="identity-name">Identity Name</Label>
                  <Input id="identity-name" placeholder="Enter identity name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="identity-type">Identity Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="human">Human Wallet</SelectItem>
                      <SelectItem value="ai_agent">AI Agent</SelectItem>
                      <SelectItem value="organization">Organization</SelectItem>
                      <SelectItem value="device">Device</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Capabilities</Label>
                  <div className="flex flex-wrap gap-2">
                    {["sign", "verify", "delegate", "analyze", "report"].map((cap) => (
                      <Badge key={cap} variant="outline" className="cursor-pointer hover:bg-primary/10">
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>
                  Create Identity
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{identityStats.totalIdentities.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Total Identities</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-1/10">
                  <Users className="h-5 w-5 text-chart-1" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{identityStats.humanWallets.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Human Wallets</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10">
                  <Bot className="h-5 w-5 text-chart-2" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{identityStats.aiAgents.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">AI Agents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
                  <Building2 className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{identityStats.organizations.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Organizations</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
                  <Award className="h-5 w-5 text-chart-4" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{identityStats.averageTrustScore}</p>
                  <p className="text-xs text-muted-foreground">Avg Trust Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name or DID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Tabs value={typeFilter} onValueChange={setTypeFilter} className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="human">Human</TabsTrigger>
                  <TabsTrigger value="ai_agent">AI</TabsTrigger>
                  <TabsTrigger value="organization">Org</TabsTrigger>
                  <TabsTrigger value="device">Device</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Identity Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredAgents.map((agent) => {
            const TypeIcon = identityTypeConfig[agent.type].icon
            return (
              <Card key={agent.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl",
                          identityTypeConfig[agent.type].className.split(" ")[0]
                        )}>
                          <TypeIcon className={cn("h-6 w-6", identityTypeConfig[agent.type].className.split(" ")[1])} />
                        </div>
                        <div>
                          <p className="font-semibold">{agent.name}</p>
                          <Badge variant="outline" className={identityTypeConfig[agent.type].className}>
                            {identityTypeConfig[agent.type].label}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="outline" className={statusConfig[agent.status].className}>
                        {statusConfig[agent.status].label}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">DID</p>
                        <div className="flex items-center gap-2">
                          <code className="font-mono text-xs truncate flex-1">{agent.did}</code>
                          <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground">Trust Score</p>
                          <div className="flex items-center gap-2">
                            <Progress value={agent.trustScore} className="h-2 w-20" />
                            <span className="text-sm font-medium">{agent.trustScore}</span>
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="text-xs text-muted-foreground">Last Active</p>
                          <p className="text-sm">{formatTimeAgo(agent.lastActive)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {agent.capabilities.map((cap) => (
                        <Badge key={cap} variant="secondary" className="text-xs">
                          {cap}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center pt-4 border-t border-border">
                      <div>
                        <p className="text-lg font-bold">{agent.verifiedCredentials}</p>
                        <p className="text-xs text-muted-foreground">Credentials</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold">{agent.transactionsCount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Transactions</p>
                      </div>
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="w-full" onClick={() => setSelectedAgent(agent)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{agent.name}</DialogTitle>
                              <DialogDescription>{agent.did}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                  <p className="text-sm text-muted-foreground">Identity Type</p>
                                  <Badge variant="outline" className={identityTypeConfig[agent.type].className}>
                                    {identityTypeConfig[agent.type].label}
                                  </Badge>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm text-muted-foreground">Status</p>
                                  <Badge variant="outline" className={statusConfig[agent.status].className}>
                                    {statusConfig[agent.status].label}
                                  </Badge>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm text-muted-foreground">Trust Score</p>
                                  <p className="font-medium">{agent.trustScore}/100</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm text-muted-foreground">Created</p>
                                  <p className="font-medium">{new Date(agent.createdAt).toLocaleDateString()}</p>
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Public Key</p>
                                <code className="block rounded bg-muted p-2 font-mono text-xs">
                                  {agent.publicKey}
                                </code>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Metadata</p>
                                <pre className="rounded bg-muted p-2 font-mono text-xs overflow-auto">
                                  {JSON.stringify(agent.metadata, null, 2)}
                                </pre>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
