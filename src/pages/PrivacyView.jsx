import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

export default function PrivacyView() {
  usePageTitle('Privacy Policy')

  return (
    <div className="page-container" style={{ maxWidth: 780 }}>
      <div className="page-header">
        <h2 className="page-title">Privacy Policy</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
          Last updated: May 2026
        </p>
      </div>

      <div className="privacy-content" style={{ lineHeight: 1.7, fontSize: '0.97rem' }}>
        <p>
          Of For &amp; By The People ("we," "us," or "our") is operated by Dillon McCurdy. This
          Privacy Policy explains how we collect, use, store, and protect your information when
          you use the Of For &amp; By The People application and related tools, including Build
          My Ballot.
        </p>

        <h3>1. Information We Collect</h3>
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> Name, email address, and authentication
            credentials when you create an account. We support email/password and Google
            OAuth sign-in through Supabase authentication.
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
            power community features.
          </li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>
            <strong>Representative Lookup:</strong> Your address is sent to third-party
            geocoding and civic data services (see Section 4) to identify your elected
            representatives and ballot races.
          </li>
          <li>
            <strong>Ballot Planning:</strong> Your ballot plan data is stored so you can
            prepare for upcoming elections.
          </li>
          <li>
            <strong>CRM &amp; Communications:</strong> Your name, email, phone number, and
            state may be sent to our customer relationship management system (see Section 5)
            so we can communicate important updates about elections and civic engagement.
          </li>
          <li>
            <strong>Account Management:</strong> Your email and credentials are used for
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
            <strong>Local Storage:</strong> We use your browser's <code>localStorage</code> to
            cache data for improved performance. This data stays on your device unless you
            explicitly sync.
          </li>
          <li>
            <strong>Hosting:</strong> The application is hosted on <strong>Vercel</strong>.
            Vercel may collect standard web server logs including IP addresses and request
            metadata. See{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel's Privacy Policy
            </a>{' '}
            for details.
          </li>
        </ul>

        <h3>4. Third-Party Services</h3>
        <p>
          We use the following external services to provide representative and election data.
          Your address or location data may be transmitted to these services as part of normal
          app functionality:
        </p>
        <ul>
          <li>
            <strong>Google Civic Information API:</strong> Your address is sent to Google to
            retrieve your elected representatives and ballot information. Google's{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            governs their handling of that data.
          </li>
          <li>
            <strong>Google OAuth:</strong> If you choose to sign in with Google, we receive
            your name, email address, and profile picture from Google. We do not access any
            other Google account data.
          </li>
          <li>
            <strong>U.S. Census Geocoder:</strong> Your address may be sent to the U.S. Census
            Bureau's geocoding service to determine your congressional and legislative
            districts.
          </li>
          <li>
            <strong>OpenStreetMap / Nominatim:</strong> Your address may be sent to the
            Nominatim geocoding service (operated by OpenStreetMap) for address autocomplete
            and validation. See the{' '}
            <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
              OpenStreetMap Foundation Privacy Policy
            </a>.
          </li>
          <li>
            <strong>Congress.gov API:</strong> Federal legislative data and bill information
            (no personal data is sent).
          </li>
          <li>
            <strong>OpenStates API:</strong> State-level legislative data (no personal data is
            sent).
          </li>
          <li>
            <strong>FEC API:</strong> Federal Election Commission campaign finance data (no
            personal data is sent).
          </li>
        </ul>

        <h3>5. GoHighLevel CRM Integration</h3>
        <p>
          When you create an account, the following information may be transmitted to{' '}
          <strong>GoHighLevel</strong>, a third-party CRM platform, via an encrypted webhook:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>State (if provided)</li>
        </ul>
        <p>
          This data is used to manage user communications and send relevant civic engagement
          updates. GoHighLevel's own privacy policy applies to data stored within their
          platform. We do not sell your data to third parties.
        </p>

        <h3>6. Candidate Grades &amp; Ratings</h3>
        <p>
          Candidate grades and values alignment scores displayed in this app represent the
          editorial opinions of the app operator. They are based on publicly available voting
          records, public statements, and policy positions, evaluated against stated
          constitutional and faith-based criteria. These grades are not endorsed by or
          affiliated with any government entity, political party, or candidate.
        </p>

        <h3>7. Your Rights</h3>
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

        <h3>8. Children's Privacy</h3>
        <p>
          Of For &amp; By The People is not intended for use by children under the age of 13.
          We do not knowingly collect personal information from children under 13. If you
          believe a child has provided us with personal data, please contact us and we will
          promptly delete it.
        </p>

        <h3>9. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Changes will be reflected by an
          updated "Last updated" date at the top of this page. Continued use of the app after
          changes constitutes acceptance of the revised policy.
        </p>

        <h3>10. Contact Us</h3>
        <p>
          If you have questions or concerns about this Privacy Policy or your data, please
          contact us:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:privacy@offorandbythepeople.com">privacy@offorandbythepeople.com</a>
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
