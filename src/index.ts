class BankAccount {
    accNumber: number | undefined;
}

function main() {
    const a1 = new BankAccount();
    const a2 = new BankAccount();

    a1.accNumber = 123;
    a2.accNumber = 567;
    console.log(a1);
    console.log(a2);
}

main();