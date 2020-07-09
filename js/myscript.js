'use strict';
alert('Welcom');



function askForDonation() {
  var mas;
  var how;
  var why;
  var money = confirm('Can You help us to help others by your generous donation?')
 
  if (money == true){
    how = prompt('how much please chose on of these unmbers 1 5 10 20 50');
    while (how !== '1' && how !== '5'&& how !== '10'&& how !== '20'&& how !== '50') {
      how = prompt('how much please chose on of these unmbers 1 5 10 20 50');
      }
    mas = "Thank You for your efforts";
} else {
  why = prompt('Are you sure? yes or no')
  while (why !== 'yes' && why !== 'no') {
    why = prompt('Are you sure? yes or no')
    }
  mas = "Whyyyy";
}
document.write('<img class="img2" src="img/29027219_1646899498758564_1278825000555511808_o.jpg"> ' + mas );

// <!-- ////////////////// -->

var txt;
var r = confirm("Are you a Matar volunteer?");
if (r == true) {
  txt = "Thank You for your efforts";
} else {
  txt = "see you next time";
}
document.write('<h3>' + txt + '</h3>');

var hours = prompt('Please enter your tatal volunteering hours');
var volunteer;
if (hours > 50 && hours <= 100) {
  volunteer = 'You are Great';
} else if (hours > 20 && hours <= 50) {
  volunteer = 'you are good but need more';
} else if (hours >= 0 && hours <= 20) {
  volunteer = 'Do more efort to help others';
} else {
  volunteer = 'Something went wrong!';
}
document.write('<h3>' + volunteer + '</h3>');
for (var i = 0; i < hours; i++) {
  document.write('<img class="img3" src="img/kiss.jpg">');
}

  }
askForDonation()