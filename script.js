// Taking all Input as form an Array
const starth = document.querySelectorAll("input");
var resultdiv = document.getElementsByClassName("resultdiv");

var sumworkh = document.getElementById('totalwork');
// console.log(starth);
// when you hit the Calculate button then this code and function will call

var calculate = document.getElementById("calculate");

calculate.onclick = () => {
  // Starting point am or pm
  const amorpmst = document.getElementsByClassName("AmorPm");
  // console.log(amorpmst);

  // work Time starting point
  var starthour = document.getElementsByClassName("starthour");
  var startmint = document.getElementsByClassName("startmint");

  // Work ending point
  var endhour = document.getElementsByClassName("endhour");
  var endmint = document.getElementsByClassName("endmint");

  // break time deduction
  var breakhour = document.getElementsByClassName("breakhour");
  var breakmint = document.getElementsByClassName("breakmint");

  var totalwork = 0;
  var totalmint = 0;
  var mint = 0;
  var hour = 0;
  var divmint = 0;

  for (var i = 0; i < 6; i++) {
    // For hour calculation
    if (
      amorpmst[2 * (i + 1) - 1].value == "Pm" &&
      amorpmst[2 * i].value == "Am"
    ) {
      hour =
        -Number(starthour[i].value) +
        (12 + Number(endhour[i].value)) -
        Number(breakhour[i].value);
      // console.log(hour);
    } else if (
      amorpmst[2 * (i + 1) - 1].value == "Am" &&
      amorpmst[2 * i].value == "Pm"
    ) {
      hour =
        12 +
        Number(starthour[i].value) -
        Number(endhour[i].value) -
        Number(breakhour[i].value);
      // console.log(hour);
    } else {
      hour =
        -Number(starthour[i].value) +
        Number(endhour[i].value) -
        Number(breakhour[i].value);
      // console.log(hour);
    }
    if(hour < 0){
        hour = - hour;
    }
    mint = Number(startmint[i].value);
    divmint = Number(endmint[i].value) + Number(breakmint[i].value);
    // console.log(divmint);
    // console.log(mint)
    while (mint < divmint) {
      console.log(
        "hour is " + hour + " and mint is " + mint + " divmint " + divmint



        
      );
      if (mint < divmint) {
        mint = mint + 60;
        hour--;
      }
      // console.log("your mint will be " + (mint - divmint) + " hour "+ hour);
    }
    mint = mint - divmint;
    // console.log(mint)
    totalwork += hour;
    totalmint += mint;
    // Total checking process
    resultdiv[i].innerHTML = `${hour}:${mint}`
  }

  sumworkh.textContent = `${totalwork} : ${totalmint}`
};

// When you hit clear all it will reset all input value
var clearall = document.getElementById("clearall");

clearall.onclick = () => {
  for (var i = 0; i < 36; i++) {
    // console.log(starth[i]);
    starth[i].value = "";
  }
};
