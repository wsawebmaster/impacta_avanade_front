import os from 'os';

function logInMemoryAccounts(a1: BankAccount, a2: BankAccount, a3: BankAccount) {
    console.log('----------');
    console.log(a1.toString(), os.EOL, a2.toString(), os.EOL, a3.toString())
}

class BankAccount {
    accType: string;
    accNumber: number;
    funds: number;

    constructor(accType: 'SAVINGS' | 'CHECKING', accNumber: number, initialFunds?: number) {
        this.accType = accType;
        this.accNumber = accNumber;
        this.funds = initialFunds ?? 0;
    }

    deposit(value: number) {
        this.funds += value;
    }

    withdraw(value: number): boolean {
        if (this.accType == 'SAVINGS' && this.funds < value) {
            console.log('insufficient funds');
            return false;
        }
        this.funds -= value;
        return true;
    }

    toString() {
        return `account: [${this.accNumber}] : $[${this.funds}]`
    }
}

function main() {
    const a1 = new BankAccount('CHECKING', 1, 10);
    const a2 = new BankAccount('SAVINGS', 2);
    const a3 = new BankAccount('CHECKING', 3, 20);

    a1.withdraw(10);
    a2.withdraw(10);
    a3.withdraw(30);

    logInMemoryAccounts(a1, a2, a3);
}

main();