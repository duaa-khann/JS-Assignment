
function isVowel(char) {
    
    char = char.toLowerCase();
    
    
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}


var inputChar = prompt("Please enter a character:");


if (inputChar.length === 1) {
    
    if (isVowel(inputChar)) {
        alert("True - The character is a vowel.");
    } else {
        alert("False - The character is not a vowel.");
    }
} else {
    alert("Please enter a single character.");
}
