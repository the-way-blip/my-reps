import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthContext'
import AppLayout from './components/layout/AppLayout'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorBoundary from './components/ui/ErrorBoundary'
import './App.css'

const LandingView = React.lazy(() => import('./pages/LandingView'))
const HomeView = React.lazy(() => import('./pages/HomeView'))
const RepsView = React.lazy(() => import('./pages/RepsView'))
const MyRepsView = React.lazy(() => import('./pages/MyRepsView'))
const ElectionsView = React.lazy(() => import('./pages/ElectionsView'))
const FoundingView = React.lazy(() => import('./pages/FoundingView'))
const AnalyticsView = React.lazy(() => import('./pages/AnalyticsView'))
const BallotView = React.lazy(() => import('./pages/BallotView'))
const SettingsView = React.lazy(() => import('./pages/SettingsView'))
const ProfileView = React.lazy(() => import('./pages/ProfileView'))
const PrivacyView = React.lazy(() => import('./pages/PrivacyView'))
const TermsView = React.lazy(() => import('./pages/TermsView'))
const AuthCallbackView = React.lazy(() => import('./pages/AuthCallbackView'))
const ToolInfoView = React.lazy(() => import('./pages/ToolInfoView'))

const LazyFallback = (
  <div className="loader"><div className="spinner" /></div>
)

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <AppProvider>
        <ErrorBoundary>
        <Suspense fallback={LazyFallback}>
          <Routes>
            {/* Public routes — no auth required */}
            <Route path="welcome" element={<LandingView />} />
            <Route path="tools/:toolId" element={<ToolInfoView />} />
            <Route path="privacy" element={<AppLayout />}>
              <Route index element={<PrivacyView />} />
            </Route>
            <Route path="terms" element={<AppLayout />}>
              <Route index element={<TermsView />} />
            </Route>
            <Route path="auth/callback" element={<AppLayout />}>
              <Route index element={<AuthCallbackView />} />
            </Route>

            {/* Protected routes — require sign-in */}
            <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
              <Route index element={<BallotView />} />
              <Route path="ballot" element={<BallotView />} />
              <Route path="home" element={<HomeView />} />
              <Route path="explore" element={<RepsView />} />
              <Route path="my-reps" element={<MyRepsView />} />
              <Route path="elections" element={<Navigate to="/" replace />} />
              <Route path="register" element={<Navigate to="/elections" replace />} />
              <Route path="founding" element={<FoundingView />} />
              <Route path="analytics" element={<AnalyticsView />} />
              <Route path="community" element={<Navigate to="/" replace />} />
              <Route path="settings" element={<SettingsView />} />
              <Route path="profile" element={<ProfileView />} />
              <Route path="documents" element={<Navigate to="/founding" replace />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
