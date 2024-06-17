document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Get selected food options
    const foodChoices = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(food => {
        foodChoices.push(food.value);
    });

    // Ensure at least 2 food options are selected
    if (foodChoices.length < 2) {
        alert("Please select at least 2 food options.");
        return;
    }

    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Create a new row and cells
    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = foodChoices.join(', ');
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    // Clear the form
    document.getElementById('userForm').reset();
});
