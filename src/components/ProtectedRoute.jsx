import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

/**
 * Wraps routes that require authentication.
 * Redirects unauthenticated users to the landing page.
 *
 * Usage:
 *   <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
 *     <Route index element={<SomePage />} />
 *   </Route>
 */
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  // Still checking auth state — show nothing (prevents flash)
  if (loading) return null

  if (!user) {
    return <Navigate to="/welcome" replace />
  }

  // Render children (e.g. AppLayout) which will render <Outlet /> for nested routes
  return children || <Outlet />
}
