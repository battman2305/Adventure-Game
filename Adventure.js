var adventure;
function create_machine() {
    const text = [  
        "You find yourself standing at the entrance of a dark forest. The path ahead is shadowed, and you can hear the faint rustling of leaves. A sign reads, 'Enter at your own risk.\nChoice 1: Enter\nChoice 2: Don't Enter",
        "As you step into the forest, the trees seem to close in around you. The air grows colder, and you notice glowing eyes watching you from the darkness. A fork in the road appears, with paths leading left and right\nChoice 1: Left Path\nChoice 2: Right Path",
        "You choose the right path, and the forest becomes even darker. Strange noises echo around you, and you start to feel lost. Suddenly, a figure steps out of the shadows—a mysterious stranger with a cryptic message.\nChoice 1: Trust the Stranger\nDon't Trust the Stranger",
        "You decide to trust the stranger and follow their guidance. The path brightens slightly, and you begin to see glimpses of light through the trees. However, you sense that you're being followed.\nChoice 1: Turn Back\nChoice 2: Push On",
        "Ignoring your fears, you push forward. The light grows stronger, and you finally emerge from the forest, finding yourself in a peaceful meadow. The sun is shining, and you feel a sense of relief and accomplishment.",
      ];
    machine = {
        state: 'START',
        transitions: {
            START:{
                press1(){
                    this.state = '1'
                    document.getElementById('text').innerText = text[0];
                },
                press2(){
                    this.state = '1'
                    document.getElementById('text').innerText = text[0];
                }

            },
            1:{
                press1() {
                    this.state = '2'
                    document.getElementById('text').innerText = text[1];
                },
                press2() {
                    this.state = 'START'
                    document.getElementById('text').innerText = "You have avoided an ordeal but missed out on a grand adventure. RESTART";
                }
            },
            2: {
                press1() {
                    this.state = '2';
                    document.getElementById('text').innerText =  "Continuing on, another fork appears in the road with paths leading left and right\nChoice 1: Left Path\nChoice 2: Right Path";
                },
                press2() {
                    this.state = '3';
                    document.getElementById('text').innerText = text[2];
                }
            },
            3: {
                press1() {
                    this.state = '4'
                    document.getElementById('text').innerText = text[3];
                
                },
                press2() {
                    this.state = 'START';
                    document.getElementById('text').innerText = "You really should be more trusting. Without guidance you become lost and succumb to the dangers of nature. LOSER";
                },
            },
            4: {
                press1() {
                    this.state = 'START'
                    document.getElementById('text').innerText = "It's too late to turn back, the forest envelops you as you lose your way. LOSER";
                
                },
                press2() {
                    this.state = 'START';
                    document.getElementById('text').innerText = text[4];
                },
            },
        },
        dispatch(actionName) {
            const action = this.transitions[this.state][actionName];

            if (action) {
                action.call(this);
            } else {
                console.log('invalid action');
            }
        },
    };
    return machine;
}

function press_choice_1() {
    adventure.dispatch('press1');
    console.log(adventure.state)
}

function press_choice_2() {
    adventure.dispatch('press2');
    console.log(adventure.state)
}

function start_game(){
    adventure = create_machine();
}



