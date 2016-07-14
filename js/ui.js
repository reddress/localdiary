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

function setFromSelectsToToday() {
  var now = new Date();
  makeSelection("from_year", now.getFullYear());
  makeSelection("from_month", now.getMonth() + 1);
  makeSelection("from_day", now.getDate());
}

function setToSelectsToNextMonth() {
  var now = new Date();
  var nextMonth = now.getMonth() + 1;

  var setAsYear = now.getFullYear() + Math.floor(nextMonth / 11);
  var setAsMonth = nextMonth % 12;

  makeSelection("to_year", setAsYear);
  makeSelection("to_month", setAsMonth + 1);  // select starts at 1
  makeSelection("to_day", 1);
}


function setToSelectsToEndOfMonth() {
  var now = new Date();
  
  var month = now.getMonth() + 1;
  var year = now.getFullYear();

  makeSelection("to_year", year);
  makeSelection("to_month", month);
  makeSelection("to_day", lastDayOfMonth(month, year));
}

document.getElementById("ok").addEventListener("click", function() {
  storeEntry(document.getElementById("year").value,
             document.getElementById("month").value,
             document.getElementById("day").value,
             document.getElementById("hours").value,
             document.getElementById("minutes").value,
             document.getElementById("seconds").value,
             document.getElementById("entry").value);
  setAddSelectsToNow();
  document.getElementById("filter").click();
  document.getElementById("entry").value = "";
});

document.getElementById("filter").addEventListener("click", function() {
  var fromEpoch = YMDToEpoch(
    document.getElementById("from_year").value,
    document.getElementById("from_month").value,
    document.getElementById("from_day").value, 0, 0, 0);
  
  var toEpoch = YMDToEpoch(
    document.getElementById("to_year").value,
    document.getElementById("to_month").value,
    document.getElementById("to_day").value, 0, 0, 0);
  
  filterEntries(fromEpoch, toEpoch);
});

document.getElementById("filterToday").addEventListener("click", function() {
  setFromSelectsToToday();
  setToSelectsToToday();

  document.getElementById("filter").click();
});

document.getElementById("filterMonth").addEventListener("click", function() {
  setFromSelectsToStartOfMonth();
  setToSelectsToEndOfMonth();

  document.getElementById("filter").click();
});

document.getElementById("timeNow").addEventListener("click", function() {
  setAddSelectsToNow();
});

document.getElementById("search").addEventListener("click", function() {
  var searchWords = document.getElementById("searchWords").value;
  if (searchWords.trim() !== "") {
    filterSearch(searchWords);
  } else {
    document.getElementById("filter").click();
  }
});

document.getElementById("clearSearch").addEventListener("click", function() {
  document.getElementById("searchWords").value="";
  document.getElementById("filter").click();
});
