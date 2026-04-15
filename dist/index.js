"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(accNumber, initialFunds) {
        this.accNumber = accNumber;
        this.funds = initialFunds !== null && initialFunds !== void 0 ? initialFunds : 0;
    }
}
function main() {
    const a1 = new BankAccount(1, 10);
    const a2 = new BankAccount(2, 0);
    const a3 = new BankAccount(3, 20);
    console.log(a1);
    console.log(a2);
    console.log(a3);
}
main();
//# sourceMappingURL=index.js.map