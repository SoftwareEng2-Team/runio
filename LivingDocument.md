*Run For Your Life!*
James Nichols, Brian Munger, Keona Abad, Shi-Ru Huang, Connor Sun, Calvin Chen, Evan Albert

Abstract: 
Competitive running game that simulates territory acquisition via a completed running route. Players compete by claiming the most space on a shared real-world map each week. To claim space one must create and complete a running circuit of any length. Upon completion of said circuit, players are rewarded with all map space within that circuit being claimed as their territory regardless of whether it is already claimed. The map displays currently existing territories and all in-progress routes by players. A leaderboard will also display the current square miles each player has claimed for that week. All scores and territories are reset every week and the top player is given a flair for the following week.

Goal: 
Our team goal is to have a working game that takes in user location to track their movement. The game mechanics are based on the game Paper.io and allow users to compete against each other each day claiming land.

Current practice: 
Similar applications exist to motivate users to engage in physical activity while progressing in-game. For example, Pokemon Go utilizes the user's location to catch Pokemon, access Pokestops, and battle other trainers. We aim to develop a game that encourages users to participate in healthy movements such as running and walking by creating friendly competition. Other mobile applications exist, such as Strava and Nike Run Club, that allow users to record their runs. However, creating a community-based game will motivate users to compete by running. 

Novelty: 
We will use JavaScript to code the program with a location-tracking API. This allows the service to receive live updates and allows other users to compete for land. While other apps offer interactive maps that users can interact with, our game will enable people to compete over the land of the map in a territory-claiming style similar to paper.io.

Effects: 
New and improved “.io game” genre for runners but with required real-time physical activities such as routes to run to claim plots of land. It will create friendly competition for local runners to compete with each other regarding speed and distance.

Use Cases: 
Location tracking that maps the path the user runs. 
Involve friendly competition by allowing users to go against other users, fighting to claim the most amount of land. 
Allow users to ‘cut off’ each other, and eliminate one of their lives. A user can cut off another user’s path by running through their path and completing a route before that user. 
Leaderboard that shows the top runners and largest land owners currently.

Stretch goals:
Security access for IP address.
Expand the game map outside of the Corvallis OSU campus.
Monetize the game to make money.
Stop cheating (using a car/bike).

Non-functional Requirements:
Scalability: The app will be able to handle one to two concurrent players during its initial phase and will be able to handle more players long term.

Usability: The app will provide interactive and engaging experiences and will be tested with individuals to help identify better accessibility and ease of use.

Security and Privacy: The user will be able to view and manage their data. The app will share information regarding their location, letting the user know when their location is used during their gameplay session.

External Requirements:
It can be expected that the app will encounter location errors, to combat this we will ensure that the location during gameplay is constantly updated and will let the user know when the internet connection is lost. 

We will include a public URL on our GitHub that will allow potential users to download the app easily and will have instructions on how to start and play the game.

Included on our GitHub we will have a clear walkthrough on the development of our game and our thought processes behind the app. 

Communicating with our team, we will address strengths and weaknesses in ourselves understanding where it will be best to put numbers.


Technical approach: 
Planning to use JavaScript/HTML for the app layout and general display features. Plan to use Python for location grabbing and more technical back-end features. May experiment with Flutter to aid in the development process. 

Risk assessment:

GPS location tracking: Likelihood: Low Impact: High Evidence: Base on our team members previous experience no one has done the location tracking, so it might be a challege for us, since if it not working then basically the whole game will be crash down. Also, we have to think about the GPS signal issues, permission restrictions. Steps to reduce risk: We are using the Google Geolocation API, it combine GPS, Wifi, cell tower data and IP address to increse the accuracy of tracking, also redue the location tracking issuea. The geolocation help us to improve the issue of accuracy, real-time speed, and reliability. Detecting the problem: We're going to test by taking our device and move around on the OSU campus once we finished implement it, to check if the location tracking is accurate and function without lacking it. Also player have to allow the permission for tracking on thier own device. Mitigation plan: If the Geolocation API failed, then we will recheck all the implemetation we done on the location tracking. I don't think we are going to re-implement a new location tracking since Geolocation API is one of the most accurate and easy to implement.

