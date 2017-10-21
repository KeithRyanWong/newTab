chrome.storage.sync.get((storage) => {
  let url = storage["homepage"];
  const regex = /^http/g;

  if (url && !regex.exec(url)) {
    url = 'http://' + url;
  }

  window.location.href = url || "https://google.com";
});