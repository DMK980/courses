
//Defining variables and function to calculate area
let length;
let width;

function calculateArea(){
    // getting values
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    // calculating area
    let area = length * width
    // displaying area
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}