import os from 'os';

interface Logging {
    toLogEntry(): string
}

function logInMemoryObjects(...objs: Array<Logging>) {
    console.log('----------');
    const log = objs
        .map(x => x.toLogEntry())
        .join(os.EOL);
    console.log(log);
}

class BankAccount implements Logging {
    accNumber: number;
    funds: number;

    constructor(accNumber: number, initialFunds?: number) {
        this.accNumber = accNumber;
        this.funds = initialFunds ?? 0;
    }
    toLogEntry(): string {
        return this.toString();
    }

    deposit(value: number) {
        this.funds += value;
    }

    withdraw(value: number): boolean {
        throw Error("Not implemented...");
    }

    toString() {
        return `account: [${this.accNumber}] : $[${this.funds}]`
    }
}

type BankAccountConstructor<T> = new(...args: any[]) => T;
function withOverdraft<C extends BankAccountConstructor<BankAccount>>(Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args);
        }

        withdraw(value: number): boolean {
            this.funds -= value;
            return true;
        }
    }
}

// abstract class CheckingBankAccount extends BankAccount {
// }

class SavingBankAccount extends BankAccount {
    withdraw(value: number): boolean {
        if (this.funds < value) {
            console.log('insufficient funds');
            return false;
        }

        this.funds -= value;
        return true;
    }
}

const CheckingBankAccount = withOverdraft(BankAccount);

function main() {
    const a1 = new CheckingBankAccount(1, 10);
    const a2 = new SavingBankAccount(2);
    const a3 = new CheckingBankAccount(3, 20);

    a1.withdraw(10);
    a2.withdraw(10);
    a3.withdraw(30);

    logInMemoryObjects(a1, a2, a3);
}

main();