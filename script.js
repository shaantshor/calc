const ans = document.getElementById("result");
let displayVal = "";

function appendNumber(num) {
    displayVal += num;
    ans.value = displayVal;
}

function appendSymbol(symbol) {
    displayVal += symbol;
    ans.value = displayVal;
}

function clearScreen() {
    displayVal = "";
    ans.value = "";
}

function calculate() {
    const expression = ans.value;
    const operators = expression.match(/[\+\-\*\/]/);

    const nums = expression.split(/[\+\-\*\/]/);
    const num1 = parseFloat(nums[0]);
    const num2 = parseFloat(nums[1]);
    const operator = operators[0];

    console.log(nums, operators)
    let calculation;
    switch (operator) {
        case '+':
            calculation = num1 + num2;
            break;
        case '-':
            calculation = num1 - num2;
            break;
        case '*':
            calculation = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                calculation = num1 / num2;
            } else {
                ans.value = 'Not divisible by 0';
                displayVal = "";
                return;
            }
            break;

        default:
            displayVal = ""
            ans.value = 'Error';
        }

    ans.value = calculation;
    displayVal = "";
}


