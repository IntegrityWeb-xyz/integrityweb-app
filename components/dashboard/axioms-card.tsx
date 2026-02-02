import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const axioms = [
  { number: 1, title: "Code is Math, Math is Reality", status: "active" },
  { number: 2, title: "Proof Replaces Trust", status: "active" },
  { number: 3, title: "Freedom is a Protocol", status: "active" },
  { number: 4, title: "Integrity by Design", status: "active" },
  { number: 6, title: "Privacy is Sovereignty", status: "active" },
  { number: 7, title: "Decentralization is Resilience", status: "active" },
  { number: 8, title: "Universality of Intelligences", status: "active" },
]

export function AxiomsCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Axioms of the Integrity Web</CardTitle>
        <p className="text-sm text-muted-foreground">Core principles governing the network</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {axioms.map((axiom) => (
          <div
            key={axiom.number}
            className="flex items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                {axiom.number}
              </span>
              <span className="text-sm font-medium">{axiom.title}</span>
            </div>
            <Badge variant="outline" className="bg-chart-4/10 text-chart-4 border-chart-4/30">
              Active
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
