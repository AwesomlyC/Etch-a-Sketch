
const MAX_WIDTH = 960;
const MAX_HEIGHT = 680;

const rows = document.querySelectorAll(".row");
// const row = document.createElement("div");
// row.classList.add("row");
// for (let i = 0; i < 16; i++){
//     const box = document.createElement("div");
//     box.textContent = "BOX";
//     container.appendChild(box);
// }
// container.appendChild(row);


rows.forEach((row) => 
{
    for (let i = 0; i < 16; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = "width:60px" + ";height:42.5px";
            // square.style.cssText ='width: 20px; height: 20px;';

            square.addEventListener("mouseover", function (){
                square.style.backgroundColor="yellow";
            });
            row.appendChild(square);
        }
});


function changeColor(){

}

function generateBoard(){
    let size = prompt("Please enter the size of board you want to generate between 0 - 100!");
    while (size > 100 || size < 0){
        size = prompt("Please enter a valid size");
    }
    // Clear board
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    });

    // Create corresponding size board
    const container = document.querySelector(".container");
    let square_width = MAX_WIDTH/size;
    let square_height = MAX_HEIGHT/size;

    for (let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", function (){
                square.style.backgroundColor="yellow";
            });
            square.style.cssText = "width:" + square_width + "px; height: " + square_height + "px;";
            // square.style.cssText ='width: 20px; height: 20px;';
            row.appendChild(square);
            
        }
        container.appendChild(row);
    }
};
