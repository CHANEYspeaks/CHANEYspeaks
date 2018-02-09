
var response = prompt("After a long night of trouble-shooting your coding for hours, you get stuck with a question. On the next day, you walk into your coding class eager to get some direction for solving your problem. You see Warren and your mentor. Type 'Warren' to ask him, type 'Mentor' to ask her");

if(response === "Mentor"){
    response = prompt("I am happy to help you, anytime!");
} else if (response === "Warren") {
    response = prompt("What! You need help again! DAMN!!!!");
} else {
    alert("Make a decision so you can move forward. Refresh the page to try again.");
}
