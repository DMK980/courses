
const startBtn = document.getElementById('startBtn'); //start btn
const endBtn = document.getElementById('endBtn'); //end btn

// disabling end button
endBtn.disabled = true;

let testText = "The quick brown fox jumps over the lazy dog."
let startTime,endTime; // timmers

// connect startbtn 
startBtn.addEventListener('click',startTest);
endBtn.addEventListener('click',endTest);

// start test funcition
function startTest(){

    // setting test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById('output').innerHTML = '';
    startTime = new Date().getTime();

    // enabling end button and disabling start button
    endBtn.disabled = false;
    startBtn.disabled = true;
}

// end test function
function endTest(){
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById('userInput').readOnly = true;

    // calculations
    var  timeElapsed = (endTime - startTime) / 1000; //in seconds
    var userTypedText = document.getElementById("userInput").value;

    //split the text using regex to count words correctly
    var typedWords= userTypedText.split(/\s+/).filter((word)=> word !== '').length;

    var wpm = 0; //default value

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords/timeElapsed)*60);
    }

    //Displaying the results
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Typing Test Results:</h2>' +
    '<p>Words Typed: ' + typedWords + '</p>'+
    '<p>Time Elapsed:</p>' + timeElapsed.toFixed(2) +' seconds</p>' +
    '<p>Words Per Minute (WPM): ' + wpm + "</p>";

    //Reset the button
    startBtn.disabled = false;
    endBtn.disabled = true;
}
