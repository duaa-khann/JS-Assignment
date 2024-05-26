
var tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));


var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));


if (!isNaN(tableNumber) && !isNaN(tableLength)) {
    
    console.log("Multiplication table for " + tableNumber + ":");

    for (var i = 1; i <= tableLength; i++) {
        console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
    }
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
