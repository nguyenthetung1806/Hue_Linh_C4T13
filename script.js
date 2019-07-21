let rhythm = [
]
const line = [0, 100, 200, 300, 400]
const DROP_TIME = 20
const GAME_SPEED = 50;
const CANVAS_BORDER_COLOUR = 'red';
const CANVAS_BACKGROUND_COLOUR = "white";


const RHYTHM_BACKGROUND_COLOUR = "#8aabe3";



function addRytthm() {
    var randomIndex = Math.floor(Math.random() * line.length)
    var x_AxisOfrhythmToAdd = line[randomIndex];
    rhythm.push({
        'x': x_AxisOfrhythmToAdd, 'y': 0, 'width': 100, 'length': 100
    })

    console.log(rhythm)
}





var canvas_main = document.getElementById('main_screen');
var context = canvas_main.getContext('2d');





// Start game
main();


/**
 * Main function of the game
 * called repeatedly to advance the game
 */

let tick =0

function main() {
    setTimeout(function onTick() {

        clearCanvas();


        // khi chay het chieu dai cua 1 thanh rhythm, tao them 1 rhythm moi
        if (tick === 100/DROP_TIME - 1) {
            addRytthm();
            tick = 0
        } else {
            tick ++
        }


        drawTurn();
        if (didGameEnd()) return;

        advanceTurn();


        // Call game again
        main();
    }, GAME_SPEED)
}



function clearCanvas() {
    //  Select the colour to fill the drawing
    context.fillStyle = CANVAS_BACKGROUND_COLOUR;
    //  Select the colour for the border of the canvas
    context.strokestyle = CANVAS_BORDER_COLOUR;
    // Draw a "filled" rectangle to cover the entire canvas
    context.fillRect(0, 0, canvas_main.width, canvas_main.height);
    // Draw a "border" around the entire canvas
    context.strokeRect(0, 0, canvas_main.width, canvas_main.height);
}






function drawTurn() {
    //  Select the colour to fill the drawing
    context.fillStyle = RHYTHM_BACKGROUND_COLOUR;
    //  Select the colour for the border of the canvas

    rhythm.forEach(element => {
        context.fillRect(element['x'], element['y'], element['width'], element['length']);
    });
    
}



function advanceTurn() {
    rhythm.forEach(element => {
        element['y'] += DROP_TIME
    });
}


function didGameEnd() {
    for (let i = 0; i < rhythm.length; i++) {
        if (rhythm[i]['y'] + rhythm[i]['length'] >= canvas_main.height) {
            return true
        }
    }
}   
