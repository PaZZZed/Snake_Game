/* Zedzian Pawel 53204  B132*/
/**
 * class fruit et ses methodes
 */
class Fruit {
    constructor() {

        this._position = new Position(Math.floor(Math.random() * 15), Math.floor(Math.random() * 15));
    }
    get position() {
        return this._position;
    }

}
