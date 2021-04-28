const colors = [
    {name: "red", motto: "rosa red"},
    {name: "green", motto: "grass green"}, 
    {name: "blue", motto: "ocean blue"},
    {name: "orange", motto: "holland orange"},
    {name: "yellow", motto: "sun yellow"}
];


const buttonElement = document.querySelector("#randomColorButton");
buttonElement.addEventListener("click", changeColor);


function changeColor(){
    let randomIndex = Math.floor(Math.random()*colors.length);
    document.querySelector("body").style.backgroundColor = colors[randomIndex].name;
    document.querySelector("#colorName").innerText = colors[randomIndex].name;
    document.querySelector("#colorDesc").innerText = colors[randomIndex].motto;
    console.log(colors[randomIndex]);
}


const inputElement = document.getElementById('setInput');
const setButtonElement = document.querySelector("#setColorButton");
setButtonElement.addEventListener("click", setColor);

function setColor(){
    document.querySelector("body").style.backgroundColor = inputElement.value;
    document.querySelector("#colorName").innerText = inputElement.value;
    document.querySelector("#colorDesc").innerText = "";
    
    if(colors.indexOf(inputElement.value) == -1){
       colors.push(inputElement.value); 
    }
    inputElement.value = "";
    inputElement.focus();
}