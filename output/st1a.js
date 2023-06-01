"use strict";
let tripIte = [
    {
        day1: "Reach destination",
    },
    {
        day2: "City tour in company tourist bus",
    },
    {
        day2: "Breakfast and dinner",
    },
    {
        day3: "Visit Chang-La",
    },
    {
        day4: "Back to your home",
    },
];
let daySet = new Set();
tripIte.forEach((data) => {
    // console.log(Object.keys(data)[0])
    daySet.add(Object.keys(data)[0]);
});
let div2 = document.getElementById("parent");
let sel = document.createElement("select");
sel.id = "select-item";
sel.onchange = () => {
    let op = document.getElementById("output2");
    let matched = tripIte.filter((day) => {
        if (Object.keys(day)[0] === sel.value) {
            return true;
        }
        return false;
    });
    op.innerHTML = "";
    matched.forEach((data) => {
        op.innerHTML += data[sel.value] + `<br>`;
    });
};
div2.appendChild(sel);
let opSelected = document.createElement("option");
opSelected.selected = true;
opSelected.disabled = true;
opSelected.textContent = "--Default--";
sel.appendChild(opSelected);
daySet.forEach((day) => {
    let op = document.createElement("option");
    op.value = day;
    op.textContent = day;
    sel.appendChild(op);
});
let output2 = document.createElement("div");
output2.id = "output2";
div2.appendChild(output2);
