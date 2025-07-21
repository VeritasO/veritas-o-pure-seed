import React from 'react'
export function Skeleton({ className = '' }: any) {
  return <div className={`animate-pulse bg-gray-200 ${className}`} />
}