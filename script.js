var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var closeButtons = document.getElementsByClassName("close");
var tickButton = document.getElementsByClassName("tick");

// check if input is empty or not
function inputLength() {
	return input.value.length;
}

// create a new list item
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	createDoneButton(li);
	createDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

// method to add the newly created list item using button click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// method to add the newly created list item using "ENTER" key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// method for deleting item
function deleteItem(event) {
	if (event.target.className === "close") {
		ul.removeChild(event.target.parentElement);
	}
}

// method for lineThrough on item-click
function lineThrough(event) {
	if (event.target.className === "tick" && event.target.parentElement.className === "") {
		event.target.parentElement.className = "done";
	} else {
		event.target.parentElement.className = "";
	}
}



// method for adding a done button
function createDoneButton(li) {
	var doneButton = document.createElement("span");
	doneButton.className = "tick";
	doneButton.innerHTML = "&#10004/&#10006;";
	li.appendChild(doneButton);
}


// method for adding a delete button on each item
function createDeleteButton(li) {
	var delButton = document.createElement("span");
	delButton.className = "close";
	delButton.innerHTML = "	&#128465";
	li.appendChild(delButton);
}

// listeners for click and key press.
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", deleteItem);
ul.addEventListener("click", lineThrough);
