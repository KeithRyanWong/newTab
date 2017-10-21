const urlSubmission = document.getElementById('url');
const submitBtn = document.getElementById('submit');


// by default, set the current url as the intended homepage
autoFillSubmission();


// save the specified Homepage Url
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const homepage = formatURL(urlSubmission.value);
  setHomePage(homepage);
  window.close();
});

// save homepage to Chrome Storage
function setHomePage(url) {
  chrome.storage.sync.set({
    'homepage': url,
  });
}

// format url to contain 'https' pre-string
function formatURL(url) {
  const regex = /^http/g;

  if (url && !regex.exec(url)) {
    url = 'http://' + url;
  }

  return url;
}

// retrieve the current tab's url and replace the submission URL text
function autoFillSubmission() {
  chrome.tabs.query({ "active": true, "lastFocusedWindow": true  }, setSubmissionURL);
}

function setSubmissionURL(tabs) {
  urlSubmission.value = tabs[0].url || '';
}