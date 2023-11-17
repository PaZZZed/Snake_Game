/* Zedzian Pawel 53204  B132*/

/**
 * display board 15x15
 */
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {

        var x = document.createElement("DIV");
        var text = document.createTextNode(" ");
        x.className = 'square';
        x.id = 'r' + i + 'c' + j;
        x.appendChild(text);
        document.getElementById("board15x15").appendChild(x);
    }
}

/**
 * affiche la tete
 */
function displayHead() {
    document.getElementById("r" + snake._head._row + "c" + snake._head._column).style.backgroundColor = 'pink';
}

/**
 * affiche la queue
 */
function displayTail() {
    for (let i = 0; i < snake.tail.length; i++) {
        document.getElementById("r" + snake._tail[i]._row + "c" + snake._tail[i]._column).style.backgroundColor = 'deeppink';

    }

}
/**
 * mets a jour le plateau(mets a jour les deplacements )
 */
function maj() {
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {

            document.getElementById("r" + i + "c" + j).style.backgroundColor = 'mediumturquoise';
        }
    }

}
/**
 * affiche les fruits 
 */
function displayFruit() {
    for (let i = 0; i < totalFruit.length; i++) {

        document.getElementById("r" + totalFruit[i]._row + "c" + totalFruit[i]._column).style.backgroundColor = 'red';

    }
}
/**
 * affiche le score de la partie 
 */
function displayScore() {
    document.getElementById('score').innerHTML = "Score: " + score;
}

/**
 * affiche le highscore
 */
function displayHighScore() {
    localStorage.setItem("highscore", localStorage.getItem("highscore"));
    if (localStorage.getItem("highscore") == 'null') {
        localStorage.setItem("highscore", 0);
    }
    if (score > parseInt(localStorage.getItem("highscore"))) {
        localStorage.setItem("highscore", score);
    }
    document.getElementById('highScore').innerHTML = "highscore: " + localStorage.getItem("highscore");

}

/**
 * affiche un message lorsque la partie est finie
 */
function displayMessageFin() {
    let msg = 'merci de jouer';
    if (score == localStorage.getItem("highscore")) {
        msg = 'bravo vous avez battu le record';
    }
    document.getElementById('message').innerHTML = msg;

}