Speed limit for players to prevent cheating: Likelihood: High Impact: High Evidence: Not just our games faced this kind of issue, there are games that plyers using VPN, other GPS app to control the speed. Steps to reduce risk: Implement a speed limit function that detect once the plyer's speed exceed over fast-walk speed limit, or dected user jumop for one location to other location. Detecting the problem: Do some automatic checks that ascertain the speed of movement against set physical benchmarks. Mitigation plan: Modify and improve the logic of speed detection according to the behavioral patterns observed from the player.

real-time multiplayer interaction: Likelihood: Medium Impact: High Evidence: The mutiplayer synchronization issue happens a lot in different real-time games nowadays, something like lacking, desynchronization, it can cause a major problem to how the player's in game sensetivity. Steps to reduce risk: It can be solve by implementing server-side conflict or interact solution by dealing with cliaming route or territory. Detecting the problem: Keep track on two players claim the same route at the same time, see if the sever-side deal with the problem. Mitigation plan: The server-side should be able to detect which user comes first, and able to handle it without occuring any error.

Database performance: Likelihood: Medium Impact: High Evidence: Since this is a game need player login, and allow recording player's data, it is important to have a worth reliable database to store all player's information and game record. Steps to reduce risk: It can be solve by using MongoDB, it can fast reads/writes, flexible schema, and automatic indexing improves MongoDB performance. This allows for rapid updates to the leaderboard and easy claiming of routes. MongoDB also ensures smooth real time gameplay through its caching and scalability features. Detecting the problem: It can be detect by implement function such as, monitoring, logging, and query optimization. Mitigation plan: If the database is not working or crashed, the having a replica as a backup will be a best option to support.

Sever performance: Likelihood: Medium Impact: High Evidence: When a small amout of user becomes to a huge scale of user the server might crash due to not able handle multiple player logi at the same time. Steps to reduce risk: We are usig oregon state university's engineering server as our sever, which can be seure, be able to handle multiple user cenario. Detecting the problem: it would be great to monitor OSU server resource usage. Mitigation plan: If the server crash down then the best way is to contact OSU IT support.

Risk assessment:

  GPS location tracking:
    Likelihood: Low
    Impact: High
    Evidence: Base on our team members previous experience no one has done the location tracking, so it might be a challege for us, since if it not working then basically the whole                   game will be crash down. Also, we have to think about the GPS signal issues, permission restrictions.
    Steps to reduce risk: We are using the Google Geolocation API, it combine GPS, Wifi, cell tower data and IP address to increse the accuracy of tracking, also redue the location                               tracking issuea. The geolocation help us to improve the issue of accuracy, real-time speed, and reliability.
    Detecting the problem: We're going to test by taking our device and move around on the OSU campus once we finished implement it, to check if the location tracking is accurate and                              function without lacking it. Also player have to allow the permission for tracking on thier own device.
    Mitigation plan: If the Geolocation API failed, then we will recheck all the implemetation we done on the location tracking. I don't think we are going to re-implement a new                             location tracking since Geolocation API is one of the most accurate and easy to implement.

  Speed limit for players to prevent cheating:
    Likelihood: High
    Impact: High
    Evidence: Not just our games faced this kind of issue, there are games that plyers using VPN, other GPS app to control the speed.
    Steps to reduce risk: Implement a speed limit function that detect once the plyer's speed exceed over fast-walk speed limit, or dected user jumop for one location to other location.
    Detecting the problem: Do some automatic checks that ascertain the speed of movement against set physical benchmarks. 
    Mitigation plan: Modify and improve the logic of speed detection according to the behavioral patterns observed from the player.

  real-time multiplayer interaction:
    Likelihood: Medium
    Impact: High
    Evidence: The mutiplayer synchronization issue happens a lot in different real-time games nowadays, something like lacking, desynchronization, it can cause a major problem to how                 the player's in game sensetivity.
    Steps to reduce risk: It can be solve by implementing server-side conflict or interact solution by dealing with cliaming route or territory.
    Detecting the problem: Keep track on two players claim the same route at the same time, see if the sever-side deal with the problem.
    Mitigation plan: The server-side should be able to detect which user comes first, and able to handle it without occuring any error.

  Database performance:
    Likelihood: Medium
    Impact: High
    Evidence: Since this is a game need player login, and allow recording player's data, it is important to have a worth reliable database to store all player's information and game                  record.
    Steps to reduce risk: It can be solve by using MongoDB, it can fast reads/writes, flexible schema, and automatic indexing improves MongoDB performance. This allows for rapid                                  updates to the leaderboard and easy claiming of routes. MongoDB also ensures smooth real time gameplay through its caching and scalability features.
    Detecting the problem: It can be detect by implement function such as, monitoring, logging, and query optimization.
    Mitigation plan: If the database is not working or crashed, the having a replica as a backup will be a best option to support.

  Sever performance:
    Likelihood: Medium
    Impact: High
    Evidence: When a small amout of user becomes to a huge scale of user the server might crash due to not able handle multiple player logi at the same time.
    Steps to reduce risk: We are usig oregon state university's engineering server as our sever, which can be seure, be able to handle multiple user cenario.
    Detecting the problem: it would be great to monitor OSU server resource usage.
    Mitigation plan: If the server crash down then the best way is to contact OSU IT support.

