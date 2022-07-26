# Harry Potter Quiz - Javascript
## Welcome to the <a href ="https://nameiswaiyinsin.github.io/javascript-harrypotter-quiz/">Harry Potter Quiz</a> README.md !

This Harry Potter quiz is an interactive quiz game where players can test their knowledge about all things Harry Potter! There are 10 questions to answer in the game. If the player answers a question correctly, they will receive 10 points. After completing the game, the user can save their high score and later look back on the top high scores for the game. This game is great fun for users to play and test their knowledge on this epic saga! 

![responsive designs](/assets/images/responsivedesign.png)

# Live Site
https://nameiswaiyinsin.github.io/javascript-harrypotter-quiz/

# Repository
https://github.com/nameiswaiyinsin/javascript-harrypotter-quiz

# Target Audience
<li>People who enjoy Harry Potter</li>
<li>People who enjoy getting their knowledge tested</li>
<li>People who enjoy quiz games</li>

# Project Objective
To offer players an enjoyable experience quizzing their Harry Potter knowledge and compete for the highest score. This game contains 10 questions for great fun and allows the player to save their score for comparison! It is suitable for anyone who enjoys learning about Harry Potter and being quizzed on it.


# (UX) User Experience
## Site Owner Goal
<li>Create an attractive, responsive and intuitively simple to use game for the user.</li>
<li>I want the site to function properly, loading new questions and incrementing the score as the user progresses. </li>
<li>Create a game with a varied choice of questions for a better user experience.</li>
<li>Allow users to save their scores</li>
<li>Allow users to navigate easily through different pages of the site</li> 

## User Story - First time Visitor Goal
<li>Ensure an aestheticly designed and easy to read game.</li>
<li>Ensure the game is responsive to all devices.</li>
<li>Ensure that the user is able to navigate throughout different pages of the site.</li>
<li>Ensure a varied choice of questions.</li>

## User Story - Returning Visitor Goal
<li>Ensure a varied choice of questions each time a user plays.</li>
<li>Be able to record the user's own score for leaderboard reference.</li>
<li>Be able to to see other user's previous scores for competition.</li>

# Design
## Colour Scheme
<li>I chose a minimal colour palette with 2 colours features heavily in Harry Potter to keep within the theme.</li>
<li> I used https://coolors.co/ to generate my pallete.</li>

![colour pallette](assets/images/colours.png)

## Typography
<li>I chose Roboto, sans-serif as the font as it a very readable font which also looks fiting for the theme of the website. </li>
<li>Sans-serif is the back-up font if Roboto fails, it is also an easy to read font.</li>
<li>The font was sourced from Google fonts.</li>

## Wireframe
### Desktop
Home Page
![Desktop Home Page](assets/images/wfdesktophomepage.png)

Game Page
![Desktop Game Page](assets/images/wfdesktopplaypage.png)

End Page
![Desktop End Page](assets/images/wfdesktoptopendpage.png)

High Scores Page
![Desktop High Score Page](assets/images/wfdesktophighscorepage.png)

### Mobile
Home Page
![Mobile Home Page](assets/images/fwhomepage.png)

Game Page
![Mobile Game Page](assets/images/fwplaypage.png)

End Page
![Mobile End Page](assets/images/fwendpage.png)

High Scores Page
![Mobile High Score Page](assets/images/fwhighscorepage.png)

Google Docs Wireframes for both desktop and mobile here - https://docs.google.com/document/d/1CTuUDR21LjMLLncRB6JInjym1l9IlOpUkcklaaiT-nc/edit?usp=sharing

## Site structure
### Start/Home Page
Features: 
<li>A game title along with the logo.</li>
<li>A play button for the user to start the game.</li>
<li>A highscores page where the user can see other scores and decide to compete.</li>

![start-page-or-home-page](assets/images/startpage.png)

### Game Page
Features:
<li>A question counter (out of 10) on the top right hand corner which indicates the question number the user is on.</li>
<li>A score counter on the top right hand corner that increases the users score by 10 for each question they answer correctly.</li>
<li>A question and 4 choices of answers to choose from in the middle. The selected answer will turn red if it is wrong and green if it is correct.</li>

![game-page](assets/images/playpage.png)

