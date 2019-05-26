class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {        
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp}: ${message}`);
    }
}

class LoggerSingleton {
    constructor() {
        if (!LoggerSingleton.instance) {
            LoggerSingleton.instance = new Logger();
        }
    }

    getInstance() {
        return LoggerSingleton.instance;
    }
}

module.exports = LoggerSingleton;
