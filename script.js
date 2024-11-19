document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userDataForm');
    
    if (form) {
        chrome.storage.sync.get(['userData'], function(result) {
            if (chrome.runtime.lastError) {
                console.error('Error retrieving user data:', chrome.runtime.lastError);
            } else if (result.userData) {
                for (const [key, value] of Object.entries(result.userData)) {
                    const input = document.querySelector(`[name="${key}"]`);
                    if (input) {
                        input.value = value;
                    }
                }
            }
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const userData = Object.fromEntries(formData);
            
            chrome.storage.sync.set({ userData: userData }, function() {
                if (chrome.runtime.lastError) {
                    console.error('Error saving user data:', chrome.runtime.lastError);
                } else {
                    const successMessage = document.getElementById('successMessage');
                    if (successMessage) {
                        successMessage.style.display = 'block';
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 3000);
                    }
                }
            });
        });
    } else {
        console.error('Form element not found');
    }
});
