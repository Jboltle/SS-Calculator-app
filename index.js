document.addEventListener("DOMContentLoaded", () => {
    let input1 = "";
    let operator = "";
    let input2 = "";
    let awaitInput = false; // To track if we're waiting for the second input

    const calcLogic = (element) => {
        const input = document.getElementById("input-form");
        const clickedValue = element.value;


    const isOperator = (value) => {
        const operators = [ "*" ,"/", "-", "+"]
        if (operators.includes(value) )
            return  value
        }


    };

    const handleOperator = (clickedValue) => {
       
        if (input1 && !waitingForInput2) {
            operator = clickedValue;
           awaitInput = true;
           document.getElementById("input-form").value = ""; // Clear the input field for the second input
       }
    };

    if (clickedValue === "=") {
        if (input1 && operator && input2) {

                input.value = eval(`${input1} ${operator} ${input2}`);

        }

    else if (isOperator(clickedValue)) {
        handleOperator(clickedValue);
    } else {
        handleNumber(clickedValue);
    }
};
    const handleNumber = (clickedValue) => {
        if (awaitInput) {
            input2 += clickedValue;
            document.getElementById("input-form").value = input2; // Display second input value
        } else {
            input1 += clickedValue;
            document.getElementById("input-form").value = input1; // Display first input value
        }
    };



    // Get all calculator buttons
    const buttons = document.getElementsByClassName("calc-button-number");

    // Add click event listeners to each button
    for (let button of buttons) {
        button.addEventListener("click", function() {
            calcLogic(this);
        });
    }
}
)



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

    



