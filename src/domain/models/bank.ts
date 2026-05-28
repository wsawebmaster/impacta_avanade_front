import { extractConstructorName } from "../../shared/utils";

export class BankAccount {
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

export class SavingsBankAccount extends BankAccount {
    withdraw(value: number): boolean {
        if (this.funds < value) {
            console.log('insufficient funds');
            return false;
        }

        this.funds -= value;
        return true;
    }
}
