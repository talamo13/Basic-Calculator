let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let answer = document.getElementById("answer");


function onClick(event) {
    let myButton = event.target;
    let num = document.createElement("span");
    let op = document.createElement("span");

    if (myButton.id == "AC"){

    }
    else if (myButton.id == "7"){
        num.textContent = "7";
    }
    else if (myButton.id == "4"){
        num.textContent = "4";
    }
    else if (myButton.id == "1"){
        num.textContent = "1";
    }
    else if (myButton.id == "<"){
        op.textContent = "<";
    }
    else if (myButton.id == "( )"){

    }
    else if (myButton.id == "8"){
        num.textContent = "8";
    }
    else if (myButton.id == "5"){
        num.textContent = "5";
    }
    else if (myButton.id == "2"){
        num.textContent = "2";
    }
    else if (myButton.id == "0"){
        num.textContent = "0";
    }
    else if (myButton.id == "%"){
        op.textContent = "<";
    }
    else if (myButton.id == "9"){
        num.textContent = "9";
    }
    else if (myButton.id == "6"){
        num.textContent = "6";
    }
    else if (myButton.id == "3"){
        num.textContent = "3";
    }
    else if (myButton.id == "."){

    }
    else if (myButton.id == "/"){
        op.textContent = "/";
    }
    else if (myButton.id == "x"){
        op.textContent = "x";
    }
    else if (myButton.id == "-"){
        op.textContent = "=";
    }
    else if (myButton.id == "+"){
        op.textContent = "+";
    }
    else if (myButton.id == "="){
        alert("THIS DOESNT WORK YET");
    }

    if (num1.textContent == "") {
        num1.textContent = num.textContent;
    }
    else if (num2.textContent == "") {
        num2.textContent = num.textContent;
    }

    if (operator.textContent == "") {
        operator.textContent = op.textContent;
    }
}