const API_URL = "https://run-for-your-life-api.onrender.com";  
async function fetchLeaderboard() {
    try {
        let response = await fetch(`${API_URL}/leaderboard`);
        let data = await response.json();
        console.log("Leaderboard Data:", data);
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
    }
}

async function registerUser(username, email, password) {
    try {
        let response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });
        let data = await response.json();
        console.log("User Registration Response:", data);
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

fetchLeaderboard();
