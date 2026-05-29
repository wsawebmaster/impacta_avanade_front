"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(msg) {
    console.log(msg, new Date(Date.now()));
}
log('Iniciando processamento do arquivo asyncProgram...');
setTimeout(() => {
    log('Processamento do arquivo concluído!');
}, 2000);
//# sourceMappingURL=asyncProgram.js.map