
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Terminal, CheckCircle2, Copy } from "lucide-react"
import { getPrimitiveBySlug } from "@/lib/primitives/data"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function PrimitivePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const primitive = await getPrimitiveBySlug(slug);

    if (!primitive) {
        notFound();
    }

    return (
        <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-400">


            {/* Ambient Blueprint Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Ambient Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] opacity-20" />
            </div>

            <main className="container mx-auto px-4 pt-32 pb-48 relative z-10 max-w-5xl">

                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-4">
                    <Link href="/primitives" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono tracking-wide">PRIMITIVES_LIBRARY</span>
                    </Link>
                </div>

                {/* Hero Specification Card */}
                <div className="bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden mb-12">
                    {/* Technical Header Strip */}
                    <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-transparent opacity-50" />

                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-2 py-1 rounded text-xs font-mono uppercase tracking-wider
                                        ${primitive.status === 'STABLE' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                            'bg-purple-500/10 text-purple-400 border border-purple-500/20'}
                                    `}>
                                        {primitive.status}
                                    </span>
                                    <span className="font-mono text-muted-foreground text-sm">v{primitive.version}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{primitive.name}</h1>
                                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{primitive.description}</p>
                            </div>

                            {/* Stats Box */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 min-w-[200px] space-y-4">
                                <div>
                                    <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Weekly Downloads</div>
                                    <div className="text-xl font-mono text-white font-bold">{primitive.stats.downloads}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Github Stars</div>
                                    <div className="text-xl font-mono text-white font-bold">{primitive.stats.stars}</div>
                                </div>
                            </div>
                        </div>

                        {/* Installation Command */}
                        <div className="bg-black/50 border border-white/10 rounded-md p-4 flex items-center justify-between font-mono text-sm group cursor-pointer hover:border-purple-500/30 transition-colors">
                            <div className="flex items-center gap-3 text-purple-400">
                                <Terminal className="w-4 h-4" />
                                <span className="text-white/80">$ {primitive.installCommand}</span>
                            </div>
                            <Copy className="w-4 h-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Features */}
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-purple-500 rounded-full" />
                                Technical Capabilities
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {primitive.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                                        <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Integration Example Placeholder */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                                Integration Interface
                            </h2>
                            <div className="bg-black/50 border border-white/10 rounded-lg p-6 font-mono text-sm text-muted-foreground overflow-x-auto">
                                <pre>{`import { IntegrityClient } from '${primitive.installCommand.split(' ')[2]}';

// Initialize the primitive
const client = new IntegrityClient({
    network: 'mainnet',
    version: '${primitive.version}'
});

await client.connect();`}</pre>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Links */}
                    <div className="space-y-6">
                        <div className="rounded-xl border border-white/10 bg-zinc-950/20 backdrop-blur-md p-6">
                            <h3 className="text-sm font-bold text-white mb-4">Resources</h3>
                            <div className="space-y-3">
                                <Link href={primitive.docsUrl || '#'} className="block">
                                    <Button variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 hover:text-purple-400 group">
                                        Documentation
                                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                                    </Button>
                                </Link>
                                <Link href={primitive.repoUrl || '#'} className="block">
                                    <Button variant="outline" className="w-full justify-between border-white/10 hover:bg-white/5 hover:text-white group">
                                        Repository
                                        <Github className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
