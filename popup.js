const urlSubmission = document.getElementById('url');
const submitBtn = document.getElementById('submit');


// by default, set the current url as the intended homepage
urlSubmission.value = getCurrentPage() || '';

// save the specified Homepage Url
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const homepage = urlSubmission.value;
  setHomePage(homepage);
  window.close();
});

// save homepage to Chrome Storage
function setHomePage(url) {
  chrome.storage.sync.set({
    'homepage': url,
  });
}

// retrieve the current tab's url
function getCurrentPage() {
  return chrome.tabs.query({ "active": true,  }, (tabs) => tabs);
}
