const STORAGE_KEY = 'myreps_election_reminders'

/**
 * Request browser notification permission.
 * Returns the permission state: 'granted', 'denied', or 'default'.
 */
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    return 'unsupported'
  }
  if (Notification.permission === 'granted') {
    return 'granted'
  }
  if (Notification.permission === 'denied') {
    return 'denied'
  }
  const result = await Notification.requestPermission()
  return result
}

/**
 * Store a reminder for an election.
 * @param {object} election - Election object with id/name/date fields
 * @param {number[]} daysBefore - Array of days before election to remind (e.g. [1, 7])
 */
export function scheduleReminder(election, daysBefore = [1, 7]) {
  const reminders = getReminders()
  const electionId = getElectionId(election)
  const dateStr = election.date || election.electionDay || election.dateRange
  if (!dateStr) return false

  const electionDate = new Date(dateStr)
  if (isNaN(electionDate.getTime())) return false

  // Calculate reminder dates
  const reminderDates = daysBefore.map((days) => {
    const d = new Date(electionDate)
    d.setDate(d.getDate() - days)
    return {
      days,
      date: d.toISOString().split('T')[0], // YYYY-MM-DD
    }
  })

  reminders[electionId] = {
    electionId,
    electionName: election.name,
    electionDate: electionDate.toISOString().split('T')[0],
    daysBefore,
    reminderDates,
    createdAt: new Date().toISOString(),
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders))
  return true
}

/**
 * Get all stored reminders as an object keyed by election ID.
 */
export function getReminders() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

/**
 * Check if a reminder is set for a given election.
 */
export function hasReminder(election) {
  const reminders = getReminders()
  return !!reminders[getElectionId(election)]
}

/**
 * Get the reminder config for a specific election.
 */
export function getReminder(election) {
  const reminders = getReminders()
  return reminders[getElectionId(election)] || null
}

/**
 * Remove a reminder for a specific election.
 */
export function removeReminder(election) {
  const reminders = getReminders()
  const electionId = getElectionId(election)
  delete reminders[electionId]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders))
}

/**
 * Check if any reminders are due today and fire browser notifications.
 * Also cleans up reminders for past elections.
 */
export function checkAndFireReminders() {
  if (!('Notification' in window) || Notification.permission !== 'granted') {
    return
  }

  const reminders = getReminders()
  const today = new Date().toISOString().split('T')[0]
  let changed = false

  for (const [id, reminder] of Object.entries(reminders)) {
    // Clean up past elections
    if (reminder.electionDate < today) {
      delete reminders[id]
      changed = true
      continue
    }

    // Check if any reminder dates match today
    for (const rd of reminder.reminderDates) {
      if (rd.date === today) {
        const daysText =
          rd.days === 1
            ? 'tomorrow'
            : rd.days === 7
              ? 'in 1 week'
              : `in ${rd.days} days`

        new Notification('Election Reminder', {
          body: `${reminder.electionName} is ${daysText} (${formatDate(reminder.electionDate)}).`,
          icon: '/favicon.png',
          tag: `election-${id}-${rd.days}`,
        })
      }
    }
  }

  if (changed) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders))
  }
}

/**
 * Check if an election date is in the past.
 */
export function isElectionPast(election) {
  const dateStr = election.date || election.electionDay || election.dateRange
  if (!dateStr) return false
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return d < today
}

// ── Helpers ──

function getElectionId(election) {
  return election.id || election.name.replace(/\s+/g, '-').toLowerCase()
}

function formatDate(isoDate) {
  const d = new Date(isoDate + 'T12:00:00')
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
