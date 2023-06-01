interface bookType{
    title : string,
    author : string
}

let bookArr : bookType[] = [
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
]

let bookInp = document.getElementById('book-ip') as HTMLInputElement
let bookOutDiv = document.getElementById('parent') as HTMLInputElement

function searchBook(){
    let inputText = bookInp.value
    let bookTyped = bookArr.filter((data) => {
        if(inputText != "" && data.title.includes(inputText)){
            return true;
        }
        return false;
    })

    bookOutDiv.innerHTML = ""

    bookTyped.forEach((data) => {
        bookOutDiv.innerHTML += `
        ${data.title} - ${data.author}
        <br>
        `
    })

}