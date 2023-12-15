const ans = document.getElementById("result");
let displayVal = "";
let isOneNumber = false;
let isOneOperator = false;
let isOneDecimal = false;

function appendNumber(num) {
    displayVal += num;
    ans.value = displayVal;
    isOneNumber = true;
}

function appendSymbol(symbol) {
    if (isOneNumber === true && isOneOperator !== true && displayVal.charAt(displayVal.length - 1) !== ".") {
        displayVal += symbol;
        ans.value = displayVal;
        isOneOperator = true;
        isOneDecimal = false;
    }

}

function appendDecimal(dot) {
    if ((isOneNumber === true) && isOneDecimal !== true) {
        displayVal += dot;
        ans.value = displayVal;
        isOneDecimal = true;
    }
}

function clearScreen() {
    displayVal = "";
    ans.value = "";
    isOneNumber = false;
    isOneOperator = false;
    isOneDecimal = false;
}

function calculate() {
    if(ans.value.charAt(displayVal.length -1).match(/\d/)){
        const expression = ans.value;
        let nums, num1, num2, operators, operator;
        if (expression.charAt(0) === "-") {
            operators = expression.substring(1).match(/[\+\-\*\/]/);
    
            nums = expression.substring(1).split(/[\+\-\*\/]/);
            num1 = -parseFloat(nums[0]);
            num2 = parseFloat(nums[1]);
            operator = operators[0];
        }
        else {
            operators = expression.match(/[\+\-\*\/]/);
            nums = expression.split(/[\+\-\*\/]/);
            num1 = parseFloat(nums[0]);
            num2 = parseFloat(nums[1]);
            operator = operators[0];
        }
    
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
    

        console.log(`ans.value is ${ans.value}`)
        if(ans.value==NaN){
            displayVal=""
            ans.value=""
            isOneDecimal=false
            isOneNumber=false
            isOneOperator=false
        }
        else {
            ans.value = calculation;
            isOneNumber = true;
            displayVal= ans.value;
        }
    
    
        if(displayVal)
        isOneOperator = false;
        if (ans.value.includes(".")) {
            isOneDecimal = true;
        }
        else
        isOneDecimal = false;
    }



}


