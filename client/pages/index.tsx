import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ScaleIcon, BookOpenIcon, UsersIcon, RefreshCcwIcon, PlayCircleIcon, DownloadIcon, ActivityIcon } from 'lucide-react'
// import SymbolicHero from '../components/SymbolicHero'
import QuickActionsPanel from '../components/QuickActionsPanel'
import AgentSignalPanel from '../components/agents/AgentSignalPanel'

export default function Home() {
  // Type definitions for fetched data
  type FeaturedCase = { id: string; summary: string } | null;
  type AgentStatus = { activeAgents: string[]; griefLoops: number } | null;
  type User = { role?: string; name?: string } | null;

  const [featuredCase, setFeaturedCase] = useState<FeaturedCase>(null);
  const [agentStatus, setAgentStatus] = useState<AgentStatus>(null);
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    fetch('/api/cases?featured=true')
      .then(res => res.json())
      .then(data => setFeaturedCase(data && data.length ? data[0] : null));

    fetch('/api/agents/status')
      .then(res => res.json())
      .then(data => setAgentStatus(data || null));

    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data || null));
  }, []);

  return (
    <main className="p-6 space-y-10 max-w-7xl mx-auto">
      <div className="min-h-screen bg-background text-foreground p-8">
        <h1 className="text-4xl font-bold mb-4">🌱 Veritas Portal</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A justice system rooted in restoration, grief, and meaningful thought.
        </p>

        {user && (
          <div className="mb-4 text-primary text-lg font-semibold">
            Welcome, {user.role ? user.role : 'Guest'}{user.name ? ` – ${user.name}` : ''}
          </div>
        )}

        {featuredCase ? (
          <div className="mb-8 p-4 bg-muted rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">🔍 Featured Case</h2>
            <p className="text-sm text-muted-foreground">{featuredCase.summary}</p>
            <Link href={`/cases/${featuredCase.id}`} className="text-primary underline">Read More</Link>
          </div>
        ) : (
          <div className="mb-8 p-4 bg-muted rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">🔍 Featured Case</h2>
            <p className="text-sm text-muted-foreground">No featured case available.</p>
          </div>
        )}

        {agentStatus ? (
          <div className="mb-8 p-4 bg-muted rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📡 Agent Status</h2>
            <p className="text-sm text-muted-foreground">
              Active: {agentStatus.activeAgents.join(', ')}<br />
              Grief Loops Detected: {agentStatus.griefLoops}
            </p>
          </div>
        ) : (
          <div className="mb-8 p-4 bg-muted rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📡 Agent Status</h2>
            <p className="text-sm text-muted-foreground">No agent status available.</p>
          </div>
        )}

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            { href: '/tribunal', icon: ScaleIcon, label: 'Tribunal Room', role: 'all' },
            { href: '/agents', icon: UsersIcon, label: 'Agent Council', role: 'all' },
            { href: '/books', icon: BookOpenIcon, label: 'Sacred Books', role: 'all' },
            { href: '/simulations', icon: PlayCircleIcon, label: 'Edge Case Simulations', role: 'all' },
            { href: '/rituals', icon: RefreshCcwIcon, label: 'Ritual Scheduler', role: 'all' },
            { href: '/export', icon: DownloadIcon, label: 'Export Console', role: 'all' },
            // Admin/Justice Officer tools
            { href: '/builder', icon: ActivityIcon, label: 'Case Builder Toolkit', role: 'admin' },
            { href: '/audit/symbolic', icon: ActivityIcon, label: 'Symbolic Audit Dashboard', role: 'admin' },
          ].filter(card => !user || card.role === 'all' || (user.role && user.role === 'admin')).map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href} aria-label={label} role="button">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="flex items-center gap-4 p-6">
                  <Icon className="h-8 w-8 text-primary" />
                  <div>
                    <h2 className="text-xl font-semibold">{label}</h2>
                    <p className="text-sm text-muted-foreground">Visit {label}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/feedback">
            <Button variant="outline" className="w-full md:w-auto">Give Feedback</Button>
          </Link>
        </div>
      </div>
      {/* <SymbolicHero /> */}
      <QuickActionsPanel />
      <AgentSignalPanel />
    </main>
  )
}