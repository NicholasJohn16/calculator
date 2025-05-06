document.addEventListener('DOMContentLoaded', () => {

    let firstNumber = 0;
    let secondNumber = null;
    let operation = null;

    const answer = document.getElementById('answer');
    const numButtons = Array.from(document.getElementsByClassName('btn-num'));
    const operationButtons = Array.from(document.getElementsByClassName('btn-operator'));
    const result = document.getElementsByClassName('btn-result');
    const clearBtn = document.getElementsByClassName('btn-clear');

    const first = document.getElementById('first');
    const operatorDisplay = document.getElementById('operator');

    const operators = {
        'addition': '+',
        'subtraction': '-',
        'multiply': '*',
    };

    const clear = () => {
        firstNumber = 0;
        secondNumber = null;
        operation = null;
        first.innerText = "";
        operatorDisplay.innerText = "";
    }

    answer.addEventListener('keypress', (event) => {
        return !parseInt(event.key);
        
    });
    
    clearBtn.item(0).addEventListener('click', (event) => {
        answer.value = "0";
        clear();
    });

    numButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const currentVal = answer.value;
            const value = event.target.dataset.value;

            if(currentVal === "0") {
                answer.value = value;
            } else {
                answer.value += value;
            }
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const operator = event.target.dataset.operator;
            first.innerHTML = answer.value;
            firstNumber = answer.value;
            operatorDisplay.innerText = operators[operator];

            answer.value = "0";
            operation = operator;
        });
    });

    result.item(0).addEventListener('click', () => {
        switch (operation) {
            case "addition":
                answer.value = parseInt(firstNumber) + parseInt(answer.value);
                clear();
                break;
            case "multiply":
                answer.value = parseInt(firstNumber) * parseInt(answer.value);
                clear();
                break;
            case "division":
                if(answer.value === "0") {
                    alert('Satan has been invoked!');
                }
                answer.value = parseInt(firstNumber) / parseInt(answer.value);
                clear();
            default:
                break;
        }
    });

});