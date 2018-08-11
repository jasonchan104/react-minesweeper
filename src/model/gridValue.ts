export class GridValue {
    x: number;
    y: number;
    value: number;
    mine: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.value = 0;
        this.mine = false;
    }

    increment() {
        this.value++;
    }

    isMine() {
        return this.mine;
    }

    setMine() {
        this.mine = true;
    }
}
