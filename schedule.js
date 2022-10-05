var time = document.getElementById("container");
var saveButton = document.getElementById("save");
var text = document.getElementById("comments");
var saveIcon = document.getElementById("lock-icon");
var commentsSaved = document.getElementById("comments-here");
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = moment().hour();
var button1 = document.getElementById("9amBtn");

function targetTime() {
  var div = document.getElementById("9am");
  var data = div.getAttribute("data-hour")
  console.log(data);
  
  if (data < currentTime) {
    div.classList.add("past");
  }
  else if(data > currentTime) {
    div.classList.add("future");
  }
  else {
    div.classList.add("present");
  }
}

function save () {
  var SaveInfo = document.getElementById("9am").value;
  localStorage.setItem("SaveInfo" , JSON.stringify(SaveInfo));
}
button1.addEventListener("click", save);

function displayComments() {
  var display = JSON.parse(localStorage.getItem("saveInfo"));
  document.getElementById("9am").value = display;
}

displayComments();
targetTime();