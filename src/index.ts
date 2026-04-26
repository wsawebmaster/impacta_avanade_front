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

function extractConstructorName(obj: any) {
    if (obj.__proto__.constructor.name) return obj?.__proto__.constructor.name;
    if (obj.__proto__) return extractConstructorName(obj.__proto__);
    return null;
}

class BankAccount {
    accNumber: number;
    funds: number;

    constructor(accNumber: number, initialFunds?: number) {
        this.accNumber = accNumber;
        this.funds = initialFunds ?? 0;
    }

    deposit(value: number) {
        this.funds += value;
    }

    withdraw(value: number): boolean {
        throw Error("Not implemented...");
    }

    toString() {
        return `account: [${this.accNumber}](${extractConstructorName(this)}) : $[${this.funds}]`
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

function withLogging<C extends BankAccountConstructor<BankAccount>>(Class: C) {
    return class extends Class implements Logging {
        constructor(...args: any[]) {
            super(...args);
        }
        toLogEntry(): string {
            return this.toString();
        }
    }
}

// abstract class CheckingBankAccount extends BankAccount {
// }

class SavingsBankAccount extends BankAccount {
    withdraw(value: number): boolean {
        if (this.funds < value) {
            console.log('insufficient funds');
            return false;
        }

        this.funds -= value;
        return true;
    }
}

const CheckingBankAccount = withLogging(withOverdraft(BankAccount));
const SavingsBankAccountWithLogging = withLogging(SavingsBankAccount)

function main() {
    const a1 = new CheckingBankAccount(1, 10);
    const a2 = new SavingsBankAccountWithLogging(2);
    const a3 = new CheckingBankAccount(3, 20);

    a1.withdraw(10);
    a2.withdraw(10);
    a3.withdraw(30);

    logInMemoryObjects(a1, a2, a3);
}

main();