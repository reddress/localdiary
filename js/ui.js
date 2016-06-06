function makeSelection(id, value) {
  document.getElementById(id).value = value.toString();
}

function setAddSelectsToNow() {
  var now = new Date();
  makeSelection("year", now.getFullYear());
  makeSelection("month", now.getMonth() + 1);
  makeSelection("day", now.getDate());
  makeSelection("hours", now.getHours());
  makeSelection("minutes", now.getMinutes());
  makeSelection("seconds", now.getSeconds());
}

function setFromSelectsToStartOfMonth() {
  var now = new Date();
  makeSelection("from_year", now.getFullYear());
  makeSelection("from_month", now.getMonth() + 1);
  makeSelection("from_day", 1);
}

function setToSelectsToToday() {
  var now = new Date();
  makeSelection("to_year", now.getFullYear());
  makeSelection("to_month", now.getMonth() + 1);
  makeSelection("to_day", now.getDate());
}
