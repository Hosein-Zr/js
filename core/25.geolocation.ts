/**
 * geolocation-api.ts
 *
 * THEORY:
 * - The Geolocation API allows websites to request the user's physical location (latitude, longitude).
 * - Common uses: maps, navigation, delivery tracking, location-based personalization.
 * - Requires user permission (browser will show a prompt).
 * - Main methods:
 *    navigator.geolocation.getCurrentPosition(success, error)
 *    navigator.geolocation.watchPosition(success, error)  → keeps tracking
 */

const locationBtn = document.querySelector<HTMLButtonElement>("#get-location");
const locationOutput =
  document.querySelector<HTMLParagraphElement>("#location");

if (locationBtn && locationOutput) {
  locationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      locationOutput.textContent =
        "Geolocation is not supported by this browser.";
      return;
    }

    // ✅ Get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationOutput.textContent = `📍 Latitude: ${latitude}, Longitude: ${longitude}`;
        console.log("User Position:", latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            locationOutput.textContent = "Permission denied ❌";
            break;
          case error.POSITION_UNAVAILABLE:
            locationOutput.textContent = "Position unavailable ❌";
            break;
          case error.TIMEOUT:
            locationOutput.textContent = "Request timed out ⏳";
            break;
          default:
            locationOutput.textContent = "Unknown error ❓";
        }
      }
    );
  });
}
