"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { recentActivity } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import {
  ShieldCheck,
  FileText,
  Network,
  Lock,
  Users,
} from "lucide-react"

const activityIcons = {
  proof_generated: ShieldCheck,
  record_created: FileText,
  node_joined: Network,
  zk_proof: Lock,
  agent_registered: Users,
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

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentActivity.map((activity) => {
          const Icon = activityIcons[activity.type as keyof typeof activityIcons] || FileText
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3"
            >
              <div className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                "bg-primary/10"
              )}>
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-tight">{activity.description}</p>
                <p className="text-xs text-muted-foreground">
                  {formatTimeAgo(activity.timestamp)}
                </p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
