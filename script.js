// Get the form element
const myForm = document.querySelector('#my-form');

// Get the radio button elements
const radioButtons = document.querySelectorAll('input[type="radio"][name="person"]');

// Add event listener to each radio button
radioButtons.forEach(radio => {
  radio.addEventListener('change', (event) => {
    // Get the value of the selected radio button
    const selectedValue = event.target.value;
    
    // Update the action attribute of the form
    myForm.setAttribute('action', selectedValue);
  });
});