Team members and roles/responsibilities:
James Nichols - Project Manager  
Brian Munger - Implement User Interface; Assist In Back End 
Keona Abad - Quality Assurance
Shi-Ru Huang - Programmer & Tester
Connor Sun - Gameplay Design and Tester
Calvin Chen - Tester
Evan Albert - Quality Assurance

Team process:
We will be using Visual Studio code for the main part of our programming as all of our team members have experience using it in past projects. We have yet to discover other possible alternatives and ways we want to implement API location gathering.

James Nichols, Project Manager: 
As the project manager my main job will be ensuring that the team stays on track of deadlines and members know what their tasks are. Since each member has so much going on it’ll be important for me to be on top of things and able to divide up work so member feels too overwhelmed. I was assigned this role by the staff (professor) but I believe I will be able to excel at this role and help guide our team to a successful project.

Brian Munger, Implement User Interface:
Per my role of implementing the user interface for our game, it is my job to design an interface where the user can effectively navigate the app, see their progress, and perform other necessary actions. In doing this, I will communicate closely with Connor to bring his design to life. I intend to use Flutter to implement the user interface for our game. 

Keona Abad, Quality Assurance:
As the quality assurance role for our team, I need to ensure that the project meets all functional and quality requirements. I will have to design and then implement test plans, execute the tests, and then document the results, this way we can identify any issues early. Working closely with the whole team, I will make sure that our software is reliable, bug-free, and user-friendly.

Shi-Ru Huang, Programmer & Tester:
Being a programmer and tester, it is my duty to stay on track every single week, making sure that all the programs that I’ve done are implemented correctly, also as a tester, I will have to check whether the program matches the requirements and specifications. In the meantime, is it extremely important to stay in contact and be proactive with all my team members, make sure we all are on the same page.

Connor Sun, Game Design/Programmer:
A game designer/programmer creates and implements game-related features. The role is vital as our entire project centers around a gameplay loop that will attract and keep users engaged. I am justifiable in this role as I came up with the project idea, made several improvements to the initial design, and have prior experience designing games and balancing existing features.

Calvin Chen, Tester:
The role of a tester is to ensure the quality, reliability, and functionality of the software being developed. It will be my duty to test the product for bugs, usability issues, and compliance with requirements. I will also create test plans, write test cases, and document the results. This role is essential for our project because testing ensures that the final product meets user expectations and minimizes costly errors. 

Evan Albert, Quality Assurance:
Being the quality assurance means that I have the responsibility to ensure that the app development is on track and meets the desired outcomes throughout production. I will ensure that any bugs or possible structure flaws are identified early on and addressed accordingly.

