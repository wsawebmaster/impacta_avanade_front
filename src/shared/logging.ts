import os from 'os';

export type LogEntry = {
    moment: Date;
    message: string;
}

export interface Logging {
    toLogEntry(): LogEntry
}

export function logInMemoryObjects(...objs: Array<Logging>) {
    console.log('----------');
    const log = objs
        .map(x => x.toLogEntry())
        .map(x => `[${x.moment}] ${x.message}`)
        .join(os.EOL);
    console.log(log);
}