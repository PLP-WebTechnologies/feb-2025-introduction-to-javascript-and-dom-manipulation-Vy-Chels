// Function to change the text content of an element
function changeText() {
    const textElement = document.getElementById("text");
    textElement.textContent = "The text has been changed dynamically!";
}

// Function to modify the CSS style of an element
function toggleStyle() {
    const textElement = document.getElementById("text");
    textElement.classList.toggle("highlight"); // Toggle the 'highlight' class on/off
}

// Function to add a new element to the DOM
function addElement() {
    const container = document.getElementById("container");
    const newElement = document.createElement("p"); // Create a new <p> element
    newElement.textContent = "This is a new dynamically added paragraph!";
    container.appendChild(newElement); // Add it to the container
}

// Function to remove the last added element from the DOM
function removeElement() {
    const container = document.getElementById("container");
    const lastChild = container.lastElementChild;
    if (lastChild) {
        container.removeChild(lastChild); // Remove the last child element
    }
}

// Add event listeners to buttons
document.getElementById("changeTextButton").addEventListener("click", changeText);
document.getElementById("toggleStyleButton").addEventListener("click", toggleStyle);
document.getElementById("addElementButton").addEventListener("click", addElement);
document.getElementById("removeElementButton").addEventListener("click", removeElement);
