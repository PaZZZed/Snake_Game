/* Zedzian Pawel 53204  B132*/

/**
 * class position et ses methodes
 */
class Position {

    constructor(row, column) {
        this._row = row;
        this._column = column;
    }

    get row() {
        return this.row;
    }
    set row(val) {
        if (val < 0) {
            throw new Error(" négatif: " + val);
        }
        this._row = val;
    }

    get column() {
        return this._column;
    }
    set column(val) {
        if (val < 0) {
            throw new Error(" négatif: " + val);
        }
        this._column = val;
    }
}