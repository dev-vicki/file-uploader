const dragArea = document.querySelector(".drag-area");
const dragText = document.querySelector(".header");

// inside drag area
dragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragText.textContent = "Release to upload";
     // console.log("file is inside drag area!");
})

// outside drag area
dragArea.addEventListener("dragleave", (event) =>{
    dragText.textContent = "Drag & Drop";
    // console.log("file left drag area!")
})

// dropped inside drag area
dragArea.addEventListener("drop", (event) =>{
    event.preventDefault();
    // console.log("file dropped inside drag area!")
})

