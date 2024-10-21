function fillForm(userData) {
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], input[type="number"]');

  inputs.forEach(input => {
      const placeholder = input.placeholder ? input.placeholder.toLowerCase() : '';
      const ariaLabel = input.getAttribute('aria-label') ? input.getAttribute('aria-label').toLowerCase() : '';

      // Check for name fields
      if ((placeholder.includes('name') || ariaLabel.includes('name')) && userData.name) {
          input.value = userData.name;
      }

      // Check for email fields
      else if ((placeholder.includes('email') || ariaLabel.includes('email')) && userData.email) {
          input.value = userData.email;
      }

      // Check for other fields, such as date of birth if applicable
      // else if ((placeholder.includes('date of birth') || ariaLabel.includes('date of birth')) && userData.dob) {
      //     input.value = userData.dob;
      // }
  });
}

chrome.storage.sync.get(['userData'], function(result) {
  if (chrome.runtime.lastError) {
      console.error('Error retrieving user data:', chrome.runtime.lastError);
  } else if (result.userData) {
      fillForm(result.userData);
  }
});
