import { LogEntry, Logging } from "../../shared/logging";
import { BankAccount, SavingsBankAccount } from "./bank";

type BankAccountConstructor<T> = new(...args: any[]) => T;
export function withOverdraft<C extends BankAccountConstructor<BankAccount>>(Class: C) {
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

export function withLogging<C extends BankAccountConstructor<BankAccount>>(Class: C) {
    return class extends Class implements Logging {
        constructor(...args: any[]) {
            super(...args);
        }
        toLogEntry(): LogEntry {
            return {
                moment: new Date(Date.now()),
                message: this.toString()
            }
        }
    }
}

export const CheckingBankAccount = withLogging(withOverdraft(BankAccount));
export const SavingsBankAccountWithLogging = withLogging(SavingsBankAccount)