import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import MemberDetail from '../MemberDetail'
import Onboarding from '../ui/Onboarding'
import OfflineBanner from '../ui/OfflineBanner'
import { useApp } from '../../contexts/AppContext'

export default function AppLayout() {
  const { selectedMember, setSelectedMember } = useApp()

  return (
    <div className="app">
      <OfflineBanner />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <NavBar />
      <main id="main-content" className="app-main">
        <Outlet />
      </main>

      {selectedMember && (
        <MemberDetail
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      <Onboarding />
    </div>
  )
}
