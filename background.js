let siteIP = 'No site visited yet';

// Listen for web requests
browser.webRequest.onCompleted.addListener(
  (details) => {
    if (details.ip) {
      siteIP = details.ip;
    }
  },
  { urls: ["<all_urls>"] }
);

// Listen for messages from popup script
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSiteIP') {
    sendResponse({ siteIP: siteIP });
  }
});
