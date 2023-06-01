class Account{
    private acc_no;
    private acc_bal = 0;

    constructor(accNo : number){
        this.acc_no = accNo;
    }

    process(transobj : Transaction) : boolean{
        if(transobj.value() >= 0){
            this.acc_bal = this.acc_bal + transobj.value();
            return true;
        }
        else if(transobj.value() < 0 && this.acc_bal > Math.abs(transobj.value())){
            this.acc_bal = this.acc_bal  - transobj.value();
            return true;
        }
        else{
            return false;
        }
    }
}

class Transaction{
    private transac_amt : number;

    constructor(transacAmt : number){
        this.transac_amt = transacAmt;
    }

    value() : number{
        return this.transac_amt;
    }
}

class FilteredAccount extends Account{
    private filtered_transac : number;

    constructor(accNo : number){
        super(accNo)
        this.filtered_transac = 0;
    }

    process(transobj: Transaction): boolean {
        if(transobj.value() == 0){
            this.filtered_transac++;
            return true;
        }
        else{
            return super.process(transobj)
        }
    }

    filtered() : number{
        return this.filtered_transac
    }
}

let acc = new FilteredAccount(1234)

let transObj = new Transaction(100)
acc.process(transObj)

transObj = new Transaction(-50)
acc.process(transObj)


transObj = new Transaction(0)
acc.process(transObj)

console.log(acc.filtered());