let div = document.getElementById('parent')!

let input : HTMLInputElement = document.createElement('input')
input.id = 'ip'
div.appendChild(input)

let br = document.createElement('br')
div.appendChild(br)

let push : HTMLButtonElement = document.createElement('button')
push.textContent = 'Push'
push.id = 'push-btn'
push.onclick = () => {
    let inp = document.getElementById('ip') as HTMLInputElement;
    let inpVal = inp.value
    pushEle(parseInt(inpVal))
}
div.appendChild(push)

let pop : HTMLButtonElement = document.createElement('button')
pop.textContent = 'Pop'
pop.id = 'pop-btn'
pop.onclick = () => {
    let ele : number = popEle()
    let outputDiv = document.getElementById('output') as HTMLDivElement
    outputDiv.innerHTML = ele.toString()
}

div.appendChild(pop)

let peek : HTMLButtonElement = document.createElement('button')
peek.textContent = 'Peek'
peek.id = 'peek-btn'
peek.onclick = () => {
    let ele : number = peekEle()
    let outputDiv = document.getElementById('output') as HTMLDivElement
    outputDiv.innerHTML = ele.toString()
}
div.appendChild(peek)

let count : HTMLButtonElement = document.createElement('button')
count.textContent = 'Count'
count.id = 'count-btn'
count.onclick = () => {
    let ele : number = countEle()
    let outputDiv = document.getElementById('output') as HTMLDivElement
    outputDiv.innerHTML = ele.toString()
}
div.appendChild(count)

let isempty : HTMLButtonElement = document.createElement('button')
isempty.textContent = 'IsEmpty'
isempty.id = 'isempty-btn'
isempty.onclick = () => {
    let outputDiv = document.getElementById('output') as HTMLDivElement
    if(isEmpty()){
        outputDiv.innerHTML = `Stack is empty!`
    }
    else{
        outputDiv.innerHTML = `Stack is not empty!`
    }
}
div.appendChild(isempty)

div.appendChild(br)

let output = document.createElement('div')
output.id = 'output'
div.appendChild(output)

let stack : number[] = [];

function pushEle(ele : number) : void{
    stack.unshift(ele);
}

function popEle() : number{
    return stack.shift()!;
}

function peekEle() : number{
    if(isEmpty()){
        return -1;
    }
    return stack[0];
}

function countEle() : number{
    let c : number = 0;
    stack.forEach(() => {
        c++;
    })

    return c;
}

function isEmpty() : boolean{
    if(stack.length === 0){
        return true;
    }
    else{
        return false;
    }
}