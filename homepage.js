chrome.storage.sync.get((storage) => {
  window.location.replace(storage["homepage"] || "https://google.com");
});