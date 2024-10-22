function fillForm(userData) {
    // Select all input elements in the form
    const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], input[type="number"]');
    
    textInputs.forEach(input => {
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!ariaLabelledBy) return;
  
      // Name field
      if (ariaLabelledBy.includes('i1') && userData.name) {
        input.value = userData.name;
  
        // Trigger the input event to ensure the placeholder is removed
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
      }
  
      // Email field
      else if (ariaLabelledBy.includes('i3') && userData.email) {
        input.value = userData.email;
  
        // Trigger the input event to ensure the placeholder is removed
        const event = new Event('input', { bubbles: true });
        input.dispatchEvent(event);
      }
  
      // Add additional checks for other form fields if needed, e.g., date of birth, roll number, etc.
    });
  }
  
  // Retrieve the stored user data and fill the form
  chrome.storage.sync.get(['userData'], function(result) {
    if (chrome.runtime.lastError) {
      console.error('Error retrieving user data:', chrome.runtime.lastError);
    } else if (result.userData) {
      fillForm(result.userData);
    }
  });
  