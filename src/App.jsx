import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthContext'
import AppLayout from './components/layout/AppLayout'
import ErrorBoundary from './components/ui/ErrorBoundary'
import './App.css'

const HomeView = React.lazy(() => import('./pages/HomeView'))
const RepsView = React.lazy(() => import('./pages/RepsView'))
const MyRepsView = React.lazy(() => import('./pages/MyRepsView'))
const ElectionsView = React.lazy(() => import('./pages/ElectionsView'))
const FoundingView = React.lazy(() => import('./pages/FoundingView'))
const AnalyticsView = React.lazy(() => import('./pages/AnalyticsView'))
const BallotView = React.lazy(() => import('./pages/BallotView'))
const CommunityView = React.lazy(() => import('./pages/CommunityView'))
const SettingsView = React.lazy(() => import('./pages/SettingsView'))
const ProfileView = React.lazy(() => import('./pages/ProfileView'))
const PrivacyView = React.lazy(() => import('./pages/PrivacyView'))
const TermsView = React.lazy(() => import('./pages/TermsView'))

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
            <Route element={<AppLayout />}>
              <Route index element={<BallotView />} />
              <Route path="ballot" element={<BallotView />} />
              <Route path="home" element={<HomeView />} />
              <Route path="explore" element={<RepsView />} />
              <Route path="my-reps" element={<MyRepsView />} />
              <Route path="elections" element={<Navigate to="/" replace />} />
              <Route path="register" element={<Navigate to="/elections" replace />} />
              <Route path="founding" element={<FoundingView />} />
              <Route path="analytics" element={<AnalyticsView />} />
              <Route path="community" element={<CommunityView />} />
              <Route path="settings" element={<SettingsView />} />
              <Route path="profile" element={<ProfileView />} />
              <Route path="privacy" element={<PrivacyView />} />
              <Route path="terms" element={<TermsView />} />
              <Route path="documents" element={<Navigate to="/founding" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
