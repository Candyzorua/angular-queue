export class Counter {
    public enabled: boolean = true;

    constructor(
        public id: number,
        public numServing: number
    ) { }

    setNumServing(numServing: number) {
        this.numServing = numServing;
    }
}
