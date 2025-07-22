import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-700">{title || 'Veritas Portal'}</h1>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
        <footer className="bg-white border-t p-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Veritas. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
