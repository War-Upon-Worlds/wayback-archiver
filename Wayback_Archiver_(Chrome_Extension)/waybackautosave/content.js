chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "askToArchive") {
    const confirmArchive = confirm(`Do you want to archive this page?\n${window.location.href}`);
    sendResponse({ confirmed: confirmArchive });
  }
});
