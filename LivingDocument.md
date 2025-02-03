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

Risks: 
Location tracking since none of us have experience with that. But we might solve it by using JavaScript. Mobile development is a concern because we collectively have little to no experience in its development.

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



Communication tools and rules:
Discord: https://discord.gg/fjCdaebj, respond within a day. 
Text Message (Group Chat), respond within half a day (in reasonable hours).
GitHub: Sync as often as possible to keep work up to date; contribute to weekly reports as necessary.


API key: AIzaSyBYPZyFFX2wm_TAr1haKfFJGMlDbHkF8TQ

Figma link: https://www.figma.com/design/SG1ROIIvWYSpmKm1g8WVZm/Untitled?node-id=0-1&t=ExN0nOSrw4YITC6Y-1

