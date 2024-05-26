
var studentNames = ["John", "Alice", "Bob"];


var scores = [380, 420, 450]; 


function calculatePercentage(score) {
    return (score / 500) * 100;
}


for (var i = 0; i < studentNames.length; i++) {
    var percentage = calculatePercentage(scores[i]);
    console.log(studentNames[i] + " scored " + scores[i] + " out of 500, with a percentage of " + percentage.toFixed(2) + "%.");
}
