var save = document.querySelectorAll("saveBtn");
var today = dayjs();
console.log(today);
var hour = dayjs.hour();
var input = [];
setInterval = 0;
var textAreas = document.querySelectorAll(".description");

var pastDisplayEl = $().addClass('past');
var presentDisplayEl = $().addClass('present');
var futureDisplayEl = $().addClass('future');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

for (i = 0; i < textAreas.length; i++) {
  textAreas[i].
}

function saveNotesToStorage(userInput, elementId) {
  input.push(userInput);
  localStorage.setItem('notes', JSON.stringify(input));
}


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // return false;


  // localStorage.setItem('notes', JSON.stringify(input))

  for (i = 0; i < save.length; i++) {
    var elementId = save[i].parentElement
    save[i].addEventListener("click", saveNotesToStorage(elemtId));
  }
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $('.time-block').each(function () {
    var time = $(this).attr("id").split("-")[1];

    if (hour == time) {
      $(this).removeClass("past");
      $(this).removeClass("future")
      $(this).addClass("present");
    } else if (hour < time) {
      $(this).removeClass("past")
      $(this).removeClass("present");
      $(this).addClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});

function readNotesFromStorage() {
  var notes = localStorage.getItem('notes');
  if (notes) {
    input = JSON.parse(notes);
  } else {
    localStorage.setItem('notes', []);
  }
  return notes;
}

setInterval(displayTime, 1000);