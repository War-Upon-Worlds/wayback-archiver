chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.frameId !== 0) return;

  chrome.storage.sync.get("autoArchiveEnabled", (data) => {
    if (!data.autoArchiveEnabled) return;

    const url = new URL(details.url);
    const hostname = url.hostname;

    if (BLOCKLIST.some(blocked => hostname.includes(blocked))) {
      console.log(`[Wayback] Skipped (blocklisted): ${url.href}`);
      return;
    }

    // Ask popup for confirmation
    chrome.runtime.sendMessage({ type: "confirm-archive", url: url.href });

    // The actual archiving is triggered in popup_script.js when user clicks Yes
  });
}, {
  url: [{ schemes: ["http", "https"] }]
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "archive-confirmed") {
    const archiveUrl = `https://web.archive.org/save/${encodeURIComponent(msg.url)}`;
    fetch(archiveUrl, { method: "GET", mode: "no-cors" });

    chrome.storage.local.get(["archiveHistory"], (result) => {
      const archiveHistory = result.archiveHistory || [];
      archiveHistory.push({ url: msg.url, time: new Date().toISOString() });
      chrome.storage.local.set({ archiveHistory });
    });

    console.log(`[Wayback] Archived: ${msg.url}`);
  }

  if (msg.type === "archive-declined") {
    console.log(`[Wayback] User declined to archive: ${msg.url}`);
  }
});
