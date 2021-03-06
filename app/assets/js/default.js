
// Setup the responsive navigation menu
var navigation = responsiveNav(".nav-collapse");

// Get all of the elements in the table
var elements = document.getElementsByClassName('el');
// Get the "close all elements" button
var closeAll = document.getElementById('element-close');

// loop the elements and add appropriate event listeners
var l = elements.length;
var i = 0;
var instantiatedElements = [];
var openedElements = [];
var focusedElements;
for(i; i<l; i++) {
	elements[i].addEventListener('click', function(event) {
		event.stopPropagation();
		var elementId = this.id;		 // this is the ID of the HTML element
		var htmlElementId = this.id - 1; // as the array is zero indexed, to refer to the array item we need to -1 from the HTML ID (it's dirty but I'm not sure there's a better way)
		// Instantiate a new element if one has not already been instantiated
		if(!elements[htmlElementId].classList.contains('el-expanded')) {
			// only instantiate an element if it hasn't already been instantiated
			if(!instantiatedElements[htmlElementId]) {
				var newElement = new element(elementId);
				instantiatedElements[htmlElementId] = newElement;
			}
			openedElements.push(htmlElementId);
			instantiatedElements[htmlElementId].expand();
			this.classList.add('el-focus', 'el-loaded'); // add a class we can use to detect if an ajax request has been made in the past
		}
		// focus the current element
		focusedElements = document.getElementsByClassName('el-focus');
		while (focusedElements.length) {
			focusedElements[0].classList.remove('el-focus');
		}
		this.classList.add('el-focus');
		closeAll.classList.add('visible');
	}, false);
}

// Code for closing all elements at once
closeAll.addEventListener('click', function(event) {
	event.preventDefault();
	var numElements = openedElements.length;
	for(var i = numElements - 1; i >= 0; i--) {
		var elementReference = openedElements[i];
		instantiatedElements[elementReference].close();
		// this seems ineffecient, but apparently it's (probably) the best way in our circumstances
		// see http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript for more
		openedElements.pop();
	}
	closeAll.classList.remove('visible');
}, false);
// Code for closing elements (could do with changing)
document.body.addEventListener('click', function(event) {
	try {
		// hide the element
		var lastOpenedReference = openedElements[openedElements.length-1];
		var lastOpened = instantiatedElements[lastOpenedReference]
		lastOpened.close();
		// remove the element from the opened array
		openedElements.pop();
		// if there are now no open elements then hide the close button
		if(openedElements.length == 0) {
			closeAll.classList.remove('visible');
		}
	} catch(ex) {
		// No items expanded!
	}
}, false);


// Needs Refactoring
var elementsKey = document.getElementsByClassName("key-el");
var l = elementsKey.length;
var i = 0;
for(i; i<l; i++) {
	elementsKey[i].addEventListener('mouseover', function(event) {
		document.body.classList.add("filtering-active");
		var highlightedElements = document.getElementsByClassName(this.id);
		var le = highlightedElements.length;
		var ie = 0;
		for(ie; ie<le; ie++) {
			highlightedElements[ie].classList.add("el-highlighted");
		}
	}, false);

	elementsKey[i].addEventListener('mouseout', function(event) {
		document.body.classList.remove("filtering-active");
		var highlightedElements = document.getElementsByClassName(this.id);
		var le = highlightedElements.length;
		var ie = 0;
		for(ie; ie<le; ie++) {
			highlightedElements[ie].classList.remove("el-highlighted");
		}
	}, false);
}