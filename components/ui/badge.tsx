import React from 'react'
export function Badge({ children, variant = 'default', className = '' }: any) {
  const base = 'inline-block px-2 py-0.5 rounded text-xs font-medium'
  const variants: any = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-200 text-gray-800',
    outline: 'border border-blue-400 text-blue-700 bg-white',
  }
  return <span className={`${base} ${variants[variant] || ''} ${className}`}>{children}</span>
}