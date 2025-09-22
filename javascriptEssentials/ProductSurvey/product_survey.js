
// submit button element
const submitButton = document.getElementById('submitBtn');

// event listener
submitButton.onclick = submitFeedback;

// defining submit function
function submitFeedback(){
    //alert user
    alert('Thank you for your valuable feedback')
    // defining variables
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('experience').value;
    // insert data for user to view
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = experience;
    // make section visible
    document.getElementById('userInfo').style.display = 'block';
    // sumit button enter button on keyboard
    document.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter'){
            submitFeedback();
        }
    })
}