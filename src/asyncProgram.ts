import { readFile } from "fs";

function log(msg: string, buffer: Array<string> | null = null) {
    const _msg = `${msg} - ${new Date(Date.now())}`;
    if (buffer) {
        buffer.push(_msg);
        if (buffer.length > 1000) {
            log('Buffer atingiu o limite ...');
            log('_msg');
            buffer.length = 0;
        }
    } else {
        console.log(_msg);
    }
}

setImmediate(() => log('e'));

log('Iniciando processamento do arquivo asyncProgram...');

setTimeout(() => log('a'), 1000);
setTimeout(() => log('b'), 2000);
setTimeout(() => log('c'), 3000);

log('d');

//setInterval(() => log('repeating'), 1000)

log('Lendo arquivo grande...');

const p = new Promise<string>((resolve, reject) => {
    readFile('./theFile.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(`${data.length}`);
        }
    })
});

p
    .then((x) => log(x))
    .catch((e) => console.error(e))
    .finally(() => log('leitura finalizada...'));

setTimeout(() => log('Leitura de arquivo grande finalizada'), 7000)
