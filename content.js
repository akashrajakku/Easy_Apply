function fillForm(userData) {
  const inputs = document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="number"]');
  inputs.forEach(input => {
      const key = input.dataset.key; // Use data-key attribute
      if (key && userData[key]) {
          input.value = userData[key];
      }
  });
}

chrome.storage.sync.get(['userData'], function(result) {
  if (chrome.runtime.lastError) {
      console.error('Error retrieving user data:', chrome.runtime.lastError);
  } else if (result.userData) {
      fillForm(result.userData);
  }
});
