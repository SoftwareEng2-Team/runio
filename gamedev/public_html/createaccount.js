document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", async function (event) {
        event.preventDefault();
        
        // Hide all error messages when the page loads
        const passwordError = document.getElementById('password_error');
        passwordError.style.display = "none";
        const accountError = document.getElementById('account_error');
        accountError.style.display = "none";

        // Grab the text input values from the user
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;

        const API_URL = 'https://run-for-your-life-api.onrender.com/';

        // If the passwords match, send a POST request to the API
        if (password === confirm_password) {
            passwordError.style.display = "none";
            try {
                const response = await fetch(`${API_URL}/api/users/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, username, password })
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    alert("successful!");
                    localStorage.setItem('user_id', data.user_id);
                    window.location.href = "map.html";
                } else {
                    errorMessage.style.display = "block";
                    alert("failed!");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        // If the two passwords do not match, display an error message
        } else {
            passwordError.style.display = "block";
        }
    });
});