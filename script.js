
// First Name
document.getElementById('form').addEventListener('submit', function(event) {
   const firstName = document.getElementById('first-name');
   const firstNameError = document.getElementById('first-name-error');
   const nameValue = firstName.value.trim();

   if (nameValue === '' || nameValue.length < 3) {
    firstNameError.style.display = ' block';
    firstName.style.borderColor = 'hsl(0, 66%, 54%)';
    event.preventDefault();
   } else {
    firstNameError.style.display = 'none';
    firstName.style.borderColor = 'hsl(169, 82%, 27%)';
   }
})

// Last Name
document.getElementById('form').addEventListener('submit', function(event) {
   const lastName = document.getElementById('last-name');
   const lastNameError = document.getElementById('last-name-error');
   const lastValue = lastName.value.trim();

   if(lastValue === '' || lastValue.length < 3) {
      lastNameError.style.display = 'block';
      lastName.style.borderColor = 'hsl(0, 66%, 54%)'
      event.preventDefault();
   }
   else {
      lastNameError.style.display = 'none';
      lastName.style.borderColor = 'hsl(169, 82%, 27%)'
   }
})

// Email
document.getElementById('form').addEventListener('submit', function(event) {
   const emailInput = document.getElementById('email-address');
   const emailError = document.getElementById('email-error');
   const emailValue = emailInput.value.includes('@') && emailInput.value.includes('.')

   if(emailValue === false) {
      emailError.style.display = 'block';
      emailInput.style.borderColor = 'hsl(0, 66%, 54%)'
      event.preventDefault();
   } else {
      emailError.style.display = 'none';
      emailInput.style.borderColor = 'hsl(169, 82%, 27%)'
   }
}) 

// Text-Area
document.getElementById('form').addEventListener('submit', function(event) {
   const textArea = document.getElementById('textarea');
   const textAreaError = document.getElementById('textarea-error');
   const textAreaValue = textArea.value.trim();

   if(textAreaValue === '' || textAreaValue < 10) {
      textAreaError.style.display = 'block';
      textArea.style.borderColor = 'red'
      event.preventDefault();
   } else {
      textAreaError.style.display = 'none';
      textArea.style.borderColor = 'hsl(169, 82%, 27%)'
   }
})
// Query/Radio-Button
document.getElementById('form').addEventListener('submit', function(event) {
   const radioButton = document.getElementsByName('Enquiry');
   const radioError = document.getElementById('query-error');
   let radioChecked = false;

   for (let i = 0; i < radioButton.length; i++) {
      if (radioButton[i].checked) {
         radioChecked = true;
         break;
      }
   }

   if (!radioChecked) {
      radioError.style.display = 'block';
      event.preventDefault();
   } else {
      radioError.style.display = 'none'
   }
})



// Checkbox
document.getElementById('form').addEventListener('submit', function(event) {
   const checkbox = document.getElementById('consent');
   const checkboxError = document.getElementById('checkbox-error');
   const checkboxValue = checkbox.checked;

   if(!checkboxValue) {
      checkboxError.style.display = 'block';
      event.preventDefault();
   }  else {
      checkboxError.style.display = 'none';
   }
})

