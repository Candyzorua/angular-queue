export class Counter {
    public busy: boolean; 
    public disabled: boolean;

    constructor(
        public id: number,
        public numServing: number
    ) { 
        this.busy = false;
        this.disabled = false;
    }

    setNumServing(numServing: number) {
        this.numServing = numServing;
    }
}
