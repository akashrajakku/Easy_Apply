document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    console.log(form);
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //getting form data
        
        const formData= new FormData(form);
        const myData={};

        for(const[key, value] of formData){
            myData[key]= value;
        }

        console.log(myData);

        setTimeout(function() {
            successMessage.classList.remove("hidden");
            form.reset();
            setTimeout(function() {
                successMessage.classList.add("hidden");
            }, 3000); // Hide success message after 3 seconds
        }, 1000); // Simulate server response delay
    });
});
