function createAccount(pin, amount=0) {

    function Account(pin, amount){
        this.pin = pin;
        this.balance = amount;
    }

    Account.prototype.isValid = function (enteredPin) {
        if (enteredPin === this.pin) {
            return true
        }
        return false
    }
    
    Account.prototype.checkBalance = function (enteredPin){
        if(!this.isValid(enteredPin)){
            return "Invalid PIN."
        } else {
            return `$${this.balance}`;
        }
    }

    Account.prototype.deposit = function (enteredPin, enteredAmount){
        if (!this.isValid(enteredPin)) {
            return "Invalid PIN."
        } else {
            this.balance = this.balance + enteredAmount;
            return `Successfully deposited $${enteredAmount}. Current balance: $${this.balance}.`
        }
    }

    Account.prototype.withdraw = function (enteredPin, enteredAmount){
        if (!this.isValid(enteredPin)) {
            return "Invalid PIN."
        } else if (enteredAmount > this.balance) {
           return "Withdrawal amount exceeds account balance. Transaction cancelled."
        } else {
            this.balance = this.balance - enteredAmount;
            return `Successfully withdrew $${enteredAmount}. Current balance: $${this.balance}.`
        }
    }

    Account.prototype.changePin = function (oldPin, newPin){
        if (!this.isValid(oldPin)) {
            return "Invalid PIN."
        } else {
            this.pin = newPin;
            return "PIN successfully changed!"
        }
    }

    return new Account(pin, amount);
}

module.exports = { createAccount };
