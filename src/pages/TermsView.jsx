import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

export default function TermsView() {
  usePageTitle('Terms of Service')

  return (
    <div className="page-container" style={{ maxWidth: 780 }}>
      <div className="page-header">
        <h2 className="page-title">Terms of Service</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
          Last updated: May 2026
        </p>
      </div>

      <div className="terms-content" style={{ lineHeight: 1.7, fontSize: '0.97rem' }}>
        <p>
          Welcome to Of For &amp; By The People. By accessing or using this application, you
          agree to be bound by these Terms of Service ("Terms"). If you do not agree to these
          Terms, please do not use the app.
        </p>

        <h3>1. Description of Service</h3>
        <p>
          Of For &amp; By The People is a civic engagement platform operated by Dillon McCurdy
          that helps users research candidates, plan their ballots, identify their elected
          representatives, and engage with civic matters. The service is provided on an "as is"
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

        <h3>4. Data Accuracy &amp; Election Disclaimer</h3>
        <p>
          Representative information, election data, candidate grades, and legislative details
          are sourced from third-party APIs and editorial research. While we strive to display
          accurate and up-to-date information, we cannot guarantee the completeness or accuracy
          of data provided by external sources or editorial analysis.
        </p>
        <p>
          <strong>Candidate grades and values alignment scores represent the editorial opinions
          of the app operator.</strong> They are not endorsed by any government entity,
          political party, candidate, or campaign. Always verify important civic information
          through official government sources such as your state or county election office.
        </p>
        <p>
          This application is not affiliated with, endorsed by, or connected to any political
          party, campaign, government agency, or candidate for public office.
        </p>

        <h3>5. Privacy</h3>
        <p>
          Your use of Of For &amp; By The People is also governed by our{' '}
          <Link to="/privacy" style={{ color: 'var(--primary)' }}>
            Privacy Policy
          </Link>
          , which describes how we collect, use, and protect your information.
        </p>

        <h3>6. Intellectual Property</h3>
        <p>
          The Of For &amp; By The People application, including its design, code, and original
          content, is the property of Dillon McCurdy. You may not reproduce, distribute, or
          create derivative works from the app without prior written permission. Candidate
          grades and editorial commentary are the intellectual property of the app operator.
        </p>

        <h3>7. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, Dillon McCurdy and Of For &amp; By The People
          shall not be liable for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of the app, including but not limited to reliance on
          candidate grades, voting recommendations, or election information. Our total liability
          shall not exceed the amount you paid to use the service (if any).
        </p>

        <h3>8. Disclaimer of Warranties</h3>
        <p>
          The app is provided "as is" without warranties of any kind, whether express or
          implied, including but not limited to implied warranties of merchantability, fitness
          for a particular purpose, and non-infringement. We do not warrant that candidate
          grades, election data, or any other information will be accurate, complete, or
          current.
        </p>

        <h3>9. Indemnification</h3>
        <p>
          You agree to indemnify, defend, and hold harmless Dillon McCurdy and Of For &amp; By
          The People from any claims, damages, losses, liabilities, and expenses (including
          reasonable attorney fees) arising from your use of the app, violation of these Terms,
          or infringement of any third party's rights.
        </p>

        <h3>10. Termination</h3>
        <p>
          We reserve the right to suspend or terminate your account at any time for violation
          of these Terms or for any other reason at our discretion. You may delete your account
          at any time through the app's Settings page.
        </p>

        <h3>11. Governing Law</h3>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          State of Michigan, without regard to its conflict of law provisions. Any disputes
          arising under these Terms shall be resolved in the state or federal courts located
          in the State of Michigan.
        </p>

        <h3>12. Changes to These Terms</h3>
        <p>
          We may update these Terms from time to time. Changes will be reflected by an updated
          "Last updated" date at the top of this page. Continued use of the app after changes
          constitutes acceptance of the revised Terms.
        </p>

        <h3>13. Contact Us</h3>
        <p>
          If you have questions about these Terms, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:privacy@offorandbythepeople.com">privacy@offorandbythepeople.com</a>
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
