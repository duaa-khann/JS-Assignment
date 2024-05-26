var studentNames = [];
var studentNames = new Array();
var stringsArray = ["apple", "banana", "cherry"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixedArray = ["apple", 2, true];
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (var i = 0; i < qualificationsArray.length; i++) {
    document.write("<li>" + qualificationsArray[i] + "</li>");
}
document.write("</ul>");
