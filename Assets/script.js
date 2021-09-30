function unpdateTime() {
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  $("#currentDay").text(time);
};

unpdateTime();
setInterval(function () {
  unpdateTime();

}, 1000);


$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(value);
    console.log(time)
    localStorage.setItem(time, value)

  })
  var currentHour = moment().hours();
  console.log(currentHour);

})



var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
  var currentTime = moment().format('H');
  for (var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");


    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: lightgray");

    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");

    }
  }
}
$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-13 .description").val(localStorage.getItem('hour-13'));
$("#hour-14 .description").val(localStorage.getItem('hour-14'));
$("#hour-15 .description").val(localStorage.getItem('hour-15'));
$("#hour-16 .description").val(localStorage.getItem('hour-16'));
$("#hour-17 .description").val(localStorage.getItem('hour-17'));

//$(".time-block").each(function() {
//  var blockId = $(this).attr("id");
// load saved data from local storage
 // $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
//});