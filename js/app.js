$(document).foundation();
var time = new Date();




function thisDateHuman(dateObj){
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var thisDate = dateObj;
  var year = thisDate.getFullYear();
  var month = months[thisDate.getMonth()];
  var date = thisDate.getDate();
  return date + ' ' + month + ' ' + year; 
}

function thisDateUnix(dateObj){
  return dateObj.getTime();
}

function addDays(dateObj, numDays) {
   dateObj.setDate(dateObj.getDate() + numDays);
   return dateObj;
}

// console.log(thisDateHuman(time));
// console.log(thisDateUnix(time));


// for (var i = 0; i <= 6; i++) {
//   var thisTime = time;
//   var weekTime = addDays(new Date(), i);
//   console.log(i);
//   console.log(weekTime);
// };

// console.log(calendar.currentDate.unix());
// console.log(calendar.currentDate.human());

$(document).ready(function(){
  function outputHeadings(dateObj){
    var dateObject = dateObj || new Date();
    for (var i = 0; i <= 6; i++) {
      
      var thisTime = time;
      var weekTime = addDays(dateObject, i);
      // console.log(i);
      // console.log(weekTime);
    };
  }
  outputHeadings(new Date());
  function modals(){

  }
  $('.available').each(function(){
    var startTime = $(this).data('startTime');
    var endTime = $(this).data('endTime');
  });
});

