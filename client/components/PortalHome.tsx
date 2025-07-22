// components/PortalHome.tsx
import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const portalItems = [
  { icon: '📜', title: 'Submit Case', path: '/submit', desc: 'Start a new reflective case' },
  { icon: '🏛️', title: 'Tribunal Room', path: '/tribunal', desc: 'Enter symbolic narrative justice' },
  { icon: '📊', title: 'System Dashboard', path: '/dashboard', desc: 'View harmony, grief, agent status' },
  { icon: '📚', title: 'Sacred Books', path: '/books', desc: 'Explore canonical doctrine volumes' },
  { icon: '👥', title: 'Agent Council', path: '/agents', desc: 'See agent roles and status' },
  { icon: '🔥', title: 'Ritual Scheduler', path: '/rituals', desc: 'Plan symbolic rites & sealing' },
  { icon: '📤', title: 'Export Console', path: '/export', desc: 'Download logs, grief maps, rituals' },
]

export default function PortalHome() {
  return (
    <div className="max-w-5xl mx-auto py-8 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Veritas.O Portal</h1>
        <p className="text-lg text-gray-600">Sacred Truth • Temporal Justice • Symbolic Resolution</p>
        <p className="text-sm text-gray-500 mt-2">
          Version <strong>5.5.0</strong> • Harmony Index: <strong>0.988</strong> • TEMPUS v4.0 • System Harmonized: <strong>98.7%</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portalItems.map(item => (
          <Card key={item.path} className="hover:shadow-xl transition-shadow">
            <CardContent className="p-5 flex flex-col items-center text-center">
              <div className="text-4xl">{item.icon}</div>
              <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 mt-1">{item.desc}</p>
              <Button className="mt-4" asChild>
                <Link href={item.path}>Go</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-700">
        <strong>Active Agents:</strong> 🛡️ JUNO • 🎼 LYRA • 🔍 MIRRA • ⏰ TEMPUS • 🔥 VESTA • ⏳ KAIROS • ⚖️ AEGIS • 🌌 ORION
      </div>
    </div>
  )
}
