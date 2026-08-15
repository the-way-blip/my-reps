import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#F7F3E8' }}>
      <div style={{ textAlign: 'center', color: '#0B2E59' }}>
        <div style={{ width: 40, height: 40, border: '3px solid #e0d9c8', borderTopColor: '#0B2E59', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    </div>
  )

  if (!user) {
    return <Navigate to="/welcome" replace />
  }

  return children || <Outlet />
}
