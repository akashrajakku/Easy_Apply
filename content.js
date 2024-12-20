function autofillForm(userData) {
    const parentDivs = Array.from(document.querySelectorAll('div[jscontroller="sWGJ4b"]'));

    parentDivs.forEach(parentDiv => {
        const labelText_Pre = parentDiv.childNodes[0].firstElementChild.innerText;
        const labelText= labelText_Pre.toLowerCase().replace(/\s+/g, "");

        let fieldValue;

        let fullName = userData.name;
        let trimmedName = fullName.trim();
        let nameParts = trimmedName.split(" ");
        let firstName = nameParts[0];
        let lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ""; // for single name person, last name will be empty string ""


        if (labelText.includes('firstname') && userData.name) { // 1 first name
            fieldValue = firstName;
        } else if (labelText.includes('lastname') && userData.name) { // 2 last name
            fieldValue = lastName;
        } else if (labelText.includes('name') && !labelText.includes('first') && !labelText.includes('last') && userData.name) { // 3 name
            fieldValue = trimmedName;
        } else if ((labelText.includes('email')||labelText.includes('e-mail')) && labelText.includes('official') && userData.emailofficial) { // 4 official email
            fieldValue = userData.emailofficial.trim();
        } else if ((labelText.includes('email') || labelText.includes('e-mail')) && !labelText.includes('official') && userData.email) { // 5 personal email
            fieldValue = userData.email.trim();
        } else if (labelText.includes('rollnumber') || (labelText.includes('roll') && !labelText.includes('enroll')) && userData.universityrollnumber) { // 6 roll number 
            fieldValue = userData.universityrollnumber.trim();
        } else if (labelText.includes('admissionnumber') || labelText.includes('enrollmentnumber') || labelText.includes('admission') && userData.admissionnumber) { // 7 admission number || enrollment number
            fieldValue = userData.admissionnumber.trim();
        } else if (labelText.includes('10') || labelText.includes('10th') || labelText.includes('10th%') || labelText.includes('xth') || labelText.includes('xth%')&& userData.tenth) { // 8 10th %
            fieldValue = userData.tenth.trim();
        } else if (labelText.includes('12') || labelText.includes('12th') || labelText.includes('12th%') || labelText.includes('xiith') || labelText.includes('xiith%') && userData.twelfth) { // 9 12th %
            fieldValue = userData.twelfth.trim();
        } else if (labelText.includes('b.tech') || labelText.includes('b.tech%') || labelText.includes('b.tech.%') || labelText.includes('graduation%') || labelText.includes('graduationmarks') && userData.btech) { // 10 btech %
            fieldValue = userData.btech.trim();
        } else if (labelText.includes('hometowncity')&& userData.hometowncity) { // 11 hometown city
            fieldValue = userData.hometowncity.trim();
        } else if (labelText.includes('hometownstate')&& userData.hometownstate) { // 12  hometown state
            fieldValue = userData.hometownstate.trim();
        } else if (labelText.includes('hometown')&& userData.hometown) { // 13 hometown
            fieldValue = userData.hometown.trim();
        } else if (labelText.includes('currentcity') || labelText.includes('currentlocation') && userData.currentcity) { // 14 current location
            fieldValue = userData.currentcity.trim();
        } else if (labelText.includes('skills') || labelText.includes('technicalskills') && userData.technicalskills) { // 15 technical skills
            fieldValue = userData.technicalskills.trim();
        } else if (labelText.includes('contact') || labelText.includes('phone') || labelText.includes('mobile') && userData.contact) { // 16 contact skills
            fieldValue = userData.contact.trim();
        } else if (labelText.includes('currentaddress') && userData.currentaddress) { // 15 technical skills
            fieldValue = userData.currentaddress.trim();
        } else if (labelText.includes('permanentaddress') && userData.permanentaddress) { // 15 technical skills
            fieldValue = userData.permanentaddress.trim();
        } else if (labelText.includes('programminglanguage') && userData.programminglanguage) { // 15 technical skills
            fieldValue = userData.programminglanguage.trim();
        } else if (labelText.includes('backlog') && userData.backlog) { // 15 technical skills
            fieldValue = userData.backlog.trim();
        } else if (labelText.includes('dob') || labelText.includes('birth') && userData.dob) { // 15 technical skills
            fieldValue = userData.dob.trim();
        } 
        

        if (fieldValue) {
            const inputField = parentDiv.childNodes[1].querySelector('input[type="text"], input[type="email"], input[type="date"], input[type="number"]');
            
            if (inputField) {
                inputField.value = fieldValue;

                const event = new Event('input', { bubbles: true });
                inputField.dispatchEvent(event);
            }
        }
    });
}


chrome.storage.sync.get(['userData'], function(result) {
    if (chrome.runtime.lastError) {
        console.error('Error retrieving user data:', chrome.runtime.lastError);
    } else if (result.userData) {
        autofillForm(result.userData);
    }
});
