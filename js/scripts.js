'use strict';
alert('Welcom to my information page');
var username = prompt("Whats your name");
alert ('Welcom to my information page...' + username)

var name;
var name = prompt("do you know me? YES/NO");

switch (name.toLocaleLowerCase()) {
    case 'yes':
        alert("Thank You ");
        console.log("Thank You");
        break;
    case 'no':
        alert(' My name Is AMjad');
        console.log(' My name Is AMjad');
        break;
    default:
        alert('you didnt answer correct but My name Is AMjad ');
        console.log('Default statment');
        break;
}
// <!-- ////////////////// -->
var counter = 1;
var myAge;
while (counter <= 4) {
    myAge= prompt ('my age is?');
    console.log(counter);
    if (myAge == 25){
        alert("Thank You ");
        break;
      } else {
        alert("try again... "+ "the" + counter + " from 4 ");
      }
    counter = counter +1;
}


var uservme;
var userAge = prompt('Please enter your age');

if (userAge > 25 &&   userAge <= 100) {
    uservme = 'You are older than me haha..';
    alert(uservme);
} else if (userAge >= 0 && userAge < 25) {
    uservme = 'Im older than you ';
    alert(uservme);
} else if (userAge = 25) {
    uservme = 'WWWWOOOOOWWW we are the same age yaaay';
    alert(uservme);
} else {
    uservme = 'Something went wrong!';
    alert(uservme);
}




var mas;
var where;
var jordan = confirm('Are you from jordan?')
if (jordan == true){
    where = prompt('where are you from?');
    mas = "the best peple";
    console.log(mas);
} else {
  where = prompt('where are you from')
  mas = ('the best peple from..'+ where)  
  console.log(mas);
}
alert (mas)



var study = confirm('Are you an Engineer?')





document.write('<h3>' + "What you answerd" + '</h3>');
document.write('<h3>' + "Whats your name.." + username + '</h3>');
document.write('<h3>' + "do you know me?.." + name + '</h3>');
document.write('<h3>' + "my age is.." + myAge + '</h3>');
document.write('<h3>' + "Are you from jordan..?" + jordan + '</h3>');
document.write('<h3>' + "you from.." + where + '</h3>');
document.write('<h3>' + "Are you an Engineer..?" + study + '</h3>');
document.write('<h3>' + "Your age is.." + userAge + "..then.." + uservme + '</h3>');
document.write('<h3>' + "You tried.." + counter + " times before you know my age" + '</h3>');

