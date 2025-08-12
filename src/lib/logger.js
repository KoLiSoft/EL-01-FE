export const LogLevel = { ALL: "ALL", DEBUG: "DEBUG", ERROR: "ERROR", NONE: "NONE", WARN: "WARN" };

const LogLevelNumber = { ALL: 4, DEBUG: 3, ERROR: 1, NONE: 0, WARN: 2 };

export class Logger {
        prefix;
        level;
        showLevel;

        levelNumber;

        constructor({ prefix = "", level = LogLevel.ALL, showLevel = true }) {
                this.prefix = prefix;
                this.level = level;
                this.levelNumber = LogLevelNumber[this.level];
                this.showLevel = showLevel;
        }

        debug = (...args) => {
                if (this.canWrite(LogLevel.DEBUG)) {
                        this.write(LogLevel.DEBUG, ...args);
                }
        };

        warn = (...args) => {
                if (this.canWrite(LogLevel.WARN)) {
                        this.write(LogLevel.WARN, ...args);
                }
        };

        error = (...args) => {
                if (this.canWrite(LogLevel.ERROR)) {
                        this.write(LogLevel.ERROR, ...args);
                }
        };

        canWrite(level) {
                return this.levelNumber >= LogLevelNumber[level];
        }

        write(level, ...args) {
                let prefix = this.prefix;

                if (this.showLevel) {
                        prefix = `- ${level} ${prefix}`;
                }

                if (level === LogLevel.ERROR) {
                        console.error(prefix, ...args);
                } else if (level === LogLevel.WARN) {
                        console.warn(prefix, ...args);
                } else {
                        console.log(prefix, ...args);
                }
        }
}

export function createLogger({ prefix, level } = {}) {
        return new Logger({ level, prefix });
}
