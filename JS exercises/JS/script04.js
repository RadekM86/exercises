//Program do liczenia ilości dni pomiędzy dwoma datami

var currentdate = new Date();
var datetime = "Dziś: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

    console.log(datetime);

var firstDate = [];

firstDate.push(currentdate.getFullYear()-2012 - 1);
firstDate.push(currentdate.getMonth()+1);
firstDate.push(currentdate.getDate() + 19);
if (firstDate[2]>31){
  firstDate[1] = firstDate[1]+1
  firstDate[2] = firstDate[2]-30;
};
firstDate.push(currentdate.getHours() - 21);
console.log(firstDate);

//Drugi sposób - dokładniejszy
var date1 = '2012-12-08';
var date2 = '2017-07-21';

// First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
date1 = date1.split('-');
date2 = date2.split('-');

// Now we convert the array to a Date object, which has several helpful methods
date1 = new Date(date1[0], date1[1], date1[2]);
date2 = new Date(date2[0], date2[1], date2[2]);

// We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
date1_unixtime = parseInt(date1.getTime() / 1000);
date2_unixtime = parseInt(date2.getTime() / 1000);

// This is the calculated difference in seconds
var timeDifference = date2_unixtime - date1_unixtime;

// in Hours
var timeDifferenceInHours = timeDifference / 60 / 60;

// and finaly, in days :)
var timeDifferenceInDays = timeDifferenceInHours  / 24;

console.log(Math.round(timeDifferenceInDays));
