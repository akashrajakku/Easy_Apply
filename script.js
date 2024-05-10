document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData);

        // Simulate sending data to server (replace this with actual code to send data to your server)
        setTimeout(function() {
            successMessage.classList.remove("hidden");
            form.reset();
            setTimeout(function() {
                successMessage.classList.add("hidden");
            }, 3000); // Hide success message after 3 seconds
        }, 1000); // Simulate server response delay
    });
});
