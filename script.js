
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
            const box = document.createElement("div");
            box.textContent = "BOX";
            row.appendChild(box);
        }
        // console.log("HELP");
});