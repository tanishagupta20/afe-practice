"use strict";
let div = document.getElementById('parent');
let input = document.createElement('input');
input.id = 'ip';
div.appendChild(input);
let br = document.createElement('br');
div.appendChild(br);
let push = document.createElement('button');
push.textContent = 'Push';
push.id = 'push-btn';
push.onclick = () => {
    let inp = document.getElementById('ip');
    let inpVal = inp.value;
    pushEle(parseInt(inpVal));
};
div.appendChild(push);
let pop = document.createElement('button');
pop.textContent = 'Pop';
pop.id = 'pop-btn';
pop.onclick = () => {
    let ele = popEle();
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ele.toString();
};
div.appendChild(pop);
let peek = document.createElement('button');
peek.textContent = 'Peek';
peek.id = 'peek-btn';
peek.onclick = () => {
    let ele = peekEle();
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ele.toString();
};
div.appendChild(peek);
let count = document.createElement('button');
count.textContent = 'Count';
count.id = 'count-btn';
count.onclick = () => {
    let ele = countEle();
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ele.toString();
};
div.appendChild(count);
let isempty = document.createElement('button');
isempty.textContent = 'IsEmpty';
isempty.id = 'isempty-btn';
isempty.onclick = () => {
    let outputDiv = document.getElementById('output');
    if (isEmpty()) {
        outputDiv.innerHTML = `Stack is empty!`;
    }
    else {
        outputDiv.innerHTML = `Stack is not empty!`;
    }
};
div.appendChild(isempty);
div.appendChild(br);
let output = document.createElement('div');
output.id = 'output';
div.appendChild(output);
let stack = [];
function pushEle(ele) {
    stack.unshift(ele);
}
function popEle() {
    return stack.shift();
}
function peekEle() {
    if (isEmpty()) {
        return -1;
    }
    return stack[0];
}
function countEle() {
    let c = 0;
    stack.forEach(() => {
        c++;
    });
    return c;
}
function isEmpty() {
    if (stack.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
