document.addEventListener("DOMContentLoaded", () => {
    let input1 = "";
    let operator = "";
    let input2 = "";
    let awaitInput = false;

    const calcLogic = (element) => {
        const input = document.getElementById("input-form"); //this is the display which is the input tag in html
        const clickedValue = element.value;

        if (clickedValue === "=") {
            if (input1 && operator && input2) {
                    input.value = eval(`${input1} ${operator} ${input2}`); // uses eval to evaluate expressoin
                
            } else {
                input.value =resetCalculator();
            }
        } else if (isOperator(clickedValue)) {
            handleOperator(clickedValue);
        } else {
            handleNumber(clickedValue);
        }
    };

    const isOperator = (value) => {
        const operators = ["*", "/", "-", "+"];
        return operators.includes(value);
    };

    const handleOperator = (clickedValue) => {
        if (input1 && !awaitInput) {
            operator = clickedValue;
            awaitInput = true;
            document.getElementById("input-form").value = "";
        }
    };

    const handleNumber = (clickedValue) => {
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
        awaitInput = false;
        return document.getElementById("input-form").value = "";

    };

    const clearButton = document.getElementById("btn-clear");
    clearButton.addEventListener("click", resetCalculator);

    const buttons = document.getElementsByClassName("calc-button-number");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            calcLogic(this);
        });
    }
});
