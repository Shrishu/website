const draggableElements = document.querySelector(".draggable");
const droppableElements = document.querySelector(".droppable");

draggableElements.forEach(element => {
    element.addEventlitesner("dragstart",dragStart);
});


draggableElements.forEach(element => {
    element.addEventlitesner("dragenter",dragEnter);
    element.addEventlitesner("dragover",dragOver);
    element.addEventlitesner("dragLeave",dragLeave);
    element.addEventlitesner("drop",drop);
});

function dragStart(event){
   event.dataTransfer.setData("text",event.target.id);
}


function dragEnter(event){
    event.target.classList.add("wb-hover");
 }


function dragOver(event){
    event.preventDefault();
 }

 function dragLeave(event){
    event.target.classList.remove("wb-hover");
 }

 function drop(event){
    event.preventDefault();
    const draggableElementData= event.dataTransfer.getData("text");
   const droppableElementData= event.dataTransfer.getAttribute("data-draggable-id");
   if(draggableElementData === droppableElementData){
    var tom1 =new Audio("sounds/tom-1.mp3");
    tom1.play();
   }
 }