function startTime() {
  var today = new Date();
 
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('MyDate').innerHTML = "Today "  + h + ":" + m + ":" + s;
  var today = setTimeout(startTime,500);

}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }; // add zero in front of numbers < 10
  return i;
}

// active btns
var headerbtn = document.getElementById("myBtns");
var btns = headerbtn.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// active btns

function myDispDistance() {
  document.getElementById("Distance").style.display = "block";
  document.getElementById("Currency").style.display = "none";
  myDisplay = document.getElementById("Weight").style.display = "none";
}

function myDispCurrency() {
  document.getElementById("Distance").style.display = "none";
  document.getElementById("Currency").style.display = "block";
  document.getElementById("Weight").style.display = "none";
}

function myDispWeight() {
  document.getElementById("Distance").style.display = "none";
  document.getElementById("Currency").style.display = "none";
  document.getElementById("Weight").style.display = "block";
}

// currency

function MyCurrency() {

  var fromid = document.getElementById("from-id").value;
  fromto = document.getElementById("to-id").value;
  amount = document.getElementById("in-amo-unt").value;
  result = 0;

  if (isNaN(amount)) {document.getElementById("message").innerHTML = "should be write correct value";return;}
  if (amount == "" ) {document.getElementById("message").innerHTML = " ";return;}
if ((fromid) == (fromto)){document.getElementById("message").innerHTML = " should be select correct value "; return;}

  if (fromid == "euro") {
    switch (fromto) {
      case "usd":
        result = amount * 2.5;
        break;
      case "cad":
        result = amount * 3.5;
        break;
      case "mad":
        result = amount * 9.2;
        break;
    }
  }
  if (fromid == "usd") {
    switch (fromto) {
      case "euro":
        result = amount * 2.5;
        break;
      case "cad":
        result = amount * 3.5;
        break;
      case "mad":
        result = amount * 9.2;
        break;
    }
  }
  if (fromid == "cad") {
    switch (fromto) {
      case "usd":
        result = amount * 2.5;
        break;
      case "euro":
        result = amount * 3.5;
        break;
      case "mad":
        result = amount * 9.2;
        break;
    }
  }
  if (fromid == "mad") {
    switch (fromto) {
      case "usd":
        result = amount * 2.5;
        break;
      case "cad":
        result = amount * 3.5;
        break;
      case "euro":
        result = amount * 9.2;
        break;
    }
  }

  var message =  result + " " + fromto;

  document.getElementById("message").innerHTML = message;
}
// distance
function MyDistance() {

  var fromid = document.getElementById("fromDistance-id").value;
  fromto = document.getElementById("toDistance-id").value;
  amount = document.getElementById("intro-amount").value;
  result = 0;

  if ( isNaN(amount)) {document.getElementById("msg").innerHTML = "should be write correct value";return;}
  if (amount == "") {document.getElementById("msg").innerHTML = " "; return;}
  if ((fromid) == (fromto)){document.getElementById("msg").innerHTML = "should be select correct value "; return;}

  if (fromid == "km") {
    switch (fromto) {
      case "m":
        result = amount * 1000;
        break;
      case "cm":
        result = amount * 100000;
        break;
      case "mm":
        result = amount * 1000000;



    }
  }
  if (fromid == "m") {
    switch (fromto) {
      case "km":
        result = amount / 1000;
        break;
      case "cm":
        result = amount / 100;
        break;
      case "mm":
        result = amount / 1000;

    }
  }

  var message =  result + " " + fromto;

  document.getElementById("msg").innerHTML = message;
}

// weight
function Weight() {

  var fromid = document.getElementById("from-weight-id").value;
  fromto = document.getElementById("to-weight-id").value;
  amount = document.getElementById("in-amount-weight").value;
  result = 0;

  if (isNaN(amount)) {document.getElementById("message-weight").innerHTML = "should be write correct value";return;}
  if (amount == ""){document.getElementById("message-weight").innerHTML = " "; return;}
  if ((fromid) == (fromto)){document.getElementById("message-weight").innerHTML = "should be select correct value "; return;}


  if (fromid == "t") {
    switch (fromto) {
      case "kg":
        result = amount * 1000;
        break;
      case "cg":
        result = amount * 100000;
        break;
      case "mg":
        result = amount * 1000000;



    }
  }
  if (fromid == "kg") {
    switch (fromto) {
      case "t":
        result = amount / 1000;
        break;
      case "cg":
        result = amount * 100000;
        break;
      case "mg":
        result = amount * 100000;

    }
  }
  if (fromid == "mg") {
    switch (fromto) {
      case "kg":
        result = amount / 1000;
        break;
      case "t":
        result = amount * 100000;
        break;
      case "cg":
        result = amount * 100000;
    }
  }

  if (fromid == "cg") {
    switch (fromto) {
      case "t":
        result = amount / 1000;
        break;
      case "kg":
        result = amount * 100000;
        break;
      case "mg":
        result = amount * 100000;
    }
  }


  var message =  result + " " + fromto;
  document.getElementById("message-weight").innerHTML = message;

}


function fromid() {
  var currencySelect = document.querySelector("#from-id");
  selecUser = currencySelect.options[currencySelect.selectedIndex].value;
  console.log(selecUser)
  document.getElementById("in-amo-unt").innerHTML = selecUser;
}

function fromid() {
  var currencySelect = document.querySelector("#sel1");
  selecUser = currencySelect.options[currencySelect.selectedIndex].value;
  document.getElementById("#sel2").innerHTML = selecUser;
}

// change FLAG currency 

var select = document.getElementById("from-id");
image = document.getElementById("usdflag");
image.setAttribute("src", "img/" + select.value + ".svg");
select.addEventListener("change",

  function () {
    image.setAttribute("src", "img/" + select.value + ".svg");
  });
var select2 = document.getElementById("to-id");

image2 = document.getElementById("usdflag2");
image2.setAttribute("src", "img/" + select2.value + ".svg");
select2.addEventListener("change", function () {
  image2.setAttribute("src", "img/" + select2.value + ".svg");
})