
import { MetricCard } from "@/components/dashboard/metric-card"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { NetworkChart } from "@/components/dashboard/network-chart"
import { AxiomsCard } from "@/components/dashboard/axioms-card"
import { integrityMetrics } from "@/lib/mock-data"
import {
  ShieldCheck,
  Gauge,
  Zap,
  Network,
  FileText,
  Award,
  Clock,
  Activity,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-transparent">


      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance">Integrity Metrics Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Real-time monitoring of the IntegrityWeb network. Code is Math, Math is Reality.
          </p>
        </div>

        {/* Primary Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard
            title="Proofs Generated"
            value={integrityMetrics.proofsGenerated.toLocaleString()}
            icon={ShieldCheck}
            trend={{ value: 12.5, isPositive: true }}
          />
          <MetricCard
            title="Integrity Score"
            value={`${integrityMetrics.integrityScore}%`}
            icon={Gauge}
            subtitle="Network-wide verification rate"
          />
          <MetricCard
            title="Network Hash Rate"
            value={integrityMetrics.networkHashRate}
            icon={Zap}
            trend={{ value: 8.2, isPositive: true }}
          />
          <MetricCard
            title="Active Nodes"
            value={integrityMetrics.activeNodes.toLocaleString()}
            icon={Network}
            trend={{ value: 3.1, isPositive: true }}
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <MetricCard
            title="Total Records"
            value={integrityMetrics.totalRecords.toLocaleString()}
            icon={FileText}
          />
          <MetricCard
            title="Verified Credentials"
            value={integrityMetrics.verifiedCredentials.toLocaleString()}
            icon={Award}
          />
          <MetricCard
            title="Network Uptime"
            value={`${integrityMetrics.uptimePercentage}%`}
            icon={Activity}
          />
          <MetricCard
            title="Avg Block Time"
            value={integrityMetrics.lastBlockTime}
            icon={Clock}
          />
        </div>

        {/* Charts and Activity */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2">
            <NetworkChart />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>

        {/* Axioms */}
        <AxiomsCard />
      </main>
    </div>
  )
}