Test Plans and Bugs:
We plan to test the key features, including geolocation tracking, server responsiveness, and the accuracy of claimed territory, along with the number of points the users get.

Geolocation tracking;
Unit testing: Each function will be tested as development goes on. The test will include different features such as how accurate the location tracking API is, also how the marker appears on the map. By testing each function in isolation we can tell quickly what the problem may be and make corrections or workarounds.

System testing: Test how the location tracking connects between the point calculation functions and the mapping API. By comparing the results that the system gives to the expected results we can determine if everything is working smoothly. 

Usability testing: Since our product is a game that many will use usability testing will be the most important. Since the geolocation is not able to be interacted with by the user it shouldn't be a major concern. However, since our product involves location tracking we will have to have users test to see if they can use our app to track people. 

Example test suites: 
1) Enter random locations to see if the location marker properly tracks them.
2) Enter random location sizes to see if the points are accurately returned and calculated.
3) Have random friends or people run our website to determine if the user can understand the layout and whether they can use the app to track other users' data.



Server Responsiveness;
Unit testing: Each function will be tested as development goes on. The test will include different features such as how the server runs depending on the amount of users currently on, also how user quickly the site can update itself to display new data. Testing each feature in isolation allows for obvious bugs to be found in corrected. 

System testing: Test how the server handles taking in data from multiple sources, such as the location tracking and the user database. Since the app will be running 24 hours a day, the server will need to be able to handle all the features and accurately update the information provided by the users.

Usability testing: Since our product is a game that many will use usability testing will be the most important. The server will need to be able to respond to users at a near-instant rate. The server will also need to be tested with different amounts of players online. Since the responsiveness will most likely change depending on the amount of users.

Example test suites: 
1) Have only one or two users on the server and test responsiveness.
2) Have many users on the server, most likely from class, and determine if the server can handle that or if it will need to implement multiple servers.
3) Have users enter the server on different levels of connection and test responsiveness; mobile data, Wi-Fi, and low mobile data (1-2 bars). 



Territory Claimed and Points Scored;
Unit testing: Each function will be tested as development goes on. The test will include different features such as how accurate the location tracking API is with creating territories, and that the points are accurately calculated based on territory. By testing each feature in isolation it will reveal if we need to change weights for points or alter how territories are created.

System testing: Test how the location tracking connects between the point calculation functions and the mapping API. By comparing the results that the system gives to the expected results we can determine if everything is working smoothly. 

Usability testing: Since our product is a game that many will use usability testing will be the most important. The most significant feature to be tested will be how the territories are displayed. These will be a key feature for the users to determine how other users are doing and what their territory looks like. Another major feature that will need a lot of testing and adjusting is the points calculations. Since some areas will be more difficult to claim the points for it will need to be adjusted to reflect that. 

Example test suites: 
1) Create random territories and ensure the points properly reflect the size.
2) Enter random weights for different map areas and make sure they are properly reflected in the point calculations.
3) Have multiple users at once claim territory to make sure the functions can handle multiple inputs at once.

Timeline with milestones:
Week 3: Develop a living document and present our app idea. 

Week 4: Begin a heavier technical approach to our app. Figure out exactly what front-end and back-end services we will be using, making sure they fit our project idea. Communicate with the team to figure out member qualities and comfort levels. Allocate members that can work on front-end and back-end frameworks.              	

Week 5: Start development of the app. Attempt to create a User interface that communicates with the backend. Focus on completing the main functions of the application: user location tracking and leaderboard score tracking.

Week 6: Mid-term presentation. Share what we have so far, see results, and address any concerns.

Week 7: Continue developing the app, focusing on making sure the main functions are implemented.

Week 8: Develop user interface and work on polishing up designs. Work on completing/implementing mobile functions. 

Week 9: Implement the last features as necessary. Finalize and test the game, and ensure it works to our expectations. 

Week 10: Prepare the final presentation demonstrating the work we completed with the app. 

Coding guideline: 

