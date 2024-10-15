const config = require("./config");

module.exports = class Logger {
    constructor(label) {
        this.label = label;
    }

    start() {
        console.time(this.label);
    }

    async stop() {
        console.timeEnd(this.label);
        if (config.delay) {
            console.log("Waiting for", config.delay, "ms");
            await new Promise(resolve => setTimeout(resolve, config.delay));
        }
    }

    
}
