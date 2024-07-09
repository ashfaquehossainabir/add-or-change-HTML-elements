// --------------- Example: 1 <h1> ---------------------

// ---------------- Variables -----------------------------------------------
const boxes = document.querySelectorAll(".box");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

const listItems = document.querySelectorAll("#fruits li");
const fruits = document.getElementById("fruits");
const orange = document.getElementById("orange");

// ---------------- Step: 1 Create The Element ------------------------------
const newH1 = document.createElement("h1");

// ---------------- Step: 2 Add Attributes/Properties -----------------------
newH1.textContent = "New Headline!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// ---------------- Step: 3 Append Element to DOM ---------------------------

// document.body.append(newH1);
// document.body.prepend(newH1);
// box1.append(newH1);
// box1.prepend(newH1);

// document.body.insertBefore(newElement, currentElement)

// document.body.insertBefore(newH1, box2);


// --->> Another Example using querySelectorAll boxes class (Without ID) <<---
// document.body.insertBefore(newH1, boxes[1]);






// ------------ Remove HTML Element ------------------------------------------

// document.body.removeChild(newH1);
// box1.removeChild(newH1);


// ------------------------------| THE END |-----------------------------------


// -------------------- Example: 2 <li> ---------------------------------------

// -------------------- Step: 1 Create The Element ----------------------------

const newListItem = document.createElement("li");

// -------------------- Step: 2 Add Attributes/Properties ---------------------

newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// -------------------- Step: 3 Append Element to DOM -------------------------

// document.body.append(newListItem);
// document.body.prepend(newListItem);
// fruits.append(newListItem);
// fruits.prepend(newListItem);
// fruits.insertBefore(newListItem, orange);
// fruits.insertBefore(newListItem, listItems[1]);


// ------------ Remove HTML Element -------------------------------------------

// document.body.removeChild(newListItem);
// fruits.removeChild(newListItem);