const grid = document.body.querySelector(".grid");
document.getElementById("header").innerHTML = "Hover to change color, click to show Hex code";

for(let i=0; i<680; i++){
    const square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
}
  
const squareArray = document.querySelectorAll(".square");
squareArray.forEach((cell) => {
    const color = getColor();
    cell.addEventListener('click', ()=>{
        document.getElementById("header").innerHTML = color;
    })
    cell.addEventListener('mouseover', () =>{
        cell.style.backgroundColor = color;
        document.getElementById("header").style.color = color;
    });

    cell.addEventListener('mouseout', () =>{
        document.getElementById("header").innerHTML = 'Grid';
        cell.style.backgroundColor = '';
    })
})

function getColor(){
    const hex = "0123456789ABCDEF"
    let hexCode = "#";
    for(let i=0; i<6; i++){
        const random = Math.floor(Math.random() * hex.length);
        hexCode += hex[random];
    }
    return hexCode;
}