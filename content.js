function autofillForm(userData) {
    // Select all divs that contain the form sections like "name", "email" fields
    const parentDivs = Array.from(document.querySelectorAll('div[jscontroller="sWGJ4b"]'));

    // Iterate over each parent div
    parentDivs.forEach(parentDiv => {
        // Extract the label text, assuming it’s within the first child div
        const labelText = parentDiv.childNodes[0].firstElementChild.innerText.toLowerCase();

        // Determine the field value from the userData based on labelText
        let fieldValue;
        if (labelText.includes('name') && userData.name) {
            fieldValue = userData.name;
        } else if (labelText.includes('email') && userData.email) {
            fieldValue = userData.email;
        }

        // If a fieldValue is found, populate the input field
        if (fieldValue) {
            // Locate the input field within the current parentDiv
            const inputField = parentDiv.childNodes[1].querySelector('input[type="text"], input[type="email"], input[type="date"], input[type="number"]');
            
            if (inputField) {
                inputField.value = fieldValue;
                
                // Trigger an 'input' event to ensure any event listeners respond to the value change
                const event = new Event('input', { bubbles: true });
                inputField.dispatchEvent(event);
            }
        }
    });
}

// Fetch the user data from Chrome storage and call the autofill function
chrome.storage.sync.get(['userData'], function(result) {
    if (chrome.runtime.lastError) {
        console.error('Error retrieving user data:', chrome.runtime.lastError);
    } else if (result.userData) {
        autofillForm(result.userData);
    }
});
