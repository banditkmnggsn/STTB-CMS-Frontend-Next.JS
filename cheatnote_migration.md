// REACT ROUTER → NEXT.JS
import { useNavigate } from 'react-router'  →  import { useRouter } from 'next/navigation'
import { Link } from 'react-router'          →  import Link from 'next/link'
import { useParams } from 'react-router'     →  import { useParams } from 'next/navigation'

// CARA PAKAI
const navigate = useNavigate()              →  const router = useRouter()
navigate('/admin/content')                  →  router.push('/content')


import { StatsCard } from '@/components/admin/StatsCard'
import { StatusBadge } from '@/components/admin/StatusBadge'
import { PageHeader } from '@/components/admin/PageHeader'
import { DataTable } from '@/components/admin/DataTable'

export -> export default
