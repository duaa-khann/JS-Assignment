
var colors = ["red", "blue", "green"];

document.write("<h3>Original Array:</h3>");
document.write(colors.join(", ") + "<br>");

var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);


document.write("<h3>Array after adding color to the beginning:</h3>");
document.write(colors.join(", ") + "<br>");

var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);


document.write("<h3>Array after adding color to the end:</h3>");
document.write(colors.join(", ") + "<br>")

colors.unshift("orange", "yellow");


document.write("<h3>Array after adding two more colors to the beginning:</h3>");
document.write(colors.join(", ") + "<br>");


colors.shift();


document.write("<h3>Array after deleting the first color:</h3>");
document.write(colors.join(", ") + "<br>");


colors.pop();


document.write("<h3>Array after deleting the last color:</h3>");
document.write(colors.join(", ") + "<br>")


var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);


document.write("<h3>Array after adding a color at a desired position/index:</h3>");
document.write(colors.join(", ") + "<br>");



var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
var numOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numOfColorsToDelete);


document.write("<h3>Array after deleting color(s) from a user-defined position/index:</h3>");
document.write(colors.join(", ") + "<br>");
