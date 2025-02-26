document.addEventListener("DOMContentLoaded", () => {
    // Mock user data (replace with backend fetch calls later)
    const userData = {
        username: "John11",
        name: "John Doe",
        rank: "#3",
        distanceRan: "25 miles",
        distanceClaimed: "696m sqft",
        knockouts: "8",
        achievements: [true, false, true] // True = completed, False = not completed
    };

    // Update profile info
    document.getElementById("username").innerText = userData.username;
    document.getElementById("name").innerText = userData.name;
    document.getElementById("rank").innerText = userData.rank;
    document.getElementById("distanceRan").innerText = userData.distanceRan;
    document.getElementById("distanceClaimed").innerText = userData.distanceClaimed;
    document.getElementById("knockouts").innerText = userData.knockouts;

    // Update achievements
    const achievementIcons = document.querySelectorAll(".status-icon");
    userData.achievements.forEach((status, index) => {
        achievementIcons[index].src = status ? "images/check-icon.png" : "images/x-icon.png";
        achievementIcons[index].alt = status ? "Completed" : "Not Completed";
    });
});
