document.addEventListener("DOMContentLoaded", function() {
  var timeNow = moment().format("ha");
  var dt = new Date();
  document.getElementById("currentDay").innerHTML = dt.toLocaleDateString();
  var hasPassed = false;
  var saveBtn = document.querySelectorAll(".saveBtn");
  var textAreaEls = document.querySelectorAll(".edit_cont")
  
  textAreaEls.forEach(element => {
    if (element.id === timeNow) {
      hasPassed = true;
      element.classList.add("present");
    } else if (hasPassed) {
      element.classList.add("future");
    } else {
      element.classList.add("past");
    };

    if (localStorage.getItem(element.id) !== null) {
      element.value = localStorage.getItem(element.id)
    }
  });

  var saveText = function() {
    var textAreaId = this.id.split("-")[0];
    var textArea = document.getElementById(textAreaId);
    localStorage.setItem(textAreaId, textArea.value);
    console.log(this);
  }
  saveBtn.forEach(element => {
    element.addEventListener("click", saveText);
  })
});



