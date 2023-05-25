const grid = document.body.querySelector(".grid");

for(let i=0; i<680; i++){
    const square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
}

const header = document.getElementById("header");
header.innerHTML = "Hover to change color, click to show Hex code";
const squareArray = document.querySelectorAll(".square");

squareArray.forEach((cell) => {
    let color;

    cell.addEventListener('click', ()=>{
        header.innerHTML = color;
    });
    cell.addEventListener('mouseover', () =>{ 
        color = getColor();       
        header.innerHTML = 'Grid';
        header.style.color = color;
        cell.style.backgroundColor = color;
    });

    cell.addEventListener('mouseout', () =>{        
        cell.style.backgroundColor = '';
    })
})

header.addEventListener('mouseover', ()=>{
    header.innerHTML = "Hover to change color, click to show Hex code"
}).addEventListener('mouseout', ()=>{
    header.innerHTML = '';
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