// Defining variables 
let count = 0

// Defining function
function increaseCount(){
    count++; //increment count by 1
    displayCount() //display count
    checkCountValue() // check count value and display messages
}

function displayCount(){
    //display count
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if (count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20){
        alert("Your Instagram post gained 20 followers! keep it up!")
    }
}

function resetCount(){
    count = 0
    displayCount()
    alert("Your Instagram count has been reset")
}