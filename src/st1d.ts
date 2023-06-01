let elArr : number[] = [];

let insertIp = document.getElementById('insert-ip') as HTMLInputElement
let delIp = document.getElementById('del-ip') as HTMLInputElement
let printArr = document.getElementById('printArr') as HTMLDivElement
let filterArr = document.getElementById('filterArr') as HTMLDivElement

function insertEle(){
    for(let i : number = 0; i < parseInt(insertIp.value); i++){
        let num = prompt("Enter element to insert!")
        elArr.push(parseInt(num!))
    }

    printArr.innerHTML = elArr.toString()
}

function delEle(){

    let filteredArr : number[] = []

    for(let i : number = 0; i < parseInt(delIp.value); i++){
        let num = prompt("Enter element to delete!")
        filteredArr = elArr.filter((data) => {
            if(data != parseInt(num!)){
                return true;
            }
            return false;
        })

        elArr = filteredArr
    }

    filterArr.innerHTML = filteredArr.toString()
}