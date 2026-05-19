/**
 * GoHighLevel (GHL) CRM Integration
 *
 * Sends user contact data to GoHighLevel via an inbound webhook.
 *
 * ─── Setup Instructions ───────────────────────────────────────────────
 *
 * 1. In your GoHighLevel sub-account, go to **Automation → Workflows**.
 * 2. Create a new workflow (or open an existing one).
 * 3. Add an **"Inbound Webhook"** trigger as the first step.
 * 4. Copy the webhook URL that GHL generates (it looks like
 *    `https://services.leadconnectorhq.com/hooks/...`).
 * 5. Paste it into your `.env` file:
 *      VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_HOOK_ID
 * 6. In the GHL workflow, map the incoming JSON fields to contact fields:
 *
 *    JSON field   →  GHL Contact field
 *    ──────────────────────────────────
 *    email        →  Email
 *    name         →  Full Name  (or split into firstName / lastName)
 *    phone        →  Phone
 *    address      →  Address 1
 *    state        →  State
 *    source       →  Source
 *    tags[]       →  Tags
 *
 * 7. Add any follow-up actions you want (e.g., add to pipeline, send
 *    welcome email, notify team, etc.).
 *
 * ─── Fields Sent ──────────────────────────────────────────────────────
 *
 *  {
 *    name:    string   – full name
 *    email:   string   – email address
 *    phone:   string   – phone number
 *    state:   string   – US state
 *    address: string   – street / full address
 *    source:  string   – always "Build My Ballot App"
 *    tags:    string[] – ["Build My Ballot User", <state name>]
 *  }
 *
 * ─── Notes ────────────────────────────────────────────────────────────
 *
 * - If VITE_GHL_WEBHOOK_URL is not set the functions silently no-op so
 *   the app works fine without a GHL account.
 * - Errors are logged to the console but never thrown to the caller.
 * - One automatic retry is attempted on network / server errors.
 */

const GHL_WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL || "";

/**
 * Returns true when a valid webhook URL has been configured.
 */
export function isGHLConfigured() {
  return GHL_WEBHOOK_URL.length > 0;
}

/**
 * POST JSON payload to the GHL webhook with one retry on failure.
 * @param {object} payload
 * @returns {Promise<boolean>} true if sent successfully (or skipped), false on final failure
 */
async function postToWebhook(payload) {
  if (!isGHLConfigured()) {
    return true; // silently skip
  }

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        return true;
      }

      console.warn(
        `[GHL] Webhook responded with ${res.status} (attempt ${attempt + 1}/2)`
      );
    } catch (err) {
      console.warn(
        `[GHL] Network error (attempt ${attempt + 1}/2):`,
        err.message
      );
    }
  }

  console.error("[GHL] Failed to send data after 2 attempts");
  return false;
}

/**
 * Create or update a contact in GoHighLevel.
 *
 * @param {object} userData
 * @param {string} userData.name
 * @param {string} userData.email
 * @param {string} [userData.phone]
 * @param {string} [userData.state]
 * @param {string} [userData.address]
 * @returns {Promise<boolean>} true on success or skip, false on failure
 */
export async function createOrUpdateContact(userData = {}) {
  const { name, email, phone, state, address } = userData;

  if (!email) {
    console.warn("[GHL] Skipped — no email provided");
    return false;
  }

  const tags = ["Build My Ballot User"];
  if (state) {
    tags.push(state);
  }

  const payload = {
    name: name || "",
    email,
    phone: phone || "",
    state: state || "",
    address: address || "",
    source: "Build My Ballot App",
    tags,
  };

  return postToWebhook(payload);
}
