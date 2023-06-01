"use strict";
let bookArr = [
    {
        title: "My talented book",
        author: "ABC"
    },
    {
        title: "My third book",
        author: "XYZ"
    },
    {
        title: "My second book",
        author: "CDE"
    }
];
let bookInp = document.getElementById('book-ip');
let bookOutDiv = document.getElementById('parent');
function searchBook() {
    let inputText = bookInp.value;
    let bookTyped = bookArr.filter((data) => {
        if (inputText != "" && data.title.includes(inputText)) {
            return true;
        }
        return false;
    });
    bookOutDiv.innerHTML = "";
    bookTyped.forEach((data) => {
        bookOutDiv.innerHTML += `
        ${data.title} - ${data.author}
        <br>
        `;
    });
}
