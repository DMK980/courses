//submit btn
const submitBtn = document.getElementById('submitBtn');

// clicking submit button
submitBtn.addEventListener('click',performOperation)

// function
function performOperation(){
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // input validation
    if (!isNaN(num1) && !isNaN(num2)){
        // perform the operation
        let result = multiply(num1,num2);

        // display result
        displayResult(result);
    } else{
        displayResult('Please enter valid numbers');
    }
}

// multiply function
function multiply(a,b){
    // debbugger
    debugger;

    // Multiply the numbers
    return a * b;
}

// display results
function displayResult(result){
    // display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.innerText = `The result is: ${result}`; 
}