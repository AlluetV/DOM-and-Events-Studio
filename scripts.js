// Write your JavaScript code here.
// Remember to pay attention to page loading!

let x = 0;
let y = 0;

function init () {
    const missionAbort = document.getElementById("missionAbort");
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");

    // Put your code for the exercises here.
    
/*1  Use the window load event to ensure all elements have loaded before attaching event handlers.
When the "Take off" button is clicked, the following should happen:
A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
The flight status should change to "Shuttle in flight."
The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
The shuttle height should increase by 10,000 miles.*/

    takeoffButton.addEventListener('click', function() {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
        let spaceHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        if(confirmation){
            alert("Shuttle in flight.");
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            spaceHeight+= 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = spaceHeight;
         }
    });

/*   2  When the "Land" button is clicked, the following should happen:
A window alert should let the user know "The shuttle is landing. Landing gear engaged." **
The flight status should change to "The shuttle has landed."
The background color of the shuttle flight screen should change from blue to green.***
The shuttle height should go down to 0. */
    landingButton.addEventListener('click', function(){
        let boxConfirmation = confirm("The shuttle is landing. Landing gear engaged.");
        let spaceHeight= Number(document.getElementById("spaceShuttleHeight").innerHTML);
        if(boxConfirmation){
            spaceHeight = 0;
            document.getElementById("spaceShuttleHeight").innerHTML = spaceHeight;
            document.getElementById("flightStatus").innerHTML ="The shuttle has landed.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        }
    });
/* When the "Abort Mission" button is clicked, the following should happen:
A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
The flight status should change to "Mission aborted."
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go to 0. */

    missionAbort.addEventListener('click', function(){
        let boxConfirmation2 = confirm("Confirm that you want to abort the mission.");
        let spaceHeight= Number(document.getElementById("spaceShuttleHeight").innerHTML);
        if(boxConfirmation2){
            spaceHeight = 0;
            document.getElementById("spaceShuttleHeight").innerHTML = spaceHeight;
            document.getElementById("flightStatus").innerHTML ="Mission aborted.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        }
    });

     /*
When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
The rocket image should move 10 px in the direction of the button that was clicked.
If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
*/
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");

    x = document.getElementById('shuttleBackground').clientWidth/2;
   
    
    upButton.addEventListener('click', function(){
        let littleRocket = document.getElementById("rocket");
        if( y-10 >= 0){
            y -= 10;
            littleRocket.setAttribute("style", "top:" + y + "px; left:" + x +"px; position: absolute;");
            let spaceHeight= Number(document.getElementById("spaceShuttleHeight").innerHTML);
            spaceHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = spaceHeight;
        } 
    });

    downButton.addEventListener('click' , function(){
        
        
        let littleRocket = document.getElementById("rocket");
        if(y+10 < document.getElementById('shuttleBackground').clientHeight - 75){
            y += 10;
            littleRocket.setAttribute("style", "top:" + y + "px; left:" + x +"px; position: absolute;");
            let spaceHeight= Number(document.getElementById("spaceShuttleHeight").innerHTML);
            spaceHeight -= 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = spaceHeight;
        }   
    });

    rightButton.addEventListener('click' , function(){
        let littleRocket = document.getElementById("rocket");
        if( x+10 < document.getElementById('shuttleBackground').clientWidth - 75){
            x += 10;
            littleRocket.setAttribute("style", "top:" + y + "px; left:" + x +"px; position: absolute;");
        } 
    });

    leftButton.addEventListener('click' , function(){
        let littleRocket = document.getElementById("rocket");
        if(x -10 > 0){
            x -= 10;
            littleRocket.setAttribute("style", "top:" + y + "px; left:" + x +"px; position: absolute;");
        }
       
    });

}

window.addEventListener("load", init);