### End Page
Features:
<li>Shows the user their score after completing the game.</li>
<li>An option for the user to enter their name and save their score and displayed on the leaderboard if the point is high enough.</li>
<li>The user will not be able to click the save button (to save their score) unless the user inserts a username.
Once the score is saved they are taken back to the home page.</li>
<li>A button to allow the user to play the game again.</li>
<li>A button to take the user back to the home page.</li>

![end-page](assets/images/endpage.png)

### High Scores Page
Features:
<li>A page lists the top scores for the game, limited to showing only the top 5 high scores.</li>

![high-score-page](assets/images/highscorepage.png)

# Testing

## Testing Responsive Design
I built this website with a mobile-first approach to ensure a responsive design across the site. This made for a smooth transition from small screen to large screen. 

## Validator Testing
### HTML
![clean html](assets/images/validhtml.png)

### CSS
![clean css](assets/images/validcss.png)

### Javascript
No errors were found when passing through the official Jshint validator.

#### Game Page
Metrics returned:
<li>There are 7 functions in this file.</li>
<li>Function with the largest signature take 1 arguments, while the median is 1.</li>
<li>Largest function has 12 statements in it, while the median is 2.</li>
<li>The most complex function has a cyclomatic complexity value of 4 while the median is 1.</li>

#### End Page
Metrics returned:
<li>There are 3 functions in this file.</li>
<li>Function with the largest signature take 2 arguments, while the median is 1.</li>
<li>Largest function has 7 statements in it, while the median is 1.</li>
<li>The most complex function has a cyclomatic complexity value of 1 while the median is 1.</li>

#### High Scores Page
Metrics returned:
<li>There are 2 functions in this file.</li>
<li>Function with the largest signature take 1 arguments, while the median is 0.5.</li>
<li>Largest function has 3 statements in it, while the median is 2.</li>
<li>The most complex function has a cyclomatic complexity value of 2 while the median is 1.5.</li>

## Lighthouse
Great Accesibility & Performance on all pages
### Desktop
Home Page
![Test Desktop Home Page](assets/images/desktophomepage.png)

Game Page
![Test Desktop Game Page](assets/images/desktopplaypage.png)

End Page
![Test Desktop End Page](assets/images/desktopendgame.png)

High Scores Page
![Test Desktop High Score Page](assets/images/desktophighscorepage.png)

### Mobile
Home Page
![Test Mobile Home Page](assets/images/mobilehomepage.png)

Game Page
![Test Mobile Game Page](assets/images/mobileplaypage.png)

End Page
![Test Mobile End Page](assets/images/mobileendpage.png)

High Scores Page
![Test Mobile High Scores Page](assets/images/mobilehighscore.png)

Google Doc Lighthouse result - https://docs.google.com/document/d/1CTuUDR21LjMLLncRB6JInjym1l9IlOpUkcklaaiT-nc/edit?usp=sharing

# Bugs

# Deployment
I deployed the site on GitHub pages.

1. Go to project repository, navigate to the Settings tab.
2. Select Pages tab from the left hand menu.
3. In Source section, drop-down the menu and select the Main Branch and click Save.
4. After the page has refreshed, a ribbon will display indicating the successful deployment of the site and link to the live page.

## Local Deployment
Steps to clone this project from GitHub:

1. In the project repository, navigate to the code button.
2. Select download Zip from the clone menu.
3. Once zip file has been downloaded, unzip the file.
4. Save the file and run it locally.
5. The live site can be found using the following URL - https://nameiswaiyinsin.github.io/javascript-harrypotter-quiz/


# Technologies used
<li>HTML</li>
<li>CSS</li>
<li>Javascript</li>
.

# Credits
## Contents
Font was sourced from Google Fonts https://fonts.google.com/
## Tutorials
Javascript Quiz Tutorial - https://www.youtube.com/watch?v=u98ROZjBWy8&t=7s
## Code Inspiration
https://github.com/Simiine/climate-quiz
## Quiz Questions
https://www.beano.com/posts/the-ultimate-harry-potter-quiz

# Media
<li>Background picture was taken from Google Images - https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk1tQH7Jo62z8PgAvrHyuU2Lhkc6zK5ek8g0SL9Cmq8Fj6uIcH2g5Mk1MB3TJHFO18rU&usqp=CAU</li>
<li>Logo downloaded from Seek Logo - "https://seeklogo.com/vector-logo/65455/harry-potter"</li>
<li>Responsive Design Mockup Tool - https://techsini.com/multi-mockup/index.php </li>
<li>Balsamiq was used to create my wireframes</li>
