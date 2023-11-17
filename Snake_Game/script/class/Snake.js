/* Zedzian Pawel 53204  B132*/

/**
 * class snake et ses methodes
 */
class Snake {

    constructor(head, direction, tail) {
        tail = [];
        this._head = new Position(head._row, head._column);
        this._direction = direction;
        this._tail = tail;
    }
    get head() {
        return this._head;
    }

    get direction() {
        return this._direction;
    }
    get tail() {
        return this._tail;
    }
    set direction(val) {
        this._direction = val;
    }
    /**
     * permet le deplacement de la tete du serpent et fait avancer en continue et ajoute la queue
     */
    move(canGrow) {

        if (this._tail.length > 0 && canGrow) {
            this._tail.pop();
        }
        this._tail.unshift(new Position(this._head._row, this._head._column));

        let newRowHead = this._head._row + this._direction._row;
        let newColumnHead = this._head._column + this._direction._column;
        this._head._row = newRowHead;
        this._head._column = newColumnHead;

        //deplacement NORD lorsque touche le bord
        if (this._head._row == - 1) {
           
            this._head._row = 14;
        }
        //deplacement  SUD lorsque touche le bord
        else if (this._head._row > 14) {
            this._head._row = 0;
        }
        //deplacement  WEST lorsque touche le bord
        else if (this._head._column == -1) {
            this._head._column = 14;
        }
        //deplacement  EST lorsque touche le bord
        else if (this._head._column > 14) {
            this._head._column = 0;

        }


    }
    /**
     * boolean pour savoir quand grandir
     */
    grow(listOfEatenFruits) {
        if (listOfEatenFruits.length > 0) {
            listOfEatenFruits.pop();
            return false;
        }
        return true;

    }

}


