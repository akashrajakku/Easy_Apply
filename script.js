document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //getting form data
        
        //https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

        const formData= new FormData(form);
        myData={};

        for(const[key, value] of formData){
            myData[key]= value;
        }

        window.localStorage.setItem('myData', JSON.stringify(myData));


        setTimeout(function() {
            successMessage.classList.remove("hidden");
            form.reset();
            setTimeout(function() {
                successMessage.classList.add("hidden");
            }, 3000); // Hide success message after 3 seconds
        }, 1000); // Simulate server response delay
    });
});
