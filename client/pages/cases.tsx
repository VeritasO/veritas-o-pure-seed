import React, { useEffect, useState } from 'react'
import CaseList from '@/components/CaseList'

export default function CasesPage() {
  const [cases, setCases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => {
        setCases(data)
        setLoading(false)
      })
  }, [])

  return <CaseList cases={cases} loading={loading} />
}