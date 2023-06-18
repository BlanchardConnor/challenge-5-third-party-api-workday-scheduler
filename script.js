// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
// Function to add an item to local storage
function addToLocalStorage(key, value) {
  if (typeof key !== 'string' || typeof value !== 'string') {
    console.error('Key and value must be strings');
    return;
  }

  localStorage.setItem(key, value);
  console.log(`Item '${key}' successfully added to local storage.`);
}

// Function to retrieve an item from local storage
function getFromLocalStorage(key) {
  if (typeof key !== 'string') {
    console.error('Key must be a string');
    return;
  }

  const value = localStorage.getItem(key);
  if (value === null) {
    console.log(`Item '${key}' not found in local storage.`);
    return;
  }

  console.log(`Item '${key}' retrieved from local storage: ${value}`);
  return value;
}


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
