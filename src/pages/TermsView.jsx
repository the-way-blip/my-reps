import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

export default function TermsView() {
  usePageTitle('Terms of Service')

  return (
    <div className="page-container" style={{ maxWidth: 780 }}>
      <div className="page-header">
        <h2 className="page-title">Terms of Service</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
          Last updated: April 2026
        </p>
      </div>

      <div className="terms-content" style={{ lineHeight: 1.7, fontSize: '0.97rem' }}>
        <p>
          Welcome to My Reps. By accessing or using this application, you agree to be bound by
          these Terms of Service ("Terms"). If you do not agree to these Terms, please do not
          use the app.
        </p>

        <h3>1. Description of Service</h3>
        <p>
          My Reps is a civic engagement platform operated by Dillon McCurdy that helps users
          identify their elected representatives, plan their ballots, track legislation, and
          engage with their community on civic matters. The service is provided on an "as is"
          and "as available" basis.
        </p>

        <h3>2. User Accounts</h3>
        <p>
          To access certain features, you may need to create an account. You are responsible
          for maintaining the confidentiality of your account credentials and for all activity
          that occurs under your account. You agree to provide accurate and complete
          information when creating your account.
        </p>

        <h3>3. Acceptable Use</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the app for any unlawful purpose or in violation of any applicable laws.</li>
          <li>Attempt to gain unauthorized access to the app's systems or other users' accounts.</li>
          <li>Interfere with or disrupt the integrity or performance of the app.</li>
          <li>Scrape, crawl, or use automated means to access the app without permission.</li>
          <li>Misrepresent your identity or impersonate any person.</li>
        </ul>

        <h3>4. Data Accuracy</h3>
        <p>
          Representative information, election data, and legislative details are sourced from
          third-party APIs including Congress.gov, OpenStates, Google Civic Information, and
          the FEC. While we strive to display accurate and up-to-date information, we cannot
          guarantee the completeness or accuracy of data provided by these external sources.
          Always verify important civic information through official government sources.
        </p>

        <h3>5. Privacy</h3>
        <p>
          Your use of My Reps is also governed by our{' '}
          <Link to="/privacy" style={{ color: 'var(--primary)' }}>
            Privacy Policy
          </Link>
          , which describes how we collect, use, and protect your information.
        </p>

        <h3>6. Intellectual Property</h3>
        <p>
          The My Reps application, including its design, code, and original content, is the
          property of Dillon McCurdy. You may not reproduce, distribute, or create derivative
          works from the app without prior written permission.
        </p>

        <h3>7. Community Pulse</h3>
        <p>
          The Community Pulse feature displays anonymized and aggregated data derived from
          users' ballot plans. By using the ballot planning feature, you consent to your
          selections being included in anonymized aggregate statistics. No individual ballot
          choices are publicly attributed to specific users.
        </p>

        <h3>8. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, Dillon McCurdy and My Reps shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages
          arising from your use of the app. Our total liability shall not exceed the amount you
          paid to use the service (if any).
        </p>

        <h3>9. Disclaimer of Warranties</h3>
        <p>
          The app is provided "as is" without warranties of any kind, whether express or
          implied, including but not limited to implied warranties of merchantability, fitness
          for a particular purpose, and non-infringement.
        </p>

        <h3>10. Termination</h3>
        <p>
          We reserve the right to suspend or terminate your account at any time for violation
          of these Terms or for any other reason at our discretion. You may delete your account
          at any time through the app's Settings page.
        </p>

        <h3>11. Changes to These Terms</h3>
        <p>
          We may update these Terms from time to time. Changes will be reflected by an updated
          "Last updated" date at the top of this page. Continued use of the app after changes
          constitutes acceptance of the revised Terms.
        </p>

        <h3>12. Contact Us</h3>
        <p>
          If you have questions about these Terms, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:privacy@myrepsapp.com">privacy@myrepsapp.com</a>
        </p>

        <div style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          <Link to="/privacy" style={{ color: 'var(--primary)' }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
