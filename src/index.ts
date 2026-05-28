
import { CheckingBankAccount, SavingsBankAccountWithLogging } from './domain/models/bank.extensions';
import { logInMemoryObjects } from './shared/logging';

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