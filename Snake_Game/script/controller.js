/* Zedzian Pawel 53204  B132*/

/**
 * variables utiles 
 */

let row = Math.floor(Math.random() * 15);
let column = Math.floor(Math.random() * 15);
let tete = new Position(row, column);
let queues = [new Position(row + 1, column)];
//les directions 
let N = new Position(-1, 0);
let S = new Position(1, 0);
let E = new Position(0, 1);
let W = new Position(0, -1);
//le serpent commence en direction NORD
let direction = N;
let snake = new Snake(tete, direction, queues);
//tableau de fruits
let totalFruit = [];
//tableau de fruit mangée
let fruitMange = [];

let score = 0;

let ok=true;

/**
 * fait appel a toutes les fonctions pour que le jeu fonctionne 
 */
function game() {
    setInterval(function () {
        if (isGameOver()) {
            maj();
            snake.move(snake.grow(fruitMange));
            fruitRandom();
            displayFruit();
            displayHead();

            displayTail();
            manger();



            displayScore();
            displayHighScore();


        } else {
            displayMessageFin();
        }
    }, 150);
}
game();

/**
 * fait grandir le serpent toutes les 5 secondes 
 */
function grandit() {
    setInterval(function () {
        fruitMange.push(1);
        score = score + 10;
    }, 5000);
}
grandit();

/**
 * pour interagir avec le clavier en entrant une touche 
 * @param  touche 
 */
function bouger(touche) {

    if (touche.keyCode == '38' && snake._direction != S) {
        // up arrow
        snake._direction = N;
    }
    else if (touche.keyCode == '40' && snake._direction != N) {
        // down arrow
        snake._direction = S;
    }
    else if (touche.keyCode == '37' && snake._direction != E) {
        // left arrow
        snake._direction = W;
    }
    else if (touche.keyCode == '39' && snake._direction != W) {
        // right arrow
        snake._direction = E;
    }

}
document.onkeydown = bouger;

/**
 * fait apparaitre des fruit aleatoirement sur le plateau max 4 en meme temps
 */
function fruitRandom() {

    let choix = Math.floor(Math.random() * 30);
    if (totalFruit.length < 1 || choix == 3) {
        let fruit = new Fruit();
        totalFruit.push(fruit._position);
        for (let j = 0; j < snake.tail.length; j++) {
            if ((snake.tail[j]._row == fruit.position._row) &&
                (snake.tail[j]._column == fruit.position._column)) {

                totalFruit.pop();
            }
        }
    }
}

function fofo() {
    let choix = 10;
    let nb = 10;
    if (totalFruit.length < 1 || choix == nb) {
        let fruit = new Fruit();
        totalFruit.push(fruit._position);
        for (let j = 0; j < snake.tail.length; j++) {
            if ((snake.tail[j]._row == fruit.position._row) &&
                (snake.tail[j]._column == fruit.position._column)) {

                totalFruit.pop();
            }
        }
    }
}

/**
 * lorsque la tete passe sur un fruit fait grandir le serpent
 */
function manger() {
    for (let i = 0; i < totalFruit.length; i++) {

        if ((snake._head._row == totalFruit[i]._row) &&
            (snake._head._column == totalFruit[i]._column)) {

            score = score + 50;
            //ajoute 1 pour montrer que un fruit a été mangée
            fruitMange.push(1);
            //enleve le fruit mangé
            totalFruit.splice(i, 1);

        }
    }
}
/**
 * la partie est fini si la tete du serpent touche sa queue
 */
function isGameOver() {
    for (let i = 0; i < snake.tail.length; i++) {

        if ((snake._head._row == snake.tail[i]._row) &&
            (snake._head._column == snake.tail[i]._column)) {

            return false;
        }
    }
    return true;
}