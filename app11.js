
var number = parseFloat(prompt("Please enter a number:"));
console.log(number);


if (isNaN(number)) {
    alert("Invalid input. Please enter a valid number.");
} else {
    
    if (number > 0) {
        alert("The number is positive.");
    } else if (number < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}
