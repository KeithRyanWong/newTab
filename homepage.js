chrome.storage.sync.get((storage) => {
  window.location.href = storage["homepage"] || "https://google.com";
});