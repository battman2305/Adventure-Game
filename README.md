Intro:
    This project is a text-based choose-your-own-adventure styled 
    game written in JavaScript that allows players to navigate plot 
    points through a finite state machine system.
Technical Framework:
    This project is developed using JavaScript, html, and css. 
    At the core, this game is a state machine that changes states 
    depending on the users' button input. Each state represents a 
    point in the story and then the state updates the inner html 
    accordingly.
State Machine System:
    My state machine uses the common dictionary-like data structure 
    to store each individual node, but differs where it uses the 
    dispach function to check for the appropriate transition function 
    like "press1". If the transition function does exist, the transition
    is carried out and the game changes states.
Reflection:
    I initially chose to use html, JS, and css because I have little 
    experience and knew we would probably use these a lot this semester.
    In addition to a refresher on these tools, I learned that state 
    machines have a lot more real-world applications than we were 
    initially taught and can be very usefull in video game logic. I am 
    particularly proud of discovering the dispatch method to initiate 
    transitions because I believe I will use this data structure more 
    in the future.
