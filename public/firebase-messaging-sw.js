// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

self.addEventListener("notificationclick", function (event) {
  const appCode =
    event.notification.data.appCode !== undefined
      ? event.notification.data.appCode
      : event.notification.data.FCM_MSG.data.appCode;
  const url = `/${appCode}/notify`;
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBsHWkED5RVcQAQ6_cuR2p3CXfs6M5AOeM",
  authDomain: "bili-dev.firebaseapp.com",
  projectId: "bili-dev",
  storageBucket: "bili-dev.appspot.com",
  messagingSenderId: "213696605314",
  appId: "1:213696605314:web:8435f9a544b5ab9884989b",
  measurementId: "G-4BHGK35D5B",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body.replace(/<[^>]+>/g, ""),
    icon: "/assets/Logo.svg",
    data: {
      appCode: payload.data.appCode,
    },
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
