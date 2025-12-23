/*//easy input
let username

username = window.prompt("What is your username");
console.log(username);
*/

/*
//input through textbox
let username;
document.getElementById("my_btn").onclick = function(){
    username = document.getElementById("name").value;
    document.getElementById("wlc").textContent = `welcome ${username}`;
}
*/
/*
// type conversion
let age = window.prompt("age");
age=Number(age)
console.log(age+1)*/

/*
// Counter program 
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const countLabel = document.getElementById("count_label");

let count=0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}

*/

//random number generator

let randomNum = Math.rand();