const dragArea = document.querySelector(".drag-area");
const dragText = document.querySelector(".header");
let button =  document.querySelector(".button");
let input = document.querySelector("input");

let file;

button.onclick = () => {
    input.click();
}

input.addEventListener("change", function(){
    file = this.files[0];
    dragArea.classList.add("active");
    displayFile();
})

// inside drag area
dragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dragText.textContent = "Release to upload";
    dragArea.classList.add("active");

})

// outside drag area
dragArea.addEventListener("dragleave", (event) =>{
    dragText.textContent = "Drag & Drop";
    dragArea.classList.remove("active");


})

// dropped inside drag area
dragArea.addEventListener("drop", (event) =>{
  event.preventDefault();

  // only single file is accepted at a time
  file = event.dataTransfer.files[0];
   //console.log(file)
  displayFile();

});

function displayFile(){
      let fileType = file.type;
       //console.log(fileType)

      let validExtensions = [
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];

      let validFileExtensions = ["text/plain"];

      if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
          let fileURL = fileReader.result;
          // console.log(fileURL);

          let imgTag = `<img src="${fileURL}" alt="">`;

          dragArea.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(file);
      }

     else if  (validFileExtensions.includes("text/plain")) {
       let fileReader = new FileReader();
       fileReader.onload = () => {
         let fileURL = fileReader.result;
         let format = `<p>"${fileURL}"</p>`;
         dragArea.innerHTML = format;
       };
       fileReader.readAsText(file);
     }
     else  {
       alert("Entered file format not supported!");
       dragArea.classList.remove("active");
     }
}

