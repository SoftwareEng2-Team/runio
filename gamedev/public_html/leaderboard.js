document.addEventListener("DOMContentLoaded", () => {
    const leaderboardContainer = document.querySelector(".leaderboard-container");

    //Placeholder players
    const players = [
        { name: "John Running", score: 1200 },
        { name: "Unemployed Friend", score: 700 },
        { name: "Hacker", score: 500 },
    ];

    players.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${player.name}</h2>
            <p>Score: ${player.score}</p>
        `;
        leaderboardContainer.appendChild(card);
    });
});