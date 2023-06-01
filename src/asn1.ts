class TollBooth{
    private total_no_of_cars : number;
    private total_amt : number;

    constructor(){
        this.total_no_of_cars = 0;
        this.total_amt = 0;
    }

    payingCar() : void{
        this.total_amt += 50;
        this.total_no_of_cars++;
    }

    nopayCar() : void{
        this.total_no_of_cars++;
    }

    display() : void{
        console.log("Total number of cars : " + this.total_no_of_cars + ", Total amount : " + this.total_amt);
    }
}

let obj = new TollBooth()

function sample(...ops : string[]){
    ops.forEach((data) => {
        if(data == 'p'){
            obj.payingCar()
        }
        else{
            obj.nopayCar()
        }
    })
}

sample('p','p','n','p','n')
sample('p','p','n','p','p','n','p')
sample('p','p','n','p','n','p','p','p','n')

obj.display()