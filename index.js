document.addEventListener("DOMContentLoaded", () => {
    let input1 = "";
    let operator = "";
    let input2 = "";
    let awaitInput = false;

    const calcLogic = (element) => {
        const input = document.getElementById("input-form");
        const clickedValue = element.value;

        if (clickedValue === "=") {
            if (input1 && operator && input2) {
                    input.value = eval(`${input1} ${operator} ${input2}`); //uses eval func to compare operate on two strings 
                    resetCalculator();

            }
            else {input.value = "User err";}
        } else if (isOperator(clickedValue)) {
            handleOperator(clickedValue);
        } else {
            Number(clickedValue);
        }
    };

    const isOperator = (value) => {
        const operators = ["*", "/", "-", "+"];
        if (operators.includes(value)) {
            return value;
        }
    };

    const handleOperator = (clickedValue) => {
        if (input1 && !awaitInput) {
            operator = clickedValue;
            awaitInput = true;
            document.getElementById("input-form").value = "";
        }
    };

    const Number = (clickedValue) => {
        const input = document.getElementById("input-form");

        if (awaitInput) {
            input2 += clickedValue;
            input.value = input2;
        } else {
            input1 += clickedValue;
            input.value = input1; 
        }
    };

    const resetCalculator = () => {
        input1 = "";
        operator = "";
        input2 = "";
        input.value += "";
        awaitInput = false;
    };

    const buttons = document.getElementsByClassName("calc-button-number");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            calcLogic(this);
        });
    }
});


/*
const operatorsObj = {

    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
    equals:"=",
}



let currInput = ""

if (currInput.length > 0) {

    const calc = (operator1, operator2) => {
        let res;
        const input1 = parseInt(operator1)
        const input2 = parseInt(operator2)
        switch (operator) {
            case operatorsObj.add: res = input1 + input2
                break;
            case operatorsObj.subtract: res = input1 - input2
                break;
            case operatorsObj.multiply: res = input1 * input2
                break;
            case operatorsObj.divide:    res = input1 / input2
                break;

        }
            return res;
        }
    }
    */

    



