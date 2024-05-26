
var num1 = parseInt(prompt("Please enter the first integer:"));
console.log(num1);


var num2 = parseInt(prompt("Please enter the second integer:"));
console.log(num2);


if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter valid integers.");
} else {
    
    if (num1 > num2) {
        alert("The larger number is: " + num1);
    } else if (num2 > num1) {
        alert("The larger number is: " + num2);
    } else {
        alert("Both numbers are equal: " + num1);
    }
}
