document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", async function (event) {
        const errorMessage = document.getElementById('login-error-message');
        errorMessage.style.visibility = "hidden";
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const API_URL = 'https://run-for-your-life-api.onrender.com';

        try {
            const response = await fetch(`${API_URL}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("redirecting...");
                localStorage.setItem('user_id', data.user_id);
                window.location.href = "https://run-for-your-life.onrender.com/map.html";
            } else {
                errorMessage.style.display = "block";
                console.log("failed!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});