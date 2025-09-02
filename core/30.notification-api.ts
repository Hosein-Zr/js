/**
 * notification-vibration.ts
 *
 * THEORY:
 * - Notification API lets websites show native system notifications (with user permission).
 * - Vibration API lets devices (mainly mobile) vibrate in patterns.
 * - Both require user interaction & permissions.
 * - Common use cases: chat alerts, reminders, mobile feedback.
 */

// * This section in react
// * Rarely wrapped; usually raw API.
// * You may find hooks like useNotification in usehooks-ts.


const notifyBtn = document.querySelector<HTMLButtonElement>("#notify");
const vibrateBtn = document.querySelector<HTMLButtonElement>("#vibrate");

// ✅ Request and show a notification
if (notifyBtn) {
  notifyBtn.addEventListener("click", async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
      return;
    }

    // Ask for permission
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      new Notification("Hello! 🎉", {
        body: "This is a notification from your app.",
        icon: "https://via.placeholder.com/100", // optional
      });
    } else {
      alert("Notifications not allowed ❌");
    }
  });
}

// ✅ Trigger vibration (mobile devices only)
if (vibrateBtn) {
  vibrateBtn.addEventListener("click", () => {
    if (navigator.vibrate) {
      // Vibrate pattern: vibrate 200ms, pause 100ms, vibrate 200ms
      navigator.vibrate([200, 100, 200]);
      console.log("Device vibrated 📳");
    } else {
      alert("Vibration API not supported on this device ❌");
    }
  });
}
