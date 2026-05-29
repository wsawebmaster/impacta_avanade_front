import { readFile } from "fs";

function log(msg: string) {
    console.log(msg, new Date(Date.now()));
}

setImmediate(() => log('e'));

log('Iniciando processamento do arquivo asyncProgram...');

setTimeout(() => log('a'), 1000);
setTimeout(() => log('b'), 2000);
setTimeout(() => log('c'), 3000);

log('d');

//setInterval(() => log('repeating'), 1000)

log('Lendo arquivo grande...');
// readFile('src/asyncProgram.ts', 'utf-8', (err, data) => {
    //         console.error('Erro ao ler arquivo', err);
    //         console.log('Conteúdo do arquivo', data);
    //         log(`data.length: ${data.length}`);
    //     });
    
    setTimeout(() => log('Leitura de arquivo grande finalizada'), 7000)
