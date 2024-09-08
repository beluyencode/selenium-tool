module.exports = class Logger {
    constructor(label) {
        this.label = label;
    }

    start() {
        console.time(this.label);
    }

    stop() {
        console.timeEnd(this.label);
    }

    
}
