"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { privacySettings, zkProofTemplates, zkShieldStats } from "@/lib/mock-data"
import {
  Lock,
  Shield,
  Eye,
  EyeOff,
  Users,
  Zap,
  FileKey,
  Loader2,
  CheckCircle,
  Sparkles,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

const visibilityConfig = {
  public: { label: "Public", icon: Eye, className: "bg-chart-4/10 text-chart-4 border-chart-4/30" },
  selective: { label: "Selective", icon: Users, className: "bg-chart-5/10 text-chart-5 border-chart-5/30" },
  private: { label: "Private", icon: EyeOff, className: "bg-chart-1/10 text-chart-1 border-chart-1/30" },
}

const complexityConfig = {
  low: { label: "Low", className: "bg-chart-4/10 text-chart-4 border-chart-4/30" },
  medium: { label: "Medium", className: "bg-chart-5/10 text-chart-5 border-chart-5/30" },
  high: { label: "High", className: "bg-chart-1/10 text-chart-1 border-chart-1/30" },
}

export default function PrivacyPage() {
  const [isGenerating, setIsGenerating] = useState<string | null>(null)
  const [settings, setSettings] = useState(privacySettings)

  const handleGenerateProof = (templateId: string) => {
    setIsGenerating(templateId)
    setTimeout(() => {
      setIsGenerating(null)
    }, 3000)
  }

  const handleVisibilityChange = (settingId: string, newVisibility: "public" | "selective" | "private") => {
    setSettings(settings.map(s =>
      s.id === settingId ? { ...s, currentVisibility: newVisibility } : s
    ))
  }

  const groupedSettings = settings.reduce((acc, setting) => {
    if (!acc[setting.category]) {
      acc[setting.category] = []
    }
    acc[setting.category].push(setting)
    return acc
  }, {} as Record<string, typeof settings>)

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">Zero-Knowledge Shield Settings</h1>
          <p className="mt-2 text-muted-foreground">
            Protect your data with zero-knowledge proofs. Privacy is Sovereignty.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{zkShieldStats.proofsGenerated.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Proofs Generated</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-1/10">
                  <Lock className="h-5 w-5 text-chart-1" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{zkShieldStats.dataFieldsProtected}</p>
                  <p className="text-xs text-muted-foreground">Fields Protected</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10">
                  <Users className="h-5 w-5 text-chart-2" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{zkShieldStats.selectiveDisclosures.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Selective Disclosures</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
                  <Zap className="h-5 w-5 text-chart-4" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{zkShieldStats.averageProofTime}</p>
                  <p className="text-xs text-muted-foreground">Avg Proof Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
                  <Sparkles className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{zkShieldStats.privacyScore}</p>
                  <p className="text-xs text-muted-foreground">Privacy Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="settings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="settings">Privacy Settings</TabsTrigger>
            <TabsTrigger value="templates">Proof Templates</TabsTrigger>
            <TabsTrigger value="generate">Generate Proof</TabsTrigger>
          </TabsList>

          {/* Privacy Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            {Object.entries(groupedSettings).map(([category, categorySettings]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{category}</CardTitle>
                  <CardDescription>Manage visibility and privacy for {category.toLowerCase()} data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categorySettings.map((setting) => {
                    const VisibilityIcon = visibilityConfig[setting.currentVisibility].icon
                    return (
                      <div
                        key={setting.id}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-border bg-muted/30"
                      >
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                            visibilityConfig[setting.currentVisibility].className.split(" ")[0]
                          )}>
                            <VisibilityIcon className={cn("h-5 w-5", visibilityConfig[setting.currentVisibility].className.split(" ")[1])} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{setting.field}</p>
                              {setting.zkProofAvailable && (
                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                                  <FileKey className="mr-1 h-3 w-3" />
                                  ZK Ready
                                </Badge>
                              )}
                            </div>
                            {setting.allowedViewers.length > 0 && (
                              <p className="text-sm text-muted-foreground mt-1">
                                Visible to: {setting.allowedViewers.join(", ")}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Select
                            value={setting.currentVisibility}
                            onValueChange={(value: "public" | "selective" | "private") =>
                              handleVisibilityChange(setting.id, value)
                            }
                          >
                            <SelectTrigger className="w-36">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="selective">Selective</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                            </SelectContent>
                          </Select>
                          {setting.zkProofAvailable && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Settings className="mr-2 h-4 w-4" />
                                  Configure
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Configure ZK Proof for {setting.field}</DialogTitle>
                                  <DialogDescription>
                                    Set up zero-knowledge proof parameters for selective disclosure.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <p className="text-sm font-medium">Allowed Viewers</p>
                                    <div className="flex flex-wrap gap-2">
                                      {["verified_partners", "compliance_agents", "auditors", "financial_institutions"].map((viewer) => (
                                        <Badge
                                          key={viewer}
                                          variant="outline"
                                          className={cn(
                                            "cursor-pointer transition-colors",
                                            setting.allowedViewers.includes(viewer) ? "bg-primary/10 text-primary border-primary/30" : "hover:bg-muted"
                                          )}
                                        >
                                          {viewer}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-medium">Require ZK Proof</p>
                                      <p className="text-xs text-muted-foreground">Verifiers must use ZK proof to access</p>
                                    </div>
                                    <Switch defaultChecked />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button>Save Configuration</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Proof Templates Tab */}
          <TabsContent value="templates">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {zkProofTemplates.map((template) => (
                <Card key={template.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <FileKey className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-semibold">{template.name}</CardTitle>
                          <Badge variant="outline" className={complexityConfig[template.circuitComplexity].className}>
                            {complexityConfig[template.circuitComplexity].label} Complexity
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{template.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Input Fields</p>
                      <div className="flex flex-wrap gap-1">
                        {template.inputFields.map((field) => (
                          <Badge key={field} variant="secondary" className="text-xs">
                            {field}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Output Claim</p>
                      <Badge variant="outline" className="bg-chart-4/10 text-chart-4 border-chart-4/30">
                        {template.outputClaim}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">Est. Gas</p>
                        <p className="font-mono text-sm">{template.estimatedGas.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Usage Count</p>
                        <p className="font-mono text-sm">{template.usageCount.toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Generate Proof Tab */}
          <TabsContent value="generate">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Generate Zero-Knowledge Proof</CardTitle>
                <CardDescription>
                  Create a new ZK proof to selectively disclose information while maintaining privacy.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {zkProofTemplates.slice(0, 4).map((template) => (
                    <div
                      key={template.id}
                      className="flex flex-col p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <FileKey className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{template.name}</h3>
                            <p className="text-sm text-muted-foreground">{template.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1" />

                      <Button
                        className="w-full mt-4"
                        onClick={() => handleGenerateProof(template.id)}
                        disabled={isGenerating !== null}
                      >
                        {isGenerating === template.id ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating Proof...
                          </>
                        ) : isGenerating !== null ? (
                          "Please wait..."
                        ) : (
                          <>
                            <Zap className="mr-2 h-4 w-4" />
                            Generate Proof
                          </>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Simulated Proof Generation Result */}
                <Card className="bg-muted/30 border-dashed">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
                        <CheckCircle className="h-5 w-5 text-chart-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Sample Generated Proof</h4>
                        <p className="text-sm text-muted-foreground">Age Verification - over_18</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Proof Hash</p>
                        <code className="block rounded bg-background p-2 font-mono text-xs">
                          0x7a8f9b2c4d6e8f0a1b3c5d7e9f0a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a
                        </code>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Verified Claim</p>
                        <Badge className="bg-chart-4/10 text-chart-4 border-chart-4/30">
                          age_meets_requirement: true
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Gas Used: 148,293</span>
                        <span className="text-muted-foreground">Generated: 2.3s ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
