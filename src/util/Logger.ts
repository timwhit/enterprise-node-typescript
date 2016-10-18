import {Logger, LoggerInstance, LoggerOptions, transports} from 'winston';

export const logger: LoggerInstance = new Logger(<LoggerOptions> {
    exitOnError: false,
    transports: [
        new transports.Console()
    ]
});