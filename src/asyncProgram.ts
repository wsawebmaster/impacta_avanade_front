import { createReadStream } from "fs";

function log(msg: string, buffer: Array<string> | null = null) {
    const _msg = `${msg} - ${new Date(Date.now())}`;
    if (buffer) {
        buffer.push(_msg);
        if(buffer.length > 1000) {
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
// readFile('src/asyncProgram.ts', 'utf-8', (err, data) => {
    //         console.error('Erro ao ler arquivo', err);
    //         console.log('Conteúdo do arquivo', data);
    //         log(`data.length: ${data.length}`);
    //     });
    
    const bufferStr: Array<string> = [];
    const readStream = createReadStream('./theFile.txt', 'utf-8');
    readStream.on('data', st => log(`data.length: ${st.length}, bufferStr`));
    readStream.on('end', () => {
        log('Fechando stream...');
        readStream.close();
    });

    setTimeout(() => log('Leitura de arquivo grande finalizada'), 7000)
