function fillForm(userData) {
    const inputs = document.querySelectorAll('input[type="text"], input[type="date"]');
    inputs.forEach(input => {
      const label = input.labels[0];
      if (label) {
        const labelText = label.textContent.toLowerCase();
        if (labelText.includes('name') && userData.name) {
          input.value = userData.name;
        } else if ((labelText.includes('roll') || labelText.includes('id')) && userData.rollNo) {
          input.value = userData.rollNo;
        } else if (labelText.includes('birth') && userData.dob) {
          input.value = userData.dob;
        }
      }
    });
  }
  
  chrome.storage.sync.get(['userData'], function(result) {
    if (result.userData) {
      fillForm(result.userData);
    }
  });