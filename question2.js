let balance = 5000;

//Task 1
function deposit(amount){
    balance += amount;
    console.log("New balance is: $"+balance)
    return balance;

}

// Task 2
function withdrawals(amount) {
    if (balance>amount) {
        balance -= amount;
        console.log("New balance is: $"+balance)
        return balance;
    }else {
        console.log("Not enough funds.")
    }
}

//Task 3
function checkBalance() {
    console.log('Balance is: $'+balance);
}

checkBalance();

deposit(250);
withdrawals(4150);
checkBalance();