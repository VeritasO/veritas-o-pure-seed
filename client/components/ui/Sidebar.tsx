import React from 'react';
import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/tribunal', label: 'Tribunal', icon: '⚖️' },
  { href: '/books', label: 'Books', icon: '📚' },
  { href: '/agents', label: 'Agents', icon: '🧑‍⚖️' },
  { href: '/rituals', label: 'Rituals', icon: '🕯️' },
  { href: '/export', label: 'Export', icon: '📤' },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-white border-r flex flex-col py-6 px-4 shadow-sm">
      <div className="mb-8 flex items-center space-x-2">
        <span className="text-2xl">🌱</span>
        <span className="font-bold text-lg text-indigo-700">Veritas.O Portal</span>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map(item => (
          <Link key={item.href} href={item.href} className="flex items-center px-3 py-2 rounded hover:bg-indigo-50 transition">
            <span className="text-xl mr-3" aria-label={item.label} title={item.label}>{item.icon}</span>
            <span className="font-medium text-gray-700">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-6 text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} Veritas.O
      </div>
    </aside>
  );
}
