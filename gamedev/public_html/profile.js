document.addEventListener("DOMContentLoaded", async () => {
  // Fetch the profile data from your API endpoint.

  // Clear all text fields 
  document.getElementById("username").textContent = "";
  document.getElementById("rank").textContent = "";
  document.getElementById("totalDistance").textContent = "";
  document.getElementById("totalClaimed").textContent = "";
  //document.getElementById("knockouts").textContent = "";
  document.getElementById("achievements").innerHTML = "";

  // API URL for the backend
  const API_URL = 'https://run-for-your-life-api.onrender.com';
  // Retrieve the user_id from local storage
  const user_id = localStorage.getItem('user_id');
  if (!user_id) {
    console.error("No user_id found in local storage!");
    return; // Stop execution if user_id is missing
  }


  console.log("user_id: ", user_id);
  try {
    // Send the above entered data to the database function to create a new user
    const response = await fetch(`${API_URL}/api/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Send the username, email, passowr
      body: JSON.stringify({ user_id })
    });

    const data = await response.json();
    console.log(data);

    // Update the profile info section.
    document.getElementById("username").textContent = data.username || "";
    document.getElementById("rank").textContent = data.rank ? "#" + data.rank : "";

    // Update the stats section.
    document.getElementById("totalDistance").textContent = data.totalDistance ? data.totalDistance + " miles" : "";
    document.getElementById("totalClaimed").textContent = data.totalClaimed ? data.totalClaimed + " sqft" : "";
    //document.getElementById("knockouts").textContent = data.knockouts || "";

  } catch (error) {
    console.error("Error:", error);
  }

  // Modal (User Guide) Logic
  const guideButton = document.getElementById("guideButton");
  const guideModal = document.getElementById("guideModal");
  const closeButton = document.querySelector(".modal .close");

  // Open modal when button is clicked
  guideButton.addEventListener("click", () => {
    guideModal.style.display = "block";
  });

  // Close modal when the close button (×) is clicked
  closeButton.addEventListener("click", () => {
    guideModal.style.display = "none";
  });

  // Close modal if user clicks outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === guideModal) {
      guideModal.style.display = "none";
    }
  });
  // Update the achievements section.
  /*const achievementsContainer = document.getElementById("achievements");
  if (data.achievements && Array.isArray(data.achievements)) {
    achievementsContainer.innerHTML = data.achievements.map(achievement => `
            <div class="achievement">
              <p>${achievement.text}</p>
              <img src="images/${achievement.completed ? "check-icon.png" : "x-icon.png"}" class="status-icon" alt="${achievement.completed ? "Completed" : "Not Completed"}">
            </div>
          `).join("");
  } else {
    achievementsContainer.innerHTML = ""; 
  } */
});