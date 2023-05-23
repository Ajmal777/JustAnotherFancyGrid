const grid = document.body.querySelector(".grid");
for(let i=0; i<800; i++){
    const square = document.createElement("div");
    square.className = "square";
    grid.appendChild(square);
}
  
const squareArray = document.querySelectorAll(".square");
squareArray.forEach((cell) => {
    cell.addEventListener('mouseover', () =>{
        const red = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const color = `rgb(${red}, ${green}, ${blue})`;
        cell.style.backgroundColor = color;
        document.getElementById("header").style.color = color;
    });

    cell.addEventListener('mouseout', () =>{
        cell.style.backgroundColor = '';
    })
})
