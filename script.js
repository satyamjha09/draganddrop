

function drag(event) {
    event.dataTransfer.setData("text" , event.target.id);
}

function allowDrag(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}