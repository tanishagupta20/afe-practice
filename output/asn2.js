"use strict";
class Account {
    constructor(accNo) {
        this.acc_bal = 0;
        this.acc_no = accNo;
    }
    process(transobj) {
        if (transobj.value() >= 0) {
            this.acc_bal = this.acc_bal + transobj.value();
            return true;
        }
        else if (transobj.value() < 0 && this.acc_bal > Math.abs(transobj.value())) {
            this.acc_bal = this.acc_bal - transobj.value();
            return true;
        }
        else {
            return false;
        }
    }
}
class Transaction {
    constructor(transacAmt) {
        this.transac_amt = transacAmt;
    }
    value() {
        return this.transac_amt;
    }
}
class FilteredAccount extends Account {
    constructor(accNo) {
        super(accNo);
        this.filtered_transac = 0;
    }
    process(transobj) {
        if (transobj.value() == 0) {
            this.filtered_transac++;
            return true;
        }
        else {
            return super.process(transobj);
        }
    }
    filtered() {
        return this.filtered_transac;
    }
}
let acc = new FilteredAccount(1234);
let transObj = new Transaction(100);
acc.process(transObj);
transObj = new Transaction(-50);
acc.process(transObj);
transObj = new Transaction(0);
acc.process(transObj);
console.log(acc.filtered());
