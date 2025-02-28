document.addEventListener("DOMContentLoaded", () => {
    // Fetch profile data from the API endpoint
    fetch("/api/profile")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(data => {
        // If no data is returned, leave fields blank.
        if (!data || Object.keys(data).length === 0) {
          document.getElementById("username").textContent = "";
          document.getElementById("rank").textContent = "";
          document.getElementById("totalDistance").textContent = "";
          document.getElementById("totalClaimed").textContent = "";
          document.getElementById("achievements").innerHTML = "";
          return;
        }
        
        // Update profile info
        document.getElementById("username").textContent = data.username || "";
        document.getElementById("rank").textContent = data.rank ? "#" + data.rank : "";
        
        // Update stats
        document.getElementById("totalDistance").textContent = data.totalDistance ? data.totalDistance + " miles" : "";
        document.getElementById("totalClaimed").textContent = data.totalClaimed ? data.totalClaimed + " sqft" : "";
        
        // Update achievements section
        const achievementsEl = document.getElementById("achievements");
        if (data.achievements && Array.isArray(data.achievements)) {
          achievementsEl.innerHTML = data.achievements.map(achievement => `
            <div class="achievement">
              <p>${achievement.text}</p>
              <img src="images/${achievement.completed ? "check-icon.png" : "x-icon.png"}" class="status-icon" alt="${achievement.completed ? "Completed" : "Not Completed"}">
            </div>
          `).join("");
        } else {
          achievementsEl.innerHTML = "";
        }
      })
      .catch(error => {
        console.error("Error fetching profile data:", error);
        // On error, ensure fields remain blank.
        document.getElementById("username").textContent = "";
        document.getElementById("rank").textContent = "";
        document.getElementById("totalDistance").textContent = "";
        document.getElementById("totalClaimed").textContent = "";
        document.getElementById("achievements").innerHTML = "";
      });
  
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
});  