"use strict";
let elArr = [];
let insertIp = document.getElementById('insert-ip');
let delIp = document.getElementById('del-ip');
let printArr = document.getElementById('printArr');
let filterArr = document.getElementById('filterArr');
function insertEle() {
    for (let i = 0; i < parseInt(insertIp.value); i++) {
        let num = prompt("Enter element to insert!");
        elArr.push(parseInt(num));
    }
    printArr.innerHTML = elArr.toString();
}
function delEle() {
    let filteredArr = [];
    for (let i = 0; i < parseInt(delIp.value); i++) {
        let num = prompt("Enter element to delete!");
        filteredArr = elArr.filter((data) => {
            if (data != parseInt(num)) {
                return true;
            }
            return false;
        });
        elArr = filteredArr;
    }
    filterArr.innerHTML = filteredArr.toString();
}
