
// defining variables and if else statemetns for userRole and accessLevel
let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Acess Level:",accessLevel);

// defining variables and nested if... else statements for isLoggedIn and userMessage
let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome, User";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// defining variables and switch statements for userType and userCategory
let userType = "subsriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unkown";
}

console.log("User Category:", userCategory);

// Use ternary operator for isAuthenticated and authenticationStatus
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated": "Not authenticated";

console.log("Authentication Status:", authenticationStatus);