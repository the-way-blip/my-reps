import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

export default function PrivacyView() {
  usePageTitle('Privacy Policy')

  return (
    <div className="page-container" style={{ maxWidth: 780 }}>
      <div className="page-header">
        <h2 className="page-title">Privacy Policy</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
          Last updated: April 2026
        </p>
      </div>

      <div className="privacy-content" style={{ lineHeight: 1.7, fontSize: '0.97rem' }}>
        <p>
          My Reps ("we," "us," or "our") is operated by Dillon McCurdy. This Privacy Policy
          explains how we collect, use, store, and protect your information when you use the
          My Reps application.
        </p>

        <h3>1. Information We Collect</h3>
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> Name, email address, and password when you
            create an account via Supabase authentication.
          </li>
          <li>
            <strong>Profile Information:</strong> Phone number, state, and street address that
            you voluntarily provide to personalize your experience.
          </li>
          <li>
            <strong>Ballot Plan Data:</strong> Your ballot selections, candidate preferences,
            and voting plans created within the app.
          </li>
          <li>
            <strong>Usage Data:</strong> Aggregated and anonymized interaction data used to
            power the Community Pulse feature.
          </li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>
            <strong>Representative Lookup:</strong> Your state and address are used to identify
            your elected representatives at the federal and state level.
          </li>
          <li>
            <strong>Ballot Planning:</strong> Your ballot plan data is stored so you can
            prepare for upcoming elections.
          </li>
          <li>
            <strong>Community Pulse:</strong> Anonymized and aggregated ballot data is used to
            show community-level voting trends. Individual ballot choices are never publicly
            displayed or attributed to specific users.
          </li>
          <li>
            <strong>CRM &amp; Communications:</strong> Your name, email, phone number, and
            state may be sent to our customer relationship management system (see Section 5)
            so we can communicate important updates.
          </li>
          <li>
            <strong>Account Management:</strong> Your email and password are used for
            authentication and account recovery.
          </li>
        </ul>

        <h3>3. Data Storage &amp; Security</h3>
        <ul>
          <li>
            <strong>Cloud Database:</strong> Account information, profile data, and ballot
            plans are stored in <strong>Supabase</strong>, a hosted PostgreSQL platform that
            provides encryption at rest and in transit.
          </li>
          <li>
            <strong>Local Storage:</strong> We use your browser's <code>localStorage</code> and{' '}
            <code>sessionStorage</code> to cache data for offline access and improved
            performance. This data stays on your device and is not transmitted to our servers
            unless you explicitly sync.
          </li>
          <li>
            <strong>Service Worker (PWA):</strong> As a Progressive Web App, My Reps uses a
            service worker to cache application assets for offline use. The service worker does
            not collect or transmit personal data.
          </li>
        </ul>

        <h3>4. Third-Party Services</h3>
        <p>
          We use the following external APIs to provide representative and election data. These
          are <strong>read-only integrations</strong> — no personal user data is sent to these
          services:
        </p>
        <ul>
          <li>
            <strong>Congress.gov API</strong> — Federal legislative data and bill information.
          </li>
          <li>
            <strong>OpenStates API</strong> — State-level legislative data.
          </li>
          <li>
            <strong>Google Civic Information API</strong> — Representative lookup by address.
          </li>
          <li>
            <strong>FEC API</strong> — Federal Election Commission campaign finance data.
          </li>
        </ul>
        <p>
          Your address may be sent to the Google Civic Information API to retrieve your
          representatives. Google's privacy policy governs their handling of that data.
        </p>

        <h3>5. GoHighLevel CRM Integration</h3>
        <p>
          When you create or update your profile, the following information may be transmitted
          to <strong>GoHighLevel</strong>, a third-party CRM platform, via a webhook:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>State</li>
        </ul>
        <p>
          This data is used by the app operator (Dillon McCurdy) to manage user
          communications, send relevant civic engagement updates, and provide support.
          GoHighLevel's own privacy policy applies to data stored within their platform. We do
          not sell your data to third parties.
        </p>

        <h3>6. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your account and associated data.</li>
          <li>
            Withdraw consent for CRM communications at any time by contacting us.
          </li>
          <li>
            Clear locally cached data by using the "Clear All Data" option in Settings or
            clearing your browser storage.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at the email address below.
        </p>

        <h3>7. Children's Privacy</h3>
        <p>
          My Reps is not intended for use by children under the age of 13. We do not knowingly
          collect personal information from children under 13. If you believe a child has
          provided us with personal data, please contact us and we will promptly delete it.
        </p>

        <h3>8. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Changes will be reflected by an
          updated "Last updated" date at the top of this page. Continued use of the app after
          changes constitutes acceptance of the revised policy.
        </p>

        <h3>9. Contact Us</h3>
        <p>
          If you have questions or concerns about this Privacy Policy or your data, please
          contact us:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:privacy@myrepsapp.com">privacy@myrepsapp.com</a>
        </p>

        <div style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          <Link to="/terms" style={{ color: 'var(--primary)' }}>
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}
