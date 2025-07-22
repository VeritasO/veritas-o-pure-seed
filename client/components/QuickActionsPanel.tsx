import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { ScalesIcon, PlayCircleIcon, RefreshCcwIcon, DownloadIcon } from 'lucide-react';

const actions = [
  { href: '/tribunal', icon: ScalesIcon, label: 'Tribunal Room' },
  { href: '/simulations', icon: PlayCircleIcon, label: 'Edge Case Simulations' },
  { href: '/rituals', icon: RefreshCcwIcon, label: 'Ritual Scheduler' },
  { href: '/export', icon: DownloadIcon, label: 'Export Console' },
];

export default function QuickActionsPanel() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {actions.map(({ href, icon: Icon, label }) => (
        <Link key={href} href={href} aria-label={label} role="button">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              <Icon className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">{label}</h2>
                <p className="text-sm text-muted-foreground">Go to {label}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
