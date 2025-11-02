
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   /*First Name */
   const firstName = document.getElementById('first-name');
   const firstNameError = document.getElementById('first-name-error');
   const firstNameValue = firstName.value.trim();

   if(firstNameValue === '' || firstNameValue.length < 3) {
      firstNameError.textContent = 'This field is required';
      firstName.classList.add('error');
   } 
    else {
      firstNameError.textContent = '';
      firstName.classList.remove('error')
   }

   /*Last Name */
   const lastName = document.getElementById('last-name');
   const lastNameError = document.getElementById('last-name-error');
   const lastNameValue = lastName.value.trim();

   if(lastNameValue === '' || lastNameValue.length < 3) {
      lastNameError.textContent = 'This field is required'
      lastName.classList.add('error')
   } else {
      lastNameError.textContent = '';
      lastName.classList.remove("error")
   }

   /*Email */
   const emailInput = document.getElementById('email-address');
   const emailError = document.getElementById('email-error');
   const emailValue = emailInput.value.includes('@') && emailInput.value.includes('.')

   if(!emailValue) {
      emailError.textContent = 'Please enter a valid email address';
      emailInput.classList.add('error')
   } else {
      emailError.textContent = ' ';
      emailInput.classList.remove('error')
   }

   /* Text-Area */
   const textArea = document.getElementById('textarea');
   const textAreaError = document.getElementById('textarea-error');
   const textAreaValue = textArea.value.trim();

   if(textAreaValue === '' || textAreaValue < 10) {
      textAreaError.textContent = 'This field is required!';
      textArea.classList.add('error')
   } else {
      textAreaError.textContent = ' ';
      textArea.classList.remove('error')
   }

   /* Query/Radio-Button */
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
      radioError.textContent = 'Please select a query type';
   } else {
      radioError.textContent = ' '
   }

   /* Checkbox */
   const checkbox = document.getElementById('consent');
   const checkboxError = document.getElementById('checkbox-error');
   const checkboxValue = checkbox.checked;

   if(!checkboxValue) {
      checkboxError.textContent = 'To submit this form, please consent to being contacted';
   }  else {
      checkboxError.textContent = '';
   }

   /*Message popup */
   const popup = document.getElementById('message-popup')
   const isFirstNameValid = firstNameValue !== '' && firstNameValue.length >= 3;
   const islastNameValid = lastNameValue !== '' && lastNameValue.length >= 3;
   const isEmailValid = emailValue;
   const isTextAreaValid = textAreaValue !== '' && textAreaValue.length >= 10;
   const isCheckboxValid = checkboxValue;

   if(isFirstNameValid && islastNameValid && isEmailValid && isTextAreaValid && isCheckboxValid) {
      popup.classList.add('show')

      setTimeout(() =>{
         popup.classList.remove('show')
      }, 3000)
   }
})

/* Input event listener */


// First name
const firstName = document.getElementById('first-name')
const firstNameError = document.getElementById('first-name-error');
firstName.addEventListener("input", function() {
   const firstNameValue = firstName.value.trim()

   if(firstNameValue === '' || firstNameValue.length < 3) {
      firstNameError.textContent = 'This field is required';
      firstName.classList.add('error');
   } 
    else {
      firstNameError.textContent = '';
      firstName.classList.remove('error')
   }
})

// Last name
const lastName = document.getElementById('last-name')
const lastNameError = document.getElementById('last-name-error');
lastName.addEventListener("input", function() {
   const lastNameValue = lastName.value.trim()

   if(lastNameValue === '' || lastNameValue.length < 3) {
      lastNameError.textContent = 'This field is required';
      lastName.classList.add('error');
   } 
    else {
      lastNameError.textContent = '';
      lastName.classList.remove('error')
   }
})

// Email
const emailInput = document.getElementById('email-address');
const emailError = document.getElementById('email-error');

emailInput.addEventListener("input", function() {
   const emailValue = emailInput.value.includes('@') && emailInput.value.includes('.')

   if(!emailValue) {
   emailError.textContent = 'Please enter a valid email address';
   emailInput.classList.add('error')
} else {
   emailError.textContent = ' ';
   emailInput.classList.remove('error')
}
})

// Textarea 
const textArea = document.getElementById('textarea')
const textAreaError = document.getElementById('textarea-error')

textArea.addEventListener("input", function() {
   const textAreaValue = textArea.value.trim()

   if(textAreaValue === '' || textAreaValue < 10) {
      textAreaError.textContent = 'This field is required!';
      textArea.classList.add('error')
   } else {
      textAreaError.textContent = ' ';
      textArea.classList.remove('error')
   }
})

// Checkbox
const checkbox = document.getElementById('consent')
const checkboxError = document.getElementById('checkbox-error');

checkbox.addEventListener("change", function() {
   const checkboxValue = checkbox.checked;

   if(!checkboxValue) {
      checkboxError.textContent = 'To submit this form, please consent to being contacted';
   }  else {
      checkboxError.textContent = '';
   }
})

// Radio button
const radioButtons = document.getElementsByName('Enquiry');
const radioError = document.getElementById('query-error');

radioButtons.forEach( radio =>{
   radio.addEventListener("change", function() {
      let radioChecked = false;

      for(let i = 0; i <radioButtons.length; i++) {
         if(radioButtons[i].checked) {
            radioChecked = true;
            break
         }
      }

      if(!radioChecked){
         radioError.textContent = "Please select a query type"
      } else {
         radioError.textContent = ' '
      }
   })
})
  




