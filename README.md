#Description

ColoredBall is a site that completes the following: 

- Shows a user an image of either a red or blue ball upon visiting the page. This should be random, with a 50/50 chance of a user being shown either color ball.
- Determine whether the user saw a red or a blue ball and the next time a user visits the page show them the same color ball they saw previously.
- Please work with cookies (and not local storage) to record how many times a user has seen each color of ball. You should be able to provide a report on users and number of times they saw each color ball.
- The test should work in any browser (including Chrome). Style as necessary (it is very much appreciated if you do).
- Code should be written in Javascript and feel free to use a framework for building the page/application. Any cookie functionality should not be abstracted by jQuery or any other module provided by NPM or the like.


*The only fault in the program is that for some reason it does not work with Google Chrome, but does work with every other browser. I am still researching this on how to fix it, I resorted to making an https page since Chrome doesnt run cookies on localfiles but even that did not work. I played with chrome settings and still nothing. I will still look into this and try to find a solution, in the meanwhile, I request to view the programs functionality in any other browser.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Running the program

- The program should be run by typing in the URL https://tashfiqakhand.github.io/ColoredBall/ in any browser (each browser is a different user).
- Once run, a popup will first show indicating all the cookies present (blue ball count, red ball count, color of ball). 
- After clicking okay on the cookie popup, a white page will show with a colored ball in the middle either being red or blue (50/50 chance) if first user visit, 
- If it is not the user's first visit, the page will show the previous color visited and the count of that color will increment in the cookie popup.
- The page will also show on the top middle a printed message indicating the color of the ball. 
- To re-run the program with the same user, simply just revisit the page on the same browser by refreshing the page or clicking the link again. 
- To try another user, simply use another browser or clear the cookies in the settings of the used browser. 
- To inspect the cookies, you can also toggle the console on the browser and view the application storage's cookies which will show all cookies present. 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Folder
- a style folder that contains style.css for styling the circles
- a script folder that contains main.js for all javascript functionalities where the core of the work is
- a index.html file that contains the UI of the page

I hope you like it! 
Tashfiq Akhand
