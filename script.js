// Select all the divs that have the "image" class
const images = document.querySelectorAll(".image");

// This variable will hold a reference to the div being dragged
let draggedItem = null;

// Add event listeners to each of the 6 divs
images.forEach((image) => {
  image.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    event.target.classList.add("selected");
  });

  image.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  image.addEventListener("dragleave", (event) => {
    event.target.classList.remove("selected");
  });

  // When the element is dropped on another element
  image.addEventListener("drop", (event) => {
    event.preventDefault();

    // Remove the selected class from both the dragged and the drop target
    draggedItem.classList.remove("selected");
    event.target.classList.remove("selected");

    // If the dropped target is the same as the dragged element, do nothing
    if (draggedItem === event.target) return;

    // Swap the background images
    const tempBg = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = event.target.style.backgroundImage;
    event.target.style.backgroundImage = tempBg;
  });

  // When the drag ends, clean up (remove the visual cue, etc.)
  image.addEventListener("dragend", () => {
    images.forEach((img) => img.classList.remove("selected"));
    draggedItem = null;
  });
});
