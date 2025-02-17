document.addEventListener("DOMContentLoaded", () => {
    const leaderboardContainer = document.querySelector(".leaderboard-container");

    // Placeholder players
    const players = [
        { name: "John Running", score: 120 },
        { name: "Unemployed Friend", score: 20 },
        { name: "Hacker", score: 50 },
        { name: "I am in third place", score: 40 }
    ];

    // Sort players by score in descending order
    players.sort((a, b) => b.score - a.score);
 
    players.forEach((player, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Assign a class for first, second, or third place
        let rank = "";
        if (index === 0) {
            card.classList.add("first-place-div");
            rank = "Rank 1";
        } else if (index === 1) {
            card.classList.add("second-place-div");
            rank = "Rank 2";
        } else if (index === 2) {
            card.classList.add("third-place-div");
            rank = "Rank 3";
        }

        card.innerHTML = `
            <div class="top-row">
                <p class="name">${player.name}</p>
                <p class="score">${player.score} mi.</p>
            </div>
            <p class="rank">${rank}</p>
        `;
        leaderboardContainer.appendChild(card);
    });
});
