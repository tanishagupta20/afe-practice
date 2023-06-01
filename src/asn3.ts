class safeArray{
    public arr : number[];
    public size : number;
    public failed : number;
    public failedIdx : number[];

    constructor(){
        this.arr = [];
        this.size = 5;
        this.failed = 0;
        this.failedIdx = [];
    }

    putElement(index : number, value : number) : void{
        if(index >= 5){
            this.failed++;
            this.failedIdx.push(index)
            console.log("No valid index ", + this.failed + " failed attempt and invalid attempts are " + this.failedIdx)
        }
        else{
            this.arr.splice(index, 0, value);
        }
    }

    getElement(index : number){
        if(index >= 5){
            return -1;
        }
        return this.arr[index];
    }
}

let sa1 = new safeArray();                 // define a Safearray object

let temp = 125;   // define an int value

sa1.putElement(3, temp);                // insert value of temp into array at index 3

temp = sa1.getElement(3);              // obtain value from array at index 3

sa1.putElement(27, temp);                              // insert value of temp into array at index 27

//message should appear No valid index:1 failed attempt and invalid attempts are 27

sa1.putElement(7, temp);                // insert value of temp into array at index 7

//message should appear No valid index:2 failed attempt and invalid attempts are 27,7