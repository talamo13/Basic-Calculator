let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let answer = document.getElementById("answer");


function onClick(event) {
    let myButton = event.target;
    let num = document.createElement("span");
    let op = document.createElement("span");

    if (myButton.id == "AC"){
        clear();
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
        op.textContent = "%";
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
        op.textContent = "-";
    }
    else if (myButton.id == "+"){
        op.textContent = "+";
    }
    else if (myButton.id == "="){
        let variableString1 = num1.textContent;
        let variableString2 = num2.textContent;

        let variable1 = parseInt(variableString1);
        let variable2 = parseInt(variableString2);

        if(operator.textContent == "+"){
            add(variable1, variable2);
        }
        else if(operator.textContent == "-"){
            sub(variable1, variable2);
        }
        else if(operator.textContent == "x"){
            multiply(variable1, variable2);
        }
        else if(operator.textContent == "/"){
            divide(variable1, variable2);
        }
        else if (operator.textContent == "%"){
            modulo(variable1, variable2);
        }
    }

    if (operator.textContent == "") {
        num1.textContent = num.textContent + num1.textContent;
        operator.textContent = op.textContent;
    }
    else {
        num2.textContent = num.textContent + num2.textContent;
    }

}

function clear() {
    num1.textContent = "";
    num2.textContent = "";
    operator.textContent = "";
    answer.textContent = "";
}

function add(x, y) {
    let sum = x + y;
    answer.textContent = sum.toString();
}

function sub(x, y) {
    let difference = x - y;
    answer.textContent = difference.toString();
}

function multiply(x, y) {
    let product = x * y;
    answer.textContent = product.toString();
}

function divide(x, y) {
    let quotient = x / y;
    answer.textContent = quotient.toString();
}

function modulo(x,y) {
    let quotient = x % y;
    answer.textContent = quotient.toString();
}