"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_extensions_1 = require("./domain/models/bank.extensions");
const logging_1 = require("./shared/logging");
function main() {
    const a1 = new bank_extensions_1.CheckingBankAccount(1, 10);
    const a2 = new bank_extensions_1.SavingsBankAccountWithLogging(2);
    const a3 = new bank_extensions_1.CheckingBankAccount(3, 20);
    a1.withdraw(10);
    a2.withdraw(10);
    a3.withdraw(30);
    (0, logging_1.logInMemoryObjects)(a1, a2, a3);
}
main();
//# sourceMappingURL=index.js.map