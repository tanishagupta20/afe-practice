interface ProdData {
  title: string;
  image: string;
  price: number;
  description: string;
}

let prodArr: ProdData[] = [
  {
    title: "Product1",
    image: "https://picsum.photos/200",
    price: 380,
    description: "first product",
  },
  {
    title: "Product2",
    image: "https:/picsum.photos/200",
    price: 980,
    description: "second product",
  },
  {
    title: "Product3",
    image: "https://picsum.photos/200",
    price: 1200,
    description: "third product",
  },
];

let prodSet: Set<string> = new Set();
prodArr.forEach((data) => {
  prodSet.add(data.title);
});

let prodDiv = document.getElementById('parent') as HTMLDivElement

let prodList = document.getElementById("prodList") as HTMLSelectElement;

let prodSelected: HTMLOptionElement = document.createElement("option");
prodSelected.selected = true;
prodSelected.disabled = true;
prodSelected.textContent = "--Default--";
prodList.appendChild(prodSelected);

prodSet.forEach((data) => {
  let op: HTMLOptionElement = document.createElement("option");
  op.value = data;
  op.textContent = data;
  prodList.appendChild(op);
});

function renderAll(){
    prodArr.forEach((data) => {
        prodDiv.innerHTML += `
        <div>
        <img src = ${data.image}/>
        <h3>${data.title}</h3><br>
        <p>${data.description}<br>
        ${data.price}</p>
        </div>
        `
    })
}

function renderSelected(){
    let selectedprod = prodArr.filter((data) => {
        if(data.title === prodList.value){
            return true;
        }
        return false;
    })

    selectedprod.forEach((data) => {
        prodDiv.innerHTML = `
        <div>
        <img src = ${data.image}/>
        <h3>${data.title}</h3><br>
        <p>${data.description}<br>
        ${data.price}</p>
        </div>
        `
    })
}

renderAll()