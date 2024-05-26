
var inputChar = prompt("Please enter a character:");
console.log(inputChar)


if (inputChar.length === 1) {
    
    var asciiCode = inputChar.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        alert("The given input is a number");
    }
    
    else if (asciiCode >= 65 && asciiCode <= 90) {
        alert("The given input is an uppercase letter");
    }
    
    else if (asciiCode >= 97 && asciiCode <= 122) {
        alert("The given input is a lowercase letter");
    }
    else {
        alert("The given input is neither a number nor a letter");
    }
} else {
    alert("Please enter a single character");
}
