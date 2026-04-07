import { useState, useCallback, useRef } from "react";
import { createOrUpdateContact, isGHLConfigured } from "../services/gohighlevel";

/**
 * Hook that provides a `syncToGHL` function for pushing user data to
 * GoHighLevel.  Tracks sync status so the UI can show feedback.
 *
 * Status values: "idle" | "syncing" | "synced" | "error"
 *
 * Usage:
 *   const { syncToGHL, ghlStatus } = useGHL();
 *   await syncToGHL({ name, email, phone, state, address });
 */
export function useGHL() {
  const [ghlStatus, setGhlStatus] = useState("idle");
  const debounceRef = useRef(null);

  const syncToGHL = useCallback(
    /**
     * @param {object} userData – { name, email, phone, state, address }
     * @returns {Promise<boolean>}
     */
    async (userData) => {
      // Skip entirely if no webhook is configured
      if (!isGHLConfigured()) {
        return true;
      }

      // Debounce: cancel any pending call so rapid saves don't spam
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      return new Promise((resolve) => {
        debounceRef.current = setTimeout(async () => {
          setGhlStatus("syncing");

          try {
            const ok = await createOrUpdateContact(userData);
            setGhlStatus(ok ? "synced" : "error");
            resolve(ok);
          } catch {
            setGhlStatus("error");
            resolve(false);
          }
        }, 300); // 300ms debounce window
      });
    },
    []
  );

  return { syncToGHL, ghlStatus, isGHLConfigured: isGHLConfigured() };
}
