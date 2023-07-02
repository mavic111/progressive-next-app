'use strict'

export default null
declare let self: ServiceWorkerGlobalScope

// Before Install Prompt

self.addEventListener("beforeinstallprompt", (event) => {})

// Push Notifiations
interface Data {
  title: string
  body: string
  url?: string
}

self.addEventListener('push', (event: Event) => {
  const extendableEvent = event as ExtendableEvent
  const pushEvent = event as PushEvent

  const data: Data = pushEvent.data?.json()

  // Check if data are exist
  if (!data) {
    return
  }

  const notificationTitle = data.title
  const notificationOptions = {
    body: data.body,
    icon: '/icons/maskable_icon_x192.png',
    data: { url: data.url ? data.url : '/' }, // Check if the relative URL/path are provided, if not use homepage
    actions: [{ action: 'open_url', title: 'Open Now' }],
  }
  extendableEvent.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  )
})

function isRelativeUrl(url: string) {
  return (
    !url.startsWith('http://') &&
    !url.startsWith('https://') &&
    url.startsWith('/')
  )
}

self.addEventListener('notificationclick', function (event: NotificationEvent) {
  // Get relative URL/path data, example "/notifications"
  const url_data: string = event.notification.data.url
  let relative_url: string
  // Verify is a relative URL.
  if (isRelativeUrl(url_data)) {
    relative_url = url_data
  } else {
    // Not a relative URL, maybe harm URL.
    return
  }

  // Close the notification
  event.notification.close()
  // Check the client windows
  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (clientList) {
        if (clientList.length > 0) {
          let client = clientList[0]
          for (let i = 0; i < clientList.length; i++) {
            // Check if window URL ends with relative URL, example: https://example.vercel.app/notifications ends with /notifications
            if (clientList[i].focused && client.url.endsWith(relative_url)) {
              client = clientList[i]
              // If there is a window that open with the target URL, then focus it.
              return client.focus()
            }
          }
          // If there is window open but none of them have the target URL, then open the target URL in the new window.
          return self.clients.openWindow(relative_url)
        }
        // If no window open, then open the target URL in new window.
        return self.clients.openWindow(relative_url)
      })
  )
})
