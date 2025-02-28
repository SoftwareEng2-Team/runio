document.addEventListener("DOMContentLoaded", async () => {
  // Fetch the profile data from your API endpoint.

  // API URL for the backend
  const API_URL = 'https://run-for-your-life-api.onrender.com';
  // Retrieve the user_id from local storage
  const user_id = localStorage.getItem('user_id');
  console.log("user_id: ", user_id);
  try {
    // Send the above entered data to the database function to create a new user
    const response = await fetch(`${API_URL}/api/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Send the username, email, passowr
      body: JSON.stringify({ user_id })
    });
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }


  // If no data is returned, clear all fields.
  if (!data || Object.keys(data).length === 0) {
    document.getElementById("username").textContent = "";
    document.getElementById("name").textContent = "";
    document.getElementById("rank").textContent = "";
    document.getElementById("totalDistance").textContent = "";
    document.getElementById("totalClaimed").textContent = "";
    document.getElementById("knockouts").textContent = "";
    document.getElementById("achievements").innerHTML = "";
    return;
  }

  // Update the profile info section.
  document.getElementById("username").textContent = data.username || "";
  document.getElementById("name").textContent = data.name || "";
  document.getElementById("rank").textContent = data.rank ? "#" + data.rank : "";

  // Update the stats section.
  document.getElementById("totalDistance").textContent = data.totalDistance ? data.totalDistance + " miles" : "";
  document.getElementById("totalClaimed").textContent = data.totalClaimed ? data.totalClaimed + " sqft" : "";
  document.getElementById("knockouts").textContent = data.knockouts || "";

  // Update the achievements section.
  const achievementsContainer = document.getElementById("achievements");
  if (data.achievements && Array.isArray(data.achievements)) {
    achievementsContainer.innerHTML = data.achievements.map(achievement => `
            <div class="achievement">
              <p>${achievement.text}</p>
              <img src="images/${achievement.completed ? "check-icon.png" : "x-icon.png"}" class="status-icon" alt="${achievement.completed ? "Completed" : "Not Completed"}">
            </div>
          `).join("");
  } else {
    achievementsContainer.innerHTML = "";
  }
})
  .catch(error => {
    console.error("Error fetching profile data:", error);
    // On error, ensure all fields remain blank.
    document.getElementById("username").textContent = "";
    document.getElementById("name").textContent = "";
    document.getElementById("rank").textContent = "";
    document.getElementById("totalDistance").textContent = "";
    document.getElementById("totalClaimed").textContent = "";
    document.getElementById("knockouts").textContent = "";
    document.getElementById("achievements").innerHTML = "";
  });