With our project, we are implementing our design to be accessible through a webpage. This way, it can be utilized on any device without installation. Additionally, all of the group members have experience with website development, making it a smart choice. We are using HTML to structure our web pages, CSS to style them, and JavaScript to handle the functionality of our project.

For HTML, we will always declare the document type at the beginning (for example, ). We will use lowercase element names, as this is the industry standard, and we will open and close all elements on different lines.
For CSS, we will find a style for the webpage that we all agree upon. If someone disagrees with a stylistic choice, we will find an alternative that we can agree on. Comments should be used in CSS documents to show what different style blocks affect.
Finally, for JavsScript, we will declare variables that have meaningful names that give us insight into what they store. Comments will be used to explain what different code blocks do, making it easy for other group members to understand. Spacing around operators and general indentation of code will be implemented to increase readability.
For all languages, using caution to periodically enter a new line if the current line gets too long will increase readability. Using 'camel case' for naming variables will keep the code consistent and easy to read.


Git Repo Link: 
Organization: https://github.com/SoftwareEng2-Team 
Repository: https://github.com/SoftwareEng2-Team/runio 


Trello:
https://trello.com/b/OsvSTA7E/pt1-run-for-your-life

1. Software architecture:

Frontend: Using the school's public_html we will build the frontend using HTML, CSS and Javascript.

Pros: Offer us a free hosting server to use to allow communication between clients.

Con: Might have restrictions that we have yet to realize.

Alternative: We can look into other server hosting options such as Render.com and AWS EC2.

Backend: If allowed it will run on school's public server. If applicable we will use MongoDB to store data for our game. We will use Node.js (real-time sync) to retrieve player data.

Pros: Real-time updates and can use microservices.

Cons: Could have possible database limitations.

Alternatively: We will use PHP (over-time sync) to retrieve data.

Pros: Wide Compatibility. Simple to Use. Good and fetching data. Has good performance as it can run server-sided.

Cons: Not ideal for real-time data use. When dealing with large data can have performance issues.

Communicating between frontend and backend we could use: HTTP requests (Rest API) for over-time updates.

Pros: We are more familiar with HTTP requests. Simple as it uses standard HTTP methods. Works with JavaScript.

Cons: Slower than WebSockets for real-time.

Alternatively: We can use WebSockets for real-time updates.

Pros: Offers real-time communication that is faster than HTTP requests. Efficient with bandwidth usage. Reduces server load with fewer requests.

Cons: More complex compared to HTTP requests. Not always supported and could run into complications when attempting to use it with a server.

Extra:

MongoDB Schema (NoSQL): Main Entities:

Player statistics: Score. Level. Distance.

Leaderboard.

Google GeoLocation API to communicate current locations.

Software Design: 
Front-End
- UI Package: The map view displays the map and user movement. The leaderboard renders the current leaderboard.
- Networking package: Manages REST API requests and handles fetching user locations and game data.
- Game Logic package: Handles displaying claimed land and processes user GPS movement.

Back-End
- API Handlers: Manages core game logic such as update position and claim territory.
- Game Logic: Computes areas enclosed by a completed run and checks if a user's route overlaps another's.
- Database Handlers: Handles user data and stores running route data.

Database
- The backbone for storing and managing game data.
- The schema includes key tables such as users, which stoes gameplay statistics, routes, which logs completed running circuts with timestamps and GPS coordinates, and territories, which tracks claimed land areas for each user.

Location Tracking API
- Uses Google Maps API to fetch and process real-time location data.
- Ensures routes are valid before allowing a claim.


Communication tools and rules:
Discord: https://discord.gg/fjCdaebj, respond within a day. 
Text Message (Group Chat), respond within half a day (in reasonable hours).
GitHub: Sync as often as possible to keep work up to date; contribute to weekly reports as necessary.


API key: AIzaSyBYPZyFFX2wm_TAr1haKfFJGMlDbHkF8TQ

Figma link: https://www.figma.com/design/SG1ROIIvWYSpmKm1g8WVZm/Untitled?node-id=0-1&t=ExN0nOSrw4YITC6Y-1